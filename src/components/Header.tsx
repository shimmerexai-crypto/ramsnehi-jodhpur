import React, { useState } from 'react';
import { ShoppingCart, Phone, MessageSquare, Globe, Menu, X, Sparkles } from 'lucide-react';
import { Language, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { STORE_PHONE, STORE_PHONE_INTL } from '../data/products';

interface HeaderProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  activeRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  activeRoute,
  onRouteChange,
  cartCount,
  onOpenCart
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro-announcement bar for quick trust signals */}
      <div className="bg-slate-900 text-slate-200 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-emerald-400">Jodhpur Showroom Open</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">9th A, Pal Road, Opp. Balaji Mandir, Sardarpura</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${STORE_PHONE}`}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 84326 44312</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20मशीन%20की%20जानकारी%20चाहिए`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 flex items-center justify-center text-white font-extrabold text-xl shadow-xs">
                R
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
                  {lang === 'hi' ? 'रामस्नेही एंटरप्राइजेज' : 'Ramsnehi Enterprises'}
                </span>
                <span className="block text-[11px] font-medium text-slate-500 tracking-wide">
                  JODHPUR · WEIGHING & PACKAGING
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeRoute === 'home'
                ? 'text-amber-600 border-b-2 border-amber-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            {t.navHome}
          </button>
          <button
            onClick={() => handleNavClick('products')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeRoute === 'products'
                ? 'text-amber-600 border-b-2 border-amber-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            {t.navProducts}
          </button>
          <button
            onClick={() => handleNavClick('pos-demo')}
            className={`whitespace-nowrap flex items-center gap-1.5 transition-colors py-1 ${
              activeRoute === 'pos-demo'
                ? 'text-amber-600 border-b-2 border-amber-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {t.navPosDemo}
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeRoute === 'services'
                ? 'text-amber-600 border-b-2 border-amber-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            {t.navServices}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeRoute === 'about'
                ? 'text-amber-600 border-b-2 border-amber-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            {t.navAbout}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeRoute === 'contact'
                ? 'text-amber-600 border-b-2 border-amber-600 font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            {t.navContact}
          </button>
        </nav>

        {/* Zone 3: Actions (Language Switcher, Cart, Contact CTA) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle: Ultra Accessible */}
          <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
            <button
              onClick={() => onToggleLang('hi')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'hi'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="हिंदी भाषा चुनें"
            >
              हिन्दी
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'en'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-slate-800 flex items-center gap-2"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline text-xs font-semibold">
              {lang === 'hi' ? 'कार्ट' : 'Cart'}
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick WhatsApp Action Button */}
          <a
            href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20मशीन%20खरीदने%20के%20लिए%20पूछताछ%20करनी%20है`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.whatsappEnquiry}</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              activeRoute === 'home' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
            }`}
          >
            {t.navHome}
          </button>
          <button
            onClick={() => handleNavClick('products')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              activeRoute === 'products' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
            }`}
          >
            {t.navProducts}
          </button>
          <button
            onClick={() => handleNavClick('pos-demo')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
              activeRoute === 'pos-demo' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
            }`}
          >
            <span>{t.navPosDemo}</span>
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
              GST Live
            </span>
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              activeRoute === 'services' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
            }`}
          >
            {t.navServices}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              activeRoute === 'about' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
            }`}
          >
            {t.navAbout}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              activeRoute === 'contact' ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-800'
            }`}
          >
            {t.navContact}
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${STORE_PHONE}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>सीधा कॉल करें: 84326 44312</span>
            </a>
            <a
              href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>व्हाट्सएप पर बात करें</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
