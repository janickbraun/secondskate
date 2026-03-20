"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 md:w-80 aspect-square rounded-full border-4 border-zinc-800 overflow-hidden group">
              <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image src="/janick-clean.jpg" alt="Janick Braun - Gründer von secondskate" fill sizes="(max-width: 768px) 256px, 320px" className="object-cover" /> 
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              Von Skatern für Skater
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hi, ich bin <span className="text-primary">Janick</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Ich skate seit ca. 5 Jahren und habe in dieser Zeit schon echt viele Schuhe zerstört.
              </p>
              <p>
                Immer Geld auszugeben für neue Schuhe, obwohl der hintere Schuh meistens noch total skatebar gewesen wäre, hat mich irgendwann so abgef*ckt, dass ich beschlossen habe, eine Lösung für unsere Community zu entwickeln.
              </p>
              <p className="font-semibold text-white/90">
                So ist secondskate entstanden. Eine Platform, um den Sport nachhaltiger und günstiger für uns alle zu machen.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
