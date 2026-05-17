import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-20 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact Us</span>
            <span className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-green-dark mb-6">Let's Connect</h1>
          <p className="text-gray-500 max-w-lg mx-auto font-light">
            Questions about your order, our ingredients, or wholesale inquiries? Our team in Dhaka is ready to help.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-12">
            {[
              { icon: <MapPin />, title: "Workshop & Studio", val: "House 24, Road 7, Block B, Mirpur-2, Dhaka-1216" },
              { icon: <Phone />, title: "Call or WhatsApp", val: "+880 1711 000 000" },
              { icon: <Mail />, title: "Email Support", val: "hello@purebar.com.bd" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shrink-0">
                  {item.icon}
                </div>
                <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">{item.title}</h3>
                   <p className="text-green-dark font-medium leading-relaxed">{item.val}</p>
                </div>
              </div>
            ))}

            <div className="pt-10 border-t border-cream-dark">
               <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Follow our journey</p>
               <div className="flex gap-4">
                  {[<Instagram />, <Facebook />, <Twitter />].map((icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 border border-cream-dark rounded-full flex items-center justify-center text-green-mid hover:bg-green-dark hover:text-white transition-all">
                      {icon}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-cream p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
             <form className="relative z-10 space-y-8" onSubmit={e => { e.preventDefault(); alert("Message sent! ✨"); }}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input type="text" className="w-full bg-white p-4 rounded-2xl border border-cream outline-gold text-green-dark" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-white p-4 rounded-2xl border border-cream outline-gold text-green-dark" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                  <select className="w-full bg-white p-4 rounded-2xl border border-cream outline-gold text-green-dark uppercase text-[10px] font-bold tracking-widest">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Wholesale/B2B</option>
                    <option>Press & Media</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea rows={6} className="w-full bg-white p-4 rounded-2xl border border-cream outline-gold text-green-dark" required placeholder="How can we help you?"></textarea>
                </div>
                <button className="bg-green-dark text-cream w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-green-mid transition-all shadow-xl active:scale-95">
                  Send Message <Send size={16} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </main>
  );
}
