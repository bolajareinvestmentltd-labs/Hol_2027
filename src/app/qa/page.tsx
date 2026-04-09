"use client";
import { useState } from "react";
import Link from "next/link";

export default function QAPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const faqs = [
    { q: "What is the primary focus of the Kwara Masterplan?", a: "The Masterplan focuses on three core pillars: Economic Rebirth through SME support, Youth Empowerment via skills acquisition, and Sustainable Infrastructure." },
    { q: "How can I join the campaign as a volunteer?", a: "You can officially join our grassroots movement by visiting the 'Join Movement' page and selecting your Local Government Area." },
    { q: "Does Alh. Hakeem Lawal have previous public service experience?", a: "Yes, he has served distinctly as the Chairman of the Finance Committee at the Federal Ministry of Youth & Sports Development." }
  ];

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

      <header className="w-full py-20 px-4 text-center">
        <h3 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Direct Access</h3>
        <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 mb-4">Ask Hakeem</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Transparency is the foundation of trust. Have a question about the Masterplan or the campaign? Ask directly through our secure portal.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          {isSuccess ? (
             <div className="bg-slate-900 text-white border-4 border-blue-500 rounded-3xl p-10 text-center shadow-2xl h-full flex flex-col justify-center">
               <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">✓</div>
               <h2 className="text-3xl font-bold mb-4">Message Secured.</h2>
               <p className="text-lg text-slate-300 mb-8">Your inquiry has been encrypted and routed to the central campaign desk. You will receive a direct email response within 24-48 hours.</p>
               <button onClick={() => setIsSuccess(false)} className="text-yellow-400 font-bold hover:text-yellow-300 transition">Ask another question</button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">Secure Inquiry Portal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input required type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none transition appearance-none">
                  <option value="" disabled selected>Select a topic...</option>
                  <option>Policy & Masterplan</option>
                  <option>Campaign Events</option>
                  <option>Media Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Question</label>
                <textarea required rows={5} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none transition resize-none"></textarea>
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-lg shadow-lg transition-all flex justify-center items-center">
                {isSubmitting ? <span className="animate-pulse">Encrypting & Routing...</span> : "Submit Question"}
              </button>
            </form>
          )}
        </div>

        {/* FAQs */}
        <div className="flex flex-col justify-center">
           <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {faqs.map((faq, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <h4 className="font-bold text-lg text-blue-700 mb-2">{faq.q}</h4>
                 <p className="text-slate-600 leading-relaxed">{faq.a}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
      
      <footer className="w-full bg-slate-950 text-white pt-20 pb-8 px-4 border-t-4 border-blue-600">
        <div className="border-t border-slate-800 max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-slate-500 text-sm font-medium">© 2026 HOL 2027. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
