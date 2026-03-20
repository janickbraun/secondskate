"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col">
      <Navbar />

      {/* Main content */}
      <div className="flex-grow flex items-start justify-center overflow-hidden relative px-6 pt-35 pb-24 sm:pt-32 sm:pb-32 min-h-screen">

        {/* Animated background glow */}
        <motion.div
          animate={{
            x: mousePos.x * 2,
            y: mousePos.y * 2,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(57,255,20,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Secondary glow */}
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(57,255,20,0.05) 0%, transparent 70%)" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto w-full">

          {/* 404 Number – static, no movement, no glitch */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[100px] sm:text-[150px] font-black leading-none select-none mb-6 sm:mb-4 text-primary"
          >
            404
          </motion.p>

          {/* Shoe emoji + headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-5 leading-snug px-2">
              Diese Seite ist kaputt, <br />
              so wie <span className="text-primary">dein Schuh</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg mb-12 max-w-sm sm:max-w-md mx-auto px-2 leading-relaxed">
              Die Seite, die du suchst, existiert nicht (mehr). Aber keine Sorge,auf der Startseite findest du deinen nächsten Skateschuh.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base sm:text-lg text-black transition-all w-full sm:w-auto justify-center"
                style={{
                  background: "#39FF14",
                  boxShadow: "0 0 30px rgba(57,255,20,0.4), 0 0 60px rgba(57,255,20,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(57,255,20,0.6), 0 0 80px rgba(57,255,20,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(57,255,20,0.4), 0 0 60px rgba(57,255,20,0.1)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Zurück zur Startseite
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
