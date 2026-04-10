"use client";
import SmartForm from "@/components/SmartForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden pb-20">
      {/* 1. Static Approachable Hero Image */}
      <section className="relative h-[50vh] w-full flex flex-col items-center justify-center bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-slate-800 absolute inset-0 -z-10"></div>
          <img src="/contact-hero.jpg" className="w-full h-full object-cover opacity-70 object-top" alt="Alhaji Hakeem Lawal Approachable" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/40 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 mt-16 drop-shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Let's Connect</h1>
          <p className="text-yellow-400 mt-4 max-w-2xl mx-auto text-lg md:text-xl font-bold">Join the conversation. Shape the Masterplan.</p>
        </div>
      </section>

      {/* 2. Massive Social Media Sub-Containers */}
      <section className="py-16 px-6 max-w-5xl mx-auto relative z-30 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="group bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Facebook</h3>
            <p className="text-slate-500 font-medium mb-6">@HakeemLawal2027</p>
            <span className="w-full py-3 bg-slate-100 text-blue-600 font-bold rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">Follow Page</span>
          </a>

          <a href="#" className="group bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-slate-900 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">X (Twitter)</h3>
            <p className="text-slate-500 font-medium mb-6">@HOL_2027</p>
            <span className="w-full py-3 bg-slate-100 text-slate-900 font-bold rounded-full group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">Follow Updates</span>
          </a>

          <a href="#" className="group bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Instagram</h3>
            <p className="text-slate-500 font-medium mb-6">@Hakeem_Lawal</p>
            <span className="w-full py-3 bg-slate-100 text-pink-600 font-bold rounded-full group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">View Gallery</span>
          </a>
        </div>
      </section>

      {/* 3. The Smart Form Section */}
      <section className="py-12 px-6 max-w-2xl mx-auto">
        <SmartForm 
          formType="contact" 
          title="Send a Direct Message" 
          subtitle="Have a specific question, idea, or want to get involved? Drop us a line below and our team will get back to you."
        />
      </section>
    </main>
  );
}
