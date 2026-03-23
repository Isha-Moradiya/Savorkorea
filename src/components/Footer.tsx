import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="font-serif text-2xl font-bold tracking-tighter">
            SAVOR<span className="text-destructive">KOREA</span>
          </Link>
          <p className="text-white/60 leading-relaxed">
            Experience the authentic soul of Korean cuisine. From sizzling BBQ to comforting stews, we bring the heart of Seoul to your table.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-destructive transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-white/60">
            <li><Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
            <li><Link to="/reservation" className="hover:text-white transition-colors">Reservations</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 text-destructive" />
              <span>123 K-Town Blvd, Los Angeles, CA 90010</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-destructive" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-destructive" />
              <span>hello@savorkorea.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Opening Hours</h4>
          <ul className="space-y-2 text-white/60">
            <li className="flex justify-between">
              <span>Mon - Thu</span>
              <span>11:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Fri - Sat</span>
              <span>11:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>12:00 PM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2026 SavorKorea. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;