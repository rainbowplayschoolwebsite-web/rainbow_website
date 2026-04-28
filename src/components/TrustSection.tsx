import { motion } from "framer-motion";

const trustItems = [
  { icon: "📹", title: "CCTV", desc: "24/7 CCTV surveillance to ensure your child is always safe." },
  { icon: "👩‍🏫", title: "Skilled Teachers", desc: "Trained and passionate teachers guiding every child with care." },
  { icon: "🛡️", title: "Safe Space", desc: "A safe, secure, and caring space for every child." },
  { icon: "✨", title: "Hygienic Environment", desc: "A safe, clean, and caring environment where happy learning begins." },
  { icon: "🌬️", title: "Non-AC Setting", desc: "Well ventilated classrooms that promote health and help to reduce communicable diseases." },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white/40 backdrop-blur-md border-y border-white/20 relative">
      {/* Background handled by global BackgroundGlow */}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            Where Trust <span className="text-secondary">Meets Care</span> 💙
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-2xl p-5 text-center shadow-md"
            >
              <motion.span
                className="text-4xl block mb-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {item.icon}
              </motion.span>
              <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
