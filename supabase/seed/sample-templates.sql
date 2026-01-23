-- Sample Templates with Component-as-Data Structure
-- Run this after the main migration to populate with example templates

-- Get category IDs (we'll need these)
DO $$
DECLARE
  business_cat_id UUID;
  portfolio_cat_id UUID;
  landing_cat_id UUID;
BEGIN
  -- Get category IDs
  SELECT id INTO business_cat_id FROM public.template_categories WHERE slug = 'business';
  SELECT id INTO portfolio_cat_id FROM public.template_categories WHERE slug = 'portfolio';
  SELECT id INTO landing_cat_id FROM public.template_categories WHERE slug = 'landing';

  -- ============================================
  -- TEMPLATE 1: Modern Business
  -- ============================================
  INSERT INTO public.templates (
    name,
    slug,
    description,
    category_id,
    tags,
    layout,
    theme,
    is_active,
    is_premium
  ) VALUES (
    'Modern Business',
    'modern-business',
    'Clean and professional business website with modern design',
    business_cat_id,
    ARRAY['modern', 'professional', 'office', 'tech'],
    '{
      "sections": [
        {
          "id": "hero_1",
          "type": "Hero",
          "order": 0,
          "props": {
            "title": "Transform Your Business",
            "subtitle": "Professional solutions for modern companies",
            "ctaText": "Get Started",
            "ctaLink": "/contact",
            "bgImage": "",
            "alignment": "center"
          }
        },
        {
          "id": "features_1",
          "type": "Features",
          "order": 1,
          "props": {
            "title": "Our Services",
            "features": [
              {
                "icon": "chart",
                "title": "Analytics",
                "description": "Data-driven insights for your business"
              },
              {
                "icon": "shield",
                "title": "Security",
                "description": "Enterprise-grade protection"
              },
              {
                "icon": "users",
                "title": "Team Collaboration",
                "description": "Work together seamlessly"
              }
            ]
          }
        },
        {
          "id": "contact_1",
          "type": "ContactForm",
          "order": 2,
          "props": {
            "title": "Get in Touch",
            "fields": ["name", "email", "company", "message"]
          }
        }
      ]
    }'::jsonb,
    '{
      "colors": {
        "primary": "#4169E1",
        "secondary": "#6B46C1",
        "background": "#FFFFFF",
        "text": "#1A1A1A",
        "accent": "#E6FF00"
      },
      "fonts": {
        "heading": "Inter",
        "body": "Inter"
      },
      "spacing": {
        "section": "96px",
        "container": "1280px"
      },
      "borderRadius": {
        "small": "8px",
        "medium": "16px",
        "large": "24px"
      }
    }'::jsonb,
    true,
    false
  );

  -- ============================================
  -- TEMPLATE 2: Creative Portfolio
  -- ============================================
  INSERT INTO public.templates (
    name,
    slug,
    description,
    category_id,
    tags,
    layout,
    theme,
    is_active,
    is_premium
  ) VALUES (
    'Creative Portfolio',
    'creative-portfolio',
    'Stunning portfolio for creative professionals',
    portfolio_cat_id,
    ARRAY['creative', 'bold', 'modern', 'nature'],
    '{
      "sections": [
        {
          "id": "hero_1",
          "type": "Hero",
          "order": 0,
          "props": {
            "title": "Creative Designer",
            "subtitle": "Bringing ideas to life through design",
            "ctaText": "View Work",
            "ctaLink": "#portfolio",
            "bgImage": "",
            "alignment": "left"
          }
        },
        {
          "id": "portfolio_1",
          "type": "Portfolio",
          "order": 1,
          "props": {
            "title": "Selected Work",
            "projects": [
              {
                "title": "Brand Identity",
                "category": "Branding",
                "image": "",
                "link": "/project/1"
              },
              {
                "title": "Web Design",
                "category": "Digital",
                "image": "",
                "link": "/project/2"
              },
              {
                "title": "Packaging",
                "category": "Print",
                "image": "",
                "link": "/project/3"
              }
            ],
            "layout": "grid"
          }
        },
        {
          "id": "about_1",
          "type": "About",
          "order": 2,
          "props": {
            "title": "About Me",
            "content": "I am a creative designer with 10+ years of experience...",
            "image": "",
            "skills": ["Branding", "UI/UX", "Illustration"]
          }
        }
      ]
    }'::jsonb,
    '{
      "colors": {
        "primary": "#FF6B6B",
        "secondary": "#4ECDC4",
        "background": "#1A1A2E",
        "text": "#FFFFFF",
        "accent": "#FFE66D"
      },
      "fonts": {
        "heading": "Playfair Display",
        "body": "Inter"
      },
      "spacing": {
        "section": "120px",
        "container": "1400px"
      },
      "borderRadius": {
        "small": "4px",
        "medium": "12px",
        "large": "20px"
      }
    }'::jsonb,
    true,
    false
  );

  -- ============================================
  -- TEMPLATE 3: Minimalist Landing
  -- ============================================
  INSERT INTO public.templates (
    name,
    slug,
    description,
    category_id,
    tags,
    layout,
    theme,
    is_active,
    is_premium
  ) VALUES (
    'Minimalist Landing',
    'minimalist-landing',
    'Clean and focused landing page for product launches',
    landing_cat_id,
    ARRAY['minimalist', 'modern', 'calm', 'professional'],
    '{
      "sections": [
        {
          "id": "hero_1",
          "type": "Hero",
          "order": 0,
          "props": {
            "title": "Simple. Powerful. Effective.",
            "subtitle": "The tool you need to succeed",
            "ctaText": "Start Free Trial",
            "ctaLink": "/signup",
            "secondaryCtaText": "Learn More",
            "secondaryCtaLink": "#features",
            "bgImage": "",
            "alignment": "center"
          }
        },
        {
          "id": "features_1",
          "type": "Features",
          "order": 1,
          "props": {
            "title": "Everything You Need",
            "layout": "horizontal",
            "features": [
              {
                "icon": "zap",
                "title": "Fast",
                "description": "Lightning-fast performance"
              },
              {
                "icon": "lock",
                "title": "Secure",
                "description": "Bank-level security"
              },
              {
                "icon": "heart",
                "title": "Simple",
                "description": "Easy to use interface"
              }
            ]
          }
        },
        {
          "id": "cta_1",
          "type": "CTA",
          "order": 2,
          "props": {
            "title": "Ready to get started?",
            "subtitle": "Join thousands of satisfied customers",
            "ctaText": "Start Free Trial",
            "ctaLink": "/signup",
            "showStats": true,
            "stats": [
              {"value": "10K+", "label": "Users"},
              {"value": "99.9%", "label": "Uptime"},
              {"value": "24/7", "label": "Support"}
            ]
          }
        }
      ]
    }'::jsonb,
    '{
      "colors": {
        "primary": "#000000",
        "secondary": "#FFFFFF",
        "background": "#FFFFFF",
        "text": "#000000",
        "accent": "#0066FF"
      },
      "fonts": {
        "heading": "Inter",
        "body": "Inter"
      },
      "spacing": {
        "section": "80px",
        "container": "1200px"
      },
      "borderRadius": {
        "small": "0px",
        "medium": "0px",
        "large": "0px"
      }
    }'::jsonb,
    true,
    false
  );

  -- ============================================
  -- TEMPLATE 4: Nature & Organic
  -- ============================================
  INSERT INTO public.templates (
    name,
    slug,
    description,
    category_id,
    tags,
    layout,
    theme,
    is_active,
    is_premium
  ) VALUES (
    'Nature & Organic',
    'nature-organic',
    'Calm and organic design perfect for wellness and nature brands',
    business_cat_id,
    ARRAY['nature', 'calm', 'organic', 'health'],
    '{
      "sections": [
        {
          "id": "hero_1",
          "type": "Hero",
          "order": 0,
          "props": {
            "title": "Natural Wellness",
            "subtitle": "Organic products for a healthier life",
            "ctaText": "Shop Now",
            "ctaLink": "/shop",
            "bgImage": "",
            "alignment": "center",
            "overlay": "light"
          }
        },
        {
          "id": "features_1",
          "type": "Features",
          "order": 1,
          "props": {
            "title": "Why Choose Organic",
            "features": [
              {
                "icon": "leaf",
                "title": "100% Natural",
                "description": "No artificial ingredients"
              },
              {
                "icon": "heart",
                "title": "Ethically Sourced",
                "description": "Supporting local farmers"
              },
              {
                "icon": "check",
                "title": "Certified Organic",
                "description": "USDA certified products"
              }
            ]
          }
        },
        {
          "id": "testimonials_1",
          "type": "Testimonials",
          "order": 2,
          "props": {
            "title": "What Our Customers Say",
            "testimonials": [
              {
                "name": "Sarah Johnson",
                "role": "Wellness Coach",
                "content": "These products have transformed my health routine",
                "avatar": ""
              }
            ]
          }
        }
      ]
    }'::jsonb,
    '{
      "colors": {
        "primary": "#2D5016",
        "secondary": "#8BC34A",
        "background": "#F5F5DC",
        "text": "#2C3E50",
        "accent": "#FFA726"
      },
      "fonts": {
        "heading": "Merriweather",
        "body": "Open Sans"
      },
      "spacing": {
        "section": "100px",
        "container": "1200px"
      },
      "borderRadius": {
        "small": "8px",
        "medium": "16px",
        "large": "32px"
      }
    }'::jsonb,
    true,
    false
  );

  RAISE NOTICE 'Sample templates inserted successfully!';
END $$;
