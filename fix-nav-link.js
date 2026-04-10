const fs = require('fs');
const file = 'src/app/page.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Change the foundation link to point to empowerment
    content = content.replace(/handleNavigation\(e, '\/foundation'\)/g, "handleNavigation(e, '/empowerment')");
    content = content.replace(/>Foundation<\/button>/g, ">Empowerment</button>");
    fs.writeFileSync(file, content);
    console.log('✅ Top Navigation updated to point to Empowerment Page!');
}
