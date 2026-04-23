"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, User, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type StepId = "buy" | "ship_pair" | "pay_half" | "ship_single" | "escrow_payout";

export default function RoleGraphic() {
  const [hoveredStep, setHoveredStep] = useState<StepId | null>(null);
  const [activeStep, setActiveStep] = useState<StepId | null>(null);

  const currentStep = hoveredStep || activeStep;

  const stepsList: { id: StepId; text: string }[] = [
    { id: "pay_half", text: "1. Passiv zahlt 50%" },
    { id: "buy", text: "2. Aktiv bestellt Paar von Shop" },
    { id: "ship_pair", text: "3. Aktiv erhält das Paar" },
    { id: "ship_single", text: "4. Aktiv schickt den einzelnen Schuh weiter" },
    { id: "escrow_payout", text: "5. Aktiv erhält sein Geld, sobald der Schuh bei Passiv ankam." }
  ];

  const handleInteraction = (id: StepId) => {
    setActiveStep(activeStep === id ? null : id);
  };

  const handlePrev = () => {
    if (!activeStep) {
      setActiveStep(stepsList[stepsList.length - 1].id);
      return;
    }
    const currentIndex = stepsList.findIndex((s) => s.id === activeStep);
    const prevIndex = (currentIndex - 1 + stepsList.length) % stepsList.length;
    setActiveStep(stepsList[prevIndex].id);
  };

  const handleNext = () => {
    if (!activeStep) {
      setActiveStep(stepsList[0].id);
      return;
    }
    const currentIndex = stepsList.findIndex((s) => s.id === activeStep);
    const nextIndex = (currentIndex + 1) % stepsList.length;
    setActiveStep(stepsList[nextIndex].id);
  };

  const nodeInfo = {
    shop: {
      title: "Externer Shop",
      desc: "Hier wird das Paar zum vollen Preis bestellt."
    },
    secondskate: {
      title: "secondskate",
      desc: "Sichere Treuhand-Abwicklung & Koordination des Splits."
    },
    aktiv: {
      title: "Aktiv",
      desc: "Bestellt das Paar, behält einen Schuh & verschickt den Rest."
    },
    passiv: {
      title: "Passiv",
      desc: "Zahlt 50% vorab & erhält seinen Schuh vom Aktiv-Partner."
    }
  };

  const [hoveredNode, setHoveredNode] = useState<keyof typeof nodeInfo | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
      {/* Graphic Side */}
      <div className="w-full md:w-[65%] relative bg-zinc-950/80 rounded-3xl p-6 border border-zinc-800 shadow-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[400px] scale-[0.85] md:scale-100">
          {/* SVG Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker id="arrowhead-zinc" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <path d="M 2 2 L 8 5 L 2 8 Z" fill="#52525b" stroke="#52525b" strokeWidth="1" strokeLinejoin="round" />
              </marker>
              <marker id="arrowhead-primary" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <path d="M 2 2 L 8 5 L 2 8 Z" fill="#39FF14" stroke="#39FF14" strokeWidth="1" strokeLinejoin="round" />
              </marker>
            </defs>

            {/* Group 1: Aktiv -> Shop (buy) */}
            <g
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => setHoveredStep("buy")}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleInteraction("buy")}
            >
              <line x1="220" y1="280" x2="169" y2="145" stroke="transparent" strokeWidth="30" />
              <line
                x1="220" y1="280" x2="169" y2="145"
                stroke={currentStep === "buy" ? "#39FF14" : "#52525b"}
                strokeWidth="3"
                strokeDasharray="6,6"
                strokeLinecap="round"
                markerEnd={currentStep === "buy" ? "url(#arrowhead-primary)" : "url(#arrowhead-zinc)"}
                className="transition-all duration-300"
              />
              <text
                x="200" y="210"
                fill={currentStep === "buy" ? "#39FF14" : "#a1a1aa"}
                className="text-lg font-bold transition-colors duration-300"
              >
                100%
              </text>
            </g>

            {/* Group 2: Shop -> Aktiv (ship_pair) */}
            <g
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => setHoveredStep("ship_pair")}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleInteraction("ship_pair")}
            >
              <line x1="129" y1="145" x2="180" y2="280" stroke="transparent" strokeWidth="30" />
              <line
                x1="129" y1="145" x2="180" y2="280"
                stroke={currentStep === "ship_pair" ? "#39FF14" : "#52525b"}
                strokeWidth="3"
                strokeLinecap="round"
                markerEnd={currentStep === "ship_pair" ? "url(#arrowhead-primary)" : "url(#arrowhead-zinc)"}
                className="transition-all duration-300"
              />
            </g>

            {/* Group 3: Passiv -> Treuhand (pay_half) */}
            <g
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => setHoveredStep("pay_half")}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleInteraction("pay_half")}
            >
              <line x1="480" y1="280" x2="429" y2="145" stroke="transparent" strokeWidth="30" />
              <line
                x1="480" y1="280" x2="429" y2="145"
                stroke={currentStep === "pay_half" ? "#39FF14" : "#52525b"}
                strokeWidth="3"
                strokeDasharray="6,6"
                strokeLinecap="round"
                markerEnd={currentStep === "pay_half" ? "url(#arrowhead-primary)" : "url(#arrowhead-zinc)"}
                className="transition-all duration-300"
              />
              <text
                x="460" y="210"
                fill={currentStep === "pay_half" ? "#39FF14" : "#a1a1aa"}
                className="text-lg font-bold transition-colors duration-300"
              >
                50%
              </text>
            </g>

            {/* Group 4: Treuhand -> Aktiv (escrow_payout) */}
            <g
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => setHoveredStep("escrow_payout")}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleInteraction("escrow_payout")}
            >
              <line x1="395" y1="150" x2="235" y2="292" stroke="transparent" strokeWidth="30" />
              <line
                x1="395" y1="150" x2="235" y2="292"
                stroke={currentStep === "escrow_payout" ? "#39FF14" : "#52525b"}
                strokeWidth="3"
                strokeDasharray="6,6"
                strokeLinecap="round"
                markerEnd={currentStep === "escrow_payout" ? "url(#arrowhead-primary)" : "url(#arrowhead-zinc)"}
                className="transition-all duration-300"
              />
              <text
                x="348" y="210"
                fill={currentStep === "escrow_payout" ? "#39FF14" : "#a1a1aa"}
                className="text-lg font-bold transition-colors duration-300"
              >
                50%
              </text>
            </g>

            {/* Group 5: Aktiv -> Passiv (ship_single) */}
            <g
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => setHoveredStep("ship_single")}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleInteraction("ship_single")}
            >
              <line x1="235" y1="320" x2="465" y2="320" stroke="transparent" strokeWidth="30" />
              <line
                x1="235" y1="320" x2="465" y2="320"
                stroke={currentStep === "ship_single" ? "#39FF14" : "#52525b"}
                strokeWidth="3"
                strokeLinecap="round"
                markerEnd={currentStep === "ship_single" ? "url(#arrowhead-primary)" : "url(#arrowhead-zinc)"}
                className="transition-all duration-300"
              />
            </g>
          </svg>

          {/* Nodes */}
          <div 
            className={`absolute top-[90px] left-[150px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer transition-all ${hoveredNode === "shop" ? "z-50" : "z-30"}`}
            onMouseEnter={() => setHoveredNode("shop")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Store className="text-zinc-200" size={32} />
              </div>
              
              <AnimatePresence>
                {hoveredNode === "shop" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -10 }}
                    className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 w-48 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl pointer-events-none"
                  >
                    <p className="text-xs text-zinc-300 leading-relaxed">{nodeInfo.shop.desc}</p>
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-zinc-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-zinc-400 text-sm mt-2 font-bold group-hover:text-zinc-200 transition-colors">Externer Shop</span>
          </div>

          <div 
            className={`absolute top-[90px] left-[410px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer transition-all ${hoveredNode === "secondskate" ? "z-50" : "z-30"}`}
            onMouseEnter={() => setHoveredNode("secondskate")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 p-3">
                <Image src="/secondskate-icon.svg" alt="secondskate" width={40} height={40} className="object-contain" />
              </div>

              <AnimatePresence>
                {hoveredNode === "secondskate" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 10 }}
                    className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 w-48 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl pointer-events-none"
                  >
                    <p className="text-xs text-zinc-300 leading-relaxed">{nodeInfo.secondskate.desc}</p>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-zinc-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-zinc-400 text-sm mt-2 font-bold group-hover:text-zinc-200 transition-colors">secondskate</span>
          </div>

          <div 
            className={`absolute top-[330px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer transition-all ${hoveredNode === "aktiv" ? "z-50" : "z-30"}`}
            onMouseEnter={() => setHoveredNode("aktiv")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border-2 border-zinc-600 flex items-center justify-center transition-transform group-hover:scale-110">
                <User className="text-zinc-200" size={32} />
              </div>

              <AnimatePresence>
                {hoveredNode === "aktiv" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -10 }}
                    className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 w-48 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl pointer-events-none"
                  >
                    <p className="text-xs text-zinc-300 leading-relaxed">{nodeInfo.aktiv.desc}</p>
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-zinc-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-zinc-400 text-sm mt-2 font-bold group-hover:text-zinc-200 transition-colors">Aktiv</span>
          </div>

          <div 
            className={`absolute top-[330px] left-[500px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer transition-all ${hoveredNode === "passiv" ? "z-50" : "z-30"}`}
            onMouseEnter={() => setHoveredNode("passiv")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border-2 border-zinc-600 flex items-center justify-center transition-transform group-hover:scale-110">
                <User className="text-zinc-200" size={32} />
              </div>

              <AnimatePresence>
                {hoveredNode === "passiv" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 10 }}
                    className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 w-48 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl pointer-events-none"
                  >
                    <p className="text-xs text-zinc-300 leading-relaxed">{nodeInfo.passiv.desc}</p>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-zinc-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-zinc-400 text-sm mt-2 font-bold group-hover:text-zinc-200 transition-colors">Passiv</span>
          </div>

          <div className={`absolute top-[200px] left-[130px] -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none transition-transform duration-300 ${currentStep === 'ship_pair' ? 'scale-125' : ''}`}>
            <Image src="/shoes-icon.png" alt="Schuhpaar" fill className={`object-contain transition-opacity duration-300 ${currentStep === 'ship_pair' ? 'opacity-100' : 'opacity-60 grayscale-[0.5]'}`} />
          </div>

          <div className={`absolute top-[320px] left-[350px] -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none transition-transform duration-300 ${currentStep === 'ship_single' ? 'scale-125' : ''}`}>
            <Image src="/single-shoe-icon.png" alt="Einzelner Schuh" fill className={`object-contain rounded-lg transition-opacity duration-300 ${currentStep === 'ship_single' ? 'opacity-100' : 'opacity-60 grayscale-[0.5]'}`} />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-50">
          <button 
            onClick={handlePrev}
            disabled={!activeStep || activeStep === stepsList[0].id}
            className={`flex items-center gap-2 px-4 py-2 bg-zinc-900 border rounded-lg text-sm transition-colors ${
              !activeStep || activeStep === stepsList[0].id
                ? "border-zinc-800 text-zinc-600 cursor-not-allowed opacity-50"
                : "border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white"
            }`}
          >
            <ChevronLeft size={16} />
            Vorherig
          </button>
          <button 
            onClick={handleNext}
            disabled={activeStep === stepsList[stepsList.length - 1].id}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
              activeStep === stepsList[stepsList.length - 1].id
                ? "bg-zinc-900 border-zinc-800 text-zinc-600 cursor-not-allowed opacity-50"
                : "bg-[#39FF14]/10 border-[#39FF14]/30 hover:border-[#39FF14] hover:bg-[#39FF14]/20 text-[#39FF14]"
            }`}
          >
            {!activeStep ? "Start" : "Nächster"}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Steps Timeline Sidebar */}
      <div className="flex flex-col gap-10 w-full md:w-[35%] relative mt-8 md:mt-0 pl-4 md:pl-0">
        {stepsList.map((step, index) => (
          <button
            key={step.id}
            onClick={() => handleInteraction(step.id)}
            onMouseEnter={() => setHoveredStep(step.id)}
            onMouseLeave={() => setHoveredStep(null)}
            className="flex gap-6 items-start text-left group relative outline-none"
          >
            {/* Timeline Line Segment (connecting to next) */}
            {index !== stepsList.length - 1 && (
              <div className="absolute left-[9px] top-[26px] h-[calc(100%+14px)] w-[2px] bg-zinc-800 hidden md:block" />
            )}

            {/* Timeline Dot */}
            <div className={`mt-1 w-5 h-5 rounded-full border-2 z-10 transition-all duration-300 shrink-0 flex items-center justify-center ${
              currentStep === step.id 
                ? "bg-primary border-primary shadow-[0_0_15px_rgba(57,255,20,0.4)]" 
                : "bg-zinc-950 border-zinc-700 group-hover:border-zinc-500"
            }`}>
              {currentStep === step.id && (
                <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full" />
              )}
            </div>
            
            <div className="flex flex-col -mt-0.5">
              <p className={`text-sm md:text-base font-medium leading-relaxed transition-colors duration-300 ${
                currentStep === step.id ? "text-primary" : "text-zinc-400 group-hover:text-zinc-200"
              }`}>
                {step.text}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
