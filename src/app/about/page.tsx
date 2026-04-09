"use client";
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
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
    <main className="min-h-screen bg-slate-50 selection:bg-blue-900 selection:text-white pb-0">
      <nav className="w-full p-4 md:p-6 flex justify-between items-center bg-slate-950 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl font-black tracking-tighter text-white">HOL <span className="text-blue-400">2027</span></div>
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

      {/* RESTORED: All 4 Track Record Achievements */}
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
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6 font-black text-xl">03</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">CEO, Heich and Heich</h3>
            <p className="text-slate-600">Leading corporate strategy, wealth generation, and large-scale execution as the Chief Executive Officer at a high-level private firm.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-6 font-black text-xl">04</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Economic Analyst</h3>
            <p className="text-slate-600">Built a formidable foundation managing international assets and investments at MaxGavlin Consulting UK and Amlin Plc UK.</p>
          </div>
        </div>
      </section>

      {/* RESTORED: Full Footer with All Icons */}
      <footer className="w-full bg-slate-950 text-white pt-20 pb-8 px-4 border-t-4 border-blue-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 font-bold uppercase tracking-widest text-xs rounded-full mb-4">Coming Soon</div>
            <h2 className="text-2xl font-serif font-bold mb-4">Community Giveaways & Rewards</h2>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              At the Hakeem Lawal Campaign, we believe in a Kwara where everyone shares in progress. Join the newsletter to be the first to know when it goes live!
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email address" required className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500" />
              <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-col md:items-end justify-center text-center md:text-right">
             <div className="text-5xl font-black tracking-tighter drop-shadow-md mb-6">HOL <span className="text-blue-500">2027</span></div>
             <p className="text-slate-400 mb-8 max-w-xs mx-auto md:mx-0">Building a legacy of service, ensuring a future of prosperity for all Kwarans.</p>
             <div className="flex justify-center md:justify-end gap-6 mb-10">
               <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
               </a>
               <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 4.096H5.078z"/></svg>
               </a>
               <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
               </a>
             </div>
          </div>
        </div>
        <div className="border-t border-slate-800 max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-slate-500 text-sm font-medium">© 2026 HOL 2027. All Rights Reserved.</p>
           <div className="flex gap-4 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition">Privacy Policy</a>
             <a href="#" className="hover:text-white transition">Terms of Service</a>
           </div>
        </div>
      </footer>
    </main>
  );
}
