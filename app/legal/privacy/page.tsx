'use client';

import { motion } from "framer-motion";
import { Lock, Eye, FileText, Gavel, MapPin, Camera, Bell } from "lucide-react";

const POLICY_SECTIONS = [
  {
    id: "01",
    title: "Data Collection & Telemetry",
    icon: <Eye size={20} />,
    content: "We collect precise GPS location data, biometric facial mapping for identity verification, and device metadata. This is non-negotiable for the operation of the Veil protocol. Location tracking is active during scheduled date windows to enforce geofencing and safety escalations."
  },
  {
    id: "02",
    title: "Verification Metadata",
    icon: <Camera size={20} />,
    content: "The cross-party photographs taken at the commencement of a date are processed via facial recognition AI to match your registered profile. These images are encrypted and stored solely for verification and incident investigation."
  },
  {
    id: "03",
    title: "Geofencing & Movement",
    icon: <MapPin size={20} />,
    content: "To facilitate 'No-Show' payouts and security monitoring, we monitor your proximity to the meeting spot within a 25-meter radius. This data is logged to resolve financial disputes and triggers the emergency call protocol if a session remains unverified."
  },
  {
    id: "04",
    title: "Emergency Escalation Data",
    icon: <Bell size={20} />,
    content: "In the event of an ignored 20-minute safety window, your last known GPS coordinates and profile data will be shared with local law enforcement. By using Veil, you provide irrevocable consent for this data disclosure in high-risk scenarios."
  },
  {
    id: "05",
    title: "Financial Security",
    icon: <Lock size={20} />,
    content: "Payment details are handled through encrypted gateways. Veil does not store full credit card numbers but maintains transaction logs for hourly extensions and security deposit releases."
  }
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="border-b border-white/10 pb-12 mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Privacy <br /><span className="text-white/20">Policy</span>
            </h1>
            <p className="text-neutral-500 max-w-2xl text-xs font-bold uppercase tracking-widest leading-relaxed mt-4">
              Effective Date: January 2026. This document outlines the rigorous data requirements necessary for high-stakes commitment dating. Your privacy is protected by encryption; your safety is enforced by telemetry.
            </p>
          </motion.div>
          
          <div className="absolute top-0 right-0 hidden md:block">
            <FileText size={140} className="text-white/[0.02] -rotate-12" />
          </div>
        </div>

        {/* POLICY SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR NAVIGATION (STYLIZED) */}
          <div className="lg:col-span-4 hidden lg:block space-y-4 sticky top-40 h-fit">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Document Outline</h3>
              {POLICY_SECTIONS.map((section) => (
                <div key={section.id} className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors text-neutral-600">
                  <span className="text-[10px] font-mono">{section.id}</span>
                  <span className="text-xs font-bold uppercase tracking-tight">{section.title}</span>
                </div>
              ))}
            </div>
            <div className="p-4 flex items-center gap-3 text-red-500/50 grayscale hover:grayscale-0 transition-all">
              <Gavel size={14} />
              <span className="text-[8px] font-black uppercase tracking-tighter italic">Legally Binding Documentation</span>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-20">
            {POLICY_SECTIONS.map((section) => (
              <motion.section 
                key={section.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#7B3FE4]/10 border border-[#7B3FE4]/20 flex items-center justify-center text-[#7B3FE4]">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-black uppercase italic tracking-tighter">
                    {section.id}. {section.title}
                  </h2>
                </div>
                <div className="pl-14">
                  <p className="text-neutral-400 font-medium leading-relaxed text-sm lg:text-base border-l border-white/5 pl-8">
                    {section.content}
                  </p>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        {/* DISCLOSURE FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 text-center space-y-8"
        >
          <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter max-w-xl mx-auto">
            By accessing the Veil network, you acknowledge the absolute nature of these protocols.
          </h3>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest max-w-2xl mx-auto leading-loose">
            Failure to adhere to date verification or safety monitoring results in permanent account blacklisting and, where applicable, immediate reporting of your coordinates to law enforcement.
          </p>
        </motion.div>
      </div>
    </main>
  );
}