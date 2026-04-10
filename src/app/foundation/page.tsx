"use client";

export default function FoundationPage() {
  const impactAreas = [
    {
      title: "Educational Scholarships",
      desc: "Providing tuition assistance, books, and essential materials to brilliant but indigent students across Kwara State, ensuring that poverty is never a barrier to learning.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Widows & Orphans Support",
      desc: "Delivering direct relief materials, micro-business start-up funds, and sustained emotional support to the most vulnerable members of our communities.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      color: "text-pink-600 bg-pink-50"
    },
    {
      title: "Medical Outreach",
      desc: "Funding free medical camps, covering emergency surgical bills, and distributing essential medicines to rural areas lacking adequate healthcare facilities.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      color: "text-green-600 bg-green-50"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden pb-20 pt-24">
      {/* 1. Warm Hero Section */}
      <section className="relative w-full py-20 px-6 flex flex-col items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-slate-900 absolute inset-0 -z-10 opacity-90"></div>
          {/* Placeholder for a touching community photo */}
          <img src="/foundation-hero.jpg" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Awliya Foundation Community Work" />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto mt-10">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl p-2">
            <img src="/logo.png" alt="Foundation Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-md">Humanity First</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white mt-4 leading-tight">The Awliya Foundation</h1>
          <p className="text-blue-100 mt-6 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A legacy of giving. Independent of politics, our mission is to uplift the most vulnerable, empower the youth, and heal our communities.
          </p>
        </div>
      </section>

      {/* 2. The Legacy of Giving (Mission Statement) */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-slate-800 relative z-30 -mt-10">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
           <div className="md:w-1/3">
             <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm text-center p-4">
                  [ Portrait of Foundation Patron / Historical Charity Photo ]
                </div>
             </div>
           </div>
           <div className="md:w-2/3">
             <h2 className="text-3xl font-bold text-slate-900 mb-4 border-l-4 border-yellow-500 pl-4">Beyond Politics, It Is About People.</h2>
             <p className="text-lg leading-relaxed text-slate-600 mb-4">
               Long before the political mandates and campaign trails, the Lawal family established a tradition of profound community service. The Awliya Foundation is the institutional continuation of that legacy.
             </p>
             <p className="text-lg leading-relaxed text-slate-600">
               We believe that true leadership is demonstrated by what you do for those who can offer you nothing in return. Through targeted humanitarian interventions, we are building a Kwara where no one is left behind.
             </p>
           </div>
        </div>
      </section>

      {/* 3. Core Impact Areas */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Pillars of Impact</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Focusing our resources where they create the most sustainable, life-changing differences.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${area.color} group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d={area.icon}></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Call to Action (Partnership/Support) */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-slate-100 rounded-3xl p-10 md:p-16 border border-slate-200">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner With Awliya Foundation</h2>
           <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">
             Whether through volunteer time, resources, or community intelligence identifying those in need, your partnership expands our reach.
           </p>
           <a href="/contact" className="inline-block px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-1">
             Contact The Foundation Team
           </a>
        </div>
      </section>
    </main>
  );
}
