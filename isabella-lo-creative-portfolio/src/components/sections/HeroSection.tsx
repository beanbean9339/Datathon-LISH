import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [showSubtext, setShowSubtext] = useState(false);
  const fullText = "Hi, I'm Isabella Lo.";
  const subText = "Systems thinker. Creative builder. Chronic contemplator.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowSubtext(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Gradient Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {showSubtext && (
          <>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subText}
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm a systems-minded creative who builds thoughtful, emotionally intelligent work across tech, design, and storytelling.
            </motion.p>

            <motion.button
              onClick={scrollToAbout}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">Explore</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
