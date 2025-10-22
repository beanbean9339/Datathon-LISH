import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, FileText, Podcast } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:lo.685@osu.edu",
    description: "lo.685@osu.edu",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/igwlo",
    description: "Connect professionally",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/beanbean9339",
    description: "View my code",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Resume",
    icon: FileText,
    href: "#",
    description: "Download PDF",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Chronic Contemplations",
    icon: Podcast,
    href: "https://open.spotify.com/show/your-podcast-id",
    description: "Listen on Spotify",
    gradient: "from-rose-500 to-orange-500",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="min-h-screen py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities, collaborations, and conversations. 
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative block"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300`} />
              
              {/* Card Content */}
              <div className="relative backdrop-blur-sm bg-card/60 rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-colors duration-300 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                  {link.name}
                </h3>
                <p className="text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-sm bg-card/40 rounded-2xl p-8 border border-border/50">
            <p className="text-muted-foreground leading-relaxed">
              Currently based in <span className="text-primary font-medium">Columbus, Ohio</span> and 
              studying <span className="text-primary font-medium">Computer & Information Science</span> at 
              The Ohio State University.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
