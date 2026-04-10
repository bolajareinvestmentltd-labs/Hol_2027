"use client";
import { useState, useEffect } from "react";

export default function LegacyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - you will replace these with actual historical photos in your public folder
  const legacyImages = [
    "/legacy1.jpg", 
    "/legacy2.jpg",
    "/legacy3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % legacyImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [legacyImages.length]);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* 1. Page Header & Auto-Carousel */}
      <section className="relative h-[60vh] w-full flex flex-col items-center justify-center bg-slate-900">
        {legacyImages.map((src, index) => (
          <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"}`}>
            {/* Fallback gray background if image isn't loaded yet */}
            <div className="w-full h-full bg-slate-800 absolute inset-0 -z-10"></div>
            <img src={src} className="w-full h-full object-cover opacity-60" alt={`Historical slide ${index + 1}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 mt-20">
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm md:text-base drop-shadow-md">A Foundation of Excellence</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white drop-shadow-xl mt-2">The Lawal Legacy</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto md:text-lg">Honoring the life, service, and undeniable impact of Rear Admiral Mohammed Alabi Lawal.</p>
        </div>
      </section>

      {/* 2. Biography & Military Service */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">A Sailor's Honor</h2>
            <p className="text-lg leading-relaxed mb-4 text-slate-600">
              Before steering the ship of Kwara State, Rear Admiral Mohammed Alabi Lawal proudly served his nation in the Nigerian Navy. His military career was defined by strict discipline, strategic vision, and an unwavering commitment to the Federal Republic of Nigeria.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              He brought the courage of a sailor and the precision of a military commander into public administration, laying the groundwork for a leadership style that prioritized action over rhetoric.
            </p>
          </div>
          <div className="h-80 bg-slate-200 rounded-2xl shadow-inner flex items-center justify-center border border-slate-300">
            <span className="text-slate-400 font-medium">[Insert Portrait in Naval Uniform]</span>
          </div>
        </div>
      </section>

      {/* 3. The Golden Era: 1999 - 2003 */}
      <section className="py-16 md:py-24 bg-blue-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-yellow-400 mb-6">The Civilian Era (1999-2003)</h2>
          <p className="text-lg md:text-xl leading-relaxed text-blue-100 mb-10">
            Under the national leadership of President Olusegun Obasanjo, Governor Mohammed Lawal led Kwara State into the Fourth Republic. His administration is widely remembered for unprecedented infrastructural development, water projects, and people-centric policies that Kwarans still testify to today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Infrastructure</h3>
              <p className="text-sm text-blue-100">Massive road networks and structural development across the state.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Water Projects</h3>
              <p className="text-sm text-blue-100">Restoration of safe drinking water to countless local communities.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Empowerment</h3>
              <p className="text-sm text-blue-100">Economic initiatives that transformed the lives of everyday Kwarans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Entourage & Cabinet */}
      <section className="py-16 md:py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Men & Women Who Stood With Him</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A tribute to the Commissioners, Special Advisers, Local Government Chairmen, and dedicated staff who worked tirelessly to deliver the dividends of democracy during his tenure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* You will map over your actual list of names here. These are placeholders for the UI design */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3 font-bold text-xl">
                  {/* Initial */} M
                </div>
                <h4 className="font-bold text-slate-800">Hon. Name Placeholder</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Former Commissioner</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg">
                View Full Cabinet Roster
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}
