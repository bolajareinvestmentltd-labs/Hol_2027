"use client";
import { useState, useEffect } from "react";
import SmartForm from "@/components/SmartForm";

export default function EmpowermentPage() {
  // Simulating the backend data for slots
  const totalSlots = 50;
  const [slotsClaimed, setSlotsClaimed] = useState(48); // Set to 48 to show urgency
  const [isCompleted, setIsCompleted] = useState(false);

  // Calculate the percentage for the Tailwind progress bar
  const progressPercentage = Math.round((slotsClaimed / totalSlots) * 100);

  // A simple simulated countdown for the next batch
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 30 });

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden pb-20">
      {/* 1. Page Header */}
      <section className="relative pt-32 pb-16 w-full flex flex-col items-center justify-center bg-slate-900 border-b-4 border-yellow-500">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm md:text-base mb-2 block">Weekly Edition</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">Kwara Empowerment Initiative</h1>
          <p className="text-blue-200 mt-4 text-lg md:text-xl font-medium">Direct financial grants and community support, powered by the HOL 2027 Masterplan.</p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto relative z-30 -mt-8">
        
        {/* 2. Live Status & Progress Bar */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-8">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">₦500,000 Support Fund</h2>
              <p className="text-slate-500 font-medium">Edition #04</p>
            </div>
            <div className="text-right">
               <span className="text-3xl font-black text-blue-600">{slotsClaimed}</span>
               <span className="text-slate-400 font-bold"> / {totalSlots}</span>
               <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">Slots Claimed</p>
            </div>
          </div>

          {/* The Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-4 mb-2 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-4 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500 text-center mt-3">
            {isCompleted ? "All slots for this edition have been claimed." : `Hurry! Only ${totalSlots - slotsClaimed} slots remaining.`}
          </p>
        </div>

        {/* 3. Conditional View: Form vs. Countdown */}
        {!isCompleted ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
              <p className="text-sm text-blue-800 font-medium">
                <strong>Notice:</strong> To prevent fraud, please submit your contact details below. Our official campaign team will reach out to you directly to securely verify your identity and collect your account details.
              </p>
            </div>
            
            <SmartForm 
              formType="empowerment" 
              title="Claim Your Slot" 
              subtitle="Enter your details to secure your place in this week's empowerment batch."
            />
          </div>
        ) : (
          <div className="bg-slate-900 rounded-3xl p-10 text-center shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-3xl font-black text-white mb-2">Portal Closed</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">This week's empowerment slots have been completely filled. The next portal opens in:</p>
            
            <div className="flex justify-center gap-4 text-white">
               <div className="bg-slate-800 p-4 rounded-xl min-w-[80px]">
                 <span className="text-3xl font-bold text-blue-400 block">{timeLeft.days}</span>
                 <span className="text-xs uppercase tracking-widest text-slate-400">Days</span>
               </div>
               <div className="text-3xl font-bold self-center text-slate-600">:</div>
               <div className="bg-slate-800 p-4 rounded-xl min-w-[80px]">
                 <span className="text-3xl font-bold text-blue-400 block">{timeLeft.hours}</span>
                 <span className="text-xs uppercase tracking-widest text-slate-400">Hours</span>
               </div>
               <div className="text-3xl font-bold self-center text-slate-600">:</div>
               <div className="bg-slate-800 p-4 rounded-xl min-w-[80px]">
                 <span className="text-3xl font-bold text-blue-400 block">{timeLeft.minutes}</span>
                 <span className="text-xs uppercase tracking-widest text-slate-400">Mins</span>
               </div>
            </div>
          </div>
        )}

      </section>
    </main>
  );
}
