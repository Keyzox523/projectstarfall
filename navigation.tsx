import { useState } from "react";
import { Star, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      data-testid="navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3" data-testid="logo">
            <Star className="text-primary text-2xl" />
            <span className="font-gaming font-bold text-xl text-primary">STARFALL</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="hover:text-primary transition-colors duration-300"
              data-testid="nav-download"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="hover:text-primary transition-colors duration-300"
              data-testid="nav-community"
            >
              Community
            </button>
          </div>
          
          <button
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="block w-full text-left hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-download"
              >
                Download
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="block w-full text-left hover:text-primary transition-colors duration-300"
                data-testid="mobile-nav-community"
              >
                Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
