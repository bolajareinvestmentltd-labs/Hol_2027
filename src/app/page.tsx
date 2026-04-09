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
    }, 800); 
  };

  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white pb-0 overflow-x-hidden relative">
      
      {/* --- CUSTOM PAGE TRANSITION LOADER (Wired to all major buttons) --- */}
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="w-20 h-20 bg-white rounded-full p-2 animate-pulse mb-4">
            <img src="/logo.png" alt="Loading..." className="w-full h-full object-cover animate-spin-slow rounded-full" />
          </div>
          <p className="text-white font-semibold tracking-widest animate-pulse">LOADING VISION...</p>
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-white drop-shadow-md">
            HOL <span className="text-blue-400">2027</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden border-2 border-white shadow-lg flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="Party Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-white drop-shadow-md">
          <button onClick={(e) => handleNavigation(e, '/about')} className="hover:text-blue-300 transition">Meet Hakeem</button>
          <button onClick={(e) => handleNavigation(e, '/legacy')} className="hover:text-blue-300 transition">Legacy</button>
          <button onClick={(e) => handleNavigation(e, '/roadmap')} className="hover:text-blue-300 transition">Roadmap</button>
        </div>
      </nav>

      {/* --- 1. HERO SECTION (Untouched) --- */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-900 pt-28 pb-16 px-4">
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
            {/* --- PREMIUM BUTTON LAYOUT (Wired to spinner) --- */}
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              {/* Primary Button */}
              <button onClick={(e) => handleNavigation(e, '/roadmap')} className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                The Roadmap
              </button>
              
              {/* Secondary Buttons Row */}
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

      {/* --- 2. IMPACT NUMBERS (The WOW Factor) --- */}
      <section className="w-full bg-blue-900 text-white py-8 z-30 relative shadow-xl">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-6 text-center">
          <div><h3 className="text-3xl font-black text-yellow-400">15+</h3><p className="text-sm uppercase tracking-wider font-semibold opacity-90">Years Global Finance</p></div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div><h3 className="text-3xl font-black text-yellow-400">1,000+</h3><p className="text-sm uppercase tracking-wider font-semibold opacity-90">Lives Touched</p></div>
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          <div><h3 className="text-3xl font-black text-yellow-400">1</h3><p className="text-sm uppercase tracking-wider font-semibold opacity-90">Vision for Kwara</p></div>
        </div>
      </section>

      {/* --- 3. MEET HAKEEM SECTION (Wired and safe) --- */}
      <section className="w-full bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* PLACEHOLDER: Approchable Photo Here */}
          <div className="w-full aspect-[4/5] bg-slate-300 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
              [ Approchable Photo placeholder]
            </div>
             {/* Uncomment line below and add image path */}
            {/* <img src="/hakeem-approachable.jpg" alt="Meet Hakeem" className="w-full h-full object-cover" /> */}
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

      {/* --- 4. CORE PILLARS --- */}
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

      {/* --- 5. THE RESTORED LEGACY SECTION (Rebuilt per screenshot) --- */}
      <section className="w-full bg-slate-900 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Text Header Block */}
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5 shadow-lg">
                <span className="text-3xl font-black text-blue-900">3</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white max-w-lg leading-tight">
              Unwavering commitment to the people of Kwara.
            </h2>
          </div>

          {/* Composite Image Section - Per screenshot layout */}
          <div className="relative inline-block w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-700/50 bg-slate-700">
              {/* PLACEHOLDER: Prominent Hakeem portrait in brown cap as the dominant picture */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                  [ Hakeem portrait, brown cap ]
              </div>
              {/* Uncomment line below and add image path */}
              {/* <img src="/hakeem-portrait-brown-cap.jpg" alt="Legacy - Alh. Hakeem Lawal" className="absolute inset-0 w-full h-full object-cover" /> */}

              {/* Inset Father Photo Frame - Circular in bottom left corner */}
              <div className="absolute bottom-6 left-6 w-36 h-36 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-square z-10">
                  {/* PLACEHOLDER: Small father photo in blue cap */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-600 text-slate-300 font-medium">
                      [ Father, blue cap]
                  </div>
                  {/* Uncomment line below and add image path */}
                  {/* <img src="/father-portrait.jpg" alt="Legacy - Alh. Mohammed Lawal" className="absolute inset-0 w-full h-full object-cover" /> */}
              </div>
          </div>
        </div>
      </section>

      {/* --- 6. VOICES OF KWARA --- */}
      <section className="w-full bg-blue-600 py-16 px-4 text-center text-white">
         <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
              "Leadership is not about titles; it is about the lives we uplift and the communities we build."
            </p>
            <p className="font-bold tracking-widest text-yellow-300 uppercase text-sm">— Alh. Hakeem Lawal</p>
         </div>
      </section>

      {/* --- 7. THE FOOTER --- */}
      <footer className="w-full bg-slate-950 pt-16 pb-8 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="text-3xl font-black tracking-tighter text-white drop-shadow-md mb-8">
            HOL <span className="text-blue-500">2027</span>
          </div>
          
          {/* Social Icons (standard SVGs) */}
          <div className="flex gap-6 mb-10">
            {/* Facebook */}
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 4.096H5.078z" /></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            {/* TikTok */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.73 5.47-1.6 1.95-4.22 2.92-6.66 2.53-2.61-.41-4.83-2.22-5.74-4.66-.82-2.18-.54-4.66.7-6.55 1.15-1.74 3.08-2.9 5.16-3.14V12.9c-1.33.07-2.6.65-3.52 1.6-.9.94-1.34 2.29-1.22 3.6.14 1.5.99 2.86 2.3 3.55 1.56.84 3.56.76 5.04-.26 1.47-1.02 2.3-2.73 2.3-4.52V.02h-2.61z" /></svg>
            </a>
          </div>

          {/* Copyright strictly formatted */}
          <div className="border-t border-slate-800 w-full pt-8">
             <p className="text-slate-500 text-sm font-medium">© 2026 HOL 2027. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
