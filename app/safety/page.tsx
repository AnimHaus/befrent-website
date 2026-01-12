'use client';

import { motion } from "framer-motion";
import { 
  MapPin, 
  Camera, 
  PhoneCall, 
  Siren, 
  Scale, 
  Clock, 
  Lock 
} from "lucide-react";

const PROTOCOLS = [
  {
    title: "Geofenced Accountability",
    subtitle: "25-Meter Proximity Rule",
    description: "Financial fairness is enforced by GPS telemetry. For a man to claim a 'No-Show' security deposit, the system must verify his presence within a 25-meter radius of the meeting pin. No presence, no payout. Zero exceptions.",
    icon: <MapPin className="text-[#3EC5FF]" size={32} />,
    color: "border-[#3EC5FF]",
    image: "/images/geofence-map.png" 
  },
  {
    title: "Identity Verification",
    subtitle: "Dual-Party Face Match",
    description: "At the start of every date, both parties are required to capture a photo of the other person via the app. Our AI cross-references this with registered biometric data and location metadata to confirm the date is actually happening.",
    icon: <Camera className="text-[#A855F7]" size={32} />,
    color: "border-[#A855F7]",
    image: "/images/face-match.png"
  },
  {
    title: "The 10-Minute Buffer",
    subtitle: "Precision Timing",
    description: "We respect the unpredictability of city life but demand professional discipline. A 10-minute grace period is applied to all arrival times. After 10 minutes, the girl's security deposit is at risk, while the boy's hourly compensation remains protected.",
    icon: <Clock className="text-[#22C55E]" size={32} />,
    color: "border-[#22C55E]",
    image: "/images/timer-graphic.png"
  },
  {
    title: "Market Regulation",
    subtitle: "Hourly Rate Caps",
    description: "Fairness extends to pricing. Men set their own rates, but Veil enforces strict upper and lower limits based on regional data. This prevents predatory pricing and ensures the ecosystem remains accessible and professional.",
    icon: <Scale className="text-[#EAB308]" size={32} />,
    color: "border-[#EAB308]",
    image: "/images/rate-graph.png"
  },
  {
    title: "Support Intervention",
    subtitle: "The 20-Minute Safety Window",
    description: "If a date exceeds its scheduled hour without a face-match verification, our 20-minute safety window triggers. Our agents will attempt three direct calls. This is the final layer of human-verified security.",
    icon: <PhoneCall className="text-[#F97316]" size={32} />,
    color: "border-[#F97316]",
    image: "/images/support-call.png"
  },
  {
    title: "Emergency Escalation",
    subtitle: "Law Enforcement Protocol",
    description: "Safety is our absolute priority. If three contact attempts are ignored during a safety window, local law enforcement is automatically dispatched to the last known GPS coordinates. We treat every unverified silence as a high-risk event.",
    icon: <Siren className="text-red-500" size={32} />,
    color: "border-red-500",
    image: "/images/police-dispatch.png"
  }
];

export default function SafetyFairnessPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-6 mb-28">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8]">
            Safety <br /> & <span className="text-white/20">Fairness</span>
          </h1>
          <p className="text-neutral-500 max-w-2xl mx-auto font-bold uppercase text-[10px] tracking-[0.2em] leading-loose">
            Veil is a zero-trust platform. We replace empty promises with hard-coded protocols. 
            Review the operational standards that protect your time and your life.
          </p>
        </div>

        {/* INTERACTIVE PROTOCOL GRID */}
        <div className="grid grid-cols-1 gap-y-32">
          {PROTOCOLS.map((protocol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative 
                          ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:grid-flow-col-dense'}`}
            >
              {/* CONTENT (TEXT) */}
              <div 
                className={`order-2 lg:order-none space-y-6 p-6 md:p-8 rounded-3xl z-10 
                            ${index % 2 === 0 ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}
              >
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-black flex items-center justify-center border border-white/5 shadow-inner">
                    {protocol.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-tight">{protocol.title}</h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mt-1">{protocol.subtitle}</p>
                  </div>
                </div>
                <p className="text-neutral-400 font-medium text-sm leading-relaxed">
                  {protocol.description}
                </p>
              </div>

              {/* ACTUAL IMAGE ASSET */}
              <div className={`order-1 lg:order-none relative overflow-hidden rounded-2xl border border-white/5 group
                          ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                
                <img 
                  src={protocol.image} 
                  alt={protocol.title} 
                  className="w-full h-[350px] lg:h-[500px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Tactical Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                <div className={`absolute inset-0 border-2 rounded-2xl opacity-20 transition-opacity group-hover:opacity-40 ${protocol.color ? protocol.color : 'border-[#7B3FE4]'}`} />
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM PHILOSOPHY CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-40 p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 text-center relative overflow-hidden"
        >
          <Lock className="absolute -left-10 -bottom-10 h-64 w-64 text-white/[0.02] -rotate-12" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter">The Veil Philosophy</h3>
            <p className="text-neutral-500 max-w-3xl mx-auto font-medium text-sm leading-loose">
              Apps that ignore the physical reality of dating fail their users. Veil operates on the principle that true safety comes from structure, and true fairness comes from financial accountability. We don't just facilitate meetings; we enforce commitments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Badge label="End-to-End Encryption" />
                <Badge label="24/7 Security Dispatch" />
                <Badge label="Automated Payouts" />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-neutral-400">
      {label}
    </div>
  );
}