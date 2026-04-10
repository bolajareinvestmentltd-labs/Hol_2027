const fs = require('fs');
const file = 'src/app/globals.css';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    const themeBlock = `
/* Presidential Theme Colors */
@theme {
  --color-slate-800: #112240;
  --color-slate-900: #0A192F;
  --color-slate-950: #020C1B;
  --color-yellow-400: #D4AF37;
  --color-yellow-500: #B5952F;
  --color-blue-400: #64FFDA;
  --color-blue-600: #1D4ED8;
  --color-blue-900: #0A192F;
}
`;

    if (!content.includes('--color-slate-900: #0A192F')) {
        content = content + '\n' + themeBlock;
        fs.writeFileSync(file, content);
        console.log('✅ Presidential Color Theme successfully injected into globals.css!');
    } else {
        console.log('✅ Colors are already in globals.css.');
    }
} else {
    console.log('❌ Could not find src/app/globals.css.');
}
