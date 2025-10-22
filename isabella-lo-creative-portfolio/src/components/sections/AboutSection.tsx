import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Sparkles, BarChart3, Camera } from "lucide-react";

const interests = [
  {
    name: "Strudel",
    icon: Music,
    description: "Live coding music — exploring algorithmic sound design and pattern-based composition",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "TouchDesigner",
    icon: Sparkles,
    description: "Visual programming for interactive installations and real-time graphics",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Data Visualization",
    icon: BarChart3,
    description: "Transforming complex datasets into compelling visual stories",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments and perspectives through creative composition",
    gradient: "from-pink-500 to-rose-500",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-sm bg-card/40 rounded-2xl p-8 md:p-12 border border-border/50 shadow-2xl mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Photo Placeholder */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shrink-0">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-display">
                IL
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Isabella Lo
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a multidisciplinary builder who thrives at the intersection of structure and subjectivity. 
                I care deeply about how things are made, how they're communicated, and how they make people feel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work spans technical systems, visual design, and reflective storytelling. Whether I'm 
                designing databases, creating brand identities, or hosting conversations on my podcast 
                <span className="text-primary font-medium"> Chronic Contemplations</span>, I approach every 
                project with emotional intelligence and attention to craft.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Current Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            Current Interests
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${interest.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300`} />
                
                {/* Card Content */}
                <div className="relative backdrop-blur-sm bg-card/60 rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-display font-semibold mb-2 text-foreground">
                    {interest.name}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
