export default function Terms() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Legal</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-green-dark mb-6">Terms & Conditions</h1>
          <p className="text-gray-400 font-light">Last Updated: May 2026</p>
        </header>

        <article className="prose prose-green max-w-none text-gray-600 font-light leading-relaxed space-y-12">
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-green-dark mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing the PureBar Soaps website, you agree to be bound by these terms and conditions, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-green-dark mb-4">2. Product Disclaimer</h2>
            <p>
              All products are handcrafted and may vary slightly in appearance, color, and weight. Our soaps are for external use only. While we use 100% natural ingredients, we recommend patch testing on a small area of skin before full use, especially for those with known allergies.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-green-dark mb-4">3. Pricing and Payments</h2>
            <p>
              All prices are listed in Bangladeshi Taka (BDT). We reserve the right to change prices at any time without notice. We currently accept Cash on Delivery (COD) as the primary payment method for local deliveries.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-green-dark mb-4">4. Intellectual Property</h2>
            <p>
              The materials contained in this website—including logo, product names, photography, and text—are protected by applicable copyright and trademark law. You may not reproduce or reuse any content without explicit written permission from PureBar Soaps.
            </p>
          </section>

          <section className="pt-12 border-t border-cream-dark">
             <p className="text-xs text-gray-400 italic">
               For any legal inquiries, please contact our administration at legal@purebar.com.bd
             </p>
          </section>
        </article>
      </div>
    </main>
  );
}
