import { motion } from 'motion/react';
import { Package, Truck, CheckCircle, Search, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<null | 'processing' | 'shipped' | 'delivered'>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tracking
    if (orderId) setStatus('processing');
  };

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen flex flex-col items-center">
      <div className="max-w-xl w-full px-6 text-center">
        <header className="mb-12">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="w-12 h-px bg-gold" />
            <Package size={24} className="text-gold" />
            <span className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl text-green-dark mb-4">Track your Order</h1>
          <p className="text-gray-500 font-light">Enter your Order ID received in your email (e.g. PB-123456)</p>
        </header>

        <form onSubmit={handleTrack} className="flex gap-2 mb-20">
          <input 
            type="text" 
            placeholder="PB-XXXXXX"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 p-4 rounded-xl border border-cream outline-gold bg-cream/20 font-mono text-center text-green-dark"
            required
          />
          <button className="bg-green-dark text-cream px-8 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-green-mid transition-all">
            Track
          </button>
        </form>

        {status && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="flex justify-between items-center relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-cream -z-10" />
              {[
                { icon: <Package />, label: "Processing", active: true },
                { icon: <Truck />, label: "Shipped", active: false },
                { icon: <CheckCircle />, label: "Delivered", active: false }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                   <div className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center ${step.active ? 'bg-green-dark text-gold shadow-lg ring-4 ring-green-dark/10' : 'bg-cream text-gray-400'}`}>
                      {step.icon}
                   </div>
                   <span className={`text-[9px] font-bold uppercase tracking-widest ${step.active ? 'text-green-dark' : 'text-gray-400'}`}>
                     {step.label}
                   </span>
                </div>
              ))}
            </div>

            <div className="bg-cream-dark/20 p-8 rounded-3xl border border-cream-dark/50 text-left">
               <h3 className="font-serif text-xl text-green-dark mb-4 font-bold uppercase tracking-widest text-[10px] text-gold">Live Updates</h3>
               <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-1 h-full bg-green-dark rounded-full" />
                    <div>
                       <p className="text-sm font-bold text-green-dark">Order Received & Batching</p>
                       <p className="text-xs text-gray-400">Our artisans are selecting the products for your order.</p>
                       <p className="text-[10px] text-gold font-bold mt-1">Today, 10:45 AM</p>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        )}

        <div className="mt-20 pt-10 border-t border-cream-dark text-gray-400 flex items-center justify-center gap-3">
           <HelpCircle size={16} />
           <p className="text-xs font-light">Need help? <a href="#" className="text-gold border-b border-gold font-medium">Contact Support</a></p>
        </div>
      </div>
    </main>
  );
}
