import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, ChevronUp, Quote } from "lucide-react";

const testimonials = [
  { "name": "Shumsoon Nahar", "text": "I am very happy with my son’s school. The teachers are caring, supportive, and truly dedicated to each child’s growth. I have seen a great improvement in my son’s confidence, communication, and learning skills.... especially Amudha mam, she's is very sweet, very supportive and always smiling face.", "avatar": "👩" },
  { "name": "Parameswari K", "text": "Choosing Rainbow Play School for our child, Vairev, has truly been one of the best decisions we’ve made as parents. From the very first day, we felt a sense of warmth, care, and genuine love from the teachers and staff.", "avatar": "👩‍🦱" },
  { "name": "Tamilselvi Manimaran", "text": "The school is doing well and excellent infrastructure, extra curricular activities. The teachers are very kind and sweet to carring the child. Well planned worksheet for practice makes my child improve. I am very thankful to the school.", "avatar": "👩" },
  { "name": "Geethapriya Geethacharian", "text": "Among all the play schools, this is truly the best! The teachers are very kind and lovable. They take care of each child as their own. They always try to bring out the special abilities in every child.", "avatar": "👩" },
  { "name": "Reshma Thahir", "text": "We are very happy with our experience at Rainbow Play School. My son studied in Pre-KG, and it has been a wonderful journey so far. The teachers are caring, patient, and attentive, creating a nurturing environment for the children to learn.", "avatar": "👩" },
  { "name": "Anumol C", "text": "It's been wonderful experience for our family to be a part of this Rainbow Play school and day care centre. Our daughter got great blessing to spend her precious start of one year in this divine play school.", "avatar": "👩‍⚕️" },
  { "name": "Raja Lakshmi", "text": "Rainbow Play School is truly one of the best schools for young children. As a parent, I am very happy with the care, love, and attention given to my child every day. The teachers are friendly, patient, and well-trained.", "avatar": "👩" },
  { "name": "Ushi Tyagi", "text": "Rainbow play school is wonderful! The teachers are caring and attentive, and the environment is safe, fun, and nurturing. My child enjoys learning here and has become more confident and social.", "avatar": "👩" },
  { "name": "Krishnapriya Sriram", "text": "The best playschool in and around Triplicane. Teachers are dedicated caring for every child like their own. I enrolled both my sons here. Their speciality lies in identifying unique talent of each child.", "avatar": "👩" },
  { "name": "Shoba Raja", "text": "We are happy with this play school! The teachers are caring, patient, and give individual attention to every child. The environment is safe, clean, and very friendly for kids.", "avatar": "👩" },
  { "name": "Shalini S", "text": "I would like to share a feedback on Rainbow Play school and day care. It's been a wonderful experience for my kids. The staff is very supportive.", "avatar": "👩" },
  { "name": "Mugadhapriya Ponnusamy", "text": "Good place to learn for your kids... the teachers are very soft and kind.", "avatar": "👩" },
  { "name": "Divya Palani", "text": "My 2 years old child joined last year. Her communication and sentence formation improved a lot. The faculty are really polite and soft with kids.", "avatar": "👩" },
  { "name": "Shobana G", "text": "I thank Niranjana mam because she trained my daughter with good habits, learning, and so many activities. She is so kind to kids.", "avatar": "👩" },
  { "name": "Aishwarya Naidu", "text": "Very good learning atmosphere. The staff is friendly and supportive and my daughter had improved a lot in communication and social skills.. highly recommended.", "avatar": "👩" },
  { "name": "Aysha Samira", "text": "My son liked the school very much. He was very much interested to go there to study. The teachers were friendly and he has learned many things in this academy.", "avatar": "👩" },
  { "name": "Pavalakodi P", "text": "The playschool provides a safe and happy environment for children. My child enjoys going everyday. I can see a good improvement in my child's communication and behavior.", "avatar": "👩" },
  { "name": "Aafrinsheik", "text": "Really satisfying pre school. Hygiene and spacious classroom. Experienced and talented teachers.. their teaching made my child focus on all physical and motor activity skills.", "avatar": "👩" },
  { "name": "Pavithra Vasudevan", "text": "Its really nice school.. Staffs are so friendly.. They have so many innovative activities and involves every child. Day care also too good.", "avatar": "👩" },
  { "name": "Sai Priya V", "text": "This day care and play school is amazing! The staff are so kind, patient, and experienced — we completely trust them with our little one.", "avatar": "👩" },
  { "name": "Yaadhav Dheepan", "text": "My child studied at Rainbow Play School for six months, and I am extremely happy with the progress. It has helped develop good habits and improved fluency in speaking.", "avatar": "👨" },
  { "name": "Jothi Prince", "text": "Very good coaching and caring the students very well. All the teachers and care takers are very good persons, so loving and compassion with the children.", "avatar": "👩" },
  { "name": "Sudharsan R", "text": "For the parents in Triplicane, I would recommend Rainbow hands down. Kids are nurtured, cultured and trained well. Kudos to the teaching and non teaching staff.", "avatar": "👨" },
  { "name": "Kalpana Kalpu", "text": "Best play school in Triplicane... My child developed very well after joining this school. They have so many activities for kids and daycare is well maintained.", "avatar": "👩" },
  { "name": "Lakshmi Sudarsanan", "text": "With both my kids attending Rainbow daycare from less than a year old, I can say the teaching and non-teaching staff are extremely patient and kind.", "avatar": "👩" },
  { "name": "Veda Valli", "text": "A wonderful play school with all facilities. Children will learn all the activities along with important values in life.", "avatar": "👩" },
  { "name": "Sibani Nayak", "text": "We are truly grateful for the wonderful care and learning experience our daughter receives at Rainbow. The teachers are kind, patient, and incredibly dedicated.", "avatar": "👩" },
  { "name": "Reshma Bothra", "text": "Very good school. I'm fully satisfied with the teaching. They take care of kids very well. Teachers and staff are very kind. My kids happily go to school.", "avatar": "👩" },
  { "name": "Mahitha Basavala", "text": "Great school with new learning techniques. The way they take care of kids is just impressive. Thank you to Rainbow school for such a great experience.", "avatar": "👩" },
  { "name": "Sankar Raman V", "text": "Very good school with new way of teaching. My kids are able to learn, speak and communicate a lot after going to this school. Value for money.", "avatar": "👨" },
  { "name": "Arun Venkat", "text": "Great pre schooling with new ideas to teach new things to kids. Highly recommended for young learners.", "avatar": "👨" }
];

