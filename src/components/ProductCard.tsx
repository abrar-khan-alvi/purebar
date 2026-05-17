import { motion } from 'motion/react';
import { Heart, Search, Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { cn } from '../lib/utils';

export default function ProductCard({ 
  product, 
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false
}: { 
  product: Product; 
  onAddToCart: (p: Product) => void;
  onToggleWishlist?: (p: Product) => void;
  isWishlisted?: boolean;
  key?: string | number;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-cream rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] md:aspect-[16/13] overflow-hidden bg-cream-dark">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </Link>
        {product.badge && (
          <span className={cn(
            "absolute top-4 left-4 text-[8px] md:text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-lg",
            product.badge === 'New' ? "bg-brown text-white" : 
            product.badge === 'Sale' ? "bg-red-900 text-white" : 
            "bg-green-dark text-white"
          )}>
            {product.badge}
          </span>
        )}
        
        {/* Wishlist Button - Fixed on Mobile, Hover on Desktop Effect */}
        <button 
          onClick={() => onToggleWishlist?.(product)}
          className={cn(
            "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xl z-20 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
            isWishlisted ? "bg-red-400 text-white" : "bg-white/90 backdrop-blur-sm text-green-dark"
          )}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
          <Link 
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-dark hover:bg-gold transition-colors transform translate-y-4 group-hover:translate-y-0 transition-all delay-100 shadow-xl"
          >
            <Search size={20} />
          </Link>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-3">
          <p className="text-[10px] font-bold tracking-[0.2em] text-brown uppercase">{product.category} Care</p>
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < product.rating ? "currentColor" : "none"} />
            ))}
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-2xl font-medium text-green-dark mb-2 group-hover:text-green-mid transition-colors">{product.name}</h3>
        </Link>
        <p className="text-xs text-gray-500 line-clamp-2 mb-6 leading-relaxed font-light">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-bold text-green-dark">৳{product.price}</span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">৳{product.oldPrice}</span>
            )}
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            className="group/btn flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-green-dark text-cream px-5 py-3 rounded-lg hover:bg-green-mid transition-all active:scale-95"
          >
            <ShoppingBag size={14} className="group-hover/btn:scale-110 transition-transform" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
