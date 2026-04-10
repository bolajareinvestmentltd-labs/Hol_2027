const fs = require('fs');
const file = 'src/app/page.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // The old donate button
    const oldDonate = `<button className="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 text-left transition-colors" onClick={(e) => handleNavigation(e, '/donate')}>Donate to Campaign</button>`;
    
    // The new Q&A button with an icon
    const newQA = `<button className="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 text-left transition-colors flex justify-between items-center" onClick={(e) => handleNavigation(e, '/qa')}>
                          <span>Q&A & Suggestions</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        </button>`;

    if (content.includes('Donate to Campaign')) {
        content = content.replace(oldDonate, newQA);
        fs.writeFileSync(file, content);
        console.log('✅ Dropdown updated: Donations removed, Q&A added!');
    } else {
        console.log('⚠️ Could not find the Donate button. It might already be replaced.');
    }
} else {
    console.log('❌ Could not find src/app/page.tsx.');
}
