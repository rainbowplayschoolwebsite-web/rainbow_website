import { motion } from "framer-motion";
import { Backpack, Brain, Home, Calculator, Palette, Tent } from "lucide-react";

const programs = [
  { 
    title: "PLAY SCHOOL", 
    age: "Age: 1.5 – 2.5", 
    icon: <Backpack className="w-12 h-12 text-primary" />, 
    color: "bg-primary/10", 
    desc: "Multi sensory learning builds strong understanding, coordination, and confident early development." 
  },
  { 
    title: "PRE KG", 
    age: "Age: 2.6 – 3.5", 
    icon: <Brain className="w-12 h-12 text-secondary" />, 
    color: "bg-secondary/10", 
    desc: "Children learn best through logical thinking, problem-solving, and creativity, helping them build confidence and understand the world." 
  },
  { 
    title: "DAY CARE", 
    age: "6 months onwards", 
    icon: <Home className="w-12 h-12 text-accent" />, 
    color: "bg-accent/10", 
    desc: "A warm and loving space where children are cared for like home with gentle support, healthy habits, and lots of affection." 
  },
  { 
    title: "ABACUS", 
    age: "Cognitive Skills", 
    icon: <Calculator className="w-12 h-12 text-coral" />, 
    color: "bg-coral/10", 
    desc: "Enhances cognitive functions by stimulating both left and right brain. Improves numerical processing and mental calculation." 
  },
  { 
    title: "DRAWING", 
    age: "Creative Arts", 
    icon: <Palette className="w-12 h-12 text-blue-500" />, 
    color: "bg-blue-500/10", 
    desc: "Helps children express thoughts and feelings creatively. Improves fine motor skills, imagination, and overall brain development." 
  },
  { 
    title: "SUMMER CAMP", 
    age: "Age: 3 – 10", 
    icon: <Tent className="w-12 h-12 text-lime-600" />, 
    color: "bg-lime-600/10", 
    desc: "A unique and joyful experience where children learn skills that stay with them for life, conducted in a traditional and meaningful way." 
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 md:py-24 relative overflow-hidden bg-white/40 backdrop-blur-md border-y border-white/20">
      {/* Decorative background elements handled by global BackgroundGlow */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#1B3A6B] mb-4 tracking-tight">
            LEARN, PLAY & GROW <span className="text-secondary">PROGRAMS</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-coral mx-auto rounded-full mb-6" />
          <p className="font-sub text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Nurturing young minds through specialized learning pathways designed for every stage of early development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative group rounded-[2.5rem] p-8 md:p-10 ${prog.color} border border-white/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {prog.icon}
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-[#1B3A6B] mb-2">{prog.title}</h3>
              <div className="inline-block px-3 py-1 bg-white/60 rounded-full text-sm font-bold text-muted-foreground mb-4">
                {prog.age}
              </div>
              
              <p className="font-body text-base text-gray-700 leading-relaxed">
                {prog.desc}
              </p>

              {/* Decorative blob corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[100px] -mr-4 -mt-4 group-hover:bg-white/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
