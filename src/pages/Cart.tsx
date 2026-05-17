import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

export default function Cart({ 
  cart, 
  updateQuantity, 
  removeFromCart 
}: { 
  cart: CartItem[], 
  updateQuantity: (id: string, delta: number) => void,
  removeFromCart: (id: string) => void
}) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 80;

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center text-green-mid mb-8">
          <ShoppingBag size={40} strokeWidth={1} />
        </div>
        <h1 className="font-serif text-4xl text-green-dark mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-10 text-center max-w-sm font-light">
          It looks like you haven't added any PureBars yet. Our skin-loving collection is waiting for you.
        </p>
        <Link to="/" className="bg-green-dark text-cream px-10 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-green-mid transition-all">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-cream-dark pb-8">
           <h1 className="font-serif text-4xl md:text-5xl text-green-dark">Shopping Bag</h1>
           <span className="text-sm font-medium text-gray-400">{cart.length} Items</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl border border-cream shadow-sm hover:shadow-md transition-shadow relative group"
                >
                  <div className="w-full sm:w-32 aspect-square rounded-xl overflow-hidden bg-cream shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{item.category}</p>
                        <h3 className="font-serif text-2xl text-green-dark">{item.name}</h3>
                      </div>
                      <span className="font-serif text-xl font-bold text-green-dark">৳{item.price * item.quantity}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-cream-dark rounded-lg p-0.5 bg-cream/20">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream rounded transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-sm font-bold text-green-dark">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream rounded transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <Link to="/" className="inline-flex items-center gap-2 text-sm text-green-mid hover:text-green-dark font-medium transition-colors">
              <ArrowLeft size={16} /> Continue Shopping
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-cream rounded-3xl p-8 sticky top-32">
              <h2 className="font-serif text-2xl text-green-dark mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold text-green-dark">৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-bold text-green-dark">{shipping === 0 ? 'FREE' : `৳${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-brown font-medium uppercase tracking-wider">
                    Add ৳{1501 - subtotal} more for FREE shipping!
                  </p>
                )}
                <div className="pt-4 border-t border-cream-dark flex justify-between">
                  <span className="font-serif text-xl">Total</span>
                  <span className="font-serif text-2xl font-bold text-green-dark">৳{subtotal + shipping}</span>
                </div>
              </div>
              <Link 
                to="/checkout"
                className="w-full bg-green-dark text-cream font-bold uppercase tracking-widest py-4 rounded shadow-xl hover:bg-green-mid transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Proceed to Checkout <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-[88px] left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-cream-dark z-40">
        <Link 
          to="/checkout"
          className="w-full bg-green-dark text-cream font-bold uppercase tracking-widest py-4 rounded-xl shadow-xl hover:bg-green-mid transition-all flex items-center justify-center gap-3 active:scale-95 text-xs"
        >
          Checkout • ৳{subtotal + shipping} <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
