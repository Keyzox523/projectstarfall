import { motion } from "framer-motion";
import { Star, Rocket, Users, Shield } from "lucide-react";
import fortniteBackground from "@assets/B6757871-07BB-4E2C-AE02-DBB830BA9437_1757459097221.png";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 46, 0.85), rgba(34, 39, 46, 0.85)), url(${fortniteBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title font-gaming font-black text-6xl sm:text-7xl lg:text-8xl text-primary text-glow animate-glow mb-6"
            data-testid="hero-title"
          >
            STARFALL
          </motion.h1>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <Star className="text-primary text-lg animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed"
            data-testid="hero-subtitle"
          >
            Relive the legendary moments of <span className="text-primary font-semibold">Fortnite Chapter 2 Season 2</span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            data-testid="hero-description"
          >
            Experience the most iconic season with enhanced gameplay, improved performance, and the community you love. Choose your path below.
          </motion.p>
        </motion.div>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          {[
            {
              icon: Rocket,
              title: "Enhanced Performance",
              description: "Optimized for modern systems with improved frame rates",
              delay: 0.1,
            },
            {
              icon: Users,
              title: "Active Community",
              description: "Join thousands of players in the ultimate nostalgia experience",
              delay: 0.2,
            },
            {
              icon: Shield,
              title: "Secure & Stable",
              description: "Regular updates and anti-cheat protection included",
              delay: 0.3,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              className="gaming-card p-6 rounded-lg text-center animate-float group"
              style={{ animationDelay: `${feature.delay}s` }}
              data-testid={`feature-${index}`}
            >
              <feature.icon className="text-3xl text-accent mb-4 mx-auto group-hover:animate-bounce" />
              <h3 className="font-gaming font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
