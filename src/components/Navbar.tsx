"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const openModalListener = () => setIsModalOpen(true);
    window.addEventListener("open-download-modal", openModalListener);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("open-download-modal", openModalListener);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          <Link href="/" className="text-3xl sm:text-2xl font-bold tracking-tighter shrink-0 flex items-center gap-2">
            <Image src="/secondskate-icon.svg" alt="secondskate Icon" width={40} height={40} className="w-10 h-10 sm:w-10 sm:h-10" />
            <span>second<span className="text-primary">skate</span></span>
          </Link>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-black font-semibold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full flex items-center gap-1.5 sm:gap-2 hover:bg-primary-dark hover:scale-105 transition-all active:scale-95 shrink-0 whitespace-nowrap"
          >
            <span>App holen</span>
            <Download className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                aria-label="Schließen"
              >
                <X size={24} />
              </button>

              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Download size={32} />
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Hol dir die App</h2>
              <p className="text-muted-foreground mb-8">
                Lade dir secondskate herunter und finde deinen passenden Schuh. Egal ob Goofy oder Regular.
              </p>

              <div className="flex flex-col sm:flex-row w-full gap-4">
                <button className="flex-1 flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  App Store
                </button>
                <button className="flex-1 flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-xl font-bold hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all">
                  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-primary">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
