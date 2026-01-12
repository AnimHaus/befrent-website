"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import lottie from "lottie-web";

interface ErrorProps {
  code: string;
  title: string;
  message: string;
  animationData: any;
}

export default function ErrorState({ code, title, message, animationData }: ErrorProps) {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize if container exists AND animationData is valid
    if (animationContainer.current && animationData) {
      const instance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      // Cleanup to prevent memory leaks and double-rendering in Strict Mode
      return () => instance.destroy();
    }
  }, [animationData]);

  return (
    <main className="min-h-[90svh] flex flex-col items-center justify-center px-6 text-center bg-[#050505] relative overflow-hidden">
      
      {/* GLITCH OVERLAY BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,138,61,0.05),rgba(123,63,228,0.02),rgba(255,77,157,0.05))] z-0 bg-[length:100%_2px,3px_100%]" />

      <div className="relative z-10 max-w-xl w-full space-y-12">
        
        {/* LOTTIE CONTAINER */}
        <div className="mx-auto w-64 h-64 md:w-80 md:h-80 opacity-80 group">
          <div 
            ref={animationContainer} 
            className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
          />
        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mt-6 text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
              {title}
            </h1>
          </motion.div>
          
          <p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.2em] leading-relaxed max-w-xs mx-auto opacity-60">
            {message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center pt-4">
          <Button 
            asChild
            className="bg-white text-black hover:bg-[#FF8A3D] hover:text-white font-black uppercase italic rounded-none px-10 h-14 transition-all"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <Button 
            variant="ghost"
            onClick={() => window.location.reload()}
            className="text-white/40 hover:text-white font-black uppercase italic rounded-none px-10 h-14 border border-white/5"
          >
            Retry Connection
          </Button>
        </div>
      </div>

      {/* TACTICAL BORDER DECOR */}
      <div className="fixed top-24 left-8 w-12 h-12 border-t border-l border-white/10 pointer-events-none" />
      <div className="fixed bottom-8 right-8 w-12 h-12 border-b border-r border-white/10 pointer-events-none" />
    </main>
  );
}