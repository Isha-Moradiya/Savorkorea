import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-destructive font-bold tracking-widest uppercase text-sm">Get in Touch</span>
            <h1 className="font-serif text-5xl font-bold text-primary mt-4 mb-6">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or feedback? We'd love to hear from you. Fill out the form below or reach out through our contact details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-destructive shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Our Location</h3>
                    <p className="text-sm text-muted-foreground">123 K-Town Blvd, Los Angeles, CA 90010</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-destructive shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone Number</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-destructive shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email Address</h3>
                    <p className="text-sm text-muted-foreground">hello@savorkorea.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-destructive shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Opening Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon-Thu: 11am - 10pm</p>
                    <p className="text-sm text-muted-foreground">Fri-Sat: 11am - 11pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-border shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Message</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Your message here..."
                      className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none resize-none"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-destructive text-white py-5 rounded-2xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-24 rounded-[3rem] overflow-hidden h-[450px] border border-border shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220365169!2d-118.3016546234634!3d34.05112341775444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c76207960977%3A0x92319adfc36f270c!2sKoreatown%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1710854321000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}