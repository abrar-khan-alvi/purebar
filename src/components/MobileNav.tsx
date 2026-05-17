import { Home, ShoppingBag, Heart, Search, Truck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function MobileNav({ cartCount }: { cartCount: number }) {
  const location = useLocation();

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Search size={20} />, label: 'Shop', path: '/products' },
    { icon: <Heart size={20} />, label: 'Saved', path: '/wishlist' },
    { icon: <ShoppingBag size={20} />, label: 'Bag', path: '/cart', count: cartCount },
    { icon: <Truck size={20} />, label: 'Track', path: '/track-order' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-cream-dark px-6 py-3 pb-8 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.label} 
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 transition-all relative",
                isActive ? "text-green-dark scale-110" : "text-gray-400"
              )}
            >
              <div className={cn(
                "p-2 rounded-xl",
                isActive ? "bg-gold/10" : ""
              )}>
                {item.icon}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest">{item.label}</span>
              {item.count !== undefined && item.count > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-green-dark text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                  {item.count}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
