-- WebSphere Hosting Template - Simple Test with Navbar
-- Minimal version to test if navbar appears

DELETE FROM templates WHERE slug = 'websphere-hosting';

INSERT INTO templates (
  id,
  name,
  slug,
  description,
  thumbnail_url,
  preview_url,
  category_id,
  layout,
  theme,
  tags,
  is_premium,
  is_active,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'WebSphere Hosting',
  'websphere-hosting',
  'Professional web hosting template with navbar',
  '/templates/websphere/thumbnail.png',
  '/templates/websphere/preview.png',
  (SELECT id FROM template_categories WHERE slug = 'business' LIMIT 1),
  jsonb_build_object(
    'sections', '[]'::jsonb,
    'pages', jsonb_build_array(
      jsonb_build_object(
        'id', 'home',
        'path', '/',
        'name', 'Home',
        'sections', jsonb_build_array(
          jsonb_build_object(
            'id', 'navbar_1',
            'type', 'Navbar',
            'order', 0,
            'props', jsonb_build_object(
              'logo', '/logo.png',
              'logoText', 'WEBSPHERE',
              'links', jsonb_build_array(
                jsonb_build_object('label', 'Home', 'href', '/'),
                jsonb_build_object('label', 'Pricing', 'href', '/pricing')
              ),
              'ctaButton', jsonb_build_object('text', 'Get Started', 'href', '/pricing')
            )
          ),
          jsonb_build_object(
            'id', 'hero_1',
            'type', 'Hero',
            'order', 1,
            'props', jsonb_build_object(
              'title', 'Host Your Site with Top-Tier Reliability',
              'subtitle', 'Enterprise-grade web hosting solutions',
              'ctaText', 'Get Started',
              'ctaLink', '/pricing'
            )
          ),
          jsonb_build_object(
            'id', 'features_1',
            'type', 'FeatureGrid',
            'order', 2,
            'props', jsonb_build_object(
              'title', 'Why Choose WebSphere?',
              'features', jsonb_build_array(
                jsonb_build_object(
                  'icon', '⚡',
                  'title', 'Lightning Fast',
                  'description', 'NVMe SSD storage and global CDN'
                ),
                jsonb_build_object(
                  'icon', '🔒',
                  'title', 'Secure & Safe',
                  'description', 'Military-grade security'
                )
              )
            )
          )
        )
      )
    )
  ),
  jsonb_build_object(
    'colors', jsonb_build_object(
      'primary', '#6D28D9',
      'secondary', '#4C1D95',
      'background', '#0F0222',
      'text', '#FFFFFF',
      'accent', '#22C55E'
    ),
    'fonts', jsonb_build_object(
      'heading', 'Inter',
      'body', 'Inter'
    )
  ),
  ARRAY['hosting', 'tech', 'business'],
  false,
  true,
  NOW(),
  NOW()
);
