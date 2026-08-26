const fs = require('fs');
const path = require('path');
const glob = require('glob');

const dirs = ['app', 'components', 'data'];

dirs.forEach(dir => {
  const files = glob.sync(`${dir}/**/*.{tsx,ts}`);
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace old placeholder hexes with new palette hexes
    content = content.replace(/0B3D6E/g, '26495C');
    content = content.replace(/0E3B45/g, '26495C');
    content = content.replace(/2E9DE0/g, '6C9BB0');
    content = content.replace(/1C7C93/g, '6C9BB0');
    content = content.replace(/4CAF50/g, '7A9B6E');
    content = content.replace(/2F6B47/g, '7A9B6E');
    content = content.replace(/B8863F/g, 'D9C9A3');

    fs.writeFileSync(file, content, 'utf8');
  });
});

console.log('Replaced placeholder colors');
