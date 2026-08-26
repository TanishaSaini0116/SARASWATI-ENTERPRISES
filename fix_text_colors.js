const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  }
}

let modifiedCount = 0;

walkDir('.', (filePath) => {
  if (!filePath.endsWith('.tsx') || filePath.includes('node_modules') || filePath.includes('.next')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace text-muted with text-text-muted, but not text-muted-foreground
  content = content.replace(/\btext-muted\b(?!-foreground)/g, 'text-text-muted');
  
  // Replace text-secondary with text-text-secondary, but not text-secondary-foreground
  content = content.replace(/\btext-secondary\b(?!-foreground)/g, 'text-text-secondary');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    modifiedCount++;
  }
});

console.log(`Successfully fixed text colors in ${modifiedCount} files.`);
