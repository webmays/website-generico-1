const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const svgMatch = indexHtml.match(/<svg class="hero-fan-svg"[\s\S]*?<\/svg>/);
if (!svgMatch) {
  console.error('SVG not found');
  process.exit(1);
}

let testHtml = fs.readFileSync('scratch/test_mobile_hero.html', 'utf8');
testHtml = testHtml.replace(/<svg class="hero-fan-svg"[\s\S]*?<\/svg>/, svgMatch[0]);
fs.writeFileSync('scratch/test_mobile_hero.html', testHtml, 'utf8');
console.log('Real SVG copied to test_mobile_hero.html successfully');
