"use client";
import { useState, useEffect } from "react";

export default function TeamPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teamImages = [
    "/team-action1.jpg", 
    "/team-action2.jpg",
    "/team-action3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [teamImages.length]);

  const teamMembers = [
    { name: "Alhaji Sulyman Olowojare", role: "Chairman, Campaign Advisory Council", bio: "A respected statesman and former Chief of Staff during the administration of late Alh. Mohammed Lawal. He provides invaluable generational wisdom, ensuring the campaign stays rooted in proven, grassroots leadership.", portfolio: "#" },
    { name: "Ola Razak", role: "Director General, Campaign Operations", bio: "A masterful strategist overseeing the grand vision, ensuring tactical execution and massive mobilization across all 16 Local Government Areas.", portfolio: "#" },
    { name: "Abdul Mutolib (MeGA~byte)", role: "Personal Assistant to the Candidate", bio: "The operational anchor for Alh. Hakeem Lawal, managing seamless daily scheduling, immediate communications, and tight logistical execution.", portfolio: "#" },
    { name: "Hon. Duro", role: "Head of Political Mobilization", bio: "A seasoned grassroots leader, translating the Masterplan into street-level support and building critical, community-based political alliances.", portfolio: "#" },
    { name: "Iya-apado", role: "Director of Women Affairs & Mobilization", bio: "A formidable grassroots champion dedicated to the empowerment of women and driving massive voter registration among female demographics.", portfolio: "#" },
    { name: "Abdulganeey Idiape", role: "Director of Special Duties", bio: "A deeply trusted confidant and lifelong ally, handling sensitive strategic operations and ensuring absolute cohesion within the inner circle.", portfolio: "#" },
    { name: "[ Placeholder Name ]", role: "Head of Media & Communications", bio: "Crafting the narrative and ensuring Alh. Hakeem Lawal's message of service resonates across all digital and traditional platforms.", portfolio: "#" },
    { name: "[ Placeholder Name ]", role: "Youth Mobilization Director", bio: "Energizing the youth base, organizing student unions, and translating youth energy into organized electoral success.", portfolio: "#" },
    { name: "[ Placeholder Name ]", role: "Head of Finance & Strategy", bio: "Managing the campaign treasury with strict transparency, maximizing the impact of every donation and grassroots contribution.", portfolio: "#" },
    { name: "[ Placeholder Name ]", role: "Diaspora Coordinator", bio: "Uniting Kwarans globally, channeling international support and intellectual resources back home to drive the Masterplan.", portfolio: "#" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden pb-20">
      {/* 1. Page Header & Auto-Carousel */}
      <section className="relative h-[50vh] w-full flex flex-col items-center justify-center bg-slate-900">
        {teamImages.map((src, index) => (
          <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"}`}>
            <div className="w-full h-full bg-slate-800 absolute inset-0 -z-10"></div>
            <img src={src} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" alt={`Team in action ${index + 1}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 mt-16">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">The Movement Makers</h1>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-lg md:text-xl font-medium">Dedicated minds driving the vision for a better Kwara.</p>
        </div>
      </section>

      {/* 2. Mission Statement Intro */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center relative -mt-10 z-30">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <svg className="w-10 h-10 text-yellow-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Behind Every Great Leader is a Strong Team</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            The HOL 2027 mandate is not just about one man; it is a collective engine of brilliant strategists, grassroots organizers, and policy experts. Together, we are working tirelessly, both on the field and behind the scenes, to ensure the future of Kwara State is secure.
          </p>
        </div>
      </section>

      {/* 3. The Team Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              {/* Image Placeholder */}
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold text-sm">
                    [ Photo: {member.name} ]
                 </div>
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={member.portfolio} className="px-6 py-2 bg-yellow-400 text-slate-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Portfolio
                    </a>
                 </div>
              </div>
              
              {/* Bio Details */}
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                   <span className="font-black text-sm">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <h4 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">{member.role}</h4>
                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
