import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-card border-t border-border py-12 px-4"
      data-testid="footer"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4" data-testid="footer-logo">
            <Star className="text-primary text-2xl" />
            <span className="font-gaming font-bold text-xl text-primary">STARFALL</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto" data-testid="footer-description">
            Relive the legendary Fortnite Chapter 2 Season 2 experience with enhanced performance and an active community. 
            This is a fan-made project and is not affiliated with Epic Games.
          </p>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2025 Starfall Project. This is a fan-made project and is not affiliated with Epic Games, Inc.
            Fortnite is a trademark of Epic Games, Inc.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
