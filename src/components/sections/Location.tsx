"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Landmark } from "lucide-react";

const landmarks = [
  "India Gate — 2.5 km",
  "Connaught Place — 0.5 km",
  "Jantar Mantar — 1.2 km",
  "Railway Station — 3.8 km"
];

export default function Location() {
  return (
    <section className="py-24 md:py-40 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Location</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif italic mb-10">
              The Heart <span className="not-italic">of Delhi</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Address</h4>
                  <p className="text-luxury-text/60 font-light text-sm">42, MG Road, Connaught Place, New Delhi, India-110001</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Contact</h4>
                  <p className="text-luxury-text/60 font-light text-sm">+91 98765 43210</p>
                  <p className="text-luxury-text/60 font-light text-sm">reservations@goldenarchhotel.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">
                <Landmark size={16} /> Nearby Landmarks
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {landmarks.map((landmark, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-luxury-text/60 font-light">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[500px] border border-luxury-border p-4 bg-luxury-card"
          >
            <div className="w-full h-full bg-neutral-900 border border-luxury-border overflow-hidden relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe 
                src="https://maps.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
              />
            </div>
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-luxury-gold/50 m-[-2px]" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-luxury-gold/50 m-[-2px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
