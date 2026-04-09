"use client";
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  // FIXED: 4 Images array with JPG extension
  const aboutImages = [
    "/about-gallery1.jpg", 
    "/about-gallery2.jpg",
    "/about-gallery3.jpg",
    "/about-gallery4.jpg"
  ];
  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % aboutImages.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-900 selection:text-white pb-20">
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

      <header className="w-full bg-blue-900 py-24 px-4 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">The Man Behind the Vision</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">Alh. Hakeem Lawal</h1>
          <p className="text-xl md:text-2xl text-blue-200 font-medium">B.A. (Hons) Economics, M.Sc. International Finance</p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 space-y-6 text-slate-700 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 inline-block pb-2 mb-4">A Life of Purpose</h2>
            <p>An independent, soft-spoken, and deeply dedicated Kwaran, Alh. Hakeem Lawal represents a new generation of leadership. His approach is rooted in global financial expertise, yet entirely focused on grassroots impact.</p>
            <p>His academic journey took him to the prestigious Royal Russell School, followed by a rigorous foundation in economics with a <strong>B.A. (Hons) from the University of Portsmouth</strong>. He further honed his expertise by earning an <strong>M.Sc. in International Finance from the University of Surrey</strong>.</p>
            <div className="my-10 p-8 bg-slate-900 text-white rounded-2xl shadow-inner border-l-8 border-yellow-500">
              <p className="font-serif text-2xl italic leading-snug">"Whether advising financial institutions in the UK or guiding youth policy in Abuja, my heart, my resources, and my ultimate mission have always remained at home in Kwara."</p>
            </div>
            <p>Before dedicating himself fully to public service and philanthropy, Alh. Hakeem Lawal built a world-class career in the private sector. Serving as a Financial Analyst at MaxGavlin Consulting UK and an Investment Analyst at Amlin Plc UK.</p>
          </div>
          <div className="lg:w-1/3 flex flex-col gap-4">
             <div className="relative w-full aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-lg group">
                {/* FIXED: Activated Carousel Image */}
                <img src={aboutImages[activeImg]} alt="Gallery" className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20">
                   <button onClick={prevImg} className="w-10 h-10 bg-white/80 hover:bg-white rounded-full text-slate-900 font-bold shadow flex items-center justify-center backdrop-blur-sm transition">&larr;</button>
                   <button onClick={nextImg} className="w-10 h-10 bg-white/80 hover:bg-white rounded-full text-slate-900 font-bold shadow flex items-center justify-center backdrop-blur-sm transition">&rarr;</button>
                </div>
             </div>
             <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">Grassroots Action</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 text-center mb-12">Track Record of Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 font-black text-xl">01</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Chairman, Awliya Foundation</h3>
            <p className="text-slate-600">Driving massive philanthropic efforts, educational scholarships, and community empowerment initiatives across all local governments in Kwara State.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center mb-6 font-black text-xl">02</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Federal Ministry Finance Chair</h3>
            <p className="text-slate-600">Served distinctly as the Chairman of the Finance Committee at the Federal Ministry of Youth & Sports Development.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
