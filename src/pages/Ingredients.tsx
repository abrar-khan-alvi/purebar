import { motion } from 'motion/react';
import { Search, Info } from 'lucide-react';

const INGREDIENTS = [
  { name: "Raw Shea Butter", benefit: "Deep hydration and skin barrier repair.", type: "Basis" },
  { name: "Cold-Pressed Coconut Oil", benefit: "Rich lather and natural cleansing.", type: "Basis" },
  { name: "Neem Oil", benefit: "Powerful antibacterial and antifungal properties.", type: "Active" },
  { name: "Bulgarian Rose Water", benefit: "Tones and balances skin's natural oils.", type: "Floral" },
  { name: "Colloidal Oatmeal", benefit: "Soothes inflammation and itchy skin.", type: "Grain" },
  { name: "French Pink Clay", benefit: "Gently draws out impurities and toxins.", type: "Mineral" },
  { name: "Raw Local Honey", benefit: "Natural humectant that locks in moisture.", type: "Humectant" },
  { name: "Turmeric Powder", benefit: "Brightens and evens out skin tone.", type: "Active" },
];

export default function Ingredients() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-20">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Botanical Library</span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-green-dark mb-6">What's Inside Matters</h1>
          <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
            We believe in radical transparency. Every ingredient in a PureBar is selected for its skin-loving properties and ethical origin.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INGREDIENTS.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl border border-cream hover:border-gold/30 hover:shadow-xl transition-all group overflow-hidden relative"
            >
              <div className="absolute top-4 right-4 text-gold/20 group-hover:text-gold/40 transition-colors">
                <Info size={16} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brown/50 mb-2 block">{item.type}</span>
              <h3 className="font-serif text-2xl text-green-dark mb-4 group-hover:text-gold transition-colors">{item.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">{item.benefit}</p>
            </motion.div>
          ))}
        </section>

        <section className="mt-32 p-12 bg-green-dark rounded-[2rem] text-center text-cream overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl mb-6">Zero Synthetics. Ever.</h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
              You will never find SLS, parabens, phthalates, or synthetic fragrance in our workshop. If it’s not safe for our children, it’s not in our soap.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["No SLS", "Vegan", "No Parabens", "Cruelty Free"].map((tag, i) => (
                <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
