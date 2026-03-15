"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function ProblemSolution() {
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
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-32 bg-zinc-800 rounded-xl relative border border-dashed border-red-500/50 flex items-center justify-center">
                  <span className="text-red-500/50 rotate-[-15deg] font-bold">Kaputt</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white">Goofy Front</p>
                  <p className="text-sm text-muted-foreground">Rechter Schuh</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-32 bg-zinc-800 rounded-xl relative border border-solid border-primary/50 shadow-[0_0_15px_rgba(57,255,20,0.1)] flex items-center justify-center">
                  <span className="text-primary rotate-[15deg] font-bold">Wie Neu</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white">Goofy Back</p>
                  <p className="text-sm text-muted-foreground">Linker Schuh</p>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 p-3 rounded-full border border-zinc-800 shadow-xl z-10 hidden md:block">
              <MoveRight className="text-primary w-6 h-6" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
