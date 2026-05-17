import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

export default function Wishlist({ 
  wishlist, 
  onAddToCart, 
  onRemove 
}: { 
  wishlist: Product[], 
  onAddToCart: (p: Product) => void,
  onRemove: (p: Product) => void
}) {
  if (wishlist.length === 0) {
    return (
      <div className="pt-40 pb-20 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center text-brown mb-8">
          <Heart size={40} strokeWidth={1} />
        </div>
        <h1 className="font-serif text-4xl text-green-dark mb-4">Your wishlist is empty</h1>
        <p className="text-gray-500 mb-10 text-center max-w-sm font-light">
          Save items that you love so you can find them easily later.
        </p>
        <Link to="/products" className="bg-green-dark text-cream px-10 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-green-mid transition-all">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-cream-dark pb-8">
          <h1 className="font-serif text-4xl md:text-5xl text-green-dark">My Wishlist</h1>
          <span className="text-sm font-medium text-gray-400">{wishlist.length} Saved</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {wishlist.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group"
              >
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={() => onRemove(product)}
                    className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-red-400 hover:text-red-600 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-16">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-green-mid hover:text-green-dark font-medium transition-colors">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
