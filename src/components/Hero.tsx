"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full mt-16 sm:mt-0">
            {/* Skateboarder Video Animation */}
            <motion.div
              initial={{ x: "-50vw", y: 7 }}
              animate={{ x: "100vw" }}
              transition={{ 
                duration: typeof window !== "undefined" && window.innerWidth > 768 ? 16 : 6,
                ease: "linear",
                delay: 0
              }}
              className="absolute top-0 -translate-y-[100%] md:-translate-y-full w-[100px] h-[100px] pointer-events-none z-50 overflow-hidden"
            >
              <DotLottieReact
                src="https://lottie.host/80f2cd27-68ae-4336-ae47-eea2a0d4adbb/q4aoQlCQin.lottie"
                loop
                autoplay
              />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Zerstörst du auch immer <br className="hidden md:block" />
              <span className="text-primary">nur einen Schuh?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Kaufe und verkaufe einzelne Skateschuhe.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                App Store
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all">
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-primary">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
