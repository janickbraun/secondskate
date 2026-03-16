"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProblemSolution() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Solution Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Warum 2 kaufen, wenn nur <span className="text-primary">einer kaputt</span> ist?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Jeder Skater kennt es: Der vordere Schuh geht viel schneller kaputt als der hintere. secondskate verbindet Goofy- und Regular-Skater, damit ihr eure Schuhe tauschen könnt.
            </p>
            <ul className="space-y-4">
              {[
                "Spare mindestens 50% pro neuem „Paar“",
                "Skate deine Schuhe so lange wie möglich",
                "Weniger Müll, mehr Nachhaltigkeit"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div 
                className="bg-zinc-900 border border-zinc-800 p-2 sm:p-3 md:p-5 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage("/nike-sb-kaputt.jpg")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full aspect-square rounded-xl relative border-2 border-dashed border-red-500/80 overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.15)] group-hover:scale-105 transition-transform duration-300">
                  <Image src="/nike-sb-kaputt.jpg" alt="Kaputter Schuh" fill className="object-cover" />
                </div>
                <div className="text-center relative z-10">
                  <p className="font-semibold text-white">Rechter Schuh</p>
                </div>
              </div>

              <div 
                className="bg-zinc-900 border border-zinc-800 p-2 sm:p-3 md:p-5 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage("/nike-sb-ganz.jpg")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full aspect-square rounded-xl relative border-2 border-solid border-primary/80 shadow-[0_0_15px_rgba(57,255,20,0.2)] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image src="/nike-sb-ganz.jpg" alt="Wie neuer Schuh" fill className="object-cover" />
                </div>
                <div className="text-center relative z-10">
                  <p className="font-semibold text-white">Linker Schuh</p>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-[38%] md:top-[38%] -translate-x-1/2 -translate-y-1/2 bg-zinc-950 w-14 h-14 rounded-full border-2 border-zinc-800 shadow-xl z-20 hidden md:flex items-center justify-center">
              <span className="text-primary font-black italic text-xl pr-1">VS</span>
            </div>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl aspect-square bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
            >
              <Image src={selectedImage} alt="Schuh Detailansicht" fill className="object-cover" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-primary hover:text-black text-white p-3 rounded-full transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
