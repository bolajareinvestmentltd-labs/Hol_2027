const fs = require('fs');
const file = 'src/app/layout.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('import Footer')) {
        content = `import Footer from '@/components/Footer';\n` + content;
    }
    if (!content.includes('<Footer />')) {
        content = content.replace(/(<\/body>)/i, '  <Footer />\n      $1');
        fs.writeFileSync(file, content);
        console.log('✅ Global Footer injected successfully!');
    } else {
        console.log('✅ Footer already exists in layout.');
    }
} else {
    console.log('❌ src/app/layout.tsx not found.');
}
