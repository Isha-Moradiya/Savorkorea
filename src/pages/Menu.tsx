import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import { menuItems } from '../data/menuData';

const categories = ['All', 'Starters', 'Main Course', 'BBQ', 'Desserts', 'Drinks'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl font-bold text-primary mb-6">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our curated selection of authentic Korean dishes, from traditional classics to modern interpretations.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat 
                      ? 'bg-destructive text-white shadow-md' 
                      : 'bg-secondary text-primary hover:bg-primary/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all group"
                >
                  <Link to={`/menu/${item.id}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl font-bold text-primary group-hover:text-destructive transition-colors">{item.name}</h3>
                        <span className="font-bold text-destructive">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{item.desc}</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => addToCart(e, item.name)}
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold hover:bg-destructive transition-colors"
                        >
                          <Plus size={18} /> Add
                        </button>
                        <div className="p-3 rounded-xl bg-secondary text-primary group-hover:bg-destructive group-hover:text-white transition-colors">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;