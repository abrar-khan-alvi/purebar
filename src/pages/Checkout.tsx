import { useState } from 'react';
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, CreditCard, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

export default function Checkout({ cart, clearCart }: { cart: CartItem[], clearCart: () => void }) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 80;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  if (cart.length === 0) {
    return <Link to="/">Go back home</Link>;
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-cream-dark/20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-dark mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to Cart
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="font-serif text-4xl text-green-dark mb-10">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-gold mb-6">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center font-bold text-sm">1</span>
                  <h3 className="font-bold uppercase tracking-widest text-sm text-green-dark">Shipping Information</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-white border p-3 rounded outline-gold" required />
                  <input type="text" placeholder="Last Name" className="bg-white border p-3 rounded outline-gold" required />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white border p-3 rounded outline-gold" required />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border p-3 rounded outline-gold" required />
                <textarea placeholder="Delivery Address" className="w-full bg-white border p-3 rounded outline-gold" rows={3} required />
                <div className="grid grid-cols-2 gap-4">
                  <select className="bg-white border p-3 rounded outline-gold">
                    <option>Dhaka City</option>
                    <option>Outside Dhaka</option>
                  </select>
                  <input type="text" placeholder="Postal Code" className="bg-white border p-3 rounded outline-gold" required />
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3 text-gold mb-6">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="font-bold uppercase tracking-widest text-sm text-green-dark">Payment Method</h3>
                </div>
                <div className="bg-white border-2 border-green-dark p-6 rounded-2xl flex items-center gap-4 shadow-sm border-l-8">
                   <div className="w-12 h-12 bg-green-dark/10 rounded-full flex items-center justify-center text-green-dark">
                      <Truck size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-green-dark mb-1">Cash on Delivery (COD)</p>
                      <p className="text-xs text-gray-500 font-light">Pay with cash when your package arrives at your doorstep.</p>
                   </div>
                </div>
              </section>

              <button 
                disabled={isProcessing}
                className="w-full bg-green-dark text-cream font-bold uppercase tracking-widest py-5 rounded-xl shadow-2xl hover:bg-green-mid transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
              >
                {isProcessing ? 'Processing Order...' : 'Place Order (COD) '}
                {!isProcessing && <ChevronRight size={20} />}
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 border border-cream-dark shadow-sm sticky top-32">
              <h2 className="font-serif text-2xl text-green-dark mb-8">Order Overview</h2>
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg bg-cream shrink-0 overflow-hidden">
                       <img src={item.image} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-green-dark">{item.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-serif font-bold text-green-dark">৳{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-cream-dark">
                 <div className="flex justify-between text-sm text-gray-500">
                   <span>Subtotal</span>
                   <span>৳{subtotal}</span>
                 </div>
                 <div className="flex justify-between text-sm text-gray-500">
                   <span>Shipping</span>
                   <span>{shipping === 0 ? 'FREE' : `৳${shipping}`}</span>
                 </div>
                 <div className="flex justify-between pt-4 border-t border-cream-dark">
                   <span className="font-serif text-xl">Grand Total</span>
                   <span className="font-serif text-2xl font-bold text-green-dark">৳{total}</span>
                 </div>
              </div>

              <div className="mt-8 space-y-3">
                 <div className="flex items-center gap-3 text-gray-500">
                   <ShieldCheck size={16} className="text-gold" />
                   <span className="text-[10px] uppercase font-bold tracking-widest">Secure Checkout</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-500">
                   <Truck size={16} className="text-gold" />
                   <span className="text-[10px] uppercase font-bold tracking-widest">Tracked Delivery</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
