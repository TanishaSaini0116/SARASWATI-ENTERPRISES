const fs = require('fs');
const path = require('path');
const glob = require('glob');

const dirs = ['app', 'components', 'data'];
const colorRegex = /\b(bg|text|border|ring|from|via|to)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[1-9][0-9]{0,2}\b/g;
const hexRegex = /\b(bg|text|border|ring|from|via|to)-\[#([0-9a-fA-F]{3,8})\]/g;
// also search for raw hex codes like color: "#123" just in case they are in style={}
const rawHexRegex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;

let foundColors = new Set();
let foundHexes = new Set();

const allowedHexes = new Set([
  '26495C', '6C9BB0', '7A9B6E', 'D9C9A3', 'F7F3EA', '1C3444', 
  '26495c', '6c9bb0', '7a9b6e', 'd9c9a3', 'f7f3ea', '1c3444',
  'FFF', 'fff', 'FFFFFF', 'ffffff', '000', '000000'
]);

dirs.forEach(dir => {
  const files = glob.sync(`${dir}/**/*.{tsx,ts,css}`);
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    let match;
    while ((match = colorRegex.exec(content)) !== null) {
      foundColors.add(match[0] + ' (in ' + file + ')');
    }
    
    while ((match = hexRegex.exec(content)) !== null) {
      foundHexes.add(match[0] + ' (in ' + file + ')');
    }
    
    while ((match = rawHexRegex.exec(content)) !== null) {
      if (!allowedHexes.has(match[1])) {
        foundHexes.add(match[0] + ' (in ' + file + ')');
      }
    }
  });
});

console.log("=== Tailwind Default Colors Found ===");
Array.from(foundColors).sort().forEach(c => console.log(c));

console.log("\n=== Hardcoded Hexes Found ===");
Array.from(foundHexes).sort().forEach(h => console.log(h));
