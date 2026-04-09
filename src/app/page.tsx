"use client";

import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";

export default function Home() {
  const heroImages = [
    "/hero1.jpeg", 
    "/hero2.jpeg", 
    "/hero3.jpeg", 
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleNavigation = (e: MouseEvent<HTMLButtonElement>, path: string) => {
    e.preventDefault();
    setIsNavigating(true);
    setTimeout(() => {
      window.location.href = path; 
    }, 400); // FIXED: Reduced spinner time to 400ms for speed
  };

  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white pb-0 overflow-x-hidden relative">
      
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="w-20 h-20 bg-white rounded-full p-2 animate-pulse mb-4">
            <img src="/logo.png" alt="Loading..." className="w-full h-full object-cover animate-spin-slow rounded-full" />
          </div>
          <p className="text-white font-semibold tracking-widest animate-pulse">LOADING VISION...</p>
        </div>
      )}

      {/* FIXED: Mobile Navigation Stack Layout */}
      <nav className="w-full pt-4 pb-2 px-4 md:p-6 flex flex-col md:flex-row justify-between items-center absolute top-0 left-0 right-0 z-50 gap-3 md:gap-0 bg-gradient-to-b from-slate-900/80 to-transparent">
        <div className="flex items-center gap-3 w-full justify-between md:w-auto">
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-white drop-shadow-md">
            HOL <span className="text-blue-400">2027</span>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full overflow-hidden border-2 border-white shadow-lg flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="Party Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* The frosted glass pill for mobile links */}
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-bold text-white drop-shadow-md bg-black/30 md:bg-transparent px-5 py-2.5 rounded-full backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none">
          <button onClick={(e) => handleNavigation(e, '/about')} className="hover:text-blue-300 transition tracking-wide">Meet Hakeem</button>
          <button onClick={(e) => handleNavigation(e, '/legacy')} className="hover:text-blue-300 transition tracking-wide">Legacy</button>
          <button onClick={(e) => handleNavigation(e, '/roadmap')} className="hover:text-blue-300 transition tracking-wide">Roadmap</button>
        </div>
      </nav>

      <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-900 pt-32 pb-16 px-4">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src} className="w-full h-full object-cover object-center" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-900 z-10"></div>

        <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-8 px-4">
          <div className={`transition-all duration-1000 ease-out transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg leading-tight">Legacy of Service,</h1>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-lg pb-1">Future for Kwara</h1>
          </div>

          <div className={`mt-3 transition-all duration-1000 ease-out delay-300 transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <h2 className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide drop-shadow-md">
              Alh. Hakeem Lawal, <span className="text-lg md:text-xl font-medium text-yellow-200/80">B.A. (Hons), M.Sc.</span>
            </h2>
          </div>

          <div className={`mt-6 transition-all duration-1000 ease-out delay-500 transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <button onClick={(e) => handleNavigation(e, '/roadmap')} className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                The Roadmap
              </button>
              
              <div className="flex gap-4 w-full">
                <button onClick={(e) => handleNavigation(e, '/foundation')} className="flex-1 py-3 rounded-full bg-transparent border-2 border-white/40 hover:bg-white/10 text-white font-semibold shadow-sm backdrop-blur-sm transition-all">
                  Awliya Foundation
                </button>
                <button onClick={(e) => handleNavigation(e, '/volunteer')} className="flex-1 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold shadow-md transition-all">
                  Join Movement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-900 text-white py-8 z-30 relative shadow-xl">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-6 text-center">
          <div><h3 className="text-3xl font-black text-yellow-400">15+</h3><p className="text-sm uppercase tracking-wider font-semibold opacity-90">Years Global Finance</p></div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div><h3 className="text-3xl font-black text-yellow-400">1,000+</h3><p className="text-sm uppercase tracking-wider font-semibold opacity-90">Lives Touched</p></div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div><h3 className="text-3xl font-black text-yellow-400">1</h3><p className="text-sm uppercase tracking-wider font-semibold opacity-90">Vision for Kwara</p></div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-[4/5] bg-slate-300 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
              [ Approchable Photo placeholder]
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase">The Candidate</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">A True Son of Ilorin, Ready to Serve.</h3>
            <p className="text-slate-600 leading-relaxed">
              An independent, dedicated Kwaran. Educated at the University of Surrey and Portsmouth with a background in International Finance. Former Financial Analyst at MaxGavlin Consulting UK. Currently living the legacy of grassroots empowerment as Chairman of the Awliya Foundation.
            </p>
            <button onClick={(e) => handleNavigation(e, '/about')} className="inline-flex items-center text-blue-700 font-bold hover:text-blue-500 transition-colors">
              Read Full Biography <span className="ml-2 text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12">The Kwara Masterplan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Economic Rebirth", desc: "Leveraging global financial expertise to build local wealth." },
              { title: "Youth Empowerment", desc: "Creating real opportunities, not just promises." },
              { title: "Infrastructure", desc: "Building the physical foundation for tomorrow's Kwara." }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 mx-auto"></div> 
                <h4 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h4>
                <p className="text-slate-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5 shadow-lg">
                <span className="text-3xl font-black text-blue-900">3</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white max-w-lg leading-tight">
              Unwavering commitment to the people of Kwara.
            </h2>
          </div>

          <div className="relative inline-block w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-700/50 bg-slate-700">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                  [ Hakeem portrait, brown cap ]
              </div>
              <div className="absolute bottom-6 left-6 w-36 h-36 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-square z-10">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-600 text-slate-300 font-medium">
                      [ Father, blue cap]
                  </div>
              </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-slate-950 pt-16 pb-8 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <div className="text-3xl font-black tracking-tighter text-white drop-shadow-md mb-8">
            HOL <span className="text-blue-500">2027</span>
          </div>
          <div className="border-t border-slate-800 w-full pt-8">
             <p className="text-slate-500 text-sm font-medium">© 2026 HOL 2027. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
