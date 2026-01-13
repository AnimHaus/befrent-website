'use client';

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Venus,
  Mars,
  ChevronRight,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCalendarDays, faCreditCard, faHeart, faMoneyBillWave, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

// Animation Variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function HowItWorksPage() {
  const [hoveredSide, setHoveredSide] = useState<'women' | 'men' | null>(null);

  const womenClipPath = hoveredSide === 'women' 
    ? 'polygon(0 0, 85% 0, 75% 100%, 0 100%)' 
    : hoveredSide === 'men' 
    ? 'polygon(0 0, 25% 0, 15% 100%, 0 100%)' 
    : 'polygon(0 0, 55% 0, 45% 100%, 0 100%)';

  const menClipPath = hoveredSide === 'women' 
    ? 'polygon(85% 0, 100% 0, 100% 100%, 75% 100%)' 
    : hoveredSide === 'men' 
    ? 'polygon(25% 0, 100% 0, 100% 100%, 15% 100%)' 
    : 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)';

  return (
    <main className="flex flex-col bg-[#0a0a0a] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100svh-64px)] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#7B3FE4] rounded-full blur-[150px] opacity-20" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FF4D9D] rounded-full blur-[150px] opacity-20" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <motion.h1 variants={itemVariants} className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] to-[#FF4D9D] md:text-[140px] font-black leading-[0.8] tracking-[-0.06em] uppercase italic">
              How it <br /> <span className="text-white">Works</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="max-w-xl">
              <p className="text-xl md:text-2xl font-light text-white/60 leading-tight italic border-l-2 border-[#7B3FE4] pl-6">
                We replaced small talk with clear rules. <br /> We replaced guessing with guaranteed dates.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-16 w-64 rounded-full px-10 bg-[#FF4D9D] hover:bg-[#7B3FE4] text-white font-black uppercase italic transition-all group">
                Download App <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SPLIT HOVER SECTION */}
      <section className="relative h-auto lg:h-[90vh] min-h-[700px] bg-black overflow-hidden select-none flex flex-col lg:block">
        
        {/* FOR WOMEN PANEL */}
        <motion.div 
          // Clip path only applies to desktop (lg+)
          style={{ clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 ? womenClipPath : 'none' }}
          animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? { clipPath: womenClipPath } : {}}
          transition={{ type: "spring", stiffness: 150, damping: 25 }} 
          className="relative lg:absolute inset-0 bg-gradient-to-br from-[#FF4D9D] to-[#7B3FE4] z-20 cursor-pointer py-16 lg:py-0" 
          onMouseEnter={() => setHoveredSide('women')} 
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => setHoveredSide(hoveredSide === 'women' ? null : 'women')}
        >
          <div className="h-full flex flex-col justify-center px-8 md:px-24">
            <AnimatePresence mode="wait">
              {/* On Mobile, we show content always, or when selected */}
              {(hoveredSide !== 'men') ? (
                <motion.div key="women-content" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="max-w-md space-y-8">
                  <SectionTitle icon={<Venus />} title="For Women" subtitle="You choose. You decide when." light />
                  <div className="grid gap-4 w-full max-w-md">
                    <InteractiveCard icon={<FontAwesomeIcon icon={faHeart} />} title="Shortlist" description="Browse verified profiles and set dates with the ones you're interested in." color="#FF4D9D" />
                    <InteractiveCard icon={<FontAwesomeIcon icon={faCalendarCheck} />} title="Schedule the Date" description="Pick a time that fits. Keep likes for later or remove them anytime." color="#FF4D9D" />
                    <InteractiveCard icon={<FontAwesomeIcon icon={faCreditCard} />} title="Security Deposit" description="Pay the first hour upfront to ensure commitment and respect." color="#FF8A3D" />
                  </div>
                </motion.div>
              ) : (
                <motion.div key="women-collapsed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-full w-[15%] text-white">
                  <Venus size={64} className="mb-4 opacity-50" />
                  <span className="text-2xl font-black uppercase tracking-widest vertical-text rotate-180" style={{ writingMode: 'vertical-rl' }}>Women</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* FOR MEN PANEL */}
        <motion.div 
          style={{ clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 ? menClipPath : 'none' }}
          animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? { clipPath: menClipPath } : {}}
          transition={{ type: "spring", stiffness: 150, damping: 25 }} 
          className="relative lg:absolute inset-0 bg-gradient-to-br from-[#3EC5FF] to-[#1E40AF] z-10 cursor-pointer py-16 lg:py-0" 
          onMouseEnter={() => setHoveredSide('men')} 
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => setHoveredSide(hoveredSide === 'men' ? null : 'men')}
        >
          <div className="h-full flex flex-col justify-center items-start lg:items-end px-8 md:px-24">
            <AnimatePresence mode="wait">
              {(hoveredSide !== 'women') ? (
                <motion.div key="men-content" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="max-w-md space-y-8 text-left lg:text-right flex flex-col items-start lg:items-end">
                  <SectionTitle icon={<Mars />} title="For Men" subtitle="Your time is valued and compensated." light align="left" className="lg:text-right" />
                  <div className="grid gap-4 w-full max-w-md">
                    <InteractiveCard icon={<FontAwesomeIcon icon={faCalendarDays} />} title="Set Availability" description="Choose your own hours. Your time is your currency." color="#3EC5FF" />
                    <InteractiveCard icon={<FontAwesomeIcon icon={faMoneyBillWave} />} title="Hourly Rate" description="Set your value within platform limits. Get paid to date." color="#3EC5FF" />
                    <InteractiveCard icon={<FontAwesomeIcon icon={faShieldHalved} />} title="Auto-Commit" description="Once scheduled, the date is locked. No ghosting allowed." color="#FF8A3D" />
                  </div>
                </motion.div>
              ) : (
                <motion.div key="men-collapsed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-full w-[15%] text-white">
                  <Mars size={64} className="mb-4 opacity-50" />
                  <span className="text-2xl font-black uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Men</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* VERIFICATION SECTION */}
      <section className="px-6 py-24 bg-[#7B3FE4] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* REMOVED THE CAMERA ICON HERE */}
          <SectionTitle title="Date Verification" subtitle="A real-world confirmation that the date actually happened." light />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TimelinePaperCard step="01" title="Arrive at the Location" text="Both people reach the agreed place and time." delay={0.1} />
            <TimelinePaperCard step="02" title="Mutual Photo Capture" text="Each person takes a photo of the other using the app." delay={0.2} />
            <TimelinePaperCard step="03" title="Time & Location Lock" text="Photos are validated with timestamp and location checks." delay={0.3} />
            <TimelinePaperCard step="04" title="Verification Complete" text="The date is marked verified and continues normally." highlight delay={0.4} />
          </div>
          <p className="text-sm italic text-center opacity-80">Verification exists to protect time and fairness — not to monitor or interfere with the date itself.</p>
        </div>
      </section>

      {/* NO-SHOW RULE */}
      {/* UPDATED: STRANDED & NO-SHOW PROTOCOL */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              What If Someone Is Late or Absent?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LATE ARRIVAL RULE */}
            <motion.div 
              whileHover={{ y: -5 }} 
              className="p-8 bg-neutral-50 border-2 border-black text-left space-y-4"
            >
              <h3 className="text-xl font-black uppercase italic italic border-b-4 border-[#3EC5FF] inline-block">
                The 10-Min Rule
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                The host has a <span className="text-black font-bold">10-minute grace period</span>. 
                After 10:01, a pro-rated deduction begins. Every minute the host is late, 
                the guest is automatically refunded a portion of the hourly rate.
              </p>
            </motion.div>

            {/* STRANDED RULE */}
            <motion.div 
              whileHover={{ y: -5 }} 
              className="p-8 bg-neutral-900 text-white border-b-8 border-[#FF4D9D] text-left space-y-4"
            >
              <h3 className="text-xl font-black uppercase italic text-[#FF4D9D]">
                Stranded @ 60m
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-medium">
                If mutual verification fails after one hour, GPS telemetry decides the payout:
              </p>
              <ul className="text-[11px] font-mono space-y-2 uppercase tracking-tight">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-[#3EC5FF]" /> 
                  Boy Stranded = Full Payout to Boy
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-[#FF4D9D]" /> 
                  Girl Stranded = Full Refund to Girl
                </li>
              </ul>
            </motion.div>
          </div>

          <p className="text-neutral-400 text-xs italic max-w-lg mx-auto">
            Our system monitors GPS pings every 60 seconds to ensure hard-coded justice. 
            No manual disputes, no human error.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 bg-gradient-to-tr from-[#FF8A3D] via-[#FF4D9D] to-[#7B3FE4] text-white text-center">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-5xl sm:text-7xl font-black uppercase italic leading-[0.8] mb-10">
          No Chat.<br />No Games.<br /><span className="opacity-30">Just Dates.</span>
        </motion.h2>
        <Button size="lg" className="h-16 px-12 bg-black text-white rounded-full text-xl font-bold hover:scale-110 transition-transform">
          Download the App
        </Button>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SectionTitle({ icon, title, subtitle, light = false, align = "left" }: any) {
  return (
    <div className={`flex items-center gap-4 ${align === "right" ? "flex-row-reverse text-right" : "text-left"}`}>
      {/* Icon is now optional */}
      {icon && (
        <div className={`h-14 w-14 rounded-full flex items-center justify-center bg-white/20 text-white/70 flex-shrink-0`}>
          {React.cloneElement(icon, { size: 28 })}
        </div>
      )}
      <div>
        <h2 className="text-4xl text-white font-black uppercase italic tracking-tighter leading-none">{title}</h2>
        <p className={`text-sm mt-1 font-medium ${light ? "text-white/70" : "text-neutral-500"}`}>{subtitle}</p>
      </div>
    </div>
  );
}

function TimelinePaperCard({ step, title, text, highlight = false, delay = 0 }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay }} viewport={{ once: true }} className={`relative p-8 bg-white text-neutral-900 rounded-sm shadow-2xl ${highlight ? 'ring-4 ring-[#3EC5FF]' : ''}`} style={{ borderRadius: "2px 24px 2px 2px" }}>
      <div className="absolute top-0 right-0 w-8 h-8 bg-neutral-200" style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }} />
      <span className="text-[#3EC5FF] font-black text-xs tracking-widest uppercase">Step {step}</span>
      <h4 className="text-xl font-bold mt-2 leading-tight">{title}</h4>
      <div className="h-1 w-8 bg-neutral-100 my-4" />
      <p className="text-sm italic text-neutral-500">"{text}"</p>
    </motion.div>
  );
}

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return { ...mousePosition, handleMouseMove };
}

function InteractiveCard({ icon, title, description, color }: any) {
  const { x, y, handleMouseMove } = useMousePosition();
  return (
    <motion.div onMouseMove={handleMouseMove} whileHover={{ y: -4, scale: 1.01 }} className="group relative p-6 overflow-hidden transition-all duration-300 bg-white/[0.03] border border-white/10" style={{ borderRadius: '4px' }}>
      <div className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100" style={{ background: `radial-gradient(400px circle at ${x}px ${y}px, ${color}15, transparent 40%)` }} />
      <div className="absolute top-0 left-0 w-[2px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: color }} />
      <div className="relative z-10 flex gap-5 text-left">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10">
          {React.cloneElement(icon, { size: 20, className: "transition-transform duration-500 group-hover:scale-110", style: { color } })}
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-black italic uppercase tracking-wider text-white">{title}</h3>
          <p className="text-[11px] text-white/40 font-bold uppercase leading-tight tracking-wide">{description}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/40 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-white/40 transition-colors" />
      <div className="absolute bottom-1 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
        <span className="text-[8px] font-mono text-white tracking-[0.2em]">OP_SYS_04</span>
      </div>
    </motion.div>
  );
}