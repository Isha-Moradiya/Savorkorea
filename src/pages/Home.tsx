import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Utensils } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Signature Bibimbap",
      price: "$18.50",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800",
      desc: "Warm rice topped with sautéed vegetables, chili pepper paste, and a fried egg."
    },
    {
      id: 2,
      name: "Premium Bulgogi",
      price: "$24.00",
      image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800",
      desc: "Thinly sliced ribeye beef marinated in a sweet and savory soy-based sauce."
    },
    {
      id: 3,
      name: "Spicy Kimchi Jjigae",
      price: "$16.50",
      image: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?auto=format&fit=crop&q=80&w=800",
      desc: "A classic spicy stew made with aged kimchi, pork belly, and soft tofu."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=2000" 
            alt="Korean BBQ Table" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-destructive text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Authentic Korean Cuisine
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-8">
              The Soul of <br />
              <span className="text-destructive">Korean Flavor</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Experience a culinary journey through the vibrant streets of Seoul. Traditional recipes met with modern elegance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/order" className="bg-destructive text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                Order Now <ArrowRight size={18} />
              </Link>
              <Link to="/reservation" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors">
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Chef's Recommendations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our most beloved dishes, prepared with the finest ingredients and centuries-old techniques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, idx) => (
              <motion.div 
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-primary shadow-sm">
                    {dish.price}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-destructive transition-colors">{dish.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef cooking" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="font-bold">4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">Based on 2,000+ reviews</p>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-destructive font-bold tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              A Tradition of Excellence <br />Since 1998
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SavorKorea began as a small family kitchen in the heart of Seoul. Today, we continue that legacy by serving authentic flavors that bridge the gap between tradition and modernity. Every dish is a story of heritage.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-xl text-destructive shadow-sm">
                  <Utensils size={24} />
                </div>
                <span className="font-bold">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-xl text-destructive shadow-sm">
                  <Clock size={24} />
                </div>
                <span className="font-bold">Fast Delivery</span>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 font-bold text-primary hover:text-destructive transition-colors">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 relative z-10">Join the Savor Club</h2>
            <p className="text-white/70 mb-10 max-w-md mx-auto relative z-10">
              Subscribe to get exclusive offers, new menu alerts, and a 10% discount on your first order.
            </p>
            <form className="flex flex-col md:flex-row gap-4 relative z-10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-destructive"
              />
              <button className="bg-destructive text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;