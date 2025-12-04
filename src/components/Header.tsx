import React, { useState } from 'react';
import { ShoppingCart, ChevronUp } from 'lucide-react';
import { useCart } from '../store/CartContext';
import SearchBar from './SearchBar';
import { products } from '../data/mockData';

const Header = () => {
  const [isBottomExpanded, setIsBottomExpanded] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Collection', href: '#collection' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' }
  ];

  const primaryLinks = navLinks.filter((link) =>
    ['#home', '#product', '#benefits'].includes(link.href)
  );

  const extraLinks = navLinks.filter((link) =>
    ['#gallery', '#collection', '#reviews', '#faq'].includes(link.href)
  );

  const handleProductSelect = (product: any) => {
    // Scroll to product section
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Logo */}
            <a href="https://ken4droidph.github.io/portfolio2/" className="inline-flex text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 hover:opacity-70 transition-opacity flex-shrink-0">
            KEN & AI 
            </a>

            {/* Desktop Search Bar */}
            {/* Mobile Search Bar */}
            <div className="flex-1 max-w-md mx-4 lg:mx-8">
              <SearchBar products={products} onProductSelect={handleProductSelect} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={22} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              <button className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
                Order Now
              </button>
            </nav>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              {/* Cart Button - Mobile */}
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={22} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed left-0 right-0 bottom-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 md:hidden pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around px-4 py-2">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex-1 text-center text-xs font-medium text-gray-700 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          {/* Menu Button */}
          <button
            onClick={() => setIsBottomExpanded((prev) => !prev)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white"
            aria-label="Toggle more navigation"
          >
            <ChevronUp
              size={18}
              className={isBottomExpanded ? 'transform rotate-180 transition-transform' : 'transition-transform'}
            />
          </button>
        </div>
        {isBottomExpanded && (
          <div className="absolute bottom-full right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="flex flex-col items-end py-2">
              {extraLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-right text-xs font-medium text-gray-700 hover:text-gray-900 py-1 px-4 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
