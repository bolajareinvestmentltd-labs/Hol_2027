"use client";

import { useState } from "react";
import Link from "next/link";

export default function VolunteerPage() {
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

  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white pb-20">
      
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

      <header className="w-full py-20 px-4 text-center">
        <h3 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Grassroots Action</h3>
        <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 mb-4">Stand With Hakeem</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A movement is built by the people. Sign up to volunteer, canvas, or support the campaign in your local government area.
        </p>
      </header>

      <section className="max-w-2xl mx-auto px-4">
        {isSuccess ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-3xl p-10 text-center shadow-lg">
            <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Welcome to the Team!</h2>
            <p className="text-lg text-slate-600 mb-8">Your details have been received. Our campaign coordinators will reach out to you shortly.</p>
            <button onClick={() => setIsSuccess(false)} className="text-blue-600 font-bold hover:underline">Submit another response</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input required type="text" placeholder="Enter your full name" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input required type="tel" placeholder="080..." className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email (Optional)</label>
                <input type="email" placeholder="your@email.com" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Your Local Government Area (LGA)</label>
              <select required className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white appearance-none">
                <option value="" disabled selected>Select your LGA in Kwara...</option>
                <option value="ilorin-west">Ilorin West</option>
                <option value="ilorin-east">Ilorin East</option>
                <option value="ilorin-south">Ilorin South</option>
                <option value="asa">Asa</option>
                <option value="moro">Moro</option>
                <option value="offa">Offa</option>
                <option value="ifelodun">Ifelodun</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">How would you like to help?</label>
              <div className="space-y-3">
                {['Grassroots Canvassing', 'Social Media Ambassador', 'Event Logistics', 'Awliya Foundation Support'].map((role) => (
                  <label key={role} className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition bg-white">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="text-slate-700 font-medium">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg transition-all flex justify-center items-center">
              {isSubmitting ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                "Join the Movement"
              )}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
