"use client";

export default function RoadmapPage() {
  const pillars = [
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "1. Education & Tech-Empowerment",
      desc: "Revitalizing state-owned public schools with modern curricula. Establishing coding hubs and vocational centers across all 16 LGAs to ensure Kwara youth are globally competitive.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "2. Primary & Maternal Healthcare",
      desc: "Upgrading primary healthcare centers and state hospitals. We will subsidize maternal care and ensure that basic medical accessibility is not a luxury, but a guaranteed right for every Kwaran.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "3. Agricultural Transformation",
      desc: "Capitalizing on Kwara's vast arable land. We will provide state-backed mechanization, high-yield seedlings, and direct market access for local farmers to ensure statewide food security.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      title: "4. Infrastructure & Rural Connectivity",
      desc: "Aggressive development of state and feeder roads to connect rural agricultural hubs to urban markets. Expanding state-managed water projects and rural electrification.",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "5. Economic Growth & MSMEs",
      desc: "Creating a business-friendly Kwara through strategic tax reliefs and ease-of-doing-business reforms. Deploying state-backed micro-grants to stimulate local trade and commerce.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "6. Security & Federal Synergy",
      desc: "Bolstering state-level vigilante and community policing frameworks. Furthermore, we will establish top-level collaboration with Federal military and police commands to secure our borders and highways.",
      color: "bg-slate-100 text-slate-800"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden pb-20 pt-32">
      <section className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
           <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">The Masterplan</span>
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">A Pragmatic Vision for Kwara</h1>
           <p className="text-lg text-slate-600 leading-relaxed">
             Effective leadership requires an understanding of jurisdictional power. This roadmap outlines the six core areas where a State Governor has the constitutional authority to act immediately, alongside our strategy for top-level Federal collaboration.
           </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d={pillar.icon}></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center bg-slate-900 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Believe in the Vision?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">We cannot achieve this alone. Join the movement today and help us build a state that works for everyone.</p>
          <a href="/volunteer" className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-1 relative z-10">
            Become an Ambassador
          </a>
        </div>

      </section>
    </main>
  );
}
