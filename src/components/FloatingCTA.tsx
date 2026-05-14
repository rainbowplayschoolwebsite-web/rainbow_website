import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const FloatingCTA = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const labelVariants = {
    initial: { opacity: 0, x: 10, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 10, scale: 0.9 }
  };

  const handleInteraction = (label: string | null) => {
    setActiveLabel(label);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      {/* Admissions Open Button */}
      <div className="relative flex items-center justify-end">
        <AnimatePresence>
          {activeLabel === "admissions" && (
            <motion.div
              variants={labelVariants}
              initial="initial"
              animate="visible"
              exit="exit"
              className="absolute right-full mr-4 px-3 py-1 bg-[#1B3A6B] text-white font-bold text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
            >
              Apply for Admission
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href="#admission"
          onMouseEnter={() => handleInteraction("admissions")}
          onMouseLeave={() => handleInteraction(null)}
          onTouchStart={() => handleInteraction("admissions")}
          className="w-14 h-14 rounded-full bg-coral text-coral-foreground flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-transform relative"
          aria-label="Apply for Admission"
        >
          <GraduationCap className="w-7 h-7" />
        </motion.a>
      </div>

      {/* Book a School Visit Button */}
      <div className="relative flex items-center justify-end">
        <AnimatePresence>
          {activeLabel === "visit" && (
            <motion.div
              variants={labelVariants}
              initial="initial"
              animate="visible"
              exit="exit"
              className="absolute right-full mr-4 px-3 py-1 bg-[#1B3A6B] text-white font-bold text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
            >
              Schedule a Visit
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href="#admission"
          onMouseEnter={() => handleInteraction("visit")}
          onMouseLeave={() => handleInteraction(null)}
          onTouchStart={() => handleInteraction("visit")}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-transform relative"
          aria-label="Schedule a Visit"
        >
          <Calendar className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingCTA;
