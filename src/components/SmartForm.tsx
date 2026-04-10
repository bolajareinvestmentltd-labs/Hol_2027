"use client";
import { useState } from "react";

interface SmartFormProps {
  formType: "empowerment" | "volunteer" | "contact";
  title?: string;
  subtitle?: string;
}

export default function SmartForm({ formType, title, subtitle }: SmartFormProps) {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", message: "" }); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
        <p className="text-slate-600">Thank you, {formData.fullName.split(' ')[0] || 'supporter'}. Please check your email inbox for a confirmation message from our team.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-blue-600 font-bold hover:underline">Submit another response</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900">{title || "Join the Movement"}</h3>
        {subtitle && <p className="text-slate-500 mt-2">{subtitle}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-left">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
          <input type="text" required placeholder="e.g., Ola Razak" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
            <input type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
            <input type="tel" required placeholder="08012345678" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Your Message / Suggestion (Optional)</label>
          <textarea rows={3} placeholder="Share your thoughts or ideas..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
        </div>

        {status === "error" && <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again.</p>}

        <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70">
          {status === "loading" ? "Processing..." : "Submit Details"}
        </button>
      </form>
    </div>
  );
}
