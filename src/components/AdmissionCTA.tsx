import { motion } from "framer-motion";
import { useState } from "react";
import { ScheduleVisitModal } from "./ScheduleVisitModal";
import { AdmissionFormModal } from "./AdmissionFormModal";

const AdmissionCTA = () => {
  const [confetti, setConfetti] = useState<number[]>([]);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  const popConfetti = () => {
    const ids = Array.from({ length: 20 }, (_, i) => Date.now() + i);
    setConfetti(ids);
    setTimeout(() => setConfetti([]), 2000);
  };

  return (
    <section id="admission" className="py-16 md:py-24 relative overflow-hidden">
      {/* Colorful background - Glass focused */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-lg border-y border-white/30" />

      {/* Confetti */}
      {confetti.map((id, i) => (
        <motion.div
          key={id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: "40%",
            backgroundColor: ["hsl(var(--primary))", "hsl(var(--coral))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--lavender))"][i % 5],
          }}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: [0, -80, 200],
            x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 300],
            rotate: [0, 360, 720],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 block">🎉</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Give Your Child the <span className="text-coral">Best Start</span>
          </h2>
          <p className="font-sub text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Admissions are now open for the upcoming academic year. Secure your child's spot today!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="bg-primary text-primary-foreground font-sub font-bold text-lg px-8 py-4 rounded-full shadow-lg text-center hover:scale-105 active:scale-95 transition-all"
            >
              📅 Schedule a Visit
            </button>

            <ScheduleVisitModal 
              isOpen={isVisitModalOpen} 
              onOpenChange={setIsVisitModalOpen} 
            />

            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-coral text-coral-foreground font-sub font-bold text-lg px-8 py-4 rounded-full shadow-lg text-center hover:scale-105 active:scale-95 transition-all"
            >
              🎓 Apply for Admission
            </button>

            <AdmissionFormModal 
              isOpen={isAdmissionModalOpen} 
              onOpenChange={setIsAdmissionModalOpen} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
