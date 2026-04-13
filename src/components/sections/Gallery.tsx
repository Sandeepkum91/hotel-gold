"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Search } from "lucide-react";

const images = [
  { id: 1, src: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", span: "row-span-2 col-span-2 sm:col-span-1" },
  { id: 2, src: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", span: "sm:col-span-2" },
  { id: 3, src: "https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", span: "" },
  { id: 4, src: "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", span: "sm:col-span-2" },
  { id: 5, src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", span: "" },
  { id: 6, src: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", span: "row-span-2 col-span-2 sm:col-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-luxury-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-luxury-gold/30 rounded-full mb-6"
          >
            <p className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
              Visual Portfolio
            </p>
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-8"
          >
            Moments of <span className="not-italic text-luxury-gold">Perfection</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto opacity-30" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedImage(img.src)}
              whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
              className={`relative overflow-hidden cursor-pointer group rounded-xl ${img.span} border border-luxury-border/20 shadow-2xl shadow-black/50`}
            >
              <Image 
                src={img.src} 
                alt="Hotel Gallery" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-luxury-bg border border-luxury-gold flex items-center justify-center shadow-2xl"
                >
                  <Search className="text-luxury-gold" size={20} />
                </motion.div>
                
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-1">Architecture</p>
                    <p className="font-serif italic text-white text-base md:text-lg">Sophisticated Spaces</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              whileHover={{ rotate: 90 }}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] text-luxury-gold hover:text-white transition-all duration-500 bg-white/5 p-2 rounded-full border border-white/10"
            >
              <X size={28} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-6xl overflow-hidden rounded-2xl shadow-[0_0_100px_rgba(201,169,110,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Gallery Preview" 
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
