import { motion } from 'motion/react';
import { Leaf, Award, Heart, Globe } from 'lucide-react';
import storyImg from '../assets/images/artisanal_soap_making_1778984621441.png';

export default function OurStory() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Story</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-green-dark mb-8 leading-[1.1]">
            From a Small Kitchen to <br /><span className="italic text-brown">Every Heart.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
            PureBar Soaps was born in 2017 with a simple observation: commercial skincare was losing its soul to synthetic shortcuts.
          </p>
        </header>

        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream shadow-2xl">
            <img 
              src={storyImg} 
              alt="Artisanal Soap Making" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-green-dark">The Cold-Process Obsession</h2>
            <p className="text-gray-600 leading-relaxed font-light">
              Our founder, Rashida Hossain, began experimenting with the traditional cold-process method in her kitchen in Dhaka. She was fascinated by how a 4-week curing time could transform raw oils and lye into a creamy, moisturizing bar that preserved the natural glycerin usually stripped out by industrial machines.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-cream-dark">
              <div>
                <p className="font-serif text-3xl text-gold mb-1">500+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Recipes Tested</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold mb-1">100%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Hand-Poured</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream p-12 md:p-20 rounded-[3rem] mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-green-dark mb-12">Our Core Pillars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { icon: <Leaf />, title: "Botanical Focus", desc: "If it doesn't grow in the dirt, it's not in our soap." },
                { icon: <Globe />, title: "Local Impact", desc: "Supporting Bangladeshi farmers and oil presses." },
                { icon: <Award />, title: "Quality Cured", desc: "Every bar rests for 28 days before reaching you." },
                { icon: <Heart />, title: "Skin First", desc: "Formulated for pH balance and intense hydration." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold mx-auto shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-bold uppercase tracking-widest text-[10px] text-green-dark">{item.title}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
