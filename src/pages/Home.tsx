import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, Truck, Globe, Heart, ChevronRight, Sprout, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { PRODUCTS, TESTIMONIALS } from '../data';
import { cn } from '../lib/utils';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import heroImg from '../assets/images/hero_soaps_natural_setting_1778982373943.png';

export default function Home({ 
  onAddToCart,
  wishlist = [],
  onToggleWishlist
}: { 
  onAddToCart: (p: Product) => void;
  wishlist?: Product[];
  onToggleWishlist?: (p: Product) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'skin' | 'hair' | 'gift'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main className="pt-20">
      {/* --- Hero Section --- */}
      <section className="relative min-h-[85vh] flex flex-col lg:grid lg:grid-cols-2 bg-cream overflow-hidden">
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-20 relative z-10 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8"
          >
            <span className="w-8 md:w-12 h-px bg-gold" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gold">Handcrafted with Purpose</span>
            <span className="w-8 md:w-12 h-px bg-gold lg:hidden" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-[2.75rem] md:text-7xl lg:text-8xl leading-[1] md:leading-[0.9] text-green-dark mb-6 md:mb-8 tracking-tight"
          >
            Nature's Finest,<br />
            Bar by <span className="italic text-brown underline decoration-gold/30 underline-offset-8">Bar.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 font-light text-sm md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed"
          >
            PureBar crafts premium artisanal soaps from pure botanicals and cold-pressed oils. Elevate your daily ritual with honest skincare.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6"
          >
            <a href="#products" className="w-full sm:w-auto bg-green-dark text-cream px-10 py-5 rounded-2xl font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-green-mid hover:-translate-y-1 transition-all shadow-xl shadow-green-dark/10">
              Shop Collection <ArrowRight size={16} />
            </a>
            <Link to="/our-story" className="text-green-mid font-bold text-[10px] uppercase tracking-widest hover:text-green-dark transition-all">
              Our Story
            </Link>
          </motion.div>
        </div>

        <div className="relative bg-green-dark h-[40vh] md:h-[500px] lg:h-auto order-1 lg:order-2">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={heroImg} 
              alt="Artisanal Soaps" 
              className="w-full h-full object-cover md:object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-cream lg:from-transparent to-transparent hidden sm:block" />
        </div>
      </section>

      {/* --- Features Strip --- */}
      <section className="bg-green-dark py-10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex lg:grid lg:grid-cols-4 gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-4 lg:pb-0">
          {[
            { icon: <Leaf size={24} />, title: "100% Natural", sub: "No chemicals" },
            { icon: <Truck size={24} />, title: "Fast Shipping", sub: "2-4 day delivery" },
            { icon: <Globe size={24} />, title: "Eco-Friendly", sub: "Plastic-free" },
            { icon: <Heart size={24} />, title: "Cruelty Free", sub: "Vegan made" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-4 text-cream shrink-0 border-r border-white/5 pr-8 lg:pr-0 lg:border-none last:border-none"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white">{item.title}</p>
                <p className="text-[9px] opacity-40 uppercase tracking-widest font-medium mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Products Section --- */}
      <section id="products" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Our Collection</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-green-dark leading-tight">
                Handcrafted <span className="italic">Soaps</span><br />for Unique Skin
              </h2>
            </div>
            
            <div className="flex bg-cream p-1 rounded-xl overflow-x-auto no-scrollbar scroll-smooth">
              {['all', 'skin', 'hair', 'gift'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={cn(
                    "px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap",
                    activeCategory === cat ? "bg-green-dark text-cream shadow-lg" : "text-gray-400 hover:text-green-dark"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

          <div className="mt-20 text-center">
            <Link 
              to="/products"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest border-2 border-green-dark px-10 py-4 rounded hover:bg-green-dark hover:text-cream transition-all"
            >
              View Full Catalog <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Sustainability & Process Section --- */}
      <section className="py-24 px-6 bg-cream-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <div className="flex justify-center items-center gap-4 mb-4">
                <span className="w-6 h-px bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Ethical Promise</span>
                <span className="w-6 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-green-dark">Pure Ingredients, Honest Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Locally Sourced", 
                desc: "We partner directly with farmers in rural Bangladesh to source fresh neem, aloe, and seeds, ensuring fair wages and the highest quality.",
                icon: <Sprout size={32} />
              },
              { 
                title: "Zero Waste Goal", 
                desc: "Every PureBar is wrapped in 100% biodegradable paper. No plastic bottles, no microplastics, just clean skin and a clean earth.",
                icon: <Globe size={32} />
              },
              { 
                title: "Artisan Crafted", 
                desc: "Each bar is hand-poured and cured for 28 days to preserve natural glycerin, a luxury usually lost in industrial soap making.",
                icon: <Sparkles size={32} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-cream transition-all hover:shadow-xl group text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl text-green-dark mb-4">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
