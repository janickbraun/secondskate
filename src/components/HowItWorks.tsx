"use client";

import { motion, Variants } from "framer-motion";
import { Search, User, ShieldCheck, Package, ArrowRightLeft, Info } from "lucide-react";
import Image from "next/image";
import RoleGraphic from "./RoleGraphic";

const steps = [
  {
    icon: <User className="w-8 h-8 text-primary" />,
    title: "1. Match finden",
    description: "Wähle Schuh & Größe. Wir finden jemanden, der genau die andere Seite des Paares sucht."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "2. Rollen & Treuhand",
    description: "Einer ist Aktiv, einer Passiv. Der Passive zahlt bequem 50% in den Treuhand-Pool."
  },
  {
    icon: <ArrowRightLeft className="w-8 h-8 text-primary" />,
    title: "3. Split & Skate",
    description: "Der Aktive bestellt das Paar, behält seinen Schuh und schickt den Rest direkt weiter."
  }
];

export default function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="pt-12 pb-6 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">So einfach <span className="text-primary">funktioniert&apos;s</span></h2>
          </div>

          <div className="mt-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

            <div className="mb-8">
              <RoleGraphic />
            </div>
            
            <div className="mt-16 bg-zinc-900/10 border border-zinc-800/50 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
              <div className="grid grid-cols-2">
                {/* Aktiv Side */}
                <div className="p-6 sm:p-14 border-r border-zinc-800/50 flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <User size={18} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-xl sm:text-4xl font-bold tracking-tight">Aktiv</h4>
                  </div>
                  
                  <p className="text-sm sm:text-lg text-zinc-400 mb-10 leading-relaxed max-w-md">
                    Du bestellst das Paar, behältst deinen Schuh und schickst den Rest direkt weiter.
                  </p>

                  <ul className="space-y-4 sm:space-y-6">
                    {[
                      "Schuh zuerst erhalten",
                      "Niedrige Versandkosten",
                      "Keine neue Verpackung"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base text-zinc-300">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <p className="text-[10px] sm:text-sm text-zinc-500 italic">
                      <span className="text-primary font-bold not-italic mr-1">Tipp:</span>
                      An Poststation liefern & direkt wieder abgeben.
                    </p>
                  </div>
                </div>

                {/* Passiv Side */}
                <div className="p-6 sm:p-14 flex flex-col bg-zinc-900/5">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400">
                      <User size={18} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-xl sm:text-4xl font-bold tracking-tight">Passiv</h4>
                  </div>

                  <p className="text-sm sm:text-lg text-zinc-400 mb-10 leading-relaxed max-w-md">
                    Du zahlst deinen Schuh vorab und erhältst ihn bequem per Haustürlieferung.
                  </p>

                  <ul className="space-y-4 sm:space-y-6">
                    {[
                      "Maximaler Komfort",
                      "Treuhand-Sicherheit",
                      "Kein Shop-Aufwand"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base text-zinc-300">
                        <span className="text-zinc-500 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <p className="text-[10px] sm:text-sm text-zinc-500 italic">
                      <span className="text-zinc-300 font-bold not-italic mr-1">Sicherheit:</span>
                      Auszahlung erst bei Erhalt des Schuhs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

