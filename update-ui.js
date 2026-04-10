const fs = require('fs');

const pagePath = 'src/app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Add useState import if missing
if (!content.includes('useState')) {
  if (content.includes("import React")) {
    content = content.replace(/import\s+React.*?from\s+['"]react['"];?/, "import React, { useState } from 'react';");
  } else {
    content = `import { useState } from 'react';\n` + content;
  }
}

// 2. Inject showDropdown state into the component
if (!content.includes('showDropdown')) {
  content = content.replace(
    /(export default function \w+\([^)]*\)\s*\{)/,
    "$1\n  const [showDropdown, setShowDropdown] = useState(false);\n"
  );
}

// 3. Replace Navigation links
const oldNav = `<button onClick={(e) => handleNavigation(e, '/about')} className="hover:text-blue-300 transition tracking-wide">Meet Hakeem</button>
          <button onClick={(e) => handleNavigation(e, '/roadmap')} className="hover:text-blue-300 transition tracking-wide">Roadmap</button>
          <button onClick={(e) => handleNavigation(e, '/team')} className="hover:text-blue-300 transition tracking-wide text-yellow-400">Team</button>
          <button onClick={(e) => handleNavigation(e, '/legacy')} className="hover:text-blue-300 transition tracking-wide">Legacy</button>`;

const newNav = `<button onClick={(e) => handleNavigation(e, '/foundation')} className="hover:text-blue-300 transition tracking-wide">Foundation</button>
          <button onClick={(e) => handleNavigation(e, '/legacy')} className="hover:text-blue-300 transition tracking-wide">Legacy</button>
          <button onClick={(e) => handleNavigation(e, '/team')} className="hover:text-blue-300 transition tracking-wide text-yellow-400">Team</button>
          <button onClick={(e) => handleNavigation(e, '/contact')} className="hover:text-blue-300 transition tracking-wide">Contact</button>`;

content = content.replace(oldNav, newNav);

// 4. Replace CTA buttons
const oldCTA = `<div className="flex gap-4 w-full">
                <button onClick={(e) => handleNavigation(e, '/about')} className="flex-1 py-3 rounded-full bg-transparent border-2 border-white/40 hover:bg-white/10 text-white font-semibold shadow-sm backdrop-blur-sm transition-all">
                  Meet Hakeem
                </button>
                <button onClick={(e) => handleNavigation(e, '/volunteer')} className="flex-1 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold shadow-md transition-all">
                  Join Movement
                </button>
              </div>`;

const newCTA = `<div className="flex gap-4 w-full relative">
                <div className="flex-1 relative">
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)} 
                    className="w-full py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Stand With Hakeem
                    <svg className={\`w-4 h-4 transition-transform duration-200 \${showDropdown ? 'rotate-180' : ''}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>

                  {showDropdown && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-in slide-in-from-top-2">
                      <div className="flex flex-col text-sm font-semibold text-slate-800 text-left">
                        <button className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 text-left transition-colors border-b border-gray-100" onClick={() => {}}>Volunteer Hub</button>
                        <button className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 text-left transition-colors border-b border-gray-100" onClick={() => {}}>Digital Ambassador</button>
                        <button className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 text-left transition-colors border-b border-gray-100" onClick={() => {}}>Join Local Ward</button>
                        <button className="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 text-left transition-colors" onClick={() => {}}>Donate to Campaign</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>`;

content = content.replace(oldCTA, newCTA);

fs.writeFileSync(pagePath, content);
console.log('✅ Nav and Dropdown CTA logic injected successfully!');
