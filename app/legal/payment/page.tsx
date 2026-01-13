'use client';

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShieldAlert,
  CircleDollarSign,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faClock, faBolt } from "@fortawesome/free-solid-svg-icons";

const fadeInUp: Variants = {
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function PaymentPolicy() {
  return (
    <main className="flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden min-h-screen">
      {/* HUD HEADER */}
      <section className="relative pt-24 pb-12 px-6 border-b border-white/10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-fixed">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 bg-[#FF8A3D] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#FF8A3D] uppercase">Financial Protocol</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-8">
              Payment <br /> <span className="text-[#FF4D9D]">Policy</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-2xl text-xl text-white/50 font-light leading-tight italic border-l-2 border-[#7B3FE4] pl-6">
              Our economy is built on mutual respect for time. <br />
              Clear rules. Automatic enforcement. Zero disputes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CORE RULES GRID */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-1">
          <PolicyCard 
            icon={<FontAwesomeIcon icon={faLock} />} 
            title="The Escrow Lock" 
            content="When a date is scheduled, the first hour payment is locked immediately. This ensures the host's time is reserved and the guest is committed."
            color="#7B3FE4"
          />
          <PolicyCard 
            icon={<FontAwesomeIcon icon={faClock} />} 
            title="No-Show Penalty" 
            content="If a guest fails to arrive within 60 minutes of the scheduled time, the locked funds are automatically transferred to the host."
            color="#FF4D9D"
          />
          <PolicyCard 
            icon={<FontAwesomeIcon icon={faBolt} />} 
            title="Instant Payouts" 
            content="Once verification is complete, host funds are released to the internal wallet. Withdrawals are processed within 24 hours."
            color="#3EC5FF"
          />
        </div>
      </section>

      {/* THE 1-HOUR RULE DETAIL */}
      <section className="px-6 py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">The 1-Hour Protocol</h2>
            <p className="font-mono text-sm tracking-widest text-neutral-400 uppercase">Strategic Enforcement Mechanism</p>
          </div>
      
          <div className="grid gap-6">
            {/* Step 1: Booking */}
            <div className="p-8 border-2 border-black flex gap-6 items-start hover:bg-neutral-50 transition-colors">
              <span className="text-4xl font-black opacity-20">01</span>
              <div>
                <h4 className="text-xl font-bold uppercase">Booking Requirement</h4>
                <p className="text-neutral-600 italic">Guests must have a valid payment method on file. The base hourly rate is authorized at the moment of the request.</p>
              </div>
            </div>
      
            {/* Step 2: NEW LATE ARRIVAL LOGIC */}
            <div className="p-8 border-2 border-black flex flex-col gap-6 bg-black text-white relative overflow-hidden">
              <div className="flex gap-6 items-start">
                <span className="text-4xl font-black text-[#FF8A3D]">02</span>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold uppercase">The Arrival Window & Penalties</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-white/20 p-4 rounded-sm">
                      <p className="text-[#3EC5FF] font-mono text-xs mb-1 uppercase tracking-tighter">0 to 10 mins</p>
                      <p className="text-sm font-bold uppercase italic">Grace Period</p>
                      <p className="text-xs text-white/50">Zero penalty. We account for minor traffic or navigation delays.</p>
                    </div>
                    <div className="border border-[#FF4D9D] p-4 rounded-sm">
                      <p className="text-[#FF4D9D] font-mono text-xs mb-1 uppercase tracking-tighter">10 mins to 60 mins</p>
                      <p className="text-sm font-bold uppercase italic">Deduction Phase</p>
                      <p className="text-xs text-white/50">Pro-rated deduction starts at the 10-minute mark. Security deposit is automatically triggered for refund/payout to either the host (female) or guest (male).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Step 3: Resolution */}
            <div className="p-8 border-2 border-black flex gap-6 items-start hover:bg-neutral-50 transition-colors text-black">
              <span className="text-4xl font-black opacity-20">03</span>
              <div>
                <h4 className="text-xl font-bold uppercase">Automated Resolution</h4>
                <p className="text-neutral-600 italic">Because we use GPS and mutual photo-verification, the system calculates late fees to the millisecond. No manual disputes required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEES TABLE */}
      <section className="px-6 py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <CircleDollarSign size={40} className="text-[#3EC5FF]" />
            <h2 className="text-4xl font-black uppercase italic">Fee Structure</h2>
          </div>
          
          <div className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <th className="p-6 border-b border-white/10">Service</th>
                  <th className="p-6 border-b border-white/10">Rate</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/60">Platform Service Fee</td>
                  <td className="p-6 text-[#3EC5FF]">15% per transaction</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/60">Cancellation (24h+ notice)</td>
                  <td className="p-6">Free</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/60">Cancellation (Under 24h)</td>
                  <td className="p-6 text-[#FF4D9D]">50% of 1st Hour</td>
                </tr>
                <tr>
                  <td className="p-6 text-white/60">No-Show Penalty</td>
                  <td className="p-6 text-[#FF4D9D]">100% of 1st Hour</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECURITY FOOTER */}
      <section className="px-6 py-20 bg-[#7B3FE4] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <ShieldAlert size={60} />
            <div>
              <h3 className="text-3xl font-black uppercase italic italic tracking-tighter">Secure Transactions</h3>
              <p className="text-white/80 font-medium">PCI-DSS Compliant. Encrypted. Anonymous.</p>
            </div>
          </div>
          <Button size="lg" className="bg-black text-white hover:bg-white hover:text-black transition-all font-black uppercase italic px-12 h-16 rounded-none">
            Contact Billing Support
          </Button>
        </div>
      </section>
    </main>
  );
}

function PolicyCard({ icon, title, content, color }: any) {
  return (
    <div className="group relative p-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
      {/* HUD Corner Decor */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-white transition-colors" />
      
      <div className="relative z-10 space-y-6">
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-sm" 
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {React.cloneElement(icon, { size: 24 })}
        </div>
        <h3 className="text-2xl font-black uppercase italic tracking-tighter">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed font-medium">
          {content}
        </p>
      </div>

      {/* Background Accent */}
      <div 
        className="absolute -bottom-12 -right-12 w-32 h-32 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}