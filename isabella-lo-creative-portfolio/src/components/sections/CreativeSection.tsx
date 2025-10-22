import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { creativeProjects } from "@/data/projects";
import { CheckCircle2, X } from "lucide-react";

const CreativeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof creativeProjects[0] | null>(null);

  return (
    <>
      <section id="creative" className="min-h-screen py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Creative
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Design, branding, video editing, and podcasts
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300" />
                
                {/* Card Content */}
                <div className="relative backdrop-blur-sm bg-card/60 rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm bg-card/95 rounded-2xl p-8 md:p-12 border border-border/50 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              {selectedProject.role && (
                <p className="text-lg text-muted-foreground mb-4">{selectedProject.role}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {/* Achievements */}
              {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                <div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CreativeSection;
