import React, { useState } from 'react';
import { Volume2, VolumeX, ShoppingCart, MessageSquare, Check, ShieldCheck, Eye } from 'lucide-react';
import { Product, Language } from '../types';
import { STORE_PHONE_INTL } from '../data/products';
import { MachineGraphic } from './MachineGraphic';
import { speakText, stopSpeech } from '../utils/speech';

interface ProductCardProps {
  product: Product;
  lang: Language;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  onAddToCart,
  onViewDetails
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeaking) {
      stopSpeech();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const text = lang === 'hi' ? product.audioSpeechHi : product.audioSpeechEn;
      speakText(text, lang, () => setIsSpeaking(false));
    }
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const discountAmount = product.originalPrice - product.price;

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="group bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Top Image & Visual Container */}
      <div className="relative">
        <MachineGraphic machineType={product.machineType} className="h-52 w-full" />
        
        {/* Popular / Best Seller Flag */}
        {product.popular && (
          <span className="absolute top-2.5 left-2.5 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow-xs">
            {lang === 'hi' ? '★ सबसे ज्यादा बिकने वाली' : '★ Top Seller'}
          </span>
        )}

        {/* Audio Assistance Speaker Button (for semi-literate accessibility) */}
        <button
          onClick={handleAudio}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full border shadow-xs transition-transform active:scale-95 ${
            isSpeaking
              ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-amber-50 hover:text-amber-700'
          }`}
          title={lang === 'hi' ? 'आवाज में सुनें' : 'Listen audio guide'}
          aria-label="Voice guide"
        >
          {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Floating Quick View hint */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white text-[11px] font-medium px-2 py-1 rounded flex items-center gap-1 backdrop-blur-xs">
          <Eye className="w-3 h-3" />
          <span>{lang === 'hi' ? 'विवरण' : 'Details'}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Tag & Warranty */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-slate-400">
              HSN: {product.hsnCode}
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {product.warranty}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
            {lang === 'hi' ? product.nameHi : product.nameEn}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            {lang === 'hi' ? product.shortDescHi : product.shortDescEn}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-slate-900 tabular-nums">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-slate-400 line-through tabular-nums">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              {lang === 'hi' ? `₹${discountAmount} बचत` : `Save ₹${discountAmount}`}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">
            {lang === 'hi' ? '18% GST बिल सहित' : 'Incl. 18% GST Tax Invoice'}
          </span>
        </div>
      </div>

      {/* Action Buttons: Add to Cart + WhatsApp Inquiry */}
      <div className="p-4 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={handleAdd}
          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-bold transition-all ${
            justAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'जुड़ गया' : 'Added'}</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'कार्ट में डालें' : 'Add to Cart'}</span>
            </>
          )}
        </button>

        <a
          href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20${encodeURIComponent(product.nameHi)}%20(मूल्य:%20₹${product.price})%20के%20बारे%20में%20पूछताछ%20करनी%20है`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
