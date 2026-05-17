import { motion } from 'motion/react';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="pt-40 pb-20 min-h-screen flex flex-col items-center justify-center px-6 bg-cream/20">
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-24 h-24 bg-green-dark text-gold rounded-full flex items-center justify-center mb-10 shadow-2xl"
      >
        <CheckCircle size={48} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-xl"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-green-dark mb-6">Your PureBar is on the way!</h1>
        <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
          Order #PB-{Math.floor(100000 + Math.random() * 900000)} has been received. 
          We'll send you an update as soon as our artisans finish preparing your botanical bars. 
          Payment will be collected upon delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/products" 
            className="w-full sm:w-auto bg-green-dark text-cream px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-green-mid transition-all shadow-xl shadow-green-dark/20 active:scale-95"
          >
            Continue Shopping
          </Link>
          <Link 
            to="/" 
            className="w-full sm:w-auto border-2 border-green-dark text-green-dark px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-green-dark hover:text-cream transition-all active:scale-95"
          >
            Go to Homepage
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-cream-dark flex items-center justify-center gap-2 text-gray-400 text-xs uppercase tracking-widest font-bold">
           <ShoppingBag size={14} /> Eco-friendly packaging secured
        </div>
      </motion.div>
    </div>
  );
}
