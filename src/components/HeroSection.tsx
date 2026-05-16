import { motion } from "framer-motion";
import { useState } from "react";
import heroKidsLearning from "@/assets/hero_learning_v7.jpg";
import heroPlayground from "@/assets/hero_playground_v7.jpg";

/* ── rainbow colors for each letter ── */
const rainbowColors = [
  "#FF6B6B", "#FF8E53", "#FFD93D", "#6BCB77",
  "#4D96FF", "#9B59B6", "#FF6B6B", "#FF8E53",
  "#FFD93D", "#6BCB77", "#4D96FF", "#9B59B6",
  "#FF6B6B", "#FF8E53", "#FFD93D", "#6BCB77",
  "#4D96FF", "#9B59B6", "#FF6B6B", "#FF8E53",
];

const RainbowText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="inline-flex flex-wrap">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: 30, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          delay: delay + i * 0.04,
          duration: 0.4,
          type: "spring",
          bounce: 0.5,
        }}
        style={{
          color: char === " " ? "transparent" : rainbowColors[i % rainbowColors.length],
          textShadow: char === " " ? "none" : `
            1px 1px 0 white,
            2px 2px 0 white,
            3px 3px 0 white,
            4px 4px 12px rgba(0,0,0,0.15)
          `,
        }}
        className="font-sub font-extrabold pb-2"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

/* ── twinkle stars ── */
const stars = [
  { x: "10%", y: "20%", size: "text-2xl", dur: 3, delay: 0 },
  { x: "80%", y: "15%", size: "text-xl", dur: 3.5, delay: 0.5 },
  { x: "40%", y: "80%", size: "text-base", dur: 2.8, delay: 1 },
  { x: "90%", y: "70%", size: "text-lg", dur: 4, delay: 0.3 },
  { x: "20%", y: "70%", size: "text-sm", dur: 3.2, delay: 1.5 },
];

/* ── sparkle on click ── */
type Sparkle = { id: number; x: number; y: number };

const HeroSection = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }));
    setSparkles((prev) => [...prev, ...newSparkles]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id)));
    }, 1000);
  };

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden cursor-pointer bg-white/40 backdrop-blur-md border-b border-white/20"
      onClick={handleClick}
    >
      {/* 🖼 Background Image with low opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/¿Qué es la educación socioemocional_.jfif" 
          alt="" 
          className="w-full h-full object-cover opacity-15" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
      </div>

      {/* Background Decor handled by global BackgroundGlow */}

      {/* ⭐ Twinkling stars */}
      {stars.map((s, i) => (
        <motion.div
          key={`star-${i}`}
          className={`absolute ${s.size} pointer-events-none select-none z-0`}
          style={{ left: s.x, top: s.y }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: s.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        >
          ⭐
        </motion.div>
      ))}

      {/* ✨ Click sparkles */}
      {sparkles.map((s) => (
        <motion.div key={s.id} className="absolute z-50 pointer-events-none" style={{ left: s.x, top: s.y }}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: rainbowColors[i % rainbowColors.length],
              }}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: Math.cos((i * Math.PI) / 4) * 60,
                y: Math.sin((i * Math.PI) / 4) * 60,
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          ))}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 text-2xl"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 1.5, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 0.6 }}
          >
            ✨
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-10 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 min-h-screen">

        {/* Left Column: Typography & CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-24 md:mt-14 lg:mt-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-0 mb-16"
          >
            <img
              src="/logo.png"
              alt="Rainbow Play School Logo"
              className="w-36 h-36 md:w-52 md:h-52 object-contain drop-shadow-2xl shrink-0 relative top-2 md:top-4"
            />
            <img
              src="/rainbow logo.png"
              alt="Rainbow Play School"
              className="w-full max-w-[280px] md:max-w-[450px] h-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.p
            className="font-heading text-xl md:text-2xl font-bold mb-8 mt-6 uppercase tracking-wider text-[#1B3A6B] leading-relaxed max-w-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            We scientifically prepare<br /> your child’s brain and senses for learning.
          </motion.p>


        </div>

        {/* Right Column: Visuals & Floating Images */}
        <div className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] flex items-center justify-center">
          {/* Main Image */}
          <motion.div
            className="absolute z-20 w-[70%] md:w-[65%]"
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 0.85, y: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.5 }}
            style={{ top: '10%', right: '0%' }}
          >
            <div className="rounded-2xl overflow-hidden transition-transform duration-500">
              <img
                src={heroPlayground}
                alt="Happy children playing"
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>

          {/* Secondary Floating Image */}
          <motion.div
            className="absolute z-30 w-[82%] md:w-[72%]"
            initial={{ opacity: 0, x: -50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            style={{ bottom: '5%', left: '-10%' }}
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src="/What Makes a Preschool the Best in India_ 5 Standards Every Mumbai Parent Should Know.jfif"
                alt="Preschool children learning and playing"
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
            </div>
          </motion.div>

          {/* Floating Bubble 1 */}
          <motion.div
            className="absolute top-[5%] left-[10%] z-40 bg-white/70 backdrop-blur-md p-4 rounded-full shadow-lg border border-white"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-3xl">🎨</span>
          </motion.div>

          {/* Floating Bubble 2 */}
          <motion.div
            className="absolute bottom-[5%] right-[5%] z-40 bg-white/70 backdrop-blur-md p-4 rounded-full shadow-lg border border-white"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="text-3xl">🔤</span>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
