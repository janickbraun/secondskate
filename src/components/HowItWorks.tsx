"use client";

import { motion, Variants } from "framer-motion";
import { Search, User } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: <User className="w-8 h-8 text-primary" />,
    title: "1. Daten angeben",
    description: "Bist du Goofy oder Regular? Was ist eine Schuhgröße? Und welches Modell suchst du?"
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "2. Schuh finden",
    description: "Wir matchen dich mit  anderen Skatern, die den perfekten Schuh für dich haben."
  },
  {
    icon: (
      <div className="w-8 h-8 relative">
        <Image 
          src="/skateboarding.svg" 
          alt="Skateboarding-Icon" 
          fill
          className="object-contain inverted-primary-color"
          style={{ 
            filter: "invert(63%) sepia(100%) saturate(1000%) hue-rotate(65deg) brightness(110%) contrast(120%)" 
          }}
        />
      </div>
    ),
    title: "3. Skaten und sparen",
    description: "Zahle nur für den Schuh, den du wirklich brauchst."
  }
];

export default function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">So einfach <span className="text-primary">funktioniert's</span></h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center relative z-10 hover:border-primary/30 transition-colors group"
            >
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
