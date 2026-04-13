"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Animated Background Image - Optimized */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
      >
        <Image 
          src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury Hotel Exterior"
          fill
          priority
          className="object-cover"
        />
        {/* Complex Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </motion.div>
      
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 w-full max-w-7xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold inline-block border-b border-luxury-gold/30 pb-2">
              The Epitome of Indian Hospitality
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] font-serif mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter">
            <motion.span 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="block italic font-light"
            >
              The Golden
            </motion.span>
            <motion.span 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="block text-luxury-gold"
            >
              Arch Hotel
            </motion.span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,169,110,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-[240px] sm:w-auto px-12 py-5 bg-luxury-gold text-luxury-bg font-bold uppercase tracking-[0.3em] text-[10px] transition-all rounded-sm shadow-2xl"
            >
              Reserve Your Stay
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="w-[240px] sm:w-auto px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-[10px] backdrop-blur-md transition-all rounded-sm"
            >
              View Suites
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Lines and Elements */}
      <motion.div 
         initial={{ opacity: 0, height: 0 }}
         animate={{ opacity: 0.2, height: "100px" }}
         transition={{ delay: 2, duration: 1 }}
         className="absolute left-10 bottom-0 w-[1px] bg-luxury-gold hidden xl:block"
      />
      <motion.div 
         initial={{ opacity: 0, height: 0 }}
         animate={{ opacity: 0.2, height: "100px" }}
         transition={{ delay: 2, duration: 1 }}
         className="absolute right-10 top-0 w-[1px] bg-luxury-gold hidden xl:block"
      />

      {/* Hero Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <div className="w-5 h-8 border border-luxury-gold/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-luxury-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
