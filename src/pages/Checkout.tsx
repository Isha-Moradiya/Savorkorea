import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { ChevronLeft, Lock } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'failed' | null>(null);

  const total = getTotalPrice();
  const deliveryFee = total > 0 ? 4.99 : 0;
  const tax = total * 0.08;
  const finalTotal = total + deliveryFee + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 lg:pt-28 pb-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center py-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Your cart is empty
              </h2>
              <p className="text-foreground/60 mb-8 text-lg">
                Please add items to your cart before checking out
              </p>
              <button
                onClick={() => navigate('/menu')}
                className="inline-flex items-center gap-2 bg-destructive px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Menu
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setFormData(prev => ({ ...prev, cardNumber: value }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setFormData(prev => ({ ...prev, expiryDate: value }));
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setFormData(prev => ({ ...prev, cvv: value }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      return false;
    }
    if (!formData.cardName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all required fields');
      return;
    }

    setShowPaymentModal(true);
  };

  const handlePayment = (success: boolean) => {
    setPaymentStatus(success ? 'success' : 'failed');
    
    if (success) {
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/order')}
            className="inline-flex items-center gap-2 text-destructive hover:text-destructive/80 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Cart</span>
          </button>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Checkout
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Delivery Information */}
                <div className="bg-secondary rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Delivery Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive"
                        placeholder="123 Main Street"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive"
                          placeholder="New York"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Postal Code *
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive"
                          placeholder="10001"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-secondary rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Lock size={24} />
                    Payment Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive font-mono"
                        placeholder="4532 1234 5678 9010"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Expiry Date (MM/YY) *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleExpiryChange}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive font-mono"
                          placeholder="12/25"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleCVVChange}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-destructive font-mono"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-2xl p-6 lg:sticky lg:top-28">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-foreground/70">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="text-foreground font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 border-t border-foreground/10 pt-4">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-foreground/10 pt-3 mt-3">
                    <div className="flex justify-between text-foreground font-bold text-lg">
                      <span>Total</span>
                      <span className="text-destructive">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-destructive text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Complete Payment
                </button>

                <p className="text-foreground/50 text-xs text-center mt-4">
                  Your payment is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PaymentModal
        isOpen={showPaymentModal}
        status={paymentStatus}
        onClose={() => setShowPaymentModal(false)}
        onPayment={handlePayment}
      />

      <Footer />
    </div>
  );
}
