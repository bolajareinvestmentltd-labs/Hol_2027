"use client";
import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hold for 2.5 seconds, then trigger fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 transition-opacity duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl animate-[pulse_2s_ease-in-out_infinite] scale-110 transition-transform duration-1000">
        HOL <span className="text-blue-400">2027</span>
      </h1>
      
      <div className="mt-6 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full overflow-hidden border-2 border-white shadow-lg flex items-center justify-center opacity-0 animate-[fadeIn_1.5s_ease-in_1s_forwards]">
        <img src="/logo.png" alt="APC Logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
