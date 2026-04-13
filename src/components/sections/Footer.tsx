"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-bg border-t border-luxury-gold/20 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif text-luxury-gold mb-6 tracking-tighter">GOLDEN ARCH</h3>
            <p className="text-sm text-luxury-text/60 leading-relaxed font-light mb-8 italic">
              Where Luxury Meets Comfort. Experience world-class hospitality in the heart of New Delhi.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/goldenarchhotel" className="w-10 h-10 border border-luxury-border flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/goldenarchhotel" className="w-10 h-10 border border-luxury-border flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/goldenarchhotel" className="w-10 h-10 border border-luxury-border flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-luxury-border flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-luxury-text/60 font-light">
              <li><Link href="#rooms" className="hover:text-luxury-gold transition-colors">Rooms & Suites</Link></li>
              <li><Link href="#amenities" className="hover:text-luxury-gold transition-colors">Amenities</Link></li>
              <li><Link href="#gallery" className="hover:text-luxury-gold transition-colors">Gallery</Link></li>
              <li><Link href="#dining" className="hover:text-luxury-gold transition-colors">Dining</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gold mb-8">Information</h4>
            <ul className="space-y-4 text-sm text-luxury-text/60 font-light">
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gold mb-8">Newsletter</h4>
            <p className="text-sm text-luxury-text/60 font-light mb-6">Join our list for exclusive offers and updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-b border-luxury-border py-2 text-sm outline-none w-full focus:border-luxury-gold transition-colors"
              />
              <button className="ml-4 text-luxury-gold hover:text-luxury-champagne transition-colors uppercase tracking-widest text-[10px] font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-luxury-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-luxury-text/40">
          <p>© 2024 The Golden Arch Hotel. All Rights Reserved.</p>
          <p>Created with Elegance by Antigravity</p>
        </div>
      </div>
    </footer>
  );
}
