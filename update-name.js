const fs = require('fs');

function updateName(file) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Update the About Page Hero
        const oldAboutName = '<h1 className="text-4xl md:text-6xl font-serif font-black text-white drop-shadow-xl mt-2">Alhaji Hakeem Lawal</h1>';
        const newAboutName = '<h1 className="text-3xl md:text-5xl font-serif font-black text-white drop-shadow-xl mt-2 leading-tight">Alh. Hakeem Olademeji Lawal <br /><span className="text-yellow-400 text-2xl md:text-4xl tracking-[0.15em] mt-2 block">[OMOLADERIN]</span></h1>';
        
        if (content.includes(oldAboutName)) {
            content = content.replace(oldAboutName, newAboutName);
        }

        // Broad replacement for any other main headings on the Home Page or others
        content = content.replace(
            />Alhaji Hakeem Lawal</g, 
            '>Alh. Hakeem Olademeji Lawal <span className="text-yellow-500">[OMOLADERIN]</span><'
        );

        fs.writeFileSync(file, content);
        console.log(`✅ [OMOLADERIN] successfully added to ${file}!`);
    }
}

updateName('src/app/page.tsx');
updateName('src/app/about/page.tsx');
