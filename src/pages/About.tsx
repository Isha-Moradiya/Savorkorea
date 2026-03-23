import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, History } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const values = [
    { icon: Heart, title: "Authenticity", desc: "We stay true to traditional Korean recipes passed down through generations." },
    { icon: Users, title: "Community", desc: "SavorKorea is a place where friends and family gather to share more than just a meal." },
    { icon: Award, title: "Quality", desc: "We source only the freshest ingredients, from local produce to premium imported spices." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-destructive font-bold tracking-widest uppercase text-sm">Our Story</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mt-4 mb-8 leading-tight">
                Bringing the Heart of <span className="text-destructive">Seoul</span> to Your Table
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 1998, SavorKorea began as a small family-run kitchen with a simple mission: to share the rich, vibrant flavors of authentic Korean cuisine with our community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue that legacy, blending time-honored techniques with modern culinary artistry to create an unforgettable dining experience.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef at work" 
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center text-destructive">
                    <History size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">25+</p>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission/Vision */}
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  To provide an authentic Korean dining experience that nourishes both the body and soul, celebrating the rich cultural heritage of Korea through every dish we serve.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  To be the premier destination for Korean cuisine, recognized for our commitment to tradition, innovation, and exceptional hospitality.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-border hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-destructive mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}