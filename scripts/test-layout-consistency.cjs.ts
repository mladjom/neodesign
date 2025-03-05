// Change import to require
const fs = require('fs');
const path = require('path');
const glob = require('glob').glob; // Adjust based on how glob is exported

const COMPONENTS_DIR = path.join(process.cwd(), 'components');

// Patterns to check
const patterns = {
  sectionWrapper: /SectionWrapper/,
  motionDiv: /motion\.div/,
  framerMotion: /framer-motion/,
  viewportOnce: /viewport=\{\s*\{\s*once:\s*true/,
  spacing: /space-y-\d+/,
  container: /container px-4/,
  paddingY: /py-\d+/,
};

// Check files
async function checkFiles() {
  const files = glob.sync(path.join(COMPONENTS_DIR, 'sections/**/*.tsx'));
  
  let issues = 0;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const filename = path.relative(process.cwd(), file);
    
    // Check for consistent imports and patterns
    const checks = [
      { name: 'SectionWrapper', pattern: patterns.sectionWrapper, required: true },
      { name: 'framer-motion', pattern: patterns.framerMotion, required: true },
      { name: 'viewport once setting', pattern: patterns.viewportOnce, required: true },
    ];
    
    console.log(`\nChecking ${filename}...`);
    
    for (const check of checks) {
      const hasPattern = check.pattern.test(content);
      
      if (check.required && !hasPattern) {
        console.log(`  ❌ Missing ${check.name}`);
        issues++;
      } else if (!check.required && hasPattern) {
        console.log(`  ⚠️ Found unexpected ${check.name}`);
      } else if (check.required && hasPattern) {
        console.log(`  ✅ Has ${check.name}`);
      }
    }
  }
  
  console.log(`\nFound ${issues} issues in ${files.length} files.`);
  
  if (issues > 0) {
    process.exit(1);
  }
}

checkFiles().catch(console.error);