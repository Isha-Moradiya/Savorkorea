import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, CreditCard, Truck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const Ordering = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Signature Bibimbap', price: 18.50, qty: 1, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=200' },
    { id: 5, name: 'Galbi (Short Ribs)', price: 28.00, qty: 2, image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=200' },
  ]);

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.info("Item removed from cart");
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const deliveryFee = 5.00;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1">
            <h1 className="font-serif text-4xl font-bold text-primary mb-8 flex items-center gap-4">
              Your Order <span className="text-lg font-sans font-normal text-muted-foreground">({cart.length} items)</span>
            </h1>
            
            {cart.length > 0 ? (
              <div className="space-y-6">
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    className="flex items-center gap-6 bg-white p-4 rounded-2xl border border-border/50"
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                      <p className="text-destructive font-bold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-4 bg-secondary rounded-full px-4 py-2">
                      <button onClick={() => updateQty(item.id, -1)} className="hover:text-destructive transition-colors">
                        <Minus size={16} />
                      </button>
                      <span className="font-bold w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="hover:text-destructive transition-colors">
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-3 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-border">
                <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4 opacity-20" />
                <p className="text-xl text-muted-foreground">Your cart is empty</p>
                <button className="mt-6 text-destructive font-bold">Browse Menu</button>
              </div>
            )}
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm sticky top-32">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-xl font-bold text-primary">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border flex items-center gap-4 cursor-pointer hover:border-destructive transition-colors">
                  <Truck className="text-destructive" size={20} />
                  <div>
                    <p className="text-sm font-bold">Delivery Address</p>
                    <p className="text-xs text-muted-foreground">123 K-Town Blvd, LA</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border flex items-center gap-4 cursor-pointer hover:border-destructive transition-colors">
                  <CreditCard className="text-destructive" size={20} />
                  <div>
                    <p className="text-sm font-bold">Payment Method</p>
                    <p className="text-xs text-muted-foreground">Visa ending in 4242</p>
                  </div>
                </div>
              </div>

              <button 
                disabled={cart.length === 0}
                className="w-full mt-8 bg-destructive text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
                onClick={() => toast.success("Order placed successfully!")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ordering;