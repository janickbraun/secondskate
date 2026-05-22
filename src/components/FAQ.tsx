"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-900/30 rounded-2xl overflow-hidden hover:bg-zinc-900/60 transition-colors duration-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="text-lg md:text-xl font-semibold text-zinc-100">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary shrink-0 ml-4"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-zinc-400 text-base leading-relaxed border-t border-zinc-800/40 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FAQS = [
  {
    question: "Was passiert mit meinem Geld, wenn der andere den Schuh nicht abschickt?",
    answer: "Wir nutzen ein sicheres Treuhandkonto (Stripe). Dein Geld geht nicht direkt an den anderen Skater, sondern wird von uns sicher verwahrt. Der andere Skater bekommt seinen Anteil erst ausgezahlt, wenn du in der App bestätigt hast, dass der Schuh sicher bei dir angekommen ist. Schickt er nichts, bekommst du dein Geld zurück."
  },
  {
    question: "Wer bestellt das Paar Schuhe?",
    answer: "Sobald ein Match zustande kommt, stimmen sich beide Nutzer ab: Wer macht Aktiv und wer macht Passiv?. Der aktive bestellt dann das Paar."
  },
  {
    question: "Wie funktioniert der Versand und wer zahlt den Versand?",
    answer: "Wenn du derjenige bist, der den Schuh empfängt (Passiv-User), zahlst du beim Match automatisch die Versandkosten (z.B. 5,49 € für ein versichertes DHL-Paket) mit. Der aktive User kauft mit diesem Geld das Versandlabel in seiner eigenen DHL App, gibt das Paket ab und trägt die Sendungsnummer in secondskate ein."
  },
  {
    question: "Was ist, wenn mir der Schuh am Ende doch nicht passt?",
    answer: "Da secondskate nur ein Vermittler, gibt es kein klassisches Rückgaberecht. Aber dadurch, dass du in den meisten Fällen einfach nur einen kaputten Schuh ersetzen möchtest, kennst du ja deine genaue Größe."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-16 pb-28 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Häufig gestellte <span className="text-primary">Fragen</span>
          </h2>
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
