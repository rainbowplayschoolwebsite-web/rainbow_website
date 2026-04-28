import { motion } from "framer-motion";
import { Award, BookOpen, Heart, ScrollText, Star, Users } from "lucide-react";

const AboutSection = () => {
  const qualifications = [
    "B.A., B.Ed. in Special Education",
    "Diploma in Early Childhood Care and Education",
    "Diploma in School Administration",
    "Specialized training in Specific Learning Disabilities (Dyslexia)"
  ];

  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "17+ Years Experience",
      desc: "Working with children across a wide range of learning needs."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "15 Years Leadership",
      desc: "Successfully leading Rainbow Play School with excellence."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Specialist Training",
      desc: "Expertise in Learning Disabilities and Psychology."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white/40 backdrop-blur-md border-y border-white/20 relative overflow-hidden">
      {/* Decorative Elements handled by global BackgroundGlow */}

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            About the <span className="text-secondary">Founder</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-12 items-center">
          {/* Top: Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-lg"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-[50px] transform rotate-2 scale-102" />
              <img
                src="/DSC_5518.JPG.jpeg"
                alt="Amuda Dinakaran - Correspondent"
                className="relative z-10 rounded-[50px] w-full h-[350px] md:h-[480px] object-cover shadow-2xl border-8 border-white"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xl leading-tight">17+ Years</div>
                    <div className="text-sm text-slate-500 font-sub font-semibold">Of Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom: Detailed Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-10">
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold mb-2 text-[#1B3A6B]">
                Amuda Dinakaran
              </h3>
              <p className="text-primary font-bold text-2xl mb-8 font-sub">
                Correspondent, Rainbow Play School
              </p>
              <p className="font-sub text-lg md:text-xl text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-6 mb-10">
                "Amuda Dinakaran is a dedicated educator with a deep commitment to early childhood development. Backed by a strong academic foundation in Special Education and enriched by advanced studies in Psychology, she brings a thoughtful and well-rounded approach to nurturing young learners during their most important formative years."
              </p>
            </div>

            {/* Experience Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {highlights.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-secondary mb-4">{item.icon}</div>
                  <h4 className="font-heading font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Professional Background */}
            <div className="bg-white rounded-[40px] p-8 md:p-10 mb-12 border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="flex items-center gap-3 mb-8">
                <ScrollText className="w-8 h-8 text-primary" />
                <h4 className="font-heading text-2xl font-bold">Professional Background</h4>
              </div>
              <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                {qualifications.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="font-sub font-semibold text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="font-sub text-slate-600">
                  With over 17 years of experience working with children across a wide range of learning needs, along with 15 years of successfully leading a play school, she offers a well-rounded and practical approach to early education.
                </p>
              </div>
            </div>

            {/* Two Column Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold">Approach to Learning</h4>
                </div>
                <p className="font-sub text-slate-600 leading-relaxed">
                  She believes that every child is unique, with their own pace, strengths, and way of understanding the world. Her approach focuses on recognizing these differences and supporting each child with care and attention.
                </p>
                <p className="font-sub text-slate-600 leading-relaxed">
                  Her teaching philosophy is centered on <strong>sensory-based learning</strong>, where children learn through exploration and real experiences. This helps build strong cognitive, emotional, and social foundations in a natural and engaging way.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold">Experience & Expertise</h4>
                </div>
                <p className="font-sub text-slate-600 leading-relaxed">
                  Her background in understanding different learning styles enables her to create a supportive and inclusive environment for all children. She brings patience, observation, and thoughtful guidance into everyday learning.
                </p>
                <p className="font-sub text-slate-600 leading-relaxed">
                  This ensures that each child receives the attention they need to grow with confidence and comfort.
                </p>
              </div>
            </div>

            {/* At Rainbow Section */}
            <div className="bg-[#1B3A6B] text-white rounded-[40px] p-8 md:p-10 mb-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <div className="w-40 h-40 border-8 border-white rounded-full translate-x-12 -translate-y-12" />
              </div>
              <h4 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full" />
                At Rainbow Play School
              </h4>
              <div className="space-y-4 font-sub md:text-lg opacity-90">
                <p>
                  Rainbow Play School is a nurturing space where learning goes beyond academics. Children are encouraged to explore, express themselves, and develop at their own pace.
                </p>
                <p>
                  The focus is on building confidence, independence, creativity, and a lifelong love for learning in a safe and caring environment.
                </p>
              </div>
            </div>

            {/* A Note to Parents */}
            <div className="relative p-8 md:p-10 rounded-[40px] bg-primary/10 border-2 border-primary/20">
              <div className="absolute -top-6 -left-6 bg-primary text-white p-4 rounded-2xl shadow-lg">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <h4 className="font-heading text-2xl font-bold mb-4 text-[#C18C00]">A Note to Parents</h4>
              <p className="font-sub text-lg text-slate-700 italic leading-relaxed">
                "The early years of a child’s life lay the foundation for the future. With Amuda Dinakaran’s experience and thoughtful approach, parents can feel confident that their children are in a safe, supportive, and capable environment."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

