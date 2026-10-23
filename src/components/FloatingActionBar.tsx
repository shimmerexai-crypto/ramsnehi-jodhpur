import React from 'react';
import { Phone, MessageSquare, Instagram, ShoppingCart } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_INTL, STORE_INSTAGRAM } from '../data/products';
import { Language } from '../types';

interface FloatingActionBarProps {
  lang: Language;
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  lang,
  cartCount,
  onOpenCart
}) => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md bg-slate-900/95 text-white backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/80 px-3 py-2 flex items-center justify-between gap-2 lg:hidden">
      {/* 1. Direct Call */}
      <a
        href={`tel:${STORE_PHONE}`}
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-200 hover:text-amber-400 transition-colors"
      >
        <div className="p-1.5 rounded-full bg-slate-800 text-amber-400">
          <Phone className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold mt-0.5">
          {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
        </span>
      </a>

      {/* 2. Direct WhatsApp */}
      <a
        href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20मशीन%20की%20जानकारी%20चाहिए`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-200 hover:text-emerald-400 transition-colors"
      >
        <div className="p-1.5 rounded-full bg-emerald-600 text-white shadow-xs">
          <MessageSquare className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold mt-0.5 text-emerald-400">
          WhatsApp
        </span>
      </a>

      {/* 3. Instagram */}
      <a
        href={STORE_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-200 hover:text-pink-400 transition-colors"
      >
        <div className="p-1.5 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white">
          <Instagram className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold mt-0.5">
          Instagram
        </span>
      </a>

      {/* 4. Cart Quick Button */}
      <button
        onClick={onOpenCart}
        className="flex-1 flex flex-col items-center justify-center py-1 relative text-slate-200 hover:text-amber-400 transition-colors cursor-pointer"
      >
        <div className="p-1.5 rounded-full bg-amber-500 text-slate-950 font-bold relative">
          <ShoppingCart className="w-4 h-4" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-bold mt-0.5 text-amber-300">
          {lang === 'hi' ? 'कार्ट देखें' : 'View Cart'}
        </span>
      </button>
    </div>
  );
};
