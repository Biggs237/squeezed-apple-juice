import React from 'react';

export default function SqueezedSite() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-6">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-green-900 mb-4">Squeezed</h1>
          <p className="text-2xl text-green-700 mb-8">The only place you need to get your juice.</p>
          <a href="#order" className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
            Order Now
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-16 px-6 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Story</h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">Squeezed was born from a simple belief: real apple juice should taste like apples, not sugar water.</p>
          <p className="mb-6">We started with a small orchard and a big dream—bringing farm-fresh, cold-pressed juice straight to your door. Every bottle is pressed from hand-picked apples, with nothing added and nothing taken away.</p>
          <p>Today, we're still a small team obsessed with quality. Because the best juice comes from the best apples, and the best apples come from people who care.</p>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="bg-green-50 py-16 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Order Your Juice</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Your Flavor</label>
                <select className="w-full p-4 border border-gray-200 rounded-2xl text-lg">
                  <option>Classic Apple</option>
                  <option>Apple Ginger</option>
                  <option>Apple Cinnamon</option>
                  <option>Spiced Apple</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 border border-gray-200 rounded-full text-2xl">-</button>
                  <span className="text-2xl font-semibold w-12 text-center">6</span>
                  <button className="w-12 h-12 border border-gray-200 rounded-full text-2xl">+</button>
                  <span className="text-gray-500 ml-2">bottles</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between text-lg mb-2">
                  <span>6 bottles × $4.50</span>
                  <span className="font-semibold">$27.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Shipping</span>
                  <span>$5.99</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>$32.99</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors mt-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Squeezed. Fresh from the orchard to you.</p>
      </footer>
    </div>
  );
}
