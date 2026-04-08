"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-900 selection:text-white">
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

      <header className="w-full bg-blue-900 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet Alh. Hakeem Lawal</h1>
        <p className="text-xl text-blue-200 font-medium">B.A. (Hons) Economics, M.Sc. International Finance</p>
      </header>

      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">A Legacy of Excellence and Service</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>An independent, soft-spoken, and deeply dedicated Kwaran, Alh. Hakeem Lawal represents a new generation of leadership—one rooted in global expertise but entirely focused on grassroots impact. Born in Ilorin, his life has been defined by a commitment to uplifting his community.</p>
            <p>His academic journey took him to the prestigious Royal Russell School, followed by a rigorous foundation in economics with a B.A. (Hons) from the University of Portsmouth. He further honed his strategic expertise by earning an M.Sc. in International Finance from the University of Surrey.</p>
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 border-b pb-2">Professional & Public Service</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-blue-700">Chairman, Awliya Foundation:</strong> Driving massive philanthropic efforts and community empowerment across Kwara State.</li>
              <li><strong className="text-blue-700">CEO, Heich and Heich:</strong> Leading corporate strategy and execution at the highest levels.</li>
              <li><strong className="text-blue-700">Former Chairman, Finance Committee:</strong> Served at the Federal Ministry of Youth & Sports Development, Nigeria.</li>
              <li><strong className="text-blue-700">Global Financial Analyst:</strong> Built a world-class financial career at MaxGavlin Consulting UK and Amlin Plc UK.</li>
            </ul>
            <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
              <p className="font-medium text-slate-800 italic">"Whether advising financial institutions in the UK or guiding youth policy in Abuja, my heart and my ultimate mission have always remained at home in Kwara."</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
