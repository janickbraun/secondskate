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
    <div className="border border-zinc-800 bg-zinc-900/50 rounded-2xl overflow-hidden hover:bg-zinc-900/80 transition-colors">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="text-lg md:text-xl font-semibold">{question}</span>
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
            <div className="p-6 pt-0 text-muted-foreground text-base leading-relaxed border-t border-zinc-800/50 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie funktioniert die App?",
      answer: "Du lädst deinen noch intakten Schuh hoch und wählst deine Größe sowie Seite (Links/Rechts). Sobald jemand genau diesen Schuh braucht, könnt ihr euch vernetzen. Durch Filter für Goofy und Regular findest du schnell dein Match."
    },
    {
      question: "Kostet die App etwas?",
      answer: "Die App ist komplett kostenlos nutzbar. Auch das Einstellen deiner Schuhe kostet dich keinen Cent. Bei einem erfolgreichen Verkauf über unser System behalten wir lediglich eine minimale Pauschale ein, um die Serverkosten decken zu können."
    },
    {
      question: "Ist der Versand sicher?",
      answer: "Ja, der Versand ist direkt in ein sicheres Treuhand-System integriert. Sobald der Käufer den Artikel inklusive Versandkosten bezahlt, wird das Geld zunächst sicher über einen Zahlungsdienstleister einbehalten. Der Verkäufer erhält daraufhin automatisch einen QR-Code für DHL, Hermes, GLS oder DPD direkt in der App, mit dem er das Paket bequem verschickt. Erst wenn der Käufer den Erhalt des Schuhs bestätigt, wird der Kaufbetrag endgültig an den Verkäufer ausgeschüttet."
    },
    {
      question: "Was wenn der Schuh nicht ankommt?",
      answer: "Sollte der Schuh nicht bei dir ankommen, kannst du dich jederzeit über die App an den Support wenden. Der Fall wird dann geprüft und gemeinsam mit dir geklärt. Auf Secondskate gilt Käuferschutz, sodass du auf der sicheren Seite bist."
    },
    {
      question: "Wie wird die Qualität der Schuhe gesichert?",
      answer: "Jeder Verkäufer muss detaillierte Bilder aus mehreren Perspektiven hochladen und den Zustand angeben. Außerdem setzen wir auf ein Community-Bewertungssystem, damit Betrüger schnell aussortiert werden."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
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

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
