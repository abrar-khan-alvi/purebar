import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Truck, RefreshCcw, ArrowLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { cn } from '../lib/utils';

export default function ProductDetails({ onAddToCart }: { onAddToCart: (p: Product, qty: number) => void }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-dark mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-cream shadow-inner group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-cream/50 overflow-hidden cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                   <img src={product.image} className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-2 block">{product.category} Care</span>
              <h1 className="font-serif text-4xl md:text-5xl text-green-dark mb-4">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < product.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs text-gray-400">128 Reviews</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-serif text-3xl font-bold text-green-dark">৳{product.price}</span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">৳{product.oldPrice}</span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed font-light mb-8 text-lg">
              {product.longDescription || product.description}
            </p>

            {product.ingredients && (
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-green-dark mb-4">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="px-3 py-1 bg-cream-dark text-[10px] font-medium rounded-full text-green-mid uppercase tracking-wider">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-cream-dark rounded-lg p-1 w-fit bg-cream/30">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream rounded transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-bold text-green-dark">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream rounded transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button 
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 bg-green-dark text-cream font-bold uppercase tracking-widest py-4 rounded shadow-xl hover:bg-green-mid transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} /> Add to Cart
              </button>
            </div>

            {/* Benefits Strip */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-cream-dark">
              {[
                { icon: <ShieldCheck size={20} />, label: "Lab Tested" },
                { icon: <Truck size={20} />, label: "Fast Shipping" },
                { icon: <RefreshCcw size={20} />, label: "Returns Policy" },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-2">
                   <div className="text-gold mx-auto w-fit">{item.icon}</div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Usage Section */}
        {product.usage && (
          <div className="mt-24 p-12 bg-cream rounded-3xl">
             <div className="max-w-2xl">
                <h2 className="font-serif text-3xl text-green-dark mb-6">How to use your PureBar</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{product.usage}</p>
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-gold text-green-dark flex items-center justify-center font-bold text-xs shrink-0">1</div>
                   <p className="text-sm font-medium text-green-mid">Rub directly onto wet skin to build a rich, stable lather.</p>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
