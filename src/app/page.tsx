"use client";

import { useState, useEffect } from "react";

export default function Home() {
  // These represent your 3-4 hero images. 
  // Later, you will name your real images 'hero1.jpg', 'hero2.jpg', etc., and put them in the 'public' folder.
  const heroImages = [
    "bg-slate-900", // Placeholder 1
    "bg-blue-900",  // Placeholder 2
    "bg-slate-800", // Placeholder 3
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // This automatically changes the slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white pb-20">
      {/* Navigation */}
      <nav className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50">
        <div className="text-2xl font-black tracking-tighter text-white drop-shadow-md">
          HOL <span className="text-blue-400">2027</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-white drop-shadow-md">
          <span className="hover:text-blue-300 cursor-pointer transition">About</span>
          <span className="hover:text-blue-300 cursor-pointer transition">Legacy</span>
          <span className="hover:text-blue-300 cursor-pointer transition">Issues</span>
        </div>
      </nav>

      {/* Hero Section with Carousel Background */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        {/* Carousel Backgrounds */}
        {heroImages.map((bgClass, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${bgClass} ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* When you have real images, you will replace the bgClass above with an img tag like this:
                <img src={`/hero${index + 1}.jpg`} className="w-full h-full object-cover" alt="Campaign" /> 
            */}
            <div className="w-full h-full flex items-center justify-center text-slate-500/50 font-bold text-2xl">
              [Image {index + 1} Goes Here]
            </div>
          </div>
        ))}

        {/* Dark Cinematic Overlay - This makes the white text readable over any photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900 z-10"></div>

        {/* Hero Content (On Top of Carousel) */}
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 mt-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-400/50 bg-blue-900/40 backdrop-blur-md text-blue-100 text-sm font-bold tracking-wide">
            THE OFFICIAL CAMPAIGN PLATFORM
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Legacy of Service, <br className="hidden md:block" />
            <span className="text-blue-400">Future for Kwara</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            For decades, Hakeem Lawal has stood for steady leadership and service. Now he brings that experience back to build a stronger, fairer Kwara for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1">
              Join the Movement
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-8 rounded-full transition-all">
              Explore the Legacy
            </button>
          </div>
        </div>
      </section>

      {/* About Him & Legacy Section (Combined) */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Copy */}
          <div>
            <h2 className="text-blue-700 font-bold tracking-wider text-sm mb-2 uppercase">A Foundation of Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Continuing the <br/> Great Work.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Rooted in the monumental legacy of the late <span className="font-bold text-slate-900">Rear Admiral Mohammed Alabi Lawal</span>, Hakeem’s vision for Kwara is built on tested principles: infrastructure development, economic empowerment, and true grassroots inclusivity.
            </p>
            
            <ul className="space-y-4 mt-8">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">1</div>
                <p className="text-slate-700 font-medium">Proven dedication to statewide public service.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">2</div>
                <p className="text-slate-700 font-medium">Strategic infrastructure and economic planning.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">3</div>
                <p className="text-slate-700 font-medium">Unwavering commitment to the people of Kwara.</p>
              </li>
            </ul>
          </div>

          {/* Right Side: Portrait Image (Moved down as you requested) */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="w-full h-[500px] bg-slate-200 rounded-3xl border-4 border-white shadow-lg flex flex-col items-center justify-center p-8 text-center overflow-hidden">
              <p className="text-slate-500 font-bold text-xl mb-2">
                [High-Res Portrait Here]
              </p>
              <p className="text-slate-400 text-sm max-w-xs">
                This is the perfect spot for his standalone portrait or the legacy composite photo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}