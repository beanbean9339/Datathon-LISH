import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import photoPlaceholder from "@/assets/photo-placeholder.jpg";

const photos = Array(9).fill(photoPlaceholder);

const ArtworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="artwork" className="min-h-screen py-24 px-4">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Artwork
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Traditional media and visual studies
            </p>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300" />
                
                {/* Image */}
                <div className="relative h-full border border-border/50 group-hover:border-primary/50 transition-colors rounded-2xl overflow-hidden">
                  <img
                    src={photo}
                    alt={`Artwork ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-card hover:bg-muted flex items-center justify-center transition-colors border border-border/50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            src={photos[selectedImage]}
            alt={`Artwork ${selectedImage + 1}`}
            className="max-w-full max-h-[90vh] rounded-2xl border border-border/50"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default ArtworkSection;
