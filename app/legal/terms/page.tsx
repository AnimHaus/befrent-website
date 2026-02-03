'use client';

import { motion } from "framer-motion";
import {
  ArrowRight,
  Info,
  CheckCircle2
} from "lucide-react";

const TERM_SECTIONS = [
  {
    id: "01",
    title: "How Payouts Work",
    content: "When you schedule a date, we handle the financial commitment upfront. The first-hour deposit is held safely in our system. If the date goes as planned, it's released. If there's a no-show after the 10-minute grace period, the funds are sent to the person who showed up. It’s about respecting everyone's time."
  },
  {
    id: "02",
    title: "Being at the Right Spot",
    content: "To keep things fair, our 'No-Show' protection only works if you're actually at the meeting point. Our system checks that you're within 25 meters of the pin. If you're not there when you say you are, we can't process the payout. Just make sure your GPS is on and accurate."
  },
  {
    id: "03",
    title: "The 10-Minute Grace Period",
    content: "We get it—traffic and life happen. That’s why there's a 10-minute buffer before any 'No-Show' status is triggered. Just keep in mind that the hour is still counted from your original start time, so try to be as punctual as possible to get the most out of your date."
  },
  {
    id: "04",
    title: "Extending Your Time",
    content: "If you're vibing and want to keep the date going, you can extend by another hour. We'll send a heads-up 10 minutes before the hour ends. Extensions are made in 60-minute blocks, and once confirmed, they keep the safety protocols active for that extra time."
  },
  {
    id: "05",
    title: "Our Safety Check-Ins",
    content: "If a date ends and we haven't seen a face-match photo to confirm everything is okay, we start a 20-minute safety window. We'll try to call you three times. If we can't get a hold of you, we reach out to local authorities. It’s a safety net we hope we never have to use, but it’s there for your protection."
  },
  {
    id: "06",
    title: "Keeping the Community Safe",
    content: "Befrent is built on trust and action. Any form of harassment, faking your identity, or trying to bypass our safety checks results in a permanent ban. We’re here to create a secure space for real connections, and we take that responsibility seriously."
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* HEADER SECTION */}
        <div className="space-y-8 mb-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Terms of <br /><span className="text-white/20">Service</span>
            </h1>
            <p className="text-neutral-500 max-w-2xl text-sm font-medium leading-relaxed">
              Straightforward rules. No hidden fine print. This is how we protect your time, your money, and your safety.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* STICKY SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6">
              <div className="flex items-center gap-3 text-[#7B3FE4]">
                <Info size={18} />
                <h3 className="text-xs font-black uppercase tracking-widest">Quick Summary</h3>
              </div>
              <ul className="space-y-4">
                {["No Chat, Just Dates", "10-Minute Buffer", "Safety-First Calls", "25M Location Check"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neutral-400 italic">
                    <CheckCircle2 size={14} className="text-[#7B3FE4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-8 space-y-24">

            {/* CONTENT SECTIONS */}
            <div className="space-y-20">
              {TERM_SECTIONS.map((section) => (
                <motion.section
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black text-[#7B3FE4] bg-[#7B3FE4]/10 px-3 py-1 rounded-md">{section.id}</span>
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter group-hover:text-[#7B3FE4] transition-colors">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-neutral-400 font-medium leading-relaxed text-sm md:text-base pl-12 border-l border-white/5 ml-4">
                    {section.content}
                  </p>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#7B3FE4]/10 to-transparent border border-[#7B3FE4]/20 space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">Ready for actual accountability?</h3>
              <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                By joining Befrent, you agree to these ground rules. No ghosting. No wasted time. Just real dates.
              </p>
            </div>

            <button className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase italic tracking-tighter rounded-2xl hover:bg-[#7B3FE4] hover:text-white transition-all duration-300 shadow-2xl shadow-[#7B3FE4]/20">
              Enter the Network
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}