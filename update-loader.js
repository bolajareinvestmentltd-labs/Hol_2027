const fs = require('fs');
const file = 'src/app/page.tsx';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Replace "LOADING VISION..." with the branded "HOL 2027" format
    if (content.includes('LOADING VISION...')) {
        content = content.replace(
            /<p className="text-white font-semibold tracking-widest animate-pulse">LOADING VISION\.\.\.<\/p>/g,
            '<p className="text-white font-black tracking-[0.3em] text-xl animate-pulse">HOL <span className="text-blue-400">2027</span></p>'
        );
        fs.writeFileSync(file, content);
        console.log('✅ Global Loader text successfully updated to HOL 2027!');
    } else {
        console.log('⚠️ Could not find "LOADING VISION...". It might have already been changed.');
    }
} else {
    console.log('❌ Could not find src/app/page.tsx.');
}
