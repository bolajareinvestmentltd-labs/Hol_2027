const fs = require('fs');

const layoutPath = 'src/app/layout.tsx';

if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf8');
    
    // Add import statement if it doesn't exist
    if (!content.includes('SplashScreen')) {
        content = `import SplashScreen from '@/components/SplashScreen';\n` + content;
    }
    
    // Inject the component right after the opening <body> tag
    if (!content.includes('<SplashScreen />')) {
        content = content.replace(/(<body[^>]*>)/i, '$1\n        <SplashScreen />');
    }
    
    fs.writeFileSync(layoutPath, content);
    console.log('✅ Splash Screen successfully injected into layout.tsx!');
} else {
    console.log('❌ Could not find src/app/layout.tsx. Are we in the root directory?');
}
