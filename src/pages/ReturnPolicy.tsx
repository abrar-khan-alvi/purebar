import { ShieldCheck, Truck, RotateCcw, AlertTriangle } from 'lucide-react';

export default function ReturnPolicy() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Customer Care</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-green-dark mb-6">Return & Refund Policy</h1>
          <p className="text-gray-500 font-light leading-relaxed text-lg">
            At PureBar, we stand by the quality of our handcrafted soaps. If you’re not completely satisfied, we're here to help.
          </p>
        </header>

        <div className="space-y-12 mb-20">
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-green-dark">
              <RotateCcw size={24} className="text-gold" />
              <h2 className="font-serif text-3xl">7-Day Return Window</h2>
            </div>
            <p className="text-gray-600 font-light leading-relaxed">
              You have 7 working days from the date of delivery to request a return. Because our products are hygiene-based skincare, we can only accept returns for items that are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light text-sm">
              <li>Unused and in the original plastic-free packaging.</li>
              <li>Damaged during transit (Photo evidence required).</li>
              <li>Incorrect item received.</li>
            </ul>
          </section>

          <section className="space-y-6 bg-cream p-8 md:p-12 rounded-3xl">
             <div className="flex items-center gap-4 text-green-dark">
               <AlertTriangle size={24} className="text-gold" />
               <h2 className="font-serif text-3xl">Non-Returnable Items</h2>
             </div>
             <p className="text-gray-600 font-light text-sm leading-relaxed">
               Due to health and hygiene reasons, soaps that have been unwrapped or used cannot be returned or refunded unless there is a clear quality defect reported within 24 hours of delivery.
             </p>
          </section>

          <section className="space-y-6">
             <h2 className="font-serif text-3xl text-green-dark">Refund Process</h2>
             <p className="text-gray-600 font-light text-sm leading-relaxed">
               Once your return is received and inspected, we will notify you. Approved refunds will be processed via your original payment method or as store credit within 5-7 business days. For payments made via bKash or Nagad, the refund will be sent to the same number used for payment.
             </p>
          </section>

          <section className="border-t border-cream-dark pt-12 space-y-4">
             <h3 className="font-bold uppercase tracking-widest text-xs text-green-dark">Got questions?</h3>
             <p className="text-gray-500 font-light text-sm">Email our returns team: <span className="text-gold font-medium">returns@purebar.com.bd</span></p>
          </section>
        </div>
      </div>
    </main>
  );
}
