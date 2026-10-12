const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const svgMatch = indexHtml.match(/<svg class="hero-fan-svg"[\s\S]*?<\/svg>/);
if (!svgMatch) {
  console.error('SVG not found');
  process.exit(1);
}

let testHtml = fs.readFileSync('scratch/wheel_test.html', 'utf8');
testHtml = testHtml.replace('<!-- SVG will be injected -->', svgMatch[0]);
fs.writeFileSync('scratch/wheel_test.html', testHtml, 'utf8');
console.log('Injected SVG into wheel_test.html');
