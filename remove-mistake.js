const fs = require('fs');
const path = './src/app/page.tsx';

let code = fs.readFileSync(path, 'utf8');

// This finds the exact button we just added and removes it safely
const buttonRegex = /\s*<button onClick=\{\(e\) => handleNavigation\(e, '\/foundation'\)\}.*?>\s*Awliya Foundation\s*<\/button>/;
code = code.replace(buttonRegex, '');

fs.writeFileSync(path, code);
console.log('✅ Removed Awliya Foundation from the main CTA!');
