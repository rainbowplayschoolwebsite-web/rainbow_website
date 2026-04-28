import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Brain & Senses", href: "#brain-senses" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Philosophy", href: "#philosophy" },

  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/001.jpg.jpeg" alt="Rainbow Play School Mascot" className="h-12 md:h-14 w-auto object-contain transition-transform duration-300" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sub font-semibold text-muted-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admission"
            className="bg-coral text-coral-foreground font-sub font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Admissions Open
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sub font-semibold text-lg text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#admission"
                onClick={() => setIsOpen(false)}
                className="bg-coral text-coral-foreground font-sub font-bold px-6 py-3 rounded-full"
              >
                Admissions Open
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
