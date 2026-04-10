"use client";
import { useState, MouseEvent } from "react";

export default function Home() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = (e: MouseEvent<HTMLButtonElement>, path: string) => {
    e.preventDefault();
    setIsNavigating(true);
    setTimeout(() => window.location.href = path, 400);
  };

  return (
    <main className="min-h-screen bg-slate-900 selection:bg-blue-900 selection:text-white pb-0 overflow-x-hidden relative">
      
      {/* Premium Loader */}
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-slate-800 border-t-yellow-500 border-b-blue-600 rounded-full animate-spin"></div>
            <img src="/logo.png" alt="APC Logo" className="w-16 h-16 object-contain animate-pulse" />
          </div>
          <p className="text-white font-black tracking-[0.3em] text-2xl animate-pulse">
            HOL <span className="text-blue-500">2027</span>
          </p>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-slate-800"></div> 
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center w-full">
          
          {/* Aspiration Pill with Ballot Box */}
          <div className="mb-6 inline-flex items-center px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm animate-[pulse_3s_ease-in-out_infinite]">
            <span className="text-[10px] md:text-xs font-black text-white tracking-[0.2em] uppercase flex items-center gap-2">
               Aspiration <span className="text-base">🗳️</span> Watch Out
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Legacy of Service,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Future for Kwara</span>
          </h1>

          <div className="mb-10 flex flex-col items-center">
            <p className="text-xl md:text-2xl font-bold text-yellow-500 drop-shadow-md">
              Alh. Hakeem Olademeji Lawal
            </p>
            <p className="text-sm md:text-base font-black text-white tracking-[0.2em] mt-1 mb-2">
              [OMOLADERIN]
            </p>
            <p className="text-xs md:text-sm text-slate-300 font-medium">B.A. (Hons), M.Sc., FIMC, MNIM</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto relative">
            <button onClick={(e) => handleNavigation(e, '/roadmap')} className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg transition-all text-sm">
              The Roadmap
            </button>
            
            <div className="w-full relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full py-4 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold shadow-lg transition-all text-sm flex items-center justify-center gap-2">
                Stand With Hakeem
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full mt-3 w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 z-50">
                  <div className="flex flex-col text-sm font-bold text-slate-800 text-left">
                    <button className="px-5 py-4 hover:bg-blue-50 text-left border-b border-gray-100" onClick={(e) => handleNavigation(e, '/volunteer')}>Volunteer Hub</button>
                    <button className="px-5 py-4 hover:bg-blue-50 text-left border-b border-gray-100 flex justify-between items-center" onClick={(e) => handleNavigation(e, '/empowerment')}>
                      Empowerment Portal <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                    </button>
                    <button className="px-5 py-4 hover:bg-blue-50 text-left border-b border-gray-100" onClick={(e) => handleNavigation(e, '/volunteer')}>Digital Ambassador</button>
                    <button className="px-5 py-4 bg-slate-50 hover:bg-blue-100 text-blue-700 text-left flex justify-between items-center" onClick={(e) => handleNavigation(e, '/qa')}>
                      <span>Q&A & Suggestions</span>
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
