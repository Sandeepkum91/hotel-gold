"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform, motion, animate, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

function Counter({ value, suffix = "", label }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start">
      <div className="text-3xl sm:text-4xl md:text-6xl font-serif text-luxury-gold flex">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-luxury-champagne/60 mt-2 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-8 md:gap-12"
        >
          <Counter value={80} suffix="+" label="Luxury Rooms" />
          <Counter value={5} label="Star Rated" />
          <Counter value={10000} suffix="+" label="Happy Guests" />
          <Counter value={2024} label="Established" />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
           initial={{ opacity: 0, x: 60 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight">
            A Legacy of <span className="italic">Sophistication</span> & Timeless Hospitality
          </h2>
          <p className="text-lg text-luxury-text/80 leading-relaxed font-light">
            Founded on the principles of unparalleled service and refined elegance, 
            The Golden Arch has become a beacon of luxury in New Delhi's most vibrant district. 
            Our commitment to excellence ensures that every guest experiences a stay 
            that is both restorative and inspiring.
          </p>
          <div className="pt-4">
            <motion.div 
              whileHover={{ width: "100%" }}
              className="h-[1px] bg-luxury-gold w-24 transition-all duration-500"
            />
            <button className="mt-4 text-sm font-bold uppercase tracking-widest text-luxury-gold hover:text-luxury-champagne transition-colors">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
