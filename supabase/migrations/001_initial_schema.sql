-- SWITE.AI Database Migration
-- Hybrid Architecture: Traditional + Vector Database
-- Run this migration in your Supabase SQL Editor

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgvector";

-- ============================================
-- 1. USERS TABLE (extends Supabase auth.users)
-- ============================================
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro', 'business', 'enterprise')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- ============================================
-- 2. TEMPLATE CATEGORIES & TAGS
-- ============================================
CREATE TABLE public.template_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.template_tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT, -- e.g., 'style', 'industry', 'mood'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 3. MASTER TEMPLATES (Component-as-Data)
-- ============================================
CREATE TABLE public.templates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  preview_url TEXT,
  
  -- Template Structure (JSON)
  layout JSONB NOT NULL DEFAULT '[]'::jsonb,
  theme JSONB NOT NULL DEFAULT '{}'::jsonb,
  
  -- Metadata for filtering
  category_id UUID REFERENCES public.template_categories(id),
  tags TEXT[] DEFAULT '{}',
  
  -- AI Semantic Search (Vector)
  embedding vector(1536), -- OpenAI ada-002 dimension
  
  -- Template Stats
  usage_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  is_premium BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_templates_category ON public.templates(category_id);
CREATE INDEX idx_templates_tags ON public.templates USING GIN(tags);
CREATE INDEX idx_templates_active ON public.templates(is_active) WHERE is_active = true;

-- Vector similarity search index (HNSW for fast approximate search)
CREATE INDEX idx_templates_embedding ON public.templates 
  USING hnsw (embedding vector_cosine_ops);

-- ============================================
-- 4. USER WEBSITES (User's Created Sites)
-- ============================================
CREATE TABLE public.user_sites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  template_id UUID REFERENCES public.templates(id),
  
  -- Site Info
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  favicon_url TEXT,
  
  -- Site Structure (Editable JSON)
  layout JSONB NOT NULL DEFAULT '[]'::jsonb,
  theme JSONB NOT NULL DEFAULT '{}'::jsonb,
  
  -- SEO & Meta
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  
  -- Publishing
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  custom_domain TEXT UNIQUE,
  subdomain TEXT UNIQUE,
  
  -- Analytics
  view_count INTEGER DEFAULT 0,
  last_edited_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Unique constraint for user's site slugs
  UNIQUE(user_id, slug)
);

-- Indexes
CREATE INDEX idx_user_sites_user ON public.user_sites(user_id);
CREATE INDEX idx_user_sites_published ON public.user_sites(is_published) WHERE is_published = true;
CREATE INDEX idx_user_sites_subdomain ON public.user_sites(subdomain) WHERE subdomain IS NOT NULL;
CREATE INDEX idx_user_sites_custom_domain ON public.user_sites(custom_domain) WHERE custom_domain IS NOT NULL;

-- Enable Row Level Security
ALTER TABLE public.user_sites ENABLE ROW LEVEL SECURITY;

-- Policies for user_sites
CREATE POLICY "Users can view own sites" ON public.user_sites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own sites" ON public.user_sites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sites" ON public.user_sites
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sites" ON public.user_sites
  FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Anyone can view published sites" ON public.user_sites
  FOR SELECT USING (is_published = true);

-- ============================================
-- 5. SITE VERSIONS (Version Control)
-- ============================================
CREATE TABLE public.site_versions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  site_id UUID REFERENCES public.user_sites(id) ON DELETE CASCADE NOT NULL,
  
  -- Version Data
  version_number INTEGER NOT NULL,
  layout JSONB NOT NULL,
  theme JSONB NOT NULL,
  
  -- Version Info
  change_description TEXT,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(site_id, version_number)
);

CREATE INDEX idx_site_versions_site ON public.site_versions(site_id);

-- Enable Row Level Security
ALTER TABLE public.site_versions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own site versions" ON public.site_versions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_sites 
      WHERE id = site_versions.site_id AND user_id = auth.uid()
    )
  );

