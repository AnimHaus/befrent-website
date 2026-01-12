'use client';

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } // Now TS knows "easeOut" is valid
  }
};

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <HeroSection />
      <ProofSection />
      <HowItWorksTeaser />
      <FinalCTA />
    </main>
  );
}

/* ---------------- HERO SECTION ---------------- */

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-64px)] flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF4D9D] rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#7B3FE4] rounded-full blur-[140px] opacity-40" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto text-center space-y-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter italic uppercase"
        >
          Dating,<br />
          Without the<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] to-[#FF4D9D]">
            Bullsh*t.
          </span>
        </motion.h1 >

        <motion.p 
          variants={itemVariants}
          className="text-white/70 text-xl md:text-2xl max-w-lg mx-auto font-light leading-relaxed"
        >
          Women choose. Dates are scheduled instantly. <br className="hidden md:block" />
          Commitment is guaranteed.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            size="lg"
            className="h-16 px-10 text-xl bg-[#FF8A3D] hover:bg-[#ff7a1f] text-white rounded-full font-bold shadow-[0_0_30px_rgba(255,138,61,0.4)] transition-all hover:scale-105"
          >
            Get the App
          </Button>

          <Button
            variant="ghost"
            className="text-white/60 hover:text-white text-lg group"
          >
            See how it works 
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="ml-2 h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- PROOF SECTION ---------------- */

function ProofSection() {
  return (
    <section className="relative bg-[#050505] py-32 px-6 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
              Built for <span className="text-neutral-500">Trust.</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-xs text-sm font-medium leading-relaxed">
            We removed the friction of traditional apps to focus on physical safety and time value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProofCard
            icon={<Zap />}
            title="Instant Dates"
            desc="Skip the weeks of 'Hey' and 'How are you'. Go straight from profile to physical meetup."
            color="#FF4D9D"
            index={0}
          />
          <ProofCard
            icon={<HeartHandshake />}
            title="Paid Commitment"
            desc="The first hour deposit ensures that no-shows are penalized and your time is compensated."
            color="#7B3FE4"
            index={1}
          />
          <ProofCard
            icon={<ShieldCheck />}
            title="Verified Meetups"
            desc="GPS-locked verification protocol. Both parties must check-in for the session to activate."
            color="#3EC5FF"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}

function ProofCard({ icon, title, desc, color, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative p-10 bg-white/[0.01] border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.03]"
    >
      {/* Glowing Corner Effect */}
      <div 
        className="absolute -top-12 -right-12 w-24 h-24 blur-[50px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 space-y-6">
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-none border border-white/10 bg-black transition-transform duration-500 group-hover:-rotate-12"
          style={{ color }}
        >
          {React.cloneElement(icon, { size: 24 })}
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-black uppercase italic tracking-tight text-white flex items-center gap-3">
            {title}
            <div className="h-[1px] w-0 group-hover:w-12 bg-white/20 transition-all duration-500" />
          </h3>
          <p className="text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-300 transition-colors">
            {desc}
          </p>
        </div>
      </div>

      {/* Tactical Accents */}
      <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 rounded-full bg-white" />
        <div className="w-1 h-1 rounded-full bg-white" />
        <div className="w-4 h-1 rounded-full" style={{ backgroundColor: color }} />
      </div>
    </motion.div>
  );
}
/* ---------------- HOW IT WORKS SECTION ---------------- */

function HowItWorksTeaser() {
  return (
    <section className="bg-[#050505] py-32 px-6 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7B3FE4]/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tighter">
              How It Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] to-[#FF4D9D]">Works</span>
            </h2>
          </motion.div>
        </div>

        {/* The Timeline Path */}
        <div className="relative">
          {/* Central Vertical Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            <ProtocolStep 
              side="left"
              number="01" 
              title="Curation" 
              desc="Women browse verified profiles. There is no chat interface—simply click the profiles you'd actually want to meet in person."
              color="#FF4D9D"
              label="Women's Action"
            />
            
            <ProtocolStep 
              side="right"
              number="02" 
              title="Availability" 
              desc="Men set their active windows and hourly rates. Once a woman selects a slot, the system triggers the commitment protocol."
              color="#3EC5FF"
              label="Men's Action"
            />

            <ProtocolStep 
              side="left"
              number="03" 
              title="The Handshake" 
              desc="The woman pays for the first hour upfront. This deposit serves as a guarantee of time and safety for both parties."
              color="#FF8A3D"
              label="Financial Security"
            />

            <ProtocolStep 
              side="right"
              number="04" 
              title="Verification" 
              desc="Both parties meet at the scheduled time. A location-based verification ensures the date happened before funds are released."
              color="#3EC5FF"
              label="System Check"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolStep({ side, number, title, desc, color, label }: any) {
  const isLeft = side === "left";

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      // Keep lg:ml-auto to push the container to the right, 
      // but remove text-right from here.
      className={`relative flex flex-col lg:w-1/2 ${isLeft ? "lg:pr-16 lg:items-start" : "lg:ml-auto lg:pl-16 lg:items-start"}`}
    >
      {/* Node Dot on Timeline */}
      <div 
        className={`hidden lg:block absolute top-8 w-4 h-4 rounded-full border-4 border-[#050505] z-20 transition-colors duration-500`}
        style={{ 
          backgroundColor: color, 
          left: isLeft ? "auto" : "-8px", 
          right: isLeft ? "-8px" : "auto",
          boxShadow: `0 0 15px ${color}`
        }}
      />

      {/* INNER CARD: Forced text-left regardless of side */}
      <div className={`p-8 rounded-none border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-white/20 transition-all duration-500 text-left w-full relative`}>
        
        {/* Label Container: Always justify-start */}
        <div className="flex items-center gap-3 mb-4 justify-start">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{label}</span>
          <span className="h-px w-8 bg-white/10" />
        </div>

        {/* Title: Always left-aligned */}
        <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-4">
          <span className="text-white/20 mr-3">{number}</span>
          {title}
        </h3>
        
        {/* Description: Always left-aligned */}
        <p className="text-neutral-500 font-medium leading-relaxed text-sm md:text-base">
          {desc}
        </p>

        {/* Tactical Corner Brackets: Correctly mirrored but logic stays consistent */}
        <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20`} />
        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20`} />
      </div>
    </motion.div>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="px-6 py-32 bg-gradient-to-tr from-[#FF8A3D] via-[#FF4D9D] to-[#7B3FE4] text-white text-center">
      <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-7xl font-black uppercase italic leading-[0.8] mb-10">
        No Chat.<br />No Games.<br /><span className="opacity-30">Just Dates.</span>
      </motion.h2>
      <Button size="lg" className="h-16 px-12 bg-black text-white rounded-full text-xl font-bold hover:scale-110 transition-transform">
        Download the App
      </Button>
    </section>
  );
}