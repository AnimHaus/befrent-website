"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // Added hooks
import { motion, LayoutGroup, AnimatePresence } from "framer-motion"; 
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Heart, ChevronDown, X } from "lucide-react"; // Added X icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Safety & Fairness", href: "/safety" },
  { name: "FAQ", href: "/faq" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
  { name: "Payment Policy", href: "/legal/payment" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B3FE4] shadow-[0_0_20px_rgba(123,63,228,0.3)]"
          >
            <Heart className="h-6 w-6 text-white fill-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-black italic uppercase tracking-tighter text-white leading-none">
              Veil
            </span>
          </div>
        </Link>

        {/* CENTER NAVIGATION (DESKTOP) */}
        <nav className="hidden lg:flex items-center gap-1">
          <LayoutGroup id="header-nav">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-colors"
                >
                  <span className={isActive ? "text-white" : "text-neutral-500 hover:text-white"}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#7B3FE4] shadow-[0_0_10px_#7B3FE4]"
                    />
                  )}
                </Link>
              );
            })}
          </LayoutGroup>

          <DropdownMenu>
            <DropdownMenuTrigger className="group relative flex items-center gap-1 px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 hover:text-white transition-colors outline-none">
              Legal
              <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="mt-5 w-48 rounded-none border border-white/10 bg-[#0a0a0a] p-1 shadow-2xl backdrop-blur-xl"
            >
              {LEGAL_LINKS.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="flex w-full cursor-pointer items-center px-3 py-3 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:bg-[#7B3FE4] hover:text-white focus:bg-[#7B3FE4] focus:text-white transition-all"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block h-8 w-px bg-white/10 mx-2" />
          
          <Button 
            asChild
            className="hidden sm:flex bg-white text-black hover:bg-neutral-200 font-black uppercase italic tracking-tight rounded-full px-6 transition-transform hover:scale-105 active:scale-95"
          >
            <Link href="/download">Download</Link>
          </Button>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 transition-colors hover:text-[#7B3FE4]"
          >
            {isOpen ? <X size={24} /> : <FontAwesomeIcon icon={faBars} size="lg" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-[#0a0a0a] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-black uppercase tracking-widest italic ${
                    pathname === link.href ? "text-[#7B3FE4]" : "text-white/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-white/5 my-2" />
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Legal Protocol</p>
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase text-white/50 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-[#7B3FE4] text-white rounded-none uppercase italic font-black">
                <Link href="/download text-center">Download App</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B3FE4]/50 to-transparent opacity-50" />
    </header>
  );
}