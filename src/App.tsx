import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Collection from './components/Collection';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './store/CartContext';
import { featuredProduct, benefits, testimonials, faqs } from './data/mockData';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen pb-20 md:pb-0">
        <Header />
        <CartDrawer />
        <main>
          <Hero />
          <ProductCard product={featuredProduct} />
          <Benefits benefits={benefits} />
          <Gallery />
          <Collection />
          <SocialProof testimonials={testimonials} />
          <FAQ faqs={faqs} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
