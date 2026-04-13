"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const formFields = [
  { label: "Full Name", type: "text", placeholder: "Alexander Rossi" },
  { label: "Email Address", type: "email", placeholder: "alex@example.com" },
  { label: "Phone Number", type: "tel", placeholder: "+33 1 23 45 67 89" },
  { label: "Check-in Date", type: "date" },
  { label: "Check-out Date", type: "date" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Booking() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-luxury-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4"
          >
            Reservations
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif italic"
          >
            Start Your <span className="not-italic">Journey</span>
          </motion.h2>
        </div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-luxury-card border border-luxury-border p-8 md:p-12 shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          {formFields.map((field, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-champagne/60">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="bg-transparent border-b border-luxury-border py-4 outline-none focus:border-luxury-gold transition-colors text-luxury-text placeholder:text-luxury-text/20"
              />
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-champagne/60">Room Type</label>
            <select className="bg-transparent border-b border-luxury-border py-4 outline-none focus:border-luxury-gold transition-colors text-luxury-text appearance-none cursor-pointer">
              <option className="bg-luxury-card">Deluxe Room</option>
              <option className="bg-luxury-card">Premium Suite</option>
              <option className="bg-luxury-card">Presidential Suite</option>
            </select>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 mt-8 py-5 bg-luxury-gold text-luxury-bg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-luxury-champagne transition-all"
          >
            Check Availability <ArrowRight size={18} />
          </motion.button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-12 border-t border-luxury-border pt-12"
        >
          <a href="https://wa.me/919876543210" className="flex items-center gap-4 group" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-bg transition-all">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-champagne/40">Chat with us</p>
              <p className="font-serif">WhatsApp Support</p>
            </div>
          </a>
          
          <a href="mailto:reservations@goldenarchhotel.com" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-bg transition-all">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-champagne/40">Email us</p>
              <p className="font-serif">reservations@goldenarchhotel.com</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
