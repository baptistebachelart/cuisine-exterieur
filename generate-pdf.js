const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputPath = path.join(__dirname, 'Dossier-Execution-Cuisine-3m50.pdf');
const targetUrl = 'http://localhost:3000/dossier-technique.html';

console.log('Generating PDF from', targetUrl, 'to', outputPath);
try {
  execSync(`"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outputPath}" ${targetUrl}`, {
    stdio: 'inherit',
    timeout: 30000
  });
  console.log('PDF Generated! Size:', fs.statSync(outputPath).size, 'bytes');
} catch (e) {
  console.error('Error:', e.message);
}
