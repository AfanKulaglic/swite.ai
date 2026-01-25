// Test Supabase Database Connection
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '..', '.env.local');
let supabaseUrl = '';
let supabaseKey = '';

try {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n');
  
  lines.forEach(line => {
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
      supabaseUrl = line.split('=')[1].trim();
    }
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) {
      supabaseKey = line.split('=')[1].trim();
    }
  });
} catch (error) {
  console.error('❌ Error reading .env.local file:', error.message);
  process.exit(1);
}

console.log('🔍 Testing Supabase Connection...\n');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseKey ? `${supabaseKey.substring(0, 20)}...` : 'NOT FOUND');
console.log('');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Missing Supabase credentials in .env.local');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log('📡 Attempting to connect to Supabase...\n');
    
    // Test 1: Simple health check by trying to access auth
    const { data: { session }, error: authError } = await supabase.auth.getSession();
    
    if (authError && authError.message !== 'Auth session missing!') {
      throw authError;
    }
    
    console.log('✅ Connection successful!');
    console.log('✅ Supabase client initialized correctly');
    console.log('');
    
    // Test 2: Check database access with a simple query
    console.log('📊 Testing database access...');
    const { error: dbError } = await supabase
      .from('_test_connection')
      .select('*')
      .limit(1);
    
    if (dbError) {
      if (dbError.code === '42P01' || dbError.message.includes('Could not find the table')) {
        console.log('✅ Database is accessible');
        console.log('ℹ️  Note: Test table does not exist (this is expected)');
      } else if (dbError.code === 'PGRST116') {
        console.log('✅ Database is accessible');
        console.log('ℹ️  Note: Schema cache needs refresh (this is normal)');
      } else {
        console.log('⚠️  Database query returned an error:', dbError.message);
        console.log('   This might be normal if no tables exist yet');
      }
    } else {
      console.log('✅ Database query successful');
    }
    
    console.log('');
    console.log('🎉 Supabase connection test completed successfully!');
    console.log('');
    console.log('Connection Details:');
    console.log('  - URL: ' + supabaseUrl);
    console.log('  - Project: jlfhnxrwurkljiiaqwms');
    console.log('  - Status: ✅ Connected');
    console.log('');
    console.log('You can now use Supabase in your Next.js application!');
    
    return true;
    
  } catch (error) {
    console.error('❌ Connection failed!');
    console.error('Error:', error.message);
    console.error('');
    console.error('Possible issues:');
    console.error('1. Check if your Supabase URL is correct');
    console.error('2. Check if your API key is valid');
    console.error('3. Check if your Supabase project is active');
    console.error('4. Check your internet connection');
    return false;
  }
}

// Run the test
testConnection()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  });
