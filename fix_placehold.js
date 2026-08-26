const fs = require('fs');
const glob = require('glob');

const files = glob.sync('data/**/*.ts').concat(glob.sync('components/**/*.tsx'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('placehold.co')) {
    // replace /FFF?text= with /FFF.png?text=
    content = content.replace(/(\/([0-9a-fA-F]{3,6}))\?text=/g, '$1.png?text=');
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Fixed placehold.co links.');
