import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Send } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="relative bg-white/40 backdrop-blur-xl pt-20 pb-10 overflow-hidden border-t border-white/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-0">
              <img src="/logo.png" alt="Rainbow Play School Logo" className="h-16 w-auto object-contain" />
              <img src="/rainbow logo.png" alt="Rainbow Play School" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground font-sub leading-relaxed text-sm">
              Where little minds grow big dreams. A joyful and safe space for your child to learn, play, and blossom every single day.
            </p>
            <div className="flex gap-4 pt-2">
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-colors hover:bg-blue-200 dark:hover:bg-blue-900/50">
                <Facebook size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center transition-colors hover:bg-pink-200 dark:hover:bg-pink-900/50">
                <Instagram size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center transition-colors hover:bg-sky-200 dark:hover:bg-sky-900/50">
                <Twitter size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center transition-colors hover:bg-red-200 dark:hover:bg-red-900/50">
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading text-xl font-bold text-foreground mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-sub text-muted-foreground text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Our Programs</a></li>

              <li><a href="#gallery" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Photo Gallery</a></li>
              <li><a href="#admission" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Admissions Info</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-xl font-bold text-foreground mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-sub text-muted-foreground text-sm">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-full shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="mt-1">29, Sivaraman Street, Triplicane, Chennai - 600005</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-full shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span>+91 95000 55350</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-full shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <span>hello@rainbowplayschool.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:pl-4">
            <h4 className="font-heading text-xl font-bold text-foreground mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h4>
            <p className="text-muted-foreground font-sub mb-4 text-sm">
              Subscribe to get updates on admissions, events, and parenting tips.
            </p>
            <form className="relative flex items-center group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-5 pr-14 py-3.5 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm font-sub shadow-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-sm group-focus-within:bg-secondary"
                aria-label="Subscribe"
              >
                <Send size={16} className="ml-[-2px]" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left relative z-10">
          <p className="font-body text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
            © {new Date().getFullYear()} Rainbow Play School. Made with <span className="text-red-500 animate-pulse">❤️</span> for little ones.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground font-sub hover:[&>a]:text-primary [&>a]:transition-colors">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Decorative floating shapes in background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute top-40 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </footer>
  );
};

export default FooterSection;
