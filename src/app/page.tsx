"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const heroImages = [
    "/hero1.jpeg", 
    "/hero2.jpeg", 
    "/hero3.jpeg", 
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white pb-20 overflow-x-hidden">
      
      {/* Navigation - Locked to top, mobile safe */}
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
          <Link href="/about" className="hover:text-blue-300 transition">About</Link>
          <Link href="/legacy" className="hover:text-blue-300 transition">Legacy</Link>
          <Link href="/issues" className="hover:text-blue-300 transition">Issues</Link>
        </div>
      </nav>

      {/* Hero Section - Redesigned to NEVER cut off buttons on mobile */}
      {/* Added bg-slate-900 and increased bottom padding to create more blending space */}
<section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-900 pt-32 pb-32 px-4">
        
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
  src={src} 
  // Changed object-center back to object-top. object-cover will fill the space.
  className="w-full h-full object-cover object-top" 
  alt={`Hakeem Lawal Campaign Slide ${index + 1}`} 
/>
          </div>
        ))}

        {/* Updated gradient to be more subtle at the top and transition deeper at the bottom */}
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900 z-10"></div>

        {/* Hero Content - Perfectly spaced */}
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-8">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-400/50 bg-blue-900/40 backdrop-blur-md text-blue-100 text-xs md:text-sm font-bold tracking-wide">
            VISION FOR KWARA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Legacy of Service, <br />
            <span className="text-blue-400">Future for Kwara</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            A true son of Kwara, tested by time and driven by purpose. Alh. Hakeem Lawal’s unwavering commitment to our state’s potential has never faltered. After decades of grassroots service and standing with the people, his motivation remains pure: genuine progress for all. The time for proven leadership is now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
              Join the Movement
            </button>
            <Link href="/legacy" className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white text-center font-bold py-4 px-8 rounded-full transition-all">
              Explore the Legacy
            </Link>
          </div>
        </div>
      </section>

      {/* About Him & Legacy Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-700 font-bold tracking-wider text-xs md:text-sm mb-2 uppercase">A Foundation of Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Continuing the <br/> Great Work.
            </h3>
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
              Rooted in the monumental legacy of the late <span className="font-bold text-slate-900">Rear Admiral Mohammed Alabi Lawal</span>, Hakeem’s vision for Kwara is built on tested principles: infrastructure development, economic empowerment, and true grassroots inclusivity.
            </p>
            
            <ul className="space-y-6 mt-8">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">1</div>
                <p className="text-sm md:text-base text-slate-700 font-medium">Proven dedication to statewide public service.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">2</div>
                <p className="text-sm md:text-base text-slate-700 font-medium">Strategic infrastructure and economic planning.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">3</div>
                <p className="text-sm md:text-base text-slate-700 font-medium">Unwavering commitment to the people of Kwara.</p>
              </li>
            </ul>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10"></div>
            
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl border-4 border-white shadow-xl overflow-hidden relative">
              {/* FIXED TO EXACTLY .jpg */}
              <img 
                src="/about-hakeem.jpg" 
                alt="Alh. Hakeem Lawal" 
                className="w-full h-full object-cover object-top"
              />
              
              <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-12 w-36 h-36 md:w-48 md:h-48 rounded-full border-[6px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden bg-white z-20">
                <img 
                  src="/legacy-father.jpeg" 
                  alt="Late Rear Admiral Mohammed Alabi Lawal" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Form section kept minimal for brevity */}
    </main>
  );
}