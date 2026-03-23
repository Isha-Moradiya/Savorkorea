import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Plus, Minus, ShoppingBag, ArrowLeft, MessageSquare, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems } from '../data/menuData';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

export default function MenuItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [qty, setQty] = useState(1);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const item = menuItems.find(i => i.id === Number(id));
  
  if (!item) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Item not found</h1>
          <Link to="/menu" className="text-destructive font-bold">Back to Menu</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedItems = menuItems
    .filter(i => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to add a review");
      return;
    }
    toast.success("Review submitted for moderation!");
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-bold"
          >
            <ArrowLeft size={20} /> Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute top-8 left-8">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary">
                  {item.category}
                </span>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 text-yellow-500 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-primary font-bold">{item.rating}</span>
                <span className="text-muted-foreground text-sm">({item.reviews.length} reviews)</span>
              </div>

              <h1 className="font-serif text-5xl font-bold text-primary mb-4">{item.name}</h1>
              <p className="text-3xl font-bold text-destructive mb-8">${item.price.toFixed(2)}</p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {item.fullDesc}
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-6 bg-secondary rounded-2xl px-6 py-4">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="hover:text-destructive transition-colors">
                    <Minus size={20} />
                  </button>
                  <span className="font-bold text-xl w-6 text-center">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="hover:text-destructive transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
                <button 
                  onClick={() => toast.success(`${item.name} added to cart!`)}
                  className="flex-1 bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={20} /> Add to Cart
                </button>
              </div>
            </motion.div>
          </div>

          {/* Reviews Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <MessageSquare className="text-destructive" /> Customer Reviews
              </h2>
              
              <div className="space-y-8">
                {item.reviews.length > 0 ? (
                  item.reviews.map((review) => (
                    <div key={review.id} className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                            <User size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-primary">{review.userName}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">No reviews yet. Be the first to review!</p>
                )}
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-[2.5rem] border border-border shadow-xl sticky top-32">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Add a Review</h3>
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Rating</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    >
                      {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Comment</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Share your experience..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none resize-none"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    />
                  </div>
                  <button className="w-full bg-destructive text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Related Items */}
          {relatedItems.length > 0 && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedItems.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/menu/${related.id}`}
                    className="bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img src={related.image} alt={related.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-primary group-hover:text-destructive transition-colors">{related.name}</h3>
                      <p className="text-destructive font-bold">${related.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}