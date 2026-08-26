const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

// 1. Update tokens.css
const tokensPath = 'styles/tokens.css';
let tokensContent = fs.readFileSync(tokensPath, 'utf8');
if (!tokensContent.includes('--color-text-secondary')) {
  tokensContent = tokensContent.replace(
    '--color-text: #1C3444;',
    '--color-text: #1C3444;\n  --color-text-secondary: #3D5266;\n  --color-text-muted: #3D5266;'
  );
  fs.writeFileSync(tokensPath, tokensContent);
}

// 2. Update globals.css
const globalsPath = 'app/globals.css';
let globalsContent = fs.readFileSync(globalsPath, 'utf8');
if (!globalsContent.includes('--color-text-secondary: var(--color-text-secondary);')) {
  globalsContent = globalsContent.replace(
    '--color-text: var(--color-text);',
    '--color-text: var(--color-text);\n  --color-text-secondary: var(--color-text-secondary);\n  --color-text-muted: var(--color-text-muted);'
  );
  fs.writeFileSync(globalsPath, globalsContent);
}

// 3. Process all TSX files
walkDir('.', (filePath) => {
  if (!filePath.endsWith('.tsx') || filePath.includes('node_modules') || filePath.includes('.next')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace text opacity classes like text-white/90 -> text-white
  // But wait, if it's text-black/50, maybe text-text-secondary?
  // Let's just strip the /opacity part.
  content = content.replace(/\b(text-[a-zA-Z0-9\-]+)\/[0-9]+\b/g, '$1');

  // Replace text-opacity-*
  content = content.replace(/\btext-opacity-[0-9]+\b/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
  }
});

// 4. Update Footer.tsx specifically
const footerPath = 'components/layout/Footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');
// "Footer text and footer links: color: #F7F3EA (full opacity, solid) — footer background is #26495C"
// Change bg-[#F6F4EF] to bg-primary, text-secondary to text-bg
footerContent = footerContent.replace('bg-[#F6F4EF]', 'bg-primary');
footerContent = footerContent.replace(/text-secondary/g, 'text-bg');
footerContent = footerContent.replace(/text-muted/g, 'text-bg');
footerContent = footerContent.replace(/text-primary/g, 'text-bg');
// Remove any text-gray-500, etc.
footerContent = footerContent.replace(/text-gray-[0-9]+/g, 'text-bg');
footerContent = footerContent.replace(/text-black/g, 'text-bg');
// Fix the text-[10vw] color which was text-primary/10
footerContent = footerContent.replace('text-primary/10', 'text-bg');
footerContent = footerContent.replace('text-primary', 'text-bg'); // just in case

// We also have to ensure we don't break class names like bg-primary.
// Wait, replacing 'text-primary' with 'text-bg' is safe.
fs.writeFileSync(footerPath, footerContent);

// 5. Update Testimonials.tsx original images
const testimonialsPath = 'components/home/Testimonials.tsx';
let testContent = fs.readFileSync(testimonialsPath, 'utf8');

const originalImages = `const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=400&q=80",
];`;

testContent = testContent.replace(/const images = \[[\s\S]*?\];/, originalImages);
fs.writeFileSync(testimonialsPath, testContent);

console.log("Fixes applied successfully.");
