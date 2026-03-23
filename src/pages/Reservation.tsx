import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare, CheckCircle2, ArrowRight, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const timeSlots = [
  "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
  "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
];

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    requests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.date || !formData.time || !formData.guests) {
        toast.error("Please fill in all details to continue");
        return;
      }
      if (formData.guests < 1 || formData.guests > 12) {
        toast.error("Guest count must be between 1 and 12");
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please provide your contact information");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      toast.success("Reservation confirmed!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive font-bold tracking-widest uppercase text-sm"
            >
              Book Your Experience
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl font-bold text-primary mt-2 mb-4"
            >
              Table Reservation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground"
            >
              Join us for an authentic taste of Korea. Please fill out the form below.
            </motion.p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-border shadow-xl overflow-hidden">
            {/* Progress Bar */}
            {step < 3 && (
              <div className="flex h-2 bg-secondary">
                <div 
                  className="bg-destructive transition-all duration-500 ease-out" 
                  style={{ width: `${(step / 2) * 100}%` }}
                />
              </div>
            )}

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-bold text-primary">
                          <Calendar size={16} className="text-destructive" /> Date
                        </label>
                        <input 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-bold text-primary">
                          <Clock size={16} className="text-destructive" /> Time
                        </label>
                        <select 
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none appearance-none"
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-bold text-primary">
                          <Users size={16} className="text-destructive" /> Guests
                        </label>
                        <input 
                          type="number" 
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          min="1"
                          max="12"
                          className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                        />
                        <p className="text-[10px] text-muted-foreground">Max 12 guests online</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-primary">
                        <MessageSquare size={16} className="text-destructive" /> Special Requests
                      </label>
                      <textarea 
                        name="requests"
                        value={formData.requests}
                        onChange={handleInputChange}
                        placeholder="Allergies, special occasions, or seating preferences..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none resize-none"
                      />
                    </div>

                    <button 
                      onClick={nextStep}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-destructive transition-colors flex items-center justify-center gap-2 group"
                    >
                      Continue to Contact Details
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-4"
                    >
                      <ChevronLeft size={16} /> Back to details
                    </button>

                    <div className="bg-secondary/50 p-6 rounded-2xl mb-8 flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-destructive" />
                        <span className="font-bold">{formData.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-destructive" />
                        <span className="font-bold">{formData.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-destructive" />
                        <span className="font-bold">{formData.guests} Guests</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-primary">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-destructive text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Confirm Reservation"
                      )}
                    </button>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-primary mb-4">Reservation Confirmed!</h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Thank you, {formData.name}. We've sent a confirmation email to {formData.email}. We look forward to serving you!
                    </p>
                    
                    <div className="bg-secondary/30 p-8 rounded-3xl max-w-sm mx-auto mb-10 text-left space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-bold">{formData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-bold">{formData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guests</span>
                        <span className="font-bold">{formData.guests} People</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reference</span>
                        <span className="font-bold text-destructive">#SK-{Math.floor(Math.random() * 10000)}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => window.location.href = '/'}
                      className="text-primary font-bold hover:text-destructive transition-colors"
                    >
                      Return to Home
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white p-8 rounded-3xl border border-border">
              <h3 className="font-serif text-xl font-bold mb-4">Reservation Policy</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">• We hold tables for 15 minutes past reservation time.</li>
                <li className="flex gap-2">• For parties larger than 12, please call us directly.</li>
                <li className="flex gap-2">• Cancellations should be made at least 2 hours in advance.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-border">
              <h3 className="font-serif text-xl font-bold mb-4">Private Events</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Planning a special celebration or corporate event? Our private dining room can accommodate up to 30 guests.
              </p>
              <a href="/contact" className="text-destructive font-bold text-sm hover:underline">Inquire About Events →</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}