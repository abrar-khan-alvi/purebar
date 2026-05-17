import { motion } from 'motion/react';
import { Package, Palette, Sparkles, Building2, ArrowRight } from 'lucide-react';
import privateLabelImg from '../assets/images/luxury_soap_packaging_1778984643248.png';

export default function PrivateLabeling() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <header>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">B2B & Partnerships</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-green-dark mb-8 leading-[1.1]">
              Your Brand, <br /><span className="italic text-brown">Our Expertise.</span>
            </h1>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
              Launch your own skincare line with our proven, botanical formulas. From boutique spas to hotel chains, we provide end-to-end manufacturing and branding.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-dark text-cream px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-green-mid transition-all">
                Download Brochure <ArrowRight size={16} />
              </button>
            </div>
          </header>
          <div className="relative aspect-video lg:aspect-square bg-cream rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
             <img 
               src={privateLabelImg} 
               alt="Luxury Private Labeling" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>

        <section className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Palette />, title: "Custom Formulation", desc: "Choose your own scent profiles, clays, and herbal inclusions." },
            { icon: <Package />, title: "Eco-Packaging", desc: "Wide range of sustainable wrapping, box design, and labeling." },
            { icon: <Building2 />, title: "Low MOQs", desc: "Start small with just 50 units per SKU. Perfect for boutiques." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="p-10 border border-cream rounded-3xl space-y-4 hover:border-gold/30 transition-all"
            >
              <div className="text-gold mb-6">{item.icon}</div>
              <h3 className="font-serif text-2xl text-green-dark">{item.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="bg-cream-dark/30 p-12 md:p-20 rounded-[3rem]">
           <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-green-dark">Wholesale Inquiry</h2>
              <p className="text-gray-600 font-light">Tell us about your brand vision, and our lead artisan will get back to you with a custom quote.</p>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Company Name" className="w-full p-4 rounded-xl border border-cream outline-gold bg-white" />
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Email" className="p-4 rounded-xl border border-cream outline-gold bg-white" />
                   <input type="text" placeholder="Phone" className="p-4 rounded-xl border border-cream outline-gold bg-white" />
                </div>
                <textarea placeholder="Tell us about your requirements..." rows={4} className="w-full p-4 rounded-xl border border-cream outline-gold bg-white" />
                <button className="bg-green-dark text-cream w-full py-4 rounded-xl font-bold uppercase tracking-widest text-[10px]">
                  Submit Partnership Inquiry
                </button>
              </form>
           </div>
        </section>
      </div>
    </main>
  );
}
