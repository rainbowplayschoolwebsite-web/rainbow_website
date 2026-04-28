import { motion } from "framer-motion";

const teachingMethods = [
  {
    color: "#7B2D8E", // Violet
    title: "Vestibular Development",
    desc: "We engage children in a wide range of activities that enhance the Vestibular System. These experiences help regulate arousal levels, improve posture, and enhance focus. we build a strong foundation for confident movement, better coordination, and effective learning.",
    icon: "🧠",
  },
  {
    color: "#1B3A6B", // Indigo
    title: "Movement and Proprioception",
    desc: "Every day, children engage in Brain Gym and outdoor play, creating a strong connection between the mind and body. These activities stimulate brain function and enhance Sensory-Motor Coordination, helping children develop better control, balance, and overall body awareness.",
    icon: "🏃",
  },
  {
    color: "#2563EB", // Blue
    title: "Spatial Awareness",
    desc: "We nurture spatial awareness through joyful movement and purposeful play, helping children explore direction, distance, position, building coordination, confidence, and a strong foundation for learning and everyday skills.",
    icon: "🗺️",
  },
  {
    color: "#16A34A", // Green
    title: "VAKT Approach",
    desc: "We adopt a neuroscience informed VAKT approach, engaging visual, auditory, kinesthetic, and tactile pathways to strengthen neural connections and support holistic early learning.",
    icon: "🖐️",
  },
  {
    color: "#EAB308", // Yellow
    title: "Language Development",
    desc: "We build language development from the ground up, starting with oral motor strengthening through playful blowing activities, progressing to auditory processing with sound based games and instructions, and blossoming into confident expression through conversations, stories, and rhymes.",
    icon: "💬",
  },
  {
    color: "#EA580C", // Orange
    title: "Cognitive Development",
    desc: "We facilitate higher order cognitive development through structured learning experiences that promote analysis, reasoning, and problem solving. These processes strengthen executive functions such as working memory, recall, cognitive flexibility, and abstract thinking, thereby supporting advanced cognitive growth and independent learning for cognitive development.",
    icon: "🧩",
  },
  {
    color: "#DC2626", // Red
    title: "Social and Emotional Development",
    desc: "Social and Emotional development is supported through structured social interactions and value based learning experiences that promote empathy, cooperation, and respect. Children learn through observation, modelling, and guided practice, developing emotional awareness, self regulation, and positive interpersonal skills. This nurtures socio emotional competence, shaping responsible citizens with a positive outlook towards life and society.",
    icon: "🤝",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-white/40 backdrop-blur-md border-y border-white/20 relative overflow-hidden">
      {/* Decorative background accent handled by global BackgroundGlow */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 px-4"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nurturing Minds, <span className="text-primary italic">Shaping Futures</span>
          </h2>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-8" />
          <p className="font-sub text-muted-foreground text-xl max-w-2xl mx-auto">
            Discover our comprehensive teaching methodology designed to scientifically prepare every child for success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teachingMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100 relative group flex flex-col h-full"
            >
              {/* Color Stripe */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-b-full transition-transform group-hover:scale-x-125" 
                style={{ backgroundColor: method.color }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner shrink-0"
                  style={{ backgroundColor: `${method.color}15`, border: `1px solid ${method.color}30` }}
                >
                  {method.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground leading-tight">
                  {method.title}
                </h3>
              </div>

              <p className="font-sub text-slate-600 leading-relaxed text-sm md:text-base flex-grow">
                {method.desc}
              </p>

              {/* Background Color Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none"
                style={{ backgroundColor: method.color }}
              />
            </motion.div>
          ))}
          
          {/* Final Large Conclusion Card (Optional, using the Red item as part of grid) */}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
