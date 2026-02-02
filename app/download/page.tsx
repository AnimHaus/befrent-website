'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import {
  QrCode,
  Activity,
  Heart,
  Calendar,
  ShieldCheck,
  Lock
} from "lucide-react";

export default function DownloadPage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[#050505] text-white overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B3FE4] rounded-full blur-[180px] opacity-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN: THE HOOK */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-8 bg-[#FF4D9D]" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#FF4D9D] uppercase">Dual-System Sync</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
              Get the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D9D] to-[#7B3FE4]">&nbsp;App&nbsp;</span>
            </h1>
            <p className="max-w-md text-lg text-white/50 italic font-medium leading-tight border-l-2 border-white/10 pl-6">
              A specialized interface for every user. <br />
              Soft elegance for her. Tactical precision for him.
            </p>
          </div>

          {/* STORE BADGES */}
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative block w-40 transition-opacity hover:opacity-80"
            >
              <Image
                src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/apple-store.webp"
                alt="Download on App Store"
                width={300}
                height={100}
                className="w-full h-auto"
              />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative block w-53 transition-opacity hover:opacity-80"
            >
              <Image
                src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/app-store.webp"
                alt="Get it on Google Play"
                width={300}
                height={100}
                className="w-full h-auto"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: THE VISUAL (IPHONE DYNAMIC ISLAND STYLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* SOFT PINK GLOW */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[500px] bg-[#FF4D9D] blur-[120px] opacity-30 rotate-12" />

          <div className="relative w-[280px] h-[580px] bg-[#FDFCFD] rounded-[3.5rem] border-[10px] border-[#1a1a1a] shadow-[0_40px_100px_rgba(255,77,157,0.2)] overflow-hidden ring-2 ring-white/5">

            {/* DYNAMIC ISLAND */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50 flex items-center justify-between px-3">
              <div className="w-8 h-1 bg-white/10 rounded-full" />
            </div>

            {/* LIGHT MODE APP UI */}
            <div className="absolute inset-0 flex flex-col">
              {/* HEADER AREA */}
              <div className="p-6 pt-16 flex justify-between items-center">
                <div className="space-y-0.5">
                  <h2 className="text-xl font-black italic text-black uppercase tracking-tighter leading-none">Veil App</h2>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center border border-neutral-200 shadow-sm">
                  <Lock size={16} className="text-neutral-400" />
                </div>
              </div>

              {/* MAIN PROFILE VIEW */}
              <div className="px-6 flex-1">
                <div className="w-full h-[300px] rounded-[2.5rem] bg-neutral-100 relative overflow-hidden shadow-inner group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* This represents the girl's view of a reserved guy */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Upcoming Date</p>
                    <h4 className="text-3xl font-black italic uppercase tracking-tight leading-none">James, 27</h4>
                  </div>
                </div>

                {/* SCHEDULE HUD */}
                <div className="mt-6 flex justify-between items-center p-4 bg-white border border-neutral-100 rounded-3xl shadow-sm">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold">Time Window</p>
                    <div className="flex items-center gap-2 text-black">
                      <Calendar size={14} className="text-[#FF4D9D]" />
                      <span className="text-xs font-bold">Today, 19:30</span>
                    </div>
                  </div>
                  <div className="h-10 w-10 bg-[#FF4D9D] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF4D9D]/20">
                    <Heart size={18} fill="white" />
                  </div>
                </div>
              </div>

              {/* BOTTOM ACTIONS */}
              <div className="p-6 pb-12">
                <button className="w-full h-16 bg-black text-white rounded-[2rem] font-black uppercase italic text-xs tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3">
                  Verify My Arrival
                </button>
              </div>
            </div>
          </div>

          {/* QR CODE FLOATER */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:left-12 p-5 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden sm:block"
          >
            <QrCode className="h-16 w-16 text-black" />
            <div className="mt-2 text-[7px] font-black text-black text-center uppercase tracking-widest">Connect App</div>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}

function StatItem({ label, value, icon }: any) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">{label}</span>
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-black text-white uppercase italic tracking-tighter">{value}</span>
      </div>
    </div>
  );
}