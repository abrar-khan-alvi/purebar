import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function AllProducts({ 
  onAddToCart,
  wishlist = [],
  onToggleWishlist
}: { 
  onAddToCart: (p: Product) => void;
  wishlist?: Product[];
  onToggleWishlist?: (p: Product) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'skin' | 'hair' | 'gift'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Collection</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-green-dark mb-10">Our Full Range</h1>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-10 p-4 md:p-6 bg-cream rounded-[2rem] border border-cream-dark">
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 lg:pb-0">
              {['all', 'skin', 'hair', 'gift'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap shrink-0",
                    activeCategory === cat ? "bg-green-dark text-cream shadow-lg" : "bg-white text-gray-400 hover:text-green-dark border border-cream-dark"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search soaps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-cream-dark pl-12 pr-6 py-4 rounded-2xl outline-gold focus:ring-2 focus:ring-gold/20 transition-all text-xs font-medium tracking-wide"
              />
            </div>
          </div>
        </header>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onAddToCart={onAddToCart} 
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.some(item => item.id === p.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-40 text-center container">
            <h2 className="font-serif text-3xl text-green-dark mb-4">No bars found with "{searchQuery}"</h2>
            <p className="text-gray-500 font-light">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-8 text-gold font-bold uppercase tracking-widest text-[10px] border-b border-gold pb-1"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
