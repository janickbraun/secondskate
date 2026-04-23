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
    <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">So einfach <span className="text-primary">funktioniert&apos;s</span></h2>
          </div>

          <div className="mt-20 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

            <div className="mb-16">
              <RoleGraphic />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <User size={20} />
                  </div>
                  <h4 className="text-2xl font-bold">Aktiv</h4>
                </div>
                <p className="text-muted-foreground mb-6">
                  Du bestellst das Paar Schuhe bei einer Plattform deiner Wahl (z.B. Blue Tomato). 
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3 text-sm">
                    <span className="text-primary">✓</span>
                    <span>Du erhältst den Schuh zuerst</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="text-primary">✓</span>
                    <span>Geringere Versandkosten</span>
                  </li>
                  <li className="flex gap-3 text-sm p-4 bg-zinc-950/50 rounded-xl border border-white/5">
                    <span className="text-primary font-bold">Tipp:</span>
                    <span>Bestellung an Poststation liefern lassen, eigenen Schuh entnehmen und Paket direkt wieder abgeben. Keine neue Verpackung nötig!</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <User size={20} />
                  </div>
                  <h4 className="text-2xl font-bold">Passiv</h4>
                </div>
                <p className="text-muted-foreground mb-6">
                  Du zahlst 50% des Preises vorab in das sichere Treuhandsystem ein.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3 text-sm">
                    <span className="text-primary">✓</span>
                    <span>Maximale Bequemlichkeit: Haustürlieferung</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="text-primary">✓</span>
                    <span>Kein Aufwand mit Bestellung bei Drittshops</span>
                  </li>
                  <li className="flex gap-4 items-center p-4 bg-zinc-950/50 rounded-xl border border-white/5 mt-auto">
                    <div className="text-primary"><Info size={20} /></div>
                    <span className="text-xs">Sicherheit durch Treuhand-Garantie für beide Seiten. Fair und sicher.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

