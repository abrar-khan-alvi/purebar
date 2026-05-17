import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-green-dark text-cream pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="font-serif text-3xl font-semibold">PureBar<span className="text-[10px] font-sans ml-1 text-gold">TM</span></Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
              Handcrafted natural soaps made with botanicals sourced from local farms in Bangladesh. Science-guided. Earth-made. Skin-loved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-green-dark transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-green-dark transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-green-dark transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-[10px] text-gold mb-8">Shop</p>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><Link to="/" className="hover:text-gold transition-colors">Skin Care Bars</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Hair & Scalp</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Gift Sets</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Bundle Deals</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-[10px] text-gold mb-8">Company</p>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><Link to="/our-story" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/ingredients" className="hover:text-gold transition-colors">Ingredients Library</Link></li>
              <li><Link to="/sustainability" className="hover:text-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/private-labeling" className="hover:text-gold transition-colors">Private Labeling</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-[10px] text-gold mb-8">Support</p>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><Link to="/track-order" className="hover:text-gold transition-colors">Track Order</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link to="/return-policy" className="hover:text-gold transition-colors">Return Policy</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-[10px] text-gold mb-8">Newsletter</p>
            <p className="text-sm text-white/40 mb-6 font-light">Join our circle for botanical tips.</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-2 rounded text-xs outline-none focus:border-gold w-full text-white" />
              <button className="bg-white text-green-dark px-3 rounded hover:bg-gold transition-colors shrink-0">
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2025 PureBar Soaps. Handcrafted in Dhaka.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
