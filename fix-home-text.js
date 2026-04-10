const fs = require('fs');
const file = 'src/app/page.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Replace the old text with the new animated Aspiration text
    const oldText = '<span className="text-xs md:text-sm font-black text-white tracking-[0.2em] uppercase">For Governor, Kwara State</span>';
    const newText = `<span className="text-xs md:text-sm font-black text-white tracking-[0.2em] uppercase flex items-center gap-2 animate-[pulse_3s_ease-in-out_infinite] hover:scale-105 transition-transform cursor-default">Aspiration <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Watch Out</span>`;

    if (content.includes(oldText)) {
        content = content.replace(oldText, newText);
        fs.writeFileSync(file, content);
        console.log('✅ Home page updated: "Aspiration >> Watch Out" added with animations!');
    } else {
        console.log('⚠️ Could not find the target text. It might already be updated.');
    }
} else {
    console.log('❌ Could not find src/app/page.tsx.');
}
