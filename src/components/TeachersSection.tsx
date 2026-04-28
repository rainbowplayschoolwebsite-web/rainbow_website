import { motion } from "framer-motion";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const teachers = [
  { name: "Ms. Priya Sharma", qual: "M.Ed in Early Childhood", exp: "8 years", img: teacher1 },
  { name: "Mr. Arjun Reddy", qual: "B.Ed, Montessori Certified", exp: "6 years", img: teacher2 },
  { name: "Ms. Ananya Patel", qual: "B.Ed, Art Therapy", exp: "5 years", img: teacher3 },
];

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            Our Loving <span className="text-lavender">Teachers</span> 👩‍🏫
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {teachers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, rotate: -5, y: 40 }}
              whileInView={{ opacity: 1, rotate: i % 2 === 0 ? -2 : 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring" }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-card rounded-2xl p-4 shadow-xl w-60 text-center"
              style={{ boxShadow: "8px 12px 30px rgba(0,0,0,0.08)" }}
            >
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{t.name}</h3>
              <p className="font-sub text-sm text-muted-foreground">{t.qual}</p>
              <span className="inline-block mt-2 bg-accent/20 text-accent-foreground font-sub text-xs font-semibold px-3 py-1 rounded-full">
                {t.exp} experience
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
