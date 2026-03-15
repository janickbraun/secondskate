"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show the banner if no consent is found
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 sm:pb-6 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto flex justify-center pointer-events-auto">
            <div className="w-full max-w-4xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
              
              <div className="flex bg-primary/20 w-12 h-12 rounded-full items-center justify-center shrink-0">
                <Cookie className="text-primary w-6 h-6" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold mb-2">Wir nutzen Cookies ... manchmal</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:mb-0">
                  Um dir das beste Erlebnis auf secondskate zu bieten, verwenden wir Cookies und ähnliche Technologien. 
                  Weitere Details findest du in unserer{" "}
                  <Link href="/datenschutz" className="text-primary hover:underline font-medium">
                    Datenschutzerklärung
                  </Link>{" "}
                  sowie in unseren{" "}
                  <Link href="/agb" className="text-primary hover:underline font-medium">
                    AGB
                  </Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2.5 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-colors text-sm font-semibold text-zinc-300"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 rounded-xl bg-primary text-black hover:bg-primary-dark hover:scale-105 active:scale-95 transition-all text-sm font-semibold"
                >
                  Alle Akzeptieren
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
