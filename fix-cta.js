const fs = require('fs');
const file = 'src/app/page.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Make sure we don't add it twice
    if (!content.includes("Meet Hakeem")) {
        const target = '<div className="flex gap-4 w-full relative">';
        const injection = `<div className="flex gap-4 w-full relative">
                <button onClick={(e) => handleNavigation(e, '/about')} className="flex-1 py-3 rounded-full bg-transparent border-2 border-white/40 hover:bg-white/10 text-white font-semibold shadow-sm backdrop-blur-sm transition-all text-sm md:text-base">
                  Meet Hakeem
                </button>`;
        
        content = content.replace(target, injection);
        fs.writeFileSync(file, content);
        console.log('✅ "Meet Hakeem" successfully restored to the hero CTA!');
    } else {
        console.log('✅ "Meet Hakeem" is already in the file.');
    }
} else {
    console.log('❌ Could not find src/app/page.tsx.');
}
