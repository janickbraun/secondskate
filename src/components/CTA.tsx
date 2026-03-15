"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function CTA() {
  const openModal = () => {
    window.dispatchEvent(new Event("open-download-modal"));
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Bereit für den <span className="text-primary italic">Switch?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Lade dir secondskate runter und finde deinen passenden Schuh.
          </p>
          <div className="relative inline-flex mx-auto group">
            {/* Animated shimmer glow */}
            <div className="absolute -inset-1 bg-primary rounded-full blur-[20px] opacity-40 animate-pulse group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
            
            <button
              onClick={openModal}
              className="relative bg-primary text-black font-bold px-8 py-4 text-lg rounded-full flex items-center gap-3 hover:scale-105 transition-all active:scale-95 z-10 ring-2 ring-primary/50"
            >
              <span>Jetzt herunterladen</span>
              <Download size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
