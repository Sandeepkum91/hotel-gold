"use client";

import { motion } from "framer-motion";
import { Waves, Bell, Utensils, Dumbbell, Wine, Headset } from "lucide-react";

const amenities = [
  { icon: <Waves size={36} />, name: "Rooftop Infinity Pool", desc: "Temperature controlled pool with panoramic city views" },
  { icon: <Bell size={36} />, name: "Spa & Wellness", desc: "Traditional and modern luxury spa treatments" },
  { icon: <Utensils size={36} />, name: "Saffron & Gold", desc: "Michelin-standard fine dining experience" },
  { icon: <Dumbbell size={36} />, name: "Equipped Gym", desc: "State-of-the-art global fitness equipment" },
  { icon: <Wine size={36} />, name: "Sunset Bar", desc: "Handcrafted cocktails with evening skyline vibes" },
  { icon: <Headset size={36} />, name: "24/7 Service", desc: "Bespoke concierge & room service anytime" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-32 md:py-48 bg-luxury-bg relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#c9a96e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12 text-center lg:text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 border border-luxury-gold/30 rounded-full mb-6"
            >
              <p className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
                Exclusivity
              </p>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif italic"
            >
              Refined <span className="not-italic text-luxury-gold">Pleasures</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-champagne max-w-sm text-lg font-light leading-relaxed italic"
          >
            "Luxury must be comfortable, otherwise it is not luxury."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {amenities.map((amenity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className="relative p-12 bg-luxury-card border border-luxury-border/30 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-luxury-gold/40 group-hover:shadow-[0_20px_50px_-15px_rgba(201,169,110,0.15)]">
                {/* Animated Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-luxury-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Icon Container */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-luxury-bg border border-luxury-border flex items-center justify-center text-luxury-gold mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                   <div className="absolute inset-0 bg-luxury-gold/5 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                   {amenity.icon}
                </div>
                
                <h3 className="relative z-10 text-2xl font-serif mb-4 group-hover:text-luxury-gold transition-colors">{amenity.name}</h3>
                <p className="relative z-10 text-sm text-luxury-champagne/60 leading-relaxed font-light">
                  {amenity.desc}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-6 right-8 opacity-5 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-10">
                   {/* Ghost Icon */}
                   {amenity.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
