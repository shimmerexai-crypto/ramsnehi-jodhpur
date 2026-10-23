import React, { useState, useEffect } from 'react';
import { Language, PageRoute, ProductCategory, Product, CartItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductsCatalog } from './components/ProductsCatalog';
import { POSBillingDemo } from './components/POSBillingDemo';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingActionBar } from './components/FloatingActionBar';

const CART_STORAGE_KEY = 'ramsnehi_cart_items_v1';
const LANG_STORAGE_KEY = 'ramsnehi_preferred_lang_v1';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'hi') return saved;
    }
    return 'hi'; // Default Hindi for Marwar / Rajasthan accessibility
  });

  const [route, setRoute] = useState<PageRoute>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cart storage', e);
      }
    }
    return [];
  });

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  // Handle language switch
  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch (e) {
      console.error('Failed to save lang', e);
    }
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* 1. Header (Sticky) */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        activeRoute={route}
        onRouteChange={(r) => {
          setRoute(r);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 2. Main Page Content according to active route */}
      <main className="flex-1">
        {route === 'home' && (
          <HomePage
            lang={lang}
            onNavigate={(r) => {
              setRoute(r);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onAddToCart={handleAddToCart}
            onViewDetails={(prod) => setSelectedProduct(prod)}
          />
        )}

        {route === 'products' && (
          <ProductsCatalog
            lang={lang}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onAddToCart={handleAddToCart}
            onViewDetails={(prod) => setSelectedProduct(prod)}
          />
        )}

        {route === 'pos-demo' && (
          <POSBillingDemo lang={lang} />
        )}

        {route === 'services' && (
          <ServicesPage lang={lang} />
        )}

        {route === 'about' && (
          <AboutPage lang={lang} />
        )}

        {route === 'contact' && (
          <ContactPage lang={lang} />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        lang={lang}
        onNavigate={(r) => {
          setRoute(r);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setRoute('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 4. Sliding Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        lang={lang}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 5. Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        lang={lang}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 6. Floating Action Bar for Mobile Users */}
      <FloatingActionBar
        lang={lang}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
