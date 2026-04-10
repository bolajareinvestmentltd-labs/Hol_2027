"use client";
import SmartForm from "@/components/SmartForm";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden pb-20 pt-32">
      <section className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Take Action</span>
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Become a Grassroots Ambassador</h1>
           <p className="text-lg text-slate-600">The HOL 2027 Masterplan cannot be achieved by one person alone. We need dedicated Kwarans across every ward, local government, and digital space to carry the message forward.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
           
           {/* Left Side: Information */}
           <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex shrink-0 items-center justify-center font-bold text-xl">1</div>
                 <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ward Mobilizer</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Engage directly with your community. Help us organize town halls, distribute campaign materials, and secure the vote block by block.</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                 <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex shrink-0 items-center justify-center font-bold text-xl">2</div>
                 <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Ambassador</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Control the narrative online. Amplify our policies on Facebook, X, and Instagram to combat misinformation and spread the vision.</p>
                 </div>
              </div>
           </div>

           {/* Right Side: The Smart Form */}
           <div>
              <SmartForm 
                formType="volunteer" 
                title="Join the Team" 
                subtitle="Sign up below. Your Local Government Coordinator will contact you directly."
              />
           </div>

        </div>
      </section>
    </main>
  );
}
