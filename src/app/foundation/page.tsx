"use client";
import Link from "next/link";

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-900 selection:text-white pb-0">
      <nav className="w-full p-4 md:p-6 flex justify-between items-center bg-slate-950 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl font-black tracking-tighter text-white">HOL <span className="text-blue-400">2027</span></div>
        </Link>
        <Link href="/" className="text-sm font-bold text-slate-300 hover:text-white transition px-4 py-2 bg-white/10 rounded-full">
          &larr; Back to Home
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* FIXED: Activated Hero Image */}
        <img src="/foundation-hero.jpg" className="absolute inset-0 w-full h-full object-cover z-0 opacity-60" alt="Awliya Foundation" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-20">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 border-4 border-slate-100 overflow-hidden p-2">
             <img src="/foundation-logo.png" className="w-full h-full object-contain" alt="Logo" />
          </div>
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Awliya Foundation</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">Building Hope.<br/>Empowering Kwara.</h1>
        </div>
      </header>

      <section className="bg-white py-20 px-4 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Our Direct Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden">
                 <img src="/impact-education.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Education" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Education & Scholarships</h3>
                <p className="text-slate-600">Empowering the next generation by covering tuition fees and providing essential learning materials across local governments.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden">
                 <img src="/impact-medical.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Medical" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Medical Outreach</h3>
                <p className="text-slate-600">Bringing free medical checkups, essential medicines, and maternal care directly to underserved communities.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden">
                 <img src="/impact-youth.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Youth" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Youth Skill Acquisition</h3>
                <p className="text-slate-600">Funding vocational training and providing starter kits for young entrepreneurs to build sustainable businesses.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden">
                 <img src="/impact-relief.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Relief" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Community Relief Funds</h3>
                <p className="text-slate-600">Delivering rapid financial and material support to families and small businesses during times of economic hardship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">
         <div className="w-full md:w-1/2 aspect-square bg-slate-200 rounded-full overflow-hidden shadow-2xl border-8 border-white relative">
            {/* FIXED: Activated Beneficiaries Image */}
            <img src="/hakeem-beneficiaries.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Hakeem with beneficiaries" />
         </div>
         <div className="w-full md:w-1/2">
            <div className="w-16 h-2 bg-blue-600 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-6">Service is Not a Campaign Promise. It's a Track Record.</h2>
            <p className="text-lg text-slate-600 mb-8">
              "We didn't wait for an election cycle to start helping our people. The Awliya Foundation is the beating heart of our philosophy: if you have the capacity to uplift others, it is your duty to do so."
            </p>
         </div>
      </section>
    </main>
  );
}
