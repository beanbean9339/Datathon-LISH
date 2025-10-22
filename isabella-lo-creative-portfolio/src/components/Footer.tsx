import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const exploreLinks = [
    { name: "Home", anchor: "home" },
    { name: "About", anchor: "about" },
    { name: "Work", anchor: "work" },
    { name: "Creative", anchor: "creative" },
    { name: "Artwork", anchor: "artwork" },
    { name: "Contact", anchor: "contact" },
  ];

  const socialLinks = [
    { name: "Email", icon: Mail, href: "mailto:lo.685@osu.edu" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/igwlo" },
    { name: "GitHub", icon: Github, href: "https://github.com/beanbean9339" },
  ];

  return (
    <footer className="relative py-16 px-4 border-t border-border/30 mt-24">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Isabella Lo
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Systems thinker. Creative builder. Chronic contemplator.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.anchor}>
                  <button
                    onClick={() => scrollToSection(link.anchor)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            Made with creativity & code ❤️ by{" "}
            <span className="text-primary font-semibold">Isabella Lo</span> © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
