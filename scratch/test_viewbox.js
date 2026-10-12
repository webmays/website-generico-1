const fs = require('fs');
let html = fs.readFileSync('scratch/wheel_test.html', 'utf8');
html = html.replace('viewBox="0 0 1440 760"', 'viewBox="680 -460 1680 840"');
html = html.replace(/\.wheel-svg-wrap\s*\{[\s\S]*?\}/, '.wheel-svg-wrap { width: 100%; height: 100%; position: relative; }');
html = html.replace(/\.wheel-container\s*\{[\s\S]*?\}/, '.wheel-container { width: 100%; height: 260px; position: relative; overflow: hidden; margin-top: auto; display: flex; align-items: flex-end; }');
html = html.replace(/\.wheel-svg\s*\{[\s\S]*?\}/, '.wheel-svg, .hero-fan-svg { width: 100%; height: 100%; display: block; }');
fs.writeFileSync('scratch/wheel_test.html', html, 'utf8');
console.log('Successfully updated viewBox in wheel_test.html');
