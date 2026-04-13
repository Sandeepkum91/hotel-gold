"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Rossi",
    country: "Italy",
    rating: 5,
    quote: "An unforgettable stay. The attention to detail and personalized service surpassed every expectation. Truly a sanctuary.",
  },
  {
    name: "Sarah Jenkins",
    country: "United Kingdom",
    rating: 5,
    quote: "The most beautiful hotel I've ever stayed in. The rooftop views and the spa treatments were absolutely divine.",
  },
  {
    name: "Jean-Pierre Blanc",
    country: "France",
    rating: 5,
    quote: "Level of professionalism is unmatched. From the moment we checked in, we felt like royalty. Highly recommended.",
  },
  {
    name: "Hiroshi Tanaka",
    country: "Japan",
    rating: 5,
    quote: "Minimalist elegance at its best. Tranquil, clean, and incredibly comfortable. We will definitely be back.",
  },
  {
    name: "Sofia Rodriguez",
    country: "Spain",
    rating: 5,
    quote: "Everything was perfect. The restaurant, the room, and the staff were all world-class. A truly luxury experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden max-w-full bg-luxury-bg border-y border-luxury-border">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4"
        >
          Guest Testimonials
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif italic"
        >
          What Our <span className="not-italic">Guests Say</span>
        </motion.h2>
      </div>

      <div className="flex relative items-center">
        {/* Infinite Scroll Container */}
        <motion.div
          animate={{
            x: [0, -1320], // Adjust based on total cards width
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap pl-8"
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[400px] bg-luxury-card border border-luxury-border p-8 md:p-12 shrink-0"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-luxury-text/80 italic font-light leading-relaxed mb-8 whitespace-normal">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-luxury-gold font-bold uppercase tracking-widest text-sm">{t.name}</h4>
                <p className="text-xs text-luxury-champagne/40 uppercase tracking-wider mt-1">{t.country}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
