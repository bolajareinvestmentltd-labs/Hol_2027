"use client";

import Link from "next/link";

export default function LegacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-900 selection:text-white pb-20">
      
      {/* Solid Inner Navbar */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center bg-slate-950 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl font-black tracking-tighter text-white">
            HOL <span className="text-blue-400">2027</span>
          </div>
        </Link>
        <Link href="/" className="text-sm font-bold text-slate-300 hover:text-white transition px-4 py-2 bg-white/10 rounded-full">
          &larr; Back to Home
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="w-full bg-slate-900 py-24 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-slate-900 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Generational Impact</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">A Legacy Built<br/>On The People</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">Honoring the history of Kwara while forging a dynamic path toward its future.</p>
        </div>
      </header>

      {/* The Core Legacy Split Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          
          {/* The Father (History) */}
          <div className="bg-slate-800 p-10 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition duration-700"></div>
            <h3 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2">The Foundation</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Alh. Mohammed Lawal</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              A visionary leader who understood that true power belongs to the grassroots. His tenure was marked by an unwavering commitment to the common man, infrastructural development, and deep-rooted empathy for the people of Kwara.
            </p>
            <div className="w-full aspect-video bg-slate-700 rounded-xl flex items-center justify-center border-2 border-slate-600 shadow-inner">
               <span className="text-slate-400 font-medium">[ Historical Photo of Father ]</span>
            </div>
          </div>

          {/* The Son (Future) */}
          <div className="bg-white p-10 md:p-16 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl group-hover:bg-yellow-400/40 transition duration-700"></div>
            <h3 className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-2">The Continuation</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Alh. Hakeem Lawal</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Carrying the torch forward, not just by blood, but by principle. Alh. Hakeem blends this historical dedication to the masses with world-class financial expertise, ready to build a modern economy on his father's solid foundation.
            </p>
            <div className="w-full aspect-video bg-slate-100 rounded-xl flex items-center justify-center border-2 border-slate-200 shadow-inner">
               <span className="text-slate-400 font-medium">[ Modern Photo of Hakeem ]</span>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">The work is not finished.</h2>
        <Link href="/volunteer" className="inline-block py-4 px-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1">
          Help Us Continue the Work
        </Link>
      </section>

    </main>
  );
}
