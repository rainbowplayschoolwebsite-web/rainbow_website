import { motion } from "framer-motion";

/**
 * Compact, perfect radial layout.
 * Radius = 230px to ensure the entire graphic easily fits within any standard laptop screen
 * without any chance of clipping or overflow.
 * Container height shrunk to 680px for a perfectly tight, encapsulated section.
 */
const senseItems = [
  {
    color: "#7B2D8E", // Violet
    label: "VIOLET:",
    desc: "VESTIBULAR\nDEVELOPMENT",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 mb-0.5">
        <path d="M32 12 A12 12 0 0 1 44 24 A12 12 0 0 1 38 34 L36 42 L28 42 L26 34 A12 12 0 0 1 20 24 A12 12 0 0 1 32 12 Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 46 L36 46 M28 50 L36 50 M30 54 L34 54" strokeLinecap="round" />
        <path d="M32 8 L32 4 M44 14 L48 10 M52 24 L56 24 M44 34 L48 38 M20 14 L16 10 M12 24 L8 24 M20 34 L16 38" strokeLinecap="round" />
        <path d="M28 24 Q32 20 36 24" strokeLinecap="round" />
        <circle cx="32" cy="24" r="5" />
      </svg>
    ),
    size: 150,
    top: "110px",  // 0 deg
    left: "440px",
  },
  {
    color: "#1B3A6B", // Indigo
    label: "INDIGO:",
    desc: "MOVEMENT &\nPROPRIOCEPTION",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 mb-0.5">
        <path d="M32 10 L32 54 M16 54 L48 54" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 26 L48 26" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 26 L10 40 L22 40 Z" strokeLinejoin="round" />
        <path d="M48 26 L42 40 L54 40 Z" strokeLinejoin="round" />
        <path d="M32 6 L32 10" strokeLinecap="round" />
        <circle cx="32" cy="7" r="2" />
        <path d="M28 10 L36 10 M30 14 L34 14" strokeLinecap="round" />
      </svg>
    ),
    size: 150,
    top: "196px",  // 51.4 deg
    left: "620px",
  },
  {
    color: "#2563EB", // Blue
    label: "BLUE:",
    desc: "SPATIAL\nAWARENESS",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 mb-0.5">
        <path d="M14 24 C14 16 20 14 28 14 C36 14 42 16 42 24 C42 32 36 34 28 34 C26 34 24 33.5 22 36 L18 40 L18 33.5 C15.5 31.5 14 28 14 24 Z" strokeLinejoin="round" />
        <path d="M42 24 C48 24 54 26 54 34 C54 37 53 40 50 42 L50 48 L46 44 C44 44.5 42 45 40 45 C32 45 28 42 28 34" strokeLinejoin="round" strokeLinecap="round" />
        <text x="21" y="29" fill="currentColor" strokeWidth="0" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Aa</text>
      </svg>
    ),
    size: 150,
    top: "391px",  // 102.8 deg
    left: "664px",
  },
  {
    color: "#16A34A", // Green
    label: "GREEN:",
    desc: "VAKT\nAPPROACH",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 mb-0.5">
        <circle cx="22" cy="24" r="4.5" />
        <circle cx="42" cy="24" r="4.5" />
        <path d="M15 48 C15 36 21 34 29 34 L35 34 C43 34 49 36 49 48 L49 52 L15 52 Z" strokeLinejoin="round" />
        <path d="M23 42 L32 50 L41 42" strokeLinejoin="round" />
        <path d="M32 18 C28 14 24 16 24 20 C24 24 32 28 32 28 C32 28 40 24 40 20 C40 16 36 14 32 18 Z" strokeLinejoin="round" />
      </svg>
    ),
    size: 150,
    top: "547px",  // 154.3 deg
    left: "540px",
  },
  {
    color: "#EAB308", // Yellow
    label: "YELLOW:",
    desc: "LANGUAGE\nDEVELOPMENT",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 mb-0.5">
        <path d="M32 16 C20 16 16 24 16 36 C16 48 24 52 32 52" strokeLinecap="round" />
        <path d="M32 16 C44 16 48 24 48 36" strokeLinecap="round" />
        <path d="M32 16 C32 16 34 11 38 16 C42 21 38 25 38 25 C38 25 42 30 38 34 C34 39 32 34 32 34" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 36 C48 36 53 34 49 29 C45 24 40 29 40 29" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 52 L38 52 L38 45 C38 45 43 40 47 45 M48 36 L48 42 L43 42" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 29 C26 29 27 36 22 36 C17 36 18 29 22 29 Z" strokeLinejoin="round" />
        <path d="M28 29 C32 29 33 36 28 36 C23 36 24 29 28 29 Z" strokeLinejoin="round" />
        <path d="M24 45 C28 45 29 52 24 52 C19 52 20 45 24 45 Z" strokeLinejoin="round" />
      </svg>
    ),
    size: 150,
    top: "547px",  // -154.3 deg
    left: "340px",
  },
  {
    color: "#EA580C", // Orange
    label: "ORANGE:",
    desc: "COGNITIVE\nDEVELOPMENT",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 mb-0.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32 Q18 20 28 32 Q18 44 8 32 Z" />
        <circle cx="18" cy="32" r="3" fill="currentColor" strokeWidth="0" />
        <circle cx="18" cy="32" r="6" />
        <path d="M36 20 C30 20 30 28 36 28 C42 28 42 34 36 34 C30 34 30 42 36 42 C42 42 42 48 36 48" />
        <path d="M48 48 L48 20 A4 4 0 0 1 56 20 L56 48" />
        <path d="M56 28 A3 3 0 0 1 62 28 L62 42" />
        <path d="M48 26 A3 3 0 0 0 42 26 L42 42" />
      </svg>
    ),
    size: 150,
    top: "391px",  // -102.8 deg
    left: "216px",
  },
  {
    color: "#DC2626", // Red
    label: "RED:",
    desc: "SOCIAL &\nEMOTIONAL\nDEVELOPMENT",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-0.5">
        <circle cx="42" cy="14" r="4" />
        <path d="M34 24 L40 22 L46 28 L40 40 L48 48 M40 22 L30 28 L28 38 M40 40 L34 48 L38 58 M30 28 L22 24" />
        <line x1="38" y1="32" x2="28" y2="34" />
        <path d="M14 38 L18 36 M10 32 L14 30 M20 44 L24 42" strokeWidth="2" />
        <path d="M52 22 L56 20 M48 26 L52 24 M56 30 L60 28" strokeWidth="2" />
      </svg>
    ),
    size: 150,
    top: "196px",  // -51.4 deg
    left: "260px",
  },
];

const circleVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.12 + 0.2,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
};

const BrainSensesSection = () => {
  return (
    <section
      id="brain-senses"
      className="py-12 md:py-20 relative bg-white/40 backdrop-blur-md border-y border-white/20"
    >

      <div className="container mx-auto px-4">
        {/* ======= SECTION TITLE ======= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            Brain & <span className="text-primary">Senses</span> 🧠
          </h2>
        </motion.div>

        {/* ======= DESKTOP LAYOUT ======= */}
        <div
          className="hidden md:block relative mx-auto"
          style={{ maxWidth: "880px", height: "680px", overflow: "visible" }}
        >
          {/* Central Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute z-10 flex items-center justify-center p-4 rounded-3xl"
            style={{
              top: "340px",
              left: "440px",
              x: "-50%",
              y: "-50%",
              width: "280px",
              textAlign: "center",
            }}
          >
            <h3
              className="font-heading text-[20px] lg:text-[24px] font-extrabold leading-[1.35] uppercase text-[#144751] tracking-wide"
            >
              &ldquo;WHERE<br />
              EVERY SENSE LEARNS&hellip;<br />
              EVERY CHILD SHINES&rdquo;
            </h3>
          </motion.div>

          {/* Circles */}
          {senseItems.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={circleVariants}
              className="absolute"
              style={{
                top: item.top,
                left: item.left,
                x: "-50%",
                y: "-50%",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 8px 30px ${item.color}20`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-full cursor-pointer flex flex-col items-center justify-center aspect-square flex-shrink-0 relative overflow-hidden"
                style={{
                  backgroundColor: item.color,
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  boxShadow: `0 8px 25px ${item.color}40`,
                }}
              >
                <span className="flex items-center justify-center text-white">
                  {item.icon}
                </span>
                <div
                  className="font-sub text-[11px] font-bold text-center leading-[1.2] px-2 md:px-4 mt-1 tracking-wide text-white/90"
                >
                  {item.desc.split('\n').map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ======= MOBILE LAYOUT (Radial – mirrors desktop) ======= */}
        <div
          className="md:hidden relative mx-auto"
          style={{ maxWidth: "380px", height: "420px", overflow: "visible" }}
        >
          {/* Central Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute z-10 flex items-center justify-center p-2 rounded-2xl"
            style={{
              top: "210px",
              left: "50%",
              x: "-50%",
              y: "-50%",
              width: "160px",
              textAlign: "center",
            }}
          >
            <h3
              className="font-heading text-[13px] font-extrabold leading-[1.3] uppercase text-[#144751] tracking-wide"
            >
              &ldquo;WHERE<br />
              EVERY SENSE LEARNS&hellip;<br />
              EVERY CHILD SHINES&rdquo;
            </h3>
          </motion.div>

          {/* Circles – scaled-down positions mirroring desktop radial layout */}
          {[
            { top: "55px", left: "50%" },      // Violet  – top center
            { top: "115px", left: "78%" },       // Indigo  – upper right
            { top: "240px", left: "86%" },       // Blue    – mid right
            { top: "350px", left: "70%" },       // Green   – lower right
            { top: "350px", left: "30%" },       // Yellow  – lower left
            { top: "240px", left: "14%" },       // Orange  – mid left
            { top: "115px", left: "22%" },       // Red     – upper left
          ].map((pos, i) => {
            const item = senseItems[i];
            return (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={circleVariants}
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  x: "-50%",
                  y: "-50%",
                }}
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full flex flex-col items-center justify-center aspect-square flex-shrink-0 relative overflow-hidden"
                  style={{
                    backgroundColor: item.color,
                    width: "100px",
                    height: "100px",
                    boxShadow: `0 4px 15px ${item.color}40`,
                  }}
                >
                  <div className="-translate-y-1">
                    <span className="flex items-center justify-center scale-75 text-white">
                      {item.icon}
                    </span>
                    <div
                      className="font-sub text-[9px] font-bold text-center leading-[1.15] px-1.5 mt-0.5 tracking-wide text-white/90"
                    >
                      {item.desc.split('\n').map((line, idx) => (
                        <span key={idx} className="block">{line}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrainSensesSection;
