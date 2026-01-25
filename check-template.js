// Check WebSphere Template in Database
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Read .env.local
const envContent = fs.readFileSync('.env.local', 'utf8');
const lines = envContent.split('\n');
let supabaseUrl = '';
let supabaseKey = '';

lines.forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
    supabaseUrl = line.split('=')[1].trim();
  }
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) {
    supabaseKey = line.split('=')[1].trim();
  }
});

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTemplate() {
  const { data, error } = await supabase
    .from('templates')
    .select('name, slug, layout')
    .eq('slug', 'websphere-hosting')
    .single();
  
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  console.log('Template Name:', data.name);
  console.log('Template Slug:', data.slug);
  console.log('\nLayout Structure:');
  console.log('Has pages array:', !!data.layout.pages);
  console.log('Number of pages:', data.layout.pages?.length || 0);
  
  if (data.layout.pages) {
    console.log('\nPages:');
    data.layout.pages.forEach(page => {
      console.log(`  - ${page.name} (${page.path}) - ${page.sections?.length || 0} sections`);
      if (page.sections && page.sections.length > 0) {
        console.log(`    First section: ${page.sections[0].type}`);
      }
    });
  }
  
  // Check for old footer links
  const layoutStr = JSON.stringify(data.layout);
  if (layoutStr.includes('/features') || layoutStr.includes('/about')) {
    console.log('\n⚠️  WARNING: Old footer links detected!');
    console.log('The template still has links to /features, /about, etc.');
  } else {
    console.log('\n✅ No old footer links found');
  }
}

checkTemplate();
