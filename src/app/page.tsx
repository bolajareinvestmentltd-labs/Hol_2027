"use client";
import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const heroImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleNavigation = (e: MouseEvent<HTMLButtonElement>, path: string) => {
    e.preventDefault();
    setIsNavigating(true);
    setTimeout(() => window.location.href = path, 400); 
  };

  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white pb-0 overflow-x-hidden relative">
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="w-20 h-20 bg-white rounded-full p-2 animate-pulse mb-4">
            <img src="/logo.png" alt="Loading..." className="w-full h-full object-cover animate-spin-slow rounded-full" />
          </div>
          <p className="text-white font-black tracking-[0.3em] text-xl animate-pulse">HOL <span className="text-blue-400">2027</span></p>
        </div>
      )}

      {/* FIXED NAVBAR: Added 'Team' to the links */}
      <nav className="w-full pt-4 pb-2 px-4 md:p-6 flex flex-col md:flex-row justify-between items-center absolute top-0 left-0 right-0 z-50 gap-3 md:gap-0 bg-gradient-to-b from-slate-900/80 to-transparent">
        <div className="flex items-center gap-3 w-full justify-between md:w-auto">
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-white drop-shadow-md">
            HOL <span className="text-blue-400">2027</span>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full overflow-hidden border-2 border-white shadow-lg flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="Party Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-bold text-white drop-shadow-md bg-black/30 md:bg-transparent px-5 py-2.5 rounded-full backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none">
          <button onClick={(e) => handleNavigation(e, '/foundation')} className="hover:text-blue-300 transition tracking-wide">Foundation</button>
          <button onClick={(e) => handleNavigation(e, '/legacy')} className="hover:text-blue-300 transition tracking-wide">Legacy</button>
          <button onClick={(e) => handleNavigation(e, '/team')} className="hover:text-blue-300 transition tracking-wide text-yellow-400">Team</button>
          <button onClick={(e) => handleNavigation(e, '/contact')} className="hover:text-blue-300 transition tracking-wide">Contact</button>
        </div>
      </nav>

      <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-900 pt-32 pb-16 px-4">
        {heroImages.map((src, index) => (
          <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"}`}>
            <img src={src} className="w-full h-full object-cover object-top" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-900 z-10"></div>

        <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-8 px-4">
          <div className={`transition-all duration-1000 ease-out transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-xl">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-xs md:text-sm font-black text-white tracking-[0.2em] uppercase flex items-center gap-2 animate-[pulse_3s_ease-in-out_infinite] hover:scale-105 transition-transform cursor-default">Aspiration <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Watch Out</span>
             </div>
          </div>
          <div className={`transition-all duration-1000 ease-out delay-100 transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
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
              <div className="flex gap-4 w-full relative">
                <div className="flex-1 relative">
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)} 
                    className="w-full py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Stand With Hakeem
                    <svg className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
            <img src="/hakeem-approachable.jpg" alt="Meet Hakeem" className="absolute inset-0 w-full h-full object-cover" />
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

      {/* FIXED: Added Team CTA on Homepage */}
      <section className="w-full bg-slate-100 py-16 px-4 text-center border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">A Leader is Only as Strong as His Team</h2>
           <p className="text-lg text-slate-600 mb-8">Discover the brilliant minds, veteran strategists, and grassroots champions driving the Kwara Masterplan forward.</p>
           <button onClick={(e) => handleNavigation(e, '/team')} className="inline-block py-4 px-10 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1">
             Meet the Campaign Team
           </button>
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
              <img src="/hakeem-portrait-brown-cap.jpg" alt="Alh. Hakeem Lawal" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 w-36 h-36 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-square z-10 bg-slate-800">
                  <img src="/father-portrait.jpg" alt="Alh. Mohammed Lawal" className="absolute inset-0 w-full h-full object-cover" />
              </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-slate-950 text-white pt-20 pb-8 px-4 border-t-4 border-blue-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 font-bold uppercase tracking-widest text-xs rounded-full mb-4">Coming Soon</div>
            <h2 className="text-2xl font-serif font-bold mb-4">Community Giveaways & Rewards</h2>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              At the Hakeem Lawal Campaign, we believe in a Kwara where everyone shares in progress. Join the newsletter to be the first to know when it goes live!
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email address" required className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500" />
              <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-col md:items-end justify-center text-center md:text-right">
             <div className="text-5xl font-black tracking-tighter drop-shadow-md mb-6">HOL <span className="text-blue-500">2027</span></div>
             <p className="text-slate-400 mb-8 max-w-xs mx-auto md:mx-0">Building a legacy of service, ensuring a future of prosperity for all Kwarans.</p>
             <div className="flex justify-center md:justify-end gap-6 mb-10">
               <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
               </a>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
