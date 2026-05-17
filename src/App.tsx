import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import OrderSuccess from './pages/OrderSuccess';
import FAQ from './pages/FAQ';
import OurStory from './pages/OurStory';
import Ingredients from './pages/Ingredients';
import Sustainability from './pages/Sustainability';
import PrivateLabeling from './pages/PrivateLabeling';
import TrackOrder from './pages/TrackOrder';
import ReturnPolicy from './pages/ReturnPolicy';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

// Types
import { Product, CartItem } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState<string | null>(null);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    triggerToast(`${product.name} added to cart! 🌿`);
  };

  const toggleWishlist = (product: Product) => {
    const isPresent = wishlist.find(p => p.id === product.id);
    if (isPresent) {
      setWishlist(prev => prev.filter(p => p.id !== product.id));
      triggerToast("Removed from wishlist");
    } else {
      setWishlist(prev => [...prev, product]);
      triggerToast("Added to wishlist! ❤️");
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 3000);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-gold selection:text-green-dark flex flex-col">
        <Navbar 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
          wishlistCount={wishlist.length}
        />
        
        <div className="flex-1 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home onAddToCart={(p) => addToCart(p, 1)} wishlist={wishlist} onToggleWishlist={toggleWishlist} />} />
            <Route path="/products" element={<AllProducts onAddToCart={(p) => addToCart(p, 1)} wishlist={wishlist} onToggleWishlist={toggleWishlist} />} />
            <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
            <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onAddToCart={(p) => addToCart(p, 1)} onRemove={toggleWishlist} />} />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/private-labeling" element={<PrivateLabeling />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        <Footer />
        <MobileNav cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />

        {/* --- Floating Toast --- */}
        <AnimatePresence>
          {showToast && (
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-green-dark text-cream px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border-l-4 border-gold min-w-[300px]"
            >
              <ShoppingBag size={20} className="text-gold" />
              <span className="text-sm font-medium">{showToast}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
