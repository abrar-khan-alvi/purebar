import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "How long does a PureBar last?",
    a: "Our cold-process bars typically last 3-4 weeks for a single person if allowed to dry completely between uses. We recommend using a draining soap dish to prolong its life."
  },
  {
    q: "Are the soaps safe for babies or extremely sensitive skin?",
    a: "Yes! Our 'Oat, Honey & Shea' bar is unscented and formulated specifically for hypersensitive skin and infants. It contains no essential oils or colorants."
  },
  {
    q: "What is 'Cold-Process' soap?",
    a: "Cold-process is a traditional soap-making method that uses no external heat during the chemical reaction. This preserves the natural glycerin and the delicate nutrients in our botanical oils."
  },
  {
    q: "Do you ship outside of Dhaka?",
    a: "Absolultely. We ship to all 64 districts in Bangladesh via reliable courier services. Delivery usually takes 2-4 business days."
  },
  {
    q: "Do you offer wholesale for retailers or spas?",
    a: "Yes, we have a dedicated wholesale program with tiered pricing. Minimum order starts at 50 bars. Please use our contact form for inquiries."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-cream/10 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-20">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold" />
            <HelpCircle size={20} className="text-gold" />
            <span className="w-8 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-green-dark mb-4">Botanical FAQ</h1>
          <p className="text-gray-500 font-light max-w-lg mx-auto">
            Everything you need to know about our ingredients, process, and shipping.
          </p>
        </header>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-cream shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-cream/30 transition-colors"
              >
                <span className="font-serif text-xl text-green-dark">{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-green-mid">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-green-dark rounded-3xl text-center">
           <h3 className="font-serif text-2xl text-gold mb-2">Still have questions?</h3>
           <p className="text-cream/50 text-sm mb-8">Our team is happy to help you pick the right bar for your skin.</p>
           <button className="bg-white text-green-dark px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-gold transition-all">
             Contact Support
           </button>
        </div>
      </div>
    </main>
  );
}
