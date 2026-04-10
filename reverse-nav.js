const fs = require('fs');
const file = 'src/app/page.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Change the link and text back to Foundation
    content = content.replace(/handleNavigation\(e, '\/empowerment'\)/g, "handleNavigation(e, '/foundation')");
    content = content.replace(/>Empowerment<\/button>/g, ">Foundation</button>");
    
    fs.writeFileSync(file, content);
    console.log('✅ Top Navigation reverted successfully! It now says Foundation again.');
} else {
    console.log('❌ Could not find src/app/page.tsx.');
}
