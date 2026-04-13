"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Dining() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section id="dining" ref={containerRef} className="relative py-32 md:py-56 overflow-hidden bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 border border-luxury-gold/30 rounded-full mb-8"
            >
              <p className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
                Fine Dining
              </p>
            </motion.div>
            
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-10 leading-[0.9] italic">
              Saffron <br />
              <span className="not-italic text-luxury-gold">& Gold</span>
            </h2>
            
            <div className="space-y-8 text-luxury-text/70 leading-relaxed font-light text-xl max-w-lg">
              <p className="italic">
                "Where taste meets tradition in a dance of luxury."
              </p>
              <p className="text-base text-luxury-champagne/60 leading-relaxed">
                Experience a symphony of flavors at Saffron & Gold. Our award-winning chefs 
                reimagine Indian classics with continental sophistication, served under the 
                Delhi stars on our exclusive rooftop terrace.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-luxury-border/30">
                <div className="group cursor-default">
                  <h4 className="text-luxury-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">Cuisine</h4>
                  <p className="text-base font-medium">Indian Fusion</p>
                </div>
                <div className="group cursor-default">
                  <h4 className="text-luxury-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">Timings</h4>
                  <p className="text-base font-medium">07 AM – 11 PM</p>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, gap: "1.5rem" }}
              whileTap={{ scale: 0.98 }}
              className="mt-16 px-12 py-5 bg-luxury-gold text-luxury-bg font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-4 transition-all duration-500 rounded-lg shadow-xl"
            >
              Book a Table
              <div className="w-8 h-[1px] bg-luxury-bg" />
            </motion.button>
          </motion.div>

          {/* Right Side: Image with Dual Parallax */}
          <div className="relative order-1 lg:order-2">
             {/* Floating Decorative Box */}
             <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]) }}
               className="absolute -top-12 -left-12 w-48 h-48 border border-luxury-gold/20 z-0 hidden lg:block" 
             />
             
             <div className="relative h-[500px] md:h-[750px] overflow-hidden rounded-2xl shadow-2xl z-10 border border-luxury-border/20">
                <motion.div style={{ y, scale: 1.1, rotate }} className="relative w-full h-[120%] -top-[10%]">
                  <Image 
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Saffron & Gold Dining" 
                    fill
                    className="object-cover brightness-75"
                  />
                  {/* Dynamic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-60" />
                </motion.div>
                
                {/* Floating Badge */}
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="absolute bottom-10 left-10 p-8 bg-luxury-bg/40 backdrop-blur-2xl border border-white/10 rounded-xl"
                >
                   <p className="text-luxury-gold font-serif italic text-2xl mb-1">Rooftop Lounge</p>
                   <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Exclusive Dining Experience</p>
                </motion.div>
             </div>
             
             {/* Decorative Background Text */}
             <div className="absolute -bottom-16 -right-16 text-[150px] font-serif italic text-luxury-gold/5 pointer-events-none select-none z-0">
               Taste
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
