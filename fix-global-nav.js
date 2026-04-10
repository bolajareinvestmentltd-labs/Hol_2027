const fs = require('fs');
const file = 'src/app/layout.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    if (!content.includes('import Navbar')) {
        content = `import Navbar from '@/components/Navbar';\n` + content;
    }
    
    if (!content.includes('<Navbar />')) {
        // Inject it right after the opening <body> tag
        content = content.replace(/(<body[^>]*>)/i, '$1\n        <Navbar />');
        fs.writeFileSync(file, content);
        console.log('✅ Global Navbar injected successfully!');
    } else {
        console.log('✅ Navbar already exists in layout.');
    }
} else {
    console.log('❌ src/app/layout.tsx not found.');
}
