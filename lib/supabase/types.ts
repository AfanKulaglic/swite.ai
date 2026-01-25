// TypeScript types for Supabase Database
// Auto-generated types based on your database schema

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          subscription_tier: 'free' | 'pro' | 'business' | 'enterprise'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          subscription_tier?: 'free' | 'pro' | 'business' | 'enterprise'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          subscription_tier?: 'free' | 'pro' | 'business' | 'enterprise'
          created_at?: string
          updated_at?: string
        }
      }
      template_categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          icon?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          icon?: string | null
          created_at?: string
        }
      }
      template_tags: {
        Row: {
          id: string
          name: string
          slug: string
          category: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          category?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          category?: string | null
          created_at?: string
        }
      }
      templates: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          thumbnail_url: string | null
          preview_url: string | null
          layout: Json
          theme: Json
          category_id: string | null
          tags: string[]
          embedding: number[] | null
          usage_count: number
          is_active: boolean
          is_premium: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          thumbnail_url?: string | null
          preview_url?: string | null
          layout?: Json
          theme?: Json
          category_id?: string | null
          tags?: string[]
          embedding?: number[] | null
          usage_count?: number
          is_active?: boolean
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          thumbnail_url?: string | null
          preview_url?: string | null
          layout?: Json
          theme?: Json
          category_id?: string | null
          tags?: string[]
          embedding?: number[] | null
          usage_count?: number
          is_active?: boolean
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_sites: {
        Row: {
          id: string
          user_id: string
          template_id: string | null
          name: string
          slug: string
          description: string | null
          favicon_url: string | null
          layout: Json
          theme: Json
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string[] | null
          is_published: boolean
          published_at: string | null
          custom_domain: string | null
          subdomain: string | null
          view_count: number
          last_edited_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          template_id?: string | null
          name: string
          slug: string
          description?: string | null
          favicon_url?: string | null
          layout?: Json
          theme?: Json
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          is_published?: boolean
          published_at?: string | null
          custom_domain?: string | null
          subdomain?: string | null
          view_count?: number
          last_edited_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          template_id?: string | null
          name?: string
          slug?: string
          description?: string | null
          favicon_url?: string | null
          layout?: Json
          theme?: Json
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          is_published?: boolean
          published_at?: string | null
          custom_domain?: string | null
          subdomain?: string | null
          view_count?: number
          last_edited_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      site_versions: {
        Row: {
          id: string
          site_id: string
          version_number: number
          layout: Json
          theme: Json
          change_description: string | null
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          site_id: string
          version_number: number
          layout: Json
          theme: Json
          change_description?: string | null
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          site_id?: string
          version_number?: number
          layout?: Json
          theme?: Json
          change_description?: string | null
          created_by?: string | null
          created_at?: string
        }
      }
      assets: {
        Row: {
          id: string
          user_id: string
          site_id: string | null
          name: string
          file_path: string
          file_url: string
          file_type: string
          mime_type: string | null
          file_size: number | null
          width: number | null
          height: number | null
          alt_text: string | null
          folder: string
          tags: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          site_id?: string | null
          name: string
          file_path: string
          file_url: string
          file_type: string
          mime_type?: string | null
          file_size?: number | null
          width?: number | null
          height?: number | null
          alt_text?: string | null
          folder?: string
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          site_id?: string | null
          name?: string
          file_path?: string
          file_url?: string
          file_type?: string
          mime_type?: string | null
          file_size?: number | null
          width?: number | null
          height?: number | null
          alt_text?: string | null
          folder?: string
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      ai_generations: {
        Row: {
          id: string
          user_id: string
          site_id: string | null
          prompt: string
          template_id: string | null
          generated_layout: Json | null
          generated_content: Json | null
          model_used: string | null
          tokens_used: number | null
          generation_time_ms: number | null
          status: 'pending' | 'completed' | 'failed'
          error_message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          site_id?: string | null
          prompt: string
          template_id?: string | null
          generated_layout?: Json | null
          generated_content?: Json | null
          model_used?: string | null
          tokens_used?: number | null
          generation_time_ms?: number | null
          status?: 'pending' | 'completed' | 'failed'
          error_message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          site_id?: string | null
          prompt?: string
          template_id?: string | null
          generated_layout?: Json | null
          generated_content?: Json | null
          model_used?: string | null
          tokens_used?: number | null
          generation_time_ms?: number | null
          status?: 'pending' | 'completed' | 'failed'
          error_message?: string | null
          created_at?: string
        }
      }
      components: {
        Row: {
          id: string
          name: string
          type: string
          category: string | null
          description: string | null
          thumbnail_url: string | null
          props_schema: Json
          default_props: Json
          component_path: string
          tags: string[] | null
          is_premium: boolean
          usage_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          category?: string | null
          description?: string | null
          thumbnail_url?: string | null
          props_schema?: Json
          default_props?: Json
          component_path: string
          tags?: string[] | null
          is_premium?: boolean
          usage_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          category?: string | null
          description?: string | null
          thumbnail_url?: string | null
          props_schema?: Json
          default_props?: Json
          component_path?: string
          tags?: string[] | null
          is_premium?: boolean
          usage_count?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Functions: {
      search_templates_by_embedding: {
        Args: {
          query_embedding: number[]
          match_threshold?: number
          match_count?: number
        }
        Returns: {
          id: string
          name: string
          description: string
          similarity: number
        }[]
      }
      search_templates_by_filters: {
        Args: {
          search_tags?: string[]
          search_category?: string
          limit_count?: number
        }
        Returns: {
          id: string
          name: string
          description: string
          tags: string[]
          category_id: string
        }[]
      }
    }
  }
}

// Helper types for component-as-data architecture
export interface SectionComponent {
  id: string
  type: string
  props: Record<string, any>
  order?: number
}

export interface SitePage {
  id: string
  path: string
  name: string
  sections: SectionComponent[]
  meta?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

export interface SiteLayout {
  sections: SectionComponent[]  // Legacy: single page
  pages?: SitePage[]  // New: multi-page support
}

export interface SiteTheme {
  colors: {
    primary?: string
    secondary?: string
    background?: string
    text?: string
    accent?: string
    [key: string]: string | undefined
  }
  fonts: {
    heading?: string
    body?: string
    [key: string]: string | undefined
  }
  spacing?: Record<string, string>
  borderRadius?: Record<string, string>
}

export interface TemplateData {
  layout: SiteLayout
  theme: SiteTheme
  pages?: SitePage[]  // Multi-page templates
}

// Navbar component props
export interface NavbarLink {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface NavbarDropdown {
  label: string
  icon?: React.ReactNode
  links: NavbarLink[]
}

export interface NavbarProps {
  logo?: string
  logoText?: string
  links?: NavbarLink[]
  dropdowns?: NavbarDropdown[]
  ctaButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  variant?: 'default' | 'minimal' | 'centered'
}
