import { motion } from 'motion/react';
import { Globe, Leaf, Wind, Droplets } from 'lucide-react';

export default function Sustainability() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Ethical Promise</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-green-dark mb-8 leading-[1.1]">
            Skin Care That <br /><span className="italic text-brown">Cares for Earth.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl font-light text-lg">
            At PureBar, sustainability isn't a buzzword—it's the foundation of our manufacturing process.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {[
            { 
              icon: <Globe className="text-gold" />, 
              title: "Zero Plastic Packaging", 
              desc: "Every bar is hand-wrapped in recycled, biodegradable paper or compostable kraft boxes. We have prevented over 50,000 plastic bottles from entering landfills since 2017."
            },
            { 
              icon: <Leaf className="text-gold" />, 
              title: "Ethical Sourcing", 
              desc: "We prioritize local farmers in rural Bangladesh, ensuring fair trade practices and reducing our carbon footprint from transportation."
            },
            { 
              icon: <Wind className="text-gold" />, 
              title: "Clean Energy Goals", 
              desc: "Our workshop in Dhaka uses high-efficiency solar water heating for the melting process, reducing our grid dependence by 40%."
            },
            { 
              icon: <Droplets className="text-gold" />, 
              title: "Water Conscious", 
              desc: "Cold-process soap making uses minimal water compared to liquid detergents. Our run-off is 100% biodegradable and safe for greywater systems."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 bg-cream rounded-3xl space-y-6"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-serif text-3xl text-green-dark">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="text-center bg-green-dark p-20 rounded-[3rem] text-cream">
           <h2 className="font-serif text-4xl mb-6">Our 2030 Vision</h2>
           <p className="text-white/50 max-w-xl mx-auto mb-10 font-light">
             We are striving to be the first carbon-neutral artisanal soap brand in Bangladesh by 2030, through full lifecycle accountability.
           </p>
           <button className="bg-gold text-green-dark px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">
             Read Full Impact Report
           </button>
        </section>
      </div>
    </main>
  );
}
