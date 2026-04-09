const fs = require('fs');
const path = './src/app/page.tsx';

let code = fs.readFileSync(path, 'utf8');

const newButton = `
                <button onClick={(e) => handleNavigation(e, '/foundation')} className="flex-1 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-md transition-all">
                  Awliya Foundation
                </button>`;

// This regex finds the "Join Movement" text and its closing </button> tag, regardless of exact spacing, and appends the new button right after it.
code = code.replace(/(Join Movement\s+<\/button>)/, '$1' + newButton);

fs.writeFileSync(path, code);
console.log('✅ Awliya Foundation button successfully added next to Join Movement!');
