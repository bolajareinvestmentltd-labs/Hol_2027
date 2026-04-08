export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">
      {/* Navigation Placeholder */}
      <nav className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-slate-900">
          HOL <span className="text-blue-700">2027</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
          <span className="hover:text-blue-700 cursor-pointer transition">About</span>
          <span className="hover:text-blue-700 cursor-pointer transition">Legacy</span>
          <span className="hover:text-blue-700 cursor-pointer transition">Issues</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-24 pb-32 px-6 overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem] mx-2 sm:mx-4 shadow-2xl">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-900/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/30 backdrop-blur-sm text-blue-200 text-sm font-bold tracking-wide">
            THE OFFICIAL CAMPAIGN PLATFORM
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Legacy of Service, <br className="hidden md:block" />
            <span className="text-blue-400">Future for Kwara</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            For decades, Hakeem Lawal has stood for steady leadership and service. Now he brings that experience back to build a stronger, fairer Kwara for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1">
              Join the Movement
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-slate-500 hover:border-white hover:bg-white/5 text-white font-bold py-4 px-8 rounded-full transition-all">
              Explore the Legacy
            </button>
          </div>
        </div>
      </section>

      {/* Image Placeholder Area for the next step */}
      <section className="max-w-5xl mx-auto -mt-16 relative z-20 px-6">
        <div className="w-full h-64 md:h-96 bg-slate-200 rounded-3xl shadow-xl flex items-center justify-center border-4 border-white overflow-hidden">
          <p className="text-slate-500 font-semibold">
            [High-Res Portrait of Hakeem Lawal Goes Here]
          </p>
        </div>
      </section>
    </main>
  );
}