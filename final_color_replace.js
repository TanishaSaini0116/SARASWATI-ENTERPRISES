const fs = require('fs');
const path = require('path');
const glob = require('glob');

const dirs = ['app', 'components', 'data'];
const files = glob.sync(`{${dirs.join(',')}}/**/*.{tsx,ts,css}`);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replace = (regex, replacement) => {
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      changed = true;
    }
  };

  // Group 2: ContactForm.tsx hover green
  replace(/hover:bg-\[#3d8c40\]/g, 'hover:bg-green-accent');
  
  // Group 3: Grays
  // gray-700/800/900 -> text-secondary (assuming they are text colors)
  replace(/text-gray-[789]00/g, 'text-secondary');
  // gray-300/400/500/600 -> text-muted
  replace(/text-gray-[3456]00/g, 'text-muted');
  // gray-50 and f3f4f6 -> soft-bg
  replace(/bg-gray-50/g, 'bg-soft-bg');
  replace(/bg-\[#f3f4f6\]/g, 'bg-soft-bg');

  // Group 4 specific files
  if (file.includes('AccordionGallery')) {
    replace(/bg-\[#060010\]/g, 'bg-text');
    replace(/bg-\[#0a0713\]/g, 'bg-text');
    replace(/#060010/g, 'var(--color-text)');
    replace(/#0a0713/g, 'var(--color-text)');
  }
  if (file.includes('Hero')) {
    replace(/bg-\[#1f2a1d\]/g, 'bg-primary');
    replace(/text-\[#1f2a1d\]/g, 'text-primary');
    replace(/text-\[#85AB8B\]/g, 'text-green-accent');
    replace(/#1f2a1d/g, 'var(--color-primary)');
    replace(/#85AB8B/g, 'var(--color-green-accent)');
  }
  if (file.includes('SegmentRouter')) {
    replace(/bg-\[#4a5e29\]/g, 'bg-primary');
    replace(/bg-\[#556B2F\]/g, 'bg-primary');
    replace(/text-\[#556B2F\]/g, 'text-green-accent');
    replace(/#4a5e29/g, 'var(--color-primary)');
    replace(/#556B2F/g, 'var(--color-green-accent)');
  }
  if (file.includes('Footer')) {
    replace(/bg-\[#73332D\]/g, 'bg-primary');
    replace(/bg-\[#8A3F39\]/g, 'bg-primary');
    replace(/text-\[#8A3F39\]/g, 'text-primary');
    replace(/#73332D/g, 'var(--color-primary)');
    replace(/#8A3F39/g, 'var(--color-primary)');
  }
  if (file.includes('Testimonials')) {
    replace(/bg-\[#E4C56B\]/g, 'bg-soft-bg');
    replace(/text-\[#E4C56B\]/g, 'text-soft-bg');
    replace(/text-\[#B5984A\]/g, 'text-soft-bg');
    replace(/text-\[#8A8F98\]/g, 'text-secondary');
    replace(/bg-\[#FDF8F0\]/g, 'bg-bg');
    replace(/#E4C56B/g, 'var(--color-soft-bg)');
    replace(/#B5984A/g, 'var(--color-soft-bg)');
    replace(/#8A8F98/g, 'var(--color-text-secondary)');
    replace(/#FDF8F0/g, 'var(--color-bg)');
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log('Finished final color replacements.');
