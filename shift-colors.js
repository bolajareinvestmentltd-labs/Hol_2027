const fs = require('fs');

// Look for any version of the tailwind config file
const files = ['tailwind.config.ts', 'tailwind.config.js', 'tailwind.config.mjs'];
const targetFile = files.find(file => fs.existsSync(file));

if (targetFile) {
    let content = fs.readFileSync(targetFile, 'utf8');
    
    const colorInjection = `
      colors: {
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          800: '#112240', // Presidential Sub-Navy
          900: '#0A192F', // Presidential Navy
          950: '#020C1B', // Deepest Navy
        },
        yellow: {
          400: '#D4AF37', // Gold Leaf
          500: '#B5952F', // Deep Gold
        },
        blue: {
          400: '#64FFDA', // Vibrant Teal Accent
          600: '#1D4ED8', // Standard Political Blue
          900: '#0A192F', // Mapped to Navy
        }
      },`;
      
    if (!content.includes('Presidential Navy')) {
        content = content.replace(/extend:\s*\{/, `extend: {${colorInjection}`);
        fs.writeFileSync(targetFile, content);
        console.log(`✅ Presidential Color Theme successfully applied to ${targetFile}!`);
    } else {
        console.log(`✅ Colors already updated in ${targetFile}.`);
    }
} else {
    console.log('❌ Could not find tailwind.config file. Run "ls" to see your root files.');
}
