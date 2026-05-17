import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar({ cartCount, wishlistCount }: { cartCount: number, wishlistCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
      scrolled || location.pathname !== '/' ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-semibold text-green-dark">
          PureBar<span className="text-xs font-sans uppercase tracking-widest ml-1 text-gold">TM</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] text-green-mid uppercase">
          <li>
            <Link to="/products" className="hover:text-green-dark transition-colors relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-soft transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link to="/our-story" className="hover:text-green-dark transition-colors relative group">
              Our Story
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-soft transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-green-dark transition-colors relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-soft transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-dark transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-soft transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:gap-6">
          <button className="p-2 hover:bg-cream rounded-full transition-colors">
            <Search size={18} className="text-green-mid" />
          </button>

          <Link 
            to="/wishlist"
            className="p-2 hover:bg-cream rounded-full transition-colors relative group hidden md:flex"
            title="Wishlist"
          >
            <Heart size={18} className="text-green-mid group-hover:text-red-400 transition-colors" />
            {(wishlistCount ?? 0) > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full border border-white" />
            )}
          </Link>
          
          <Link 
            to="/cart"
            className="flex items-center gap-2 bg-green-dark text-cream px-3 md:px-4 py-2 rounded shadow-lg hover:bg-green-mid transition-all active:scale-95 group hidden md:flex"
          >
            <ShoppingBag size={16} />
            <span className="text-[10px] font-bold tracking-widest uppercase hidden sm:inline">Bag</span>
            <span className="flex items-center justify-center bg-gold text-green-dark text-[10px] font-bold w-5 h-5 rounded-full group-hover:scale-110 transition-transform">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-xl overflow-hidden shadow-xl border border-cream"
          >
            <ul className="flex flex-col p-6 gap-4 text-xs font-bold uppercase tracking-widest text-green-mid">
              <li><Link to="/products" className="block py-2 hover:text-green-dark">Products</Link></li>
              <li><Link to="/our-story" className="block py-2 hover:text-green-dark">Our Story</Link></li>
              <li><Link to="/wishlist" className="block py-2 hover:text-green-dark">My Wishlist</Link></li>
              <li><Link to="/faq" className="block py-2 hover:text-green-dark">FAQ</Link></li>
              <li><Link to="/contact" className="block py-2 hover:text-green-dark">Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
