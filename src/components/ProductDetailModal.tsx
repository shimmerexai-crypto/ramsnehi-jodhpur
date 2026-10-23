import React, { useState } from 'react';
import { X, Volume2, VolumeX, ShieldCheck, ShoppingCart, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { Product, Language } from '../types';
import { MachineGraphic } from './MachineGraphic';
import { STORE_PHONE, STORE_PHONE_INTL } from '../data/products';
import { speakText, stopSpeech } from '../utils/speech';

interface ProductDetailModalProps {
  product: Product | null;
  lang: Language;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  lang,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const handleAudio = () => {
    if (isSpeaking) {
      stopSpeech();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const text = lang === 'hi' ? product.audioSpeechHi : product.audioSpeechEn;
      speakText(text, lang, () => setIsSpeaking(false));
    }
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  // Tax calculations
  const basePrice = Math.round((product.price / 1.18) * 100) / 100;
  const gstAmount = Math.round((product.price - basePrice) * 100) / 100;
  const halfGst = Math.round((gstAmount / 2) * 100) / 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {lang === 'hi' ? 'मशीन विवरण व स्पेसिफिकेशन' : 'Product Technical Details'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Top Split: Machine Visual & Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-2 relative">
              <MachineGraphic machineType={product.machineType} className="h-56 w-full" />
              
              {/* Voice button */}
              <button
                onClick={handleAudio}
                className={`mt-2 w-full py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-bold border transition-colors ${
                  isSpeaking
                    ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
                <span>{isSpeaking ? (lang === 'hi' ? 'बोलना बंद करें' : 'Stop Audio') : (lang === 'hi' ? '🔊 आवाज में पूरी जानकारी सुनें' : '🔊 Listen Voice Guide')}</span>
              </button>
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{product.warranty}</span>
                <span className="text-slate-300">·</span>
                <span>HSN: {product.hsnCode}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {lang === 'hi' ? product.nameHi : product.nameEn}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'hi' ? product.shortDescHi : product.shortDescEn}
              </p>

              {/* Price Breakdown */}
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1.5 text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-slate-700">
                    {lang === 'hi' ? 'ऑफर मूल्य (GST सहित):' : 'Offer Price (Incl. GST):'}
                  </span>
                  <span className="text-2xl font-black text-slate-900 tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-amber-200/60">
                  <span>{lang === 'hi' ? 'मूल बेस मूल्य (बिना टैक्स):' : 'Base Price (Tax Free):'}</span>
                  <span className="tabular-nums">₹{basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>CGST (9%) + SGST (9%):</span>
                  <span className="tabular-nums">₹{halfGst} + ₹{halfGst} = ₹{gstAmount}</span>
                </div>
              </div>

              {/* Quantity Selector & Order Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-sm tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>
                    {justAdded
                      ? (lang === 'hi' ? 'कार्ट में जुड़ गया ✓' : 'Added to Cart ✓')
                      : (lang === 'hi' ? 'कार्ट में डालें' : 'Add to Cart')}
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20${encodeURIComponent(product.nameHi)}%20(संख्या:%20${quantity})%20का%20ऑर्डर%20देना%20है`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'WhatsApp पर आर्डर करें' : 'Order via WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${STORE_PHONE}`}
                  className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? 'कॉल पर पूछें' : 'Call 8432644312'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="pt-4 border-t border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>{lang === 'hi' ? 'तकनीकी स्पेसिफिकेशन (Specifications)' : 'Technical Specifications'}</span>
            </h3>

            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <tr
                      key={key}
                      className={idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}
                    >
                      <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-b border-slate-200/60">
                        {key}
                      </td>
                      <td className="py-2.5 px-4 text-slate-900 border-b border-slate-200/60 font-medium">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Jodhpur Showroom Visit Note */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <p className="font-bold text-slate-900">
                {lang === 'hi' ? '📍 रामस्नेही एंटरप्राइजेज सरदारपुरा शोरूम' : '📍 Ramsnehi Enterprises Sardarpura Showroom'}
              </p>
              <p className="text-slate-500 mt-0.5">
                9TH A, Pal Rd, opposite Balaji Mandir, near khadi Bhandar, Sardarpura, Jodhpur
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=ramsnehi+enterprises+jodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white border border-slate-300 hover:border-slate-400 rounded-lg font-semibold text-slate-700 whitespace-nowrap self-start sm:self-auto text-center"
            >
              {lang === 'hi' ? 'गूगल मैप पर रास्ता देखें' : 'Get Directions'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
