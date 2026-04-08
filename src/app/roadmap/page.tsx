"use client";

import Link from "next/link";

export default function RoadmapPage() {
  const pillars = [
    { step: "01", title: "Economic Rebirth & Wealth Creation", desc: "Utilizing international finance expertise to attract global investment, empower local SMEs, and transform Kwara into an economic hub.", color: "bg-blue-600" },
    { step: "02", title: "Youth & Educational Empowerment", desc: "Moving beyond basic literacy to equip our youth with modern tech skills, vocational mastery, and direct pathways to employment.", color: "bg-yellow-500" },
    { step: "03", title: "Sustainable Infrastructure", desc: "Building roads, healthcare facilities, and energy grids that actually last, ensuring every Kwaran has access to dignified living conditions.", color: "bg-slate-800" }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white pb-20">
      <nav className="w-full p-4 md:p-6 flex justify-between items-center bg-slate-950 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl font-black tracking-tighter text-white">
            HOL <span className="text-blue-400">2027</span>
          </div>
        </Link>
        <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white transition">
          &larr; Back to Home
        </Link>
      </nav>

      <header className="w-full py-20 px-4 text-center">
        <h3 className="text-blue-600 font-bold tracking-widest uppercase mb-4">The Masterplan</h3>
        <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 mb-6">The Roadmap for Kwara</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">We don't just have hope; we have a blueprint. Here is our step-by-step strategy to elevate our state.</p>
      </header>

      <section className="max-w-5xl mx-auto px-4">
        <div className="grid gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden shadow-md border border-slate-100 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className={`${pillar.color} md:w-32 flex items-center justify-center py-8 md:py-0`}>
                <span className="text-5xl font-black text-white/50">{pillar.step}</span>
              </div>
              <div className="p-8 md:p-10 flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{pillar.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/volunteer" className="inline-block py-4 px-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
            Join the Movement to Build This Future
          </Link>
        </div>
      </section>
    </main>
  );
}
