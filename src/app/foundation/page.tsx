"use client";

import Link from "next/link";

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-900 selection:text-white pb-0">
      
      {/* Inner Navbar */}
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

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-bold text-xl z-0 bg-slate-800">
          [ Placeholder: Image of Foundation Building or Philanthropy ]
        </div>
        {/* <img src="/foundation-hero.jpg" className="absolute inset-0 w-full h-full object-cover z-0 opacity-60" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-20">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 border-4 border-slate-100 overflow-hidden">
             <span className="text-slate-400 font-bold text-xs text-center leading-tight p-2">[ Logo Here ]</span>
             {/* <img src="/foundation-logo.png" className="w-full h-full object-cover" /> */}
          </div>
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Awliya Foundation</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">Building Hope.<br/>Empowering Kwara.</h1>
        </div>
      </header>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
         <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
           Long before the campaign trail, the <span className="text-blue-700 font-bold">Awliya Foundation</span> has been on the ground, delivering real solutions to the people of Kwara. Founded and Chaired by Alh. Hakeem Lawal, our mission is simple: to provide education, healthcare, and economic relief to those who need it most, proving that leadership is about service, not titles.
         </p>
      </section>

      {/* Impact Grid */}
      <section className="bg-white py-20 px-4 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Our Direct Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Impact Card 1 */}
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-500 font-bold">
                 [ Photo: Scholarship/Education ]
                 {/* <img src="/impact-1.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /> */}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Education & Scholarships</h3>
                <p className="text-slate-600">Empowering the next generation by covering tuition fees and providing essential learning materials across local governments.</p>
              </div>
            </div>

            {/* Impact Card 2 */}
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-500 font-bold">
                 [ Photo: Healthcare/Medical Outreach ]
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Medical Outreach</h3>
                <p className="text-slate-600">Bringing free medical checkups, essential medicines, and maternal care directly to underserved communities.</p>
              </div>
            </div>

            {/* Impact Card 3 */}
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-500 font-bold">
                 [ Photo: Youth Empowerment/Skills ]
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Youth Skill Acquisition</h3>
                <p className="text-slate-600">Funding vocational training and providing starter kits for young entrepreneurs to build sustainable businesses.</p>
              </div>
            </div>

            {/* Impact Card 4 */}
            <div className="rounded-3xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 group">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-500 font-bold">
                 [ Photo: Community Relief ]
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Community Relief Funds</h3>
                <p className="text-slate-600">Delivering rapid financial and material support to families and small businesses during times of economic hardship.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Candidate Connection */}
      <section className="max-w-5xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">
         <div className="w-full md:w-1/2 aspect-square bg-slate-200 rounded-full overflow-hidden shadow-2xl border-8 border-white flex items-center justify-center text-slate-500 font-bold">
            [ Photo: Hakeem interacting with beneficiaries ]
         </div>
         <div className="w-full md:w-1/2">
            <div className="w-16 h-2 bg-blue-600 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-6">Service is Not a Campaign Promise. It's a Track Record.</h2>
            <p className="text-lg text-slate-600 mb-8">
              "We didn't wait for an election cycle to start helping our people. The Awliya Foundation is the beating heart of our philosophy: if you have the capacity to uplift others, it is your duty to do so."
            </p>
            <Link href="/volunteer" className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-500 transition text-lg">
               Support Our Work on the Ground <span aria-hidden="true">&rarr;</span>
            </Link>
         </div>
      </section>

      {/* --- UNIVERSAL FOOTER --- */}
      <footer className="w-full bg-slate-950 text-white pt-20 pb-8 px-4 border-t-4 border-blue-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 font-bold uppercase tracking-widest text-xs rounded-full mb-4">Coming Soon</div>
            <h2 className="text-2xl font-serif font-bold mb-4">Community Giveaways & Rewards</h2>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              At the Hakeem Lawal Campaign, we believe in a Kwara where everyone shares in progress. Soon, we'll be launching initiatives to directly reward dedicated Kwarans like you. Join the newsletter to be the first to know when it goes live!
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
