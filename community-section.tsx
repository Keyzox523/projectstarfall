import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function CommunitySection() {
  const communityLinks = [
    {
      name: "Discord",
      icon: "fab fa-discord",
      description: "Join our active Discord community for real-time chat, events, and updates",
      url: "https://discord.gg/oldfn",
      bgColor: "bg-accent",
      hoverColor: "hover:bg-accent/80",
      textColor: "text-accent-foreground",
    },
  ];


  return (
    <section id="community" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-gaming font-bold text-4xl sm:text-5xl text-primary mb-4" data-testid="community-title">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="community-subtitle">
            Connect with fellow players and stay updated
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-12 max-w-md mx-auto">
          {communityLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gaming-card p-8 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
              data-testid={`community-${link.name.toLowerCase()}`}
            >
              <i className={`${link.icon} text-5xl mb-4 group-hover:animate-bounce`} style={{ color: link.name === "Discord" ? "#5865F2" : link.name === "Reddit" ? "#FF4500" : "#fff" }}></i>
              <h3 className="font-gaming font-bold text-xl mb-2">{link.name}</h3>
              <p className="text-muted-foreground mb-6">{link.description}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.bgColor} ${link.hoverColor} ${link.textColor} w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                data-testid={`button-${link.name.toLowerCase()}`}
              >
                <span>Join Discord</span>
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
