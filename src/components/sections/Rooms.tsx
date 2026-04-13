"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bed, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹4,500",
    image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bed: "King Size",
    guests: "2 Guests",
    size: "45 sqm",
    amenities: ["AC", "Free WiFi", "40\" Smart TV", "Mini Bar", "City View"]
  },
  {
    id: 2,
    name: "Premium Suite",
    price: "₹8,500",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bed: "King Size + Sofa Bed",
    guests: "3 Guests",
    size: "65 sqm",
    amenities: ["AC", "Free WiFi", "55\" Smart TV", "Jacuzzi", "Living Area", "Breakfast"]
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: "₹18,000",
    image: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bed: "Super King Size",
    guests: "4 Guests",
    size: "120 sqm",
    amenities: ["Private Terrace", "Butler Service", "Home Theatre", "Jacuzzi", "Panoramic View"]
  }
];

function TiltCard({ room }: { room: typeof rooms[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#1c1a17] border border-luxury-border/30 overflow-hidden rounded-xl shadow-2xl"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-96 w-full overflow-hidden"
      >
        <Image 
          src={room.image} 
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a17] via-transparent to-transparent opacity-80" />
        
        <div 
            style={{ transform: "translateZ(80px)" }}
            className="absolute top-6 right-6 bg-luxury-gold text-luxury-bg font-bold px-4 py-2 rounded-full text-xs shadow-xl"
        >
          {room.price} <span className="text-[8px] opacity-70">/ NIGHT</span>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(60px)" }}
        className="p-8 relative -mt-20 z-10"
      >
        <div className="bg-luxury-bg/80 backdrop-blur-xl border border-luxury-border/30 p-6 rounded-lg shadow-2xl">
          <h3 className="text-3xl font-serif mb-4 group-hover:text-luxury-gold transition-colors">{room.name}</h3>
          
          <div className="flex items-center gap-6 text-luxury-champagne/60 text-xs mb-6 uppercase tracking-widest font-medium">
            <div className="flex items-center gap-2">
              <Bed size={14} className="text-luxury-gold" />
              <span>{room.bed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-luxury-gold" />
              <span>{room.guests}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {room.amenities.slice(0, 3).map(amenity => (
              <span key={amenity} className="text-[9px] uppercase tracking-wider bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20 px-3 py-1 rounded-sm">
                {amenity}
              </span>
            ))}
          </div>

          <motion.button 
            whileHover={{ letterSpacing: "0.25em" }}
            className="w-full py-4 bg-luxury-gold text-luxury-bg hover:bg-luxury-champagne transition-all duration-500 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[10px] rounded-sm"
          >
            Check Availability <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Rooms() {
  return (
    <section id="rooms" className="py-32 bg-luxury-bg relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 border border-luxury-gold/30 rounded-full mb-6"
          >
            <p className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
              Accommodation
            </p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif italic mb-6"
          >
            Elite <span className="not-italic text-luxury-gold">Living</span>
          </motion.h2>
          <div className="w-12 h-1 bg-luxury-gold mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <TiltCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
