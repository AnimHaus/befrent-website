'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
// Ensure you have faXTwitter installed in your brands package
import { Heart, ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-neutral-400 overflow-hidden border-t border-white/5">
      {/* BACKGROUND WATERMARK */}
      <div className="absolute -bottom-10 -left-10 text-[18vw] font-black text-white/[0.02] select-none leading-none pointer-events-none italic uppercase">
        BEFRENT
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* BRAND SECTION */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7B3FE4] shadow-[0_0_20px_rgba(123,63,228,0.4)] rotate-3">
                <Heart className="h-6 w-6 text-white fill-white" />
              </div>
              <span className="text-3xl font-black italic uppercase tracking-tighter">Befrent</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-neutral-500 max-w-sm font-medium leading-relaxed">
              A blind dating app where women choose, commitment is guaranteed,
              and <span className="text-white italic">real dates actually happen.</span>
            </motion.p>

            {/* UPDATED SOCIALS: Removed TikTok, Swapped Twitter for X */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <SocialLink icon={faInstagram} href="#" color="#E4405F" />
              <SocialLink icon={faXTwitter} href="#" color="#ffffff" />
            </motion.div>
          </div>

          {/* PAGE LINKS SECTION */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Navigation</h4>
              <ul className="space-y-4">
                <li><FooterLink href="/">Home</FooterLink></li>
                <li><FooterLink href="/how-it-works">How It Works</FooterLink></li>
                <li><FooterLink href="/safety">Safety & Fairness</FooterLink></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Support</h4>
              <ul className="space-y-4">
                <li><FooterLink href="/download">Download</FooterLink></li>
                <li><FooterLink href="/faq">FAQ</FooterLink></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM LEGAL BAR */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-neutral-600">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/payments" className="hover:text-white transition-colors">Payment Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-neutral-600 uppercase">
            © {new Date().getFullYear()} Befrent / All Rights Reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SocialLink({
  icon,
  href,
  color,
}: {
  icon: any;
  href: string;
  color: string;
}) {
  const isTwitter = icon === faXTwitter;

  return (
    <motion.a
      href={href}
      whileHover={{
        scale: 1.1,
        backgroundColor: color,
        borderColor: color,
      }}
      className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center cursor-pointer bg-white/5"
    >
      <motion.div
        whileHover={{ color: isTwitter ? "#000000" : "#ffffff" }}
      >
        <FontAwesomeIcon icon={icon} className="text-md" />
      </motion.div>
    </motion.a>
  );
}

function TrustBadge({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", x: 5 }}
      className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4 transition-all group"
    >
      <div className="h-10 w-10 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner border border-white/5">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-black italic uppercase tracking-tighter text-xs">{title}</h4>
        <p className="text-[10px] text-neutral-500 font-medium">{text}</p>
      </div>
    </motion.div>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-1 hover:text-white transition-colors group text-sm font-bold uppercase italic tracking-tighter">
      {children}
      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#7B3FE4]" />
    </Link>
  );
}