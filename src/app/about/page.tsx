"use client";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const aboutImages = [
    "/hakeem-portrait.jpg", 
    "/hakeem-rally.jpg",
    "/hakeem-community.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* 1. Page Header & Auto-Carousel */}
      <section className="relative h-[60vh] w-full flex flex-col items-center justify-center bg-slate-900">
        {aboutImages.map((src, index) => (
          <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"}`}>
            <div className="w-full h-full bg-slate-800 absolute inset-0 -z-10"></div>
            <img src={src} className="w-full h-full object-cover opacity-60 object-top" alt={`Alhaji Hakeem Lawal ${index + 1}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 mt-20">
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm md:text-base drop-shadow-md">Meet The Candidate</span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white drop-shadow-xl mt-2 leading-tight">Alh. Hakeem Olademeji Lawal <br /><span className="text-yellow-400 text-2xl md:text-4xl tracking-[0.15em] mt-2 block">[OMOLADERIN]</span></h1>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-lg md:text-xl font-bold tracking-widest drop-shadow-md">
            B.A. (Hons), M.Sc., FIMC, MNIM
          </p>
        </div>
      </section>

      {/* 2. Executive Summary */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center relative -mt-12 z-30">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
            "Leadership is not a title; it is a profound responsibility to uplift the people."
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Alhaji Hakeem Lawal represents a bridge between Kwara's proud heritage and its limitless future. Armed with world-class education, prestigious professional fellowships, vast corporate experience, and a deep-rooted love for his people, he is stepping forward to deliver a Masterplan that works for every Kwaran.
          </p>
        </div>
      </section>

      {/* 3. Comprehensive Biography */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-slate-800 pb-20">
        <div className="space-y-16">
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 h-80 bg-slate-200 rounded-2xl shadow-inner relative overflow-hidden border border-slate-300">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  [ Early Life Photo ]
               </div>
            </div>
            <div className="md:col-span-7">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">A Legacy of Public Service</h3>
              <p className="text-lg leading-relaxed mb-4 text-slate-600">
                Born into a family where public service was a daily reality, Hakeem Lawal learned early on that true governance is about the welfare of the people. As the son of the late former Governor, Rear Admiral Mohammed Alabi Lawal, he was raised with the core values of integrity, discipline, and empathy for the grassroots.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                He carries forward his father's undeniable love for Kwara State, but brings his own modern vision, educational prowess, and global perspective to the table.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center flex-col-reverse md:flex-row">
            <div className="md:col-span-7 md:order-1 order-2">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 border-l-4 border-yellow-500 pl-4">Academic & Professional Excellence</h3>
              <p className="text-lg leading-relaxed mb-4 text-slate-600">
                A firm believer in the power of education and continuous development, Alh. Hakeem Lawal holds a Bachelor of Arts (B.A. Hons) and a Master of Science (M.Sc.), alongside distinguished professional memberships including the Institute of Management Consultants.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Beyond the classroom, his stellar track record in the private sector showcases his ability to manage vast resources, lead massive teams, and demonstrate the executive competence required to manage the economy of a state as diverse as Kwara.
              </p>
            </div>
            <div className="md:col-span-5 h-80 bg-slate-200 rounded-2xl shadow-inner relative overflow-hidden border border-slate-300 md:order-2 order-1">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  [ Professional Portrait ]
               </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mt-12">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
             <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-yellow-400 mb-6">The Road to 2027</h3>
                <p className="text-lg md:text-xl leading-relaxed text-blue-100 mb-8">
                  "My commitment to Kwara is absolute. We are building a movement that prioritizes economic empowerment, massive infrastructural renewal, and an educational system that prepares our youth for the global stage. It is time for a government that truly listens, acts, and delivers."
                </p>
                <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-1">
                  View The Masterplan Roadmap
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-slate-950 text-white pt-16 pb-8 px-6 border-t-4 border-blue-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <div className="text-2xl font-black tracking-tighter text-white mb-2">HOL <span className="text-blue-400">2027</span></div>
             <p className="text-slate-400 text-sm">Legacy of Service, Future for Kwara.</p>
          </div>
          
          {/* Social Icons embedded with links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 hover:scale-110 transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 max-w-6xl mx-auto mt-8 pt-8 text-center md:text-left">
           <p className="text-slate-500 text-sm font-medium">© 2026 HOL 2027. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
