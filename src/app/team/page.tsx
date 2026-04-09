"use client";
import Link from "next/link";

export default function TeamPage() {
  const team = [
    { name: "Alhaji Sulyman Olowojare", role: "Chairman, Campaign Advisory Council", bio: "A respected statesman and former Chief of Staff during the administration of late Alh. Mohammed Lawal. He provides invaluable generational wisdom, ensuring the campaign stays rooted in proven, grassroots leadership.", img: "/team-1.jpg" },
    { name: "Ola Razak", role: "Director General, Campaign Operations", bio: "A masterful strategist overseeing the grand vision, ensuring tactical execution and massive mobilization across all 16 Local Government Areas.", img: "/team-2.jpg" },
    { name: "Abdul Mutolib (MeGA~byte)", role: "Personal Assistant to the Candidate", bio: "The operational anchor for Alh. Hakeem Lawal, managing seamless daily scheduling, immediate communications, and tight logistical execution.", img: "/team-3.jpg" },
    { name: "Hon. Duro", role: "Head of Political Mobilization", bio: "A seasoned grassroots leader, translating the Masterplan into street-level support and building critical, community-based political alliances.", img: "/team-4.jpg" },
    { name: "Iya-apado", role: "Director of Women Affairs & Mobilization", bio: "A formidable grassroots champion dedicated to the empowerment of women and driving massive voter registration among female demographics.", img: "/team-5.jpg" },
    { name: "Abdulganeey Idiape", role: "Director of Special Duties", bio: "A deeply trusted confidant and lifelong ally, handling sensitive strategic operations and ensuring absolute cohesion within the inner circle.", img: "/team-6.jpg" },
    { name: "[ Placeholder Name ]", role: "Head of Media & Communications", bio: "Crafting the narrative and ensuring Alh. Hakeem Lawal's message of service resonates across all digital and traditional platforms.", img: "/team-7.jpg" },
    { name: "[ Placeholder Name ]", role: "Youth Mobilization Director", bio: "Energizing the youth base, organizing student unions, and translating youth energy into organized electoral success.", img: "/team-8.jpg" },
    { name: "[ Placeholder Name ]", role: "Head of Finance & Strategy", bio: "Managing the campaign treasury with strict transparency, maximizing the impact of every donation and grassroots contribution.", img: "/team-9.jpg" },
    { name: "[ Placeholder Name ]", role: "Diaspora Coordinator", bio: "Uniting Kwarans globally, channeling international support and intellectual resources back home to drive the Masterplan.", img: "/team-10.jpg" }
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

      <header className="w-full bg-slate-900 py-24 px-4 text-center text-white border-b-4 border-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">The Engine Room</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">Meet the Visionaries</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">A leader is only as strong as the team standing beside him. Meet the dedicated minds driving the Kwara Masterplan.</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition duration-300">
              <div className="aspect-square w-full bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-500 text-sm font-bold">
                [ Photo: {member.name} ]
                {/* <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8 relative bg-white">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                   <span className="font-black text-sm">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <h4 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">{member.role}</h4>
                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
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