const rainbowColors = [
  "border-red-400",
  "border-orange-400",
  "border-yellow-400",
  "border-green-400",
  "border-blue-400",
  "border-indigo-400",
  "border-purple-400",
];

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-20 md:py-32 relative bg-white/40 backdrop-blur-xl border-y border-white/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-extrabold text-[#1A365D] mb-6 tracking-tight"
          >
            Parents <span className="text-coral">Perspective</span> 💬
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sub text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Join hundreds of happy families who trust us with their child's early development.
          </motion.p>
        </div>

        {/* Refined Uniform Grid for a Compact, Presentable Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`flex flex-col h-full relative p-5 rounded-2xl bg-white/60 backdrop-blur-xl border-2 ${rainbowColors[index % rainbowColors.length]} hover:border-coral transition-all duration-300 shadow-lg shadow-black/5 group cursor-default`}
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 right-5 text-coral/10 group-hover:text-coral/20 transition-colors">
                  <Quote size={20} weight="fill" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text - Flex grow pushes author to the bottom */}
                <p className="font-sub text-[#2D3748] text-[13px] leading-relaxed mb-5 italic relative z-10 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author Info - Always aligned at the bottom */}
                <div className="flex items-center gap-2.5 pt-3.5 border-t border-black/5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-inner flex items-center justify-center text-lg border border-white/40 group-hover:scale-110 transition-transform">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1A365D] text-[12px] leading-tight mb-0.5">
                      {testimonial.name}
                    </h4>
                    <p className="font-sub text-[9px] text-muted-foreground uppercase tracking-widest font-bold">
                      Happy Parent
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#1A365D] text-white font-heading font-extrabold text-lg hover:bg-coral transition-all duration-300 shadow-xl hover:shadow-coral/30 hover:scale-105 active:scale-95 group"
          >
            {showAll ? (
              <>
                Show Fewer Reviews <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                View More Real Reviews <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
