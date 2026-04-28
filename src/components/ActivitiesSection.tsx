import { useRef } from "react";
import { motion } from "framer-motion";

const activities = [
  { emoji: "🎨", title: "Art & Craft Corner", desc: "Painting, clay modeling, and creative projects", color: "bg-coral/20" },
  { emoji: "📖", title: "Story Time", desc: "Magical tales that spark imagination", color: "bg-lavender/20" },
  { emoji: "🎵", title: "Music & Dance", desc: "Rhythm, movement, and joyful expression", color: "bg-primary/20" },
  { emoji: "🌳", title: "Outdoor Play", desc: "Fresh air, sunshine, and active games", color: "bg-accent/20" },
  { emoji: "🔬", title: "STEM Toys", desc: "Building, experimenting, and discovering", color: "bg-secondary/20" },
  { emoji: "🧩", title: "Puzzle Time", desc: "Problem solving and logical thinking", color: "bg-primary/15" },
];

const ActivitiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="activities" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            Activities <span className="text-coral">World</span> 🎡
          </h2>
          <p className="font-sub text-muted-foreground text-lg">Swipe to explore our playground stations</p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-6 pb-4 snap-x snap-mandatory"
      >
        {activities.map((act, i) => (
          <motion.div
            key={act.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className={`${act.color} min-w-[260px] md:min-w-[300px] rounded-3xl p-6 shadow-md snap-center flex-shrink-0`}
          >
            <span className="text-5xl block mb-4">{act.emoji}</span>
            <h3 className="font-heading text-xl font-bold text-foreground">{act.title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-2">{act.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
