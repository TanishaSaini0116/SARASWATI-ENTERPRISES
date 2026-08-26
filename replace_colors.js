const fs = require('fs');
const path = require('path');
const glob = require('glob');

const dirs = ['app', 'components'];

dirs.forEach(dir => {
  const files = glob.sync(`${dir}/**/*.{tsx,ts,css}`);
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace brand-navy with primary
    content = content.replace(/brand-navy/g, 'primary');
    // Replace brand-blue with accent
    content = content.replace(/brand-blue/g, 'accent');
    // Replace brand-green with green-accent
    content = content.replace(/brand-green/g, 'green-accent');
    // Replace brand-accent with soft-bg
    content = content.replace(/brand-accent/g, 'soft-bg');
    
    // Some hardcoded greens found in forms
    content = content.replace(/bg-green-50/g, 'bg-soft-bg');
    content = content.replace(/text-green-800/g, 'text-primary');
    content = content.replace(/text-green-700/g, 'text-primary');
    content = content.replace(/border-green-100/g, 'border-green-accent');
    content = content.replace(/bg-blue-500/g, 'bg-accent');
    content = content.replace(/bg-blue-600/g, 'bg-accent');
    content = content.replace(/text-blue-500/g, 'text-accent');
    content = content.replace(/text-blue-600/g, 'text-accent');

    fs.writeFileSync(file, content, 'utf8');
  });
});

console.log('Replaced colors in all files');
