import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const total = getTotalPrice();
  const deliveryFee = total > 0 ? 4.99 : 0;
  const tax = total * 0.08;
  const finalTotal = total + deliveryFee + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#111]">
        <Header />
        <main className="pt-24 lg:pt-28 pb-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center py-20">
              <ShoppingBag className="w-24 h-24 text-[#c59d5f]/30 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-[#f4efe4] mb-4">
                Your cart is empty
              </h2>
              <p className="text-[#f4efe4]/60 mb-8 text-lg">
                Looks like you haven't added anything to your cart yet
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f8911b] to-[#e08016] px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111]">
      <Header />
      
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Back Button */}
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-[#c59d5f] hover:text-[#d4ae70] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Continue Shopping</span>
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#f4efe4] mb-2">
              Shopping Cart
            </h1>
            <p className="text-[#f4efe4]/60 text-lg">
              {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1a1a1a] rounded-2xl p-4 lg:p-6 flex flex-col sm:flex-row gap-4 hover:bg-[#222] transition-colors"
                >
                  {/* Image */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#f4efe4] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-[#f4efe4]/60 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-[#262525] rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-[#333] rounded-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4 text-[#f4efe4]" />
                        </button>
                        <span className="text-[#f4efe4] font-bold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-[#333] rounded-lg transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4 text-[#f4efe4]" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-[#c59d5f]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors group"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:sticky lg:top-28">
                <h2 className="text-2xl font-bold text-[#f4efe4] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#f4efe4]/80">
                    <span>Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#f4efe4]/80">
                    <span>Delivery Fee</span>
                    <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#f4efe4]/80">
                    <span>Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-[#333] pt-4">
                    <div className="flex justify-between text-[#f4efe4] text-xl font-bold">
                      <span>Total</span>
                      <span className="text-[#c59d5f]">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#f8911b] to-[#e08016] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4">
                  Proceed to Checkout
                </button>

                <p className="text-[#f4efe4]/50 text-sm text-center">
                  Free delivery on orders over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