-- ============================================
-- 6. ASSETS (Images, Files)
-- ============================================
CREATE TABLE public.assets (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  site_id UUID REFERENCES public.user_sites(id) ON DELETE CASCADE,
  
  -- Asset Info
  name TEXT NOT NULL,
  file_path TEXT NOT NULL, -- Path in Supabase Storage
  file_url TEXT NOT NULL, -- Public URL
  file_type TEXT NOT NULL, -- 'image', 'video', 'document'
  mime_type TEXT,
  file_size BIGINT, -- in bytes
  
  -- Image Metadata
  width INTEGER,
  height INTEGER,
  alt_text TEXT,
  
  -- Organization
  folder TEXT DEFAULT 'root',
  tags TEXT[],
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_assets_user ON public.assets(user_id);
CREATE INDEX idx_assets_site ON public.assets(site_id);
CREATE INDEX idx_assets_type ON public.assets(file_type);

-- Enable Row Level Security
ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own assets" ON public.assets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own assets" ON public.assets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own assets" ON public.assets
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own assets" ON public.assets
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- 7. AI GENERATION HISTORY
-- ============================================
CREATE TABLE public.ai_generations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  site_id UUID REFERENCES public.user_sites(id) ON DELETE CASCADE,
  
  -- AI Request
  prompt TEXT NOT NULL,
  template_id UUID REFERENCES public.templates(id),
  
  -- AI Response
  generated_layout JSONB,
  generated_content JSONB,
  
  -- Metadata
  model_used TEXT, -- e.g., 'gpt-4', 'claude-3'
  tokens_used INTEGER,
  generation_time_ms INTEGER,
  
  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  error_message TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ai_generations_user ON public.ai_generations(user_id);
CREATE INDEX idx_ai_generations_site ON public.ai_generations(site_id);

-- Enable Row Level Security
ALTER TABLE public.ai_generations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own generations" ON public.ai_generations
  FOR SELECT USING (auth.uid() = user_id);

-- ============================================
-- 8. COMPONENT LIBRARY (Master Components)
-- ============================================
CREATE TABLE public.components (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  
  -- Component Info
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'Hero', 'Features', 'ContactForm', etc.
  category TEXT, -- 'header', 'content', 'footer', etc.
  description TEXT,
  thumbnail_url TEXT,
  
  -- Component Schema (defines what props it accepts)
  props_schema JSONB NOT NULL DEFAULT '{}'::jsonb,
  default_props JSONB NOT NULL DEFAULT '{}'::jsonb,
  
  -- Component Code Reference
  component_path TEXT NOT NULL, -- e.g., 'components/sections/Hero'
  
  -- Metadata
  tags TEXT[],
  is_premium BOOLEAN DEFAULT false,
  usage_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_components_type ON public.components(type);
CREATE INDEX idx_components_category ON public.components(category);

-- ============================================
-- 9. FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables with updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_templates_updated_at BEFORE UPDATE ON public.templates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_sites_updated_at BEFORE UPDATE ON public.user_sites
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assets_updated_at BEFORE UPDATE ON public.assets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_components_updated_at BEFORE UPDATE ON public.components
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to increment template usage count
CREATE OR REPLACE FUNCTION increment_template_usage()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.templates 
  SET usage_count = usage_count + 1 
  WHERE id = NEW.template_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER increment_template_usage_trigger 
  AFTER INSERT ON public.user_sites
  FOR EACH ROW 
  WHEN (NEW.template_id IS NOT NULL)
  EXECUTE FUNCTION increment_template_usage();

-- Function to create site version on update
CREATE OR REPLACE FUNCTION create_site_version()
RETURNS TRIGGER AS $$
DECLARE
  next_version INTEGER;
BEGIN
  -- Get next version number
  SELECT COALESCE(MAX(version_number), 0) + 1 INTO next_version
  FROM public.site_versions
  WHERE site_id = NEW.id;
  
  -- Create version record
  INSERT INTO public.site_versions (
    site_id, 
    version_number, 
    layout, 
    theme, 
    created_by,
    change_description
  ) VALUES (
    NEW.id,
    next_version,
    NEW.layout,
    NEW.theme,
    NEW.user_id,
    'Auto-saved version'
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_site_version_trigger 
  AFTER UPDATE ON public.user_sites
  FOR EACH ROW 
  WHEN (OLD.layout IS DISTINCT FROM NEW.layout OR OLD.theme IS DISTINCT FROM NEW.theme)
  EXECUTE FUNCTION create_site_version();

-- ============================================
-- 10. HELPER FUNCTIONS FOR AI
-- ============================================

-- Function to search templates by semantic similarity
CREATE OR REPLACE FUNCTION search_templates_by_embedding(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  name text,
  description text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    t.id,
    t.name,
    t.description,
    1 - (t.embedding <=> query_embedding) as similarity
  FROM public.templates t
  WHERE t.is_active = true
    AND t.embedding IS NOT NULL
    AND 1 - (t.embedding <=> query_embedding) > match_threshold
  ORDER BY t.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Function to search templates by tags and category
CREATE OR REPLACE FUNCTION search_templates_by_filters(
  search_tags text[] DEFAULT '{}',
  search_category uuid DEFAULT NULL,
  limit_count int DEFAULT 10
)
RETURNS TABLE (
  id uuid,
  name text,
  description text,
  tags text[],
  category_id uuid
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    t.id,
    t.name,
    t.description,
    t.tags,
    t.category_id
  FROM public.templates t
  WHERE t.is_active = true
    AND (search_category IS NULL OR t.category_id = search_category)
    AND (array_length(search_tags, 1) IS NULL OR t.tags && search_tags)
  ORDER BY t.usage_count DESC
  LIMIT limit_count;
END;
$$;

-- ============================================
-- 11. SEED DATA (Sample Templates & Categories)
-- ============================================

-- Insert template categories
INSERT INTO public.template_categories (name, slug, description, icon) VALUES
  ('Business', 'business', 'Professional business websites', '💼'),
  ('Portfolio', 'portfolio', 'Creative portfolio showcases', '🎨'),
  ('E-commerce', 'ecommerce', 'Online stores and shops', '🛍️'),
  ('Blog', 'blog', 'Personal and professional blogs', '📝'),
  ('Landing Page', 'landing', 'High-converting landing pages', '🚀'),
  ('Agency', 'agency', 'Digital agency websites', '🏢'),
  ('Restaurant', 'restaurant', 'Food and dining websites', '🍽️'),
  ('Education', 'education', 'Schools and courses', '📚');

-- Insert template tags
INSERT INTO public.template_tags (name, slug, category) VALUES
  -- Style tags
  ('Modern', 'modern', 'style'),
  ('Minimalist', 'minimalist', 'style'),
  ('Bold', 'bold', 'style'),
  ('Elegant', 'elegant', 'style'),
  ('Playful', 'playful', 'style'),
  
  -- Mood tags
  ('Professional', 'professional', 'mood'),
  ('Creative', 'creative', 'mood'),
  ('Calm', 'calm', 'mood'),
  ('Energetic', 'energetic', 'mood'),
  
  -- Industry tags
  ('Tech', 'tech', 'industry'),
  ('Nature', 'nature', 'industry'),
  ('Fashion', 'fashion', 'industry'),
  ('Finance', 'finance', 'industry'),
  ('Health', 'health', 'industry'),
  ('Office', 'office', 'industry');

-- Insert sample master components
INSERT INTO public.components (name, type, category, description, component_path, props_schema, default_props) VALUES
  (
    'Hero Section',
    'Hero',
    'header',
    'Full-width hero section with title, subtitle, and CTA',
    'components/sections/Hero',
    '{"title": "string", "subtitle": "string", "ctaText": "string", "ctaLink": "string", "bgImage": "string"}',
    '{"title": "Welcome", "subtitle": "Your journey starts here", "ctaText": "Get Started", "ctaLink": "/", "bgImage": ""}'
  ),
  (
    'Feature Grid',
    'Features',
    'content',
    'Grid layout showcasing features with icons',
    'components/sections/FeatureGrid',
    '{"title": "string", "features": "array"}',
    '{"title": "Features", "features": []}'
  ),
  (
    'Contact Form',
    'ContactForm',
    'footer',
    'Contact form with validation',
    'components/sections/ContactForm',
    '{"title": "string", "fields": "array"}',
    '{"title": "Get in Touch", "fields": ["name", "email", "message"]}'
  );

-- ============================================
-- 12. STORAGE BUCKETS (Run in Supabase Dashboard)
-- ============================================

-- Note: Storage buckets must be created via Supabase Dashboard or API
-- Create these buckets:
-- 1. 'templates' - for template thumbnails (public)
-- 2. 'user-assets' - for user uploaded images (public)
-- 3. 'site-exports' - for exported site files (private)

-- ============================================
-- MIGRATION COMPLETE
-- ============================================

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Migration completed successfully!';
  RAISE NOTICE 'Next steps:';
  RAISE NOTICE '1. Create storage buckets in Supabase Dashboard';
  RAISE NOTICE '2. Add sample templates with layout JSON';
  RAISE NOTICE '3. Generate embeddings for templates (AI wrapper)';
  RAISE NOTICE '4. Test the hybrid search functionality';
END $$;
