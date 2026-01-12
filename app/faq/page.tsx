'use client';

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  ShieldAlert, 
  Clock, 
  Wallet, 
  Camera, 
  UserCheck,
  MapPin,
  PhoneCall,
  Siren,
  ArrowRight
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const FAQ_DATA = [
  {
    category: "Operational Mechanics",
    questions: [
      {
        q: "How does the dating process work?",
        a: "Women browse verified profiles and select candidates. You can either schedule a date immediately based on the man's real-time availability or save the profile to a shortlist. Messaging is disabled to ensure all interactions result in face-to-face meetings.",
        icon: <UserCheck size={20} />
      },
      {
        q: "Why is there no messaging feature?",
        a: "Veil is a commitment-first platform. We eliminate the 'chat phase' to prevent ghosting and wasted time. By removing digital fillers, we ensure that every 'Like' is a commitment to a physical date.",
        icon: <ShieldAlert size={20} />
      }
    ]
  },
  {
    category: "Attendance & Geofencing",
    questions: [
      {
        q: "What is the 10-minute arrival buffer?",
        a: "All dates have a 10-minute grace period. If a date is scheduled for 11:00 AM, the 'No-Show' timer begins at 11:10 AM. However, the hourly rate calculation remains fixed from the original 11:00 AM start time.",
        icon: <Clock size={20} />
      },
      {
        q: "How is a 'No-Show' payment verified?",
        a: "A man can only claim the first-hour deposit if his GPS coordinates are within a 25-meter radius of the meeting spot pin at the time of the claim. Failure to be at the designated location voids the payout.",
        icon: <MapPin size={20} />
      }
    ]
  },
  {
    category: "Financial Commitments",
    questions: [
      {
        q: "How does the 'First Hour' security deposit work?",
        a: "To guarantee commitment, the woman pays for the first hour of the man’s rate upfront. If the woman does not arrive within the buffer period, these funds are automatically released to the man as compensation for his time.",
        icon: <Wallet size={20} />
      },
      {
        q: "How do we extend a date in progress?",
        a: "The app will notify both parties 10 minutes before the current hour expires. To continue the date, the woman must authorize payment for the subsequent hour. Extensions can be made indefinitely on an hourly basis.",
        icon: <Plus size={20} />
      }
    ]
  },
  {
    category: "Safety & Emergency Protocols",
    questions: [
      {
        q: "How is the date's occurrence verified?",
        a: "Upon meeting, both parties must take a photograph of the other person via the Veil app. Our system utilizes facial recognition and metadata to confirm identity, location, and time. This is a mandatory security step.",
        icon: <Camera size={20} />
      },
      {
        q: "What is the emergency intervention protocol?",
        a: "If an hour passes without a face-match verification or a closed session, a 20-minute monitoring window begins. Following this, support will call both parties. If three consecutive calls are ignored, we escalate the situation to local law enforcement.",
        icon: <PhoneCall size={20} />
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<string | null>("Operational Mechanics-0");

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-[#7B3FE4]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#7B3FE4]">Official Documentation</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85]">
            Frequently <br /><span className="text-white/20">Asked Questions</span>
          </h1>
          <p className="text-neutral-500 max-w-lg font-bold uppercase text-xs tracking-widest leading-relaxed">
            Review our strict operational guidelines and safety standards. Veil is a zero-tolerance platform built for physical security and financial fairness.
          </p>
        </motion.div>

        {/* FAQ GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {FAQ_DATA.map((section, sIdx) => (
            <div key={sIdx} className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 flex items-center gap-4">
                {section.category} <div className="h-px flex-1 bg-white/5" />
              </h2>
              
              <div className="grid gap-4">
                {section.questions.map((item, qIdx) => {
                  const id = `${section.category}-${qIdx}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <motion.div 
                      key={id}
                      variants={itemVariants}
                      className={`group rounded-2xl border transition-all duration-500 ${
                        isOpen ? 'bg-white/5 border-white/20 shadow-2xl' : 'bg-transparent border-white/5 hover:border-white/10'
                      }`}
                    >
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : id)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <div className="flex items-center gap-6">
                          <span className={`transition-all duration-500 ${isOpen ? 'text-[#7B3FE4] scale-110' : 'text-neutral-700'}`}>
                            {item.icon}
                          </span>
                          <span className="text-lg font-black uppercase italic tracking-tight">{item.q}</span>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-8 pt-0 pl-[76px] text-neutral-400 font-medium leading-relaxed max-w-2xl text-sm">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* POLICE DISPATCH WARNING */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 rounded-[2rem] bg-red-950/20 border border-red-500/20 space-y-6 relative overflow-hidden"
        >
           <Siren className="absolute -right-4 -bottom-4 h-32 w-32 text-red-500/10 rotate-12" />
           <div className="flex items-center gap-4 text-red-500">
             <ShieldAlert size={24} />
             <h3 className="text-xl font-black uppercase italic tracking-tighter">Zero Tolerance Safety</h3>
           </div>
           <p className="text-neutral-400 font-medium text-sm leading-relaxed max-w-xl">
            If you do not respond to our safety calls after 20 minutes of an unverified date end-time, police will be dispatched to your last known GPS coordinates. We do not play with your safety.
           </p>
        </motion.div>

        {/* FOOTER ACTION */}
        <div className="text-center pt-10">
           <button className="group flex items-center gap-4 mx-auto text-sm font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
             Still confused? Talk to support <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>
    </main>
  );
}