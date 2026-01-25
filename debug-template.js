// Debug: Check what's actually in the template
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

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

async function debugTemplate() {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('slug', 'websphere-hosting')
    .single();
  
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  // Check footer sections
  const layoutStr = JSON.stringify(data.layout);
  
  console.log('Checking for old links in layout...\n');
  
  const oldLinks = ['/features', '/about', '/help', '/integrations', '/careers', '/community', '/api-reference', '/security'];
  
  oldLinks.forEach(link => {
    if (layoutStr.includes(link)) {
      console.log(`❌ Found: ${link}`);
      // Find where it appears
      const regex = new RegExp(`"href":"${link.replace('/', '\\/')}"`, 'g');
      const matches = layoutStr.match(regex);
      if (matches) {
        console.log(`   Appears ${matches.length} time(s)`);
      }
    } else {
      console.log(`✅ Not found: ${link}`);
    }
  });
  
  // Write full layout to file for inspection
  fs.writeFileSync('template-layout-debug.json', JSON.stringify(data.layout, null, 2));
  console.log('\n📄 Full layout written to: template-layout-debug.json');
}

debugTemplate();
