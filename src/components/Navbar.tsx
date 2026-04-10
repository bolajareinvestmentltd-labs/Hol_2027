"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Foundation", path: "/foundation" },
    { name: "Legacy", path: "/legacy" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full absolute top-0 z-50 px-6 py-5 flex justify-between items-center">
       {/* Logo & Brand */}
       <Link href="/" className="flex items-center gap-3 z-50">
          <img src="/logo.png" alt="APC Logo" className="w-10 h-10 object-contain drop-shadow-lg" />
          <div className="text-2xl font-black tracking-tighter text-white drop-shadow-md">HOL <span className="text-yellow-400">2027</span></div>
       </Link>

       {/* Desktop Nav */}
       <div className="hidden md:flex gap-8 items-center bg-slate-900/40 px-8 py-3 rounded-full backdrop-blur-md border border-white/10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="text-sm font-bold text-slate-200 hover:text-yellow-400 transition">
              {link.name}
            </Link>
          ))}
       </div>

       {/* Mobile Hamburger Toggle */}
       <button className="md:hidden z-50 text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
             ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
             )}
          </svg>
       </button>

       {/* Mobile Dropdown Menu */}
       <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="text-3xl font-black text-white hover:text-yellow-400 transition">
              {link.name}
            </Link>
          ))}
       </div>
    </nav>
  );
}
