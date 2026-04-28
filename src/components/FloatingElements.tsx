import { motion } from "framer-motion";

const FloatingCloud = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{ x: [0, 15, -10, 0], y: [0, -8, 5, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 200 100" className="w-full h-full" fill="currentColor">
      <ellipse cx="70" cy="60" rx="60" ry="30" opacity="0.9" />
      <ellipse cx="120" cy="50" rx="50" ry="28" opacity="0.9" />
      <ellipse cx="90" cy="45" rx="40" ry="25" opacity="0.95" />
      <ellipse cx="60" cy="50" rx="35" ry="22" opacity="0.9" />
    </svg>
  </motion.div>
);

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <FloatingCloud className="top-[10%] left-[-5%] w-32 md:w-48 text-secondary/20" delay={0} />
      <FloatingCloud className="top-[5%] right-[5%] w-24 md:w-36 text-secondary/15" delay={2} />
      <FloatingCloud className="top-[40%] right-[-3%] w-28 md:w-40 text-lavender/15" delay={4} />

      {/* Stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/30"
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
