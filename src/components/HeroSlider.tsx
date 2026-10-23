import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { Language, PageRoute } from '../types';
import { STORE_PHONE, STORE_PHONE_INTL } from '../data/products';
import { MachineGraphic } from './MachineGraphic';

interface HeroSliderProps {
  lang: Language;
  onNavigateProducts: () => void;
  onNavigatePosDemo: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  lang,
  onNavigateProducts,
  onNavigatePosDemo
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'slide-band-sealer',
      tagHi: 'पैकेजिंग मशीन सप्लायर जोधपुर',
      tagEn: 'Packaging Machine Supplier Jodhpur',
      titleHi: 'लगातार चलने वाली बैंड सीलर मशीन (Continuous Band Sealer)',
      titleEn: 'Heavy-Duty Continuous Band Sealer Packaging Machines',
      descHi: 'मसाले, नमकीन, दाल, बीज व ड्राई फ्रूट्स पाउच को 2 सेकंड में मजबूत एयर-टाइट सील करें। डिजिटल टेम्परेचर और डेट कोडिंग एम्बॉसर के साथ।',
      descEn: 'High-speed automated pouch sealing for food, spices, snacks, and grains with digital PID temperature controller and date embossing.',
      highlightBadgeHi: '100% लीकेज-प्रूफ पक्की सीलिंग',
      highlightBadgeEn: '100% Leak-Proof Industrial Sealing',
      price: '₹18,500',
      original: '₹22,000',
      machineType: 'band-sealer' as const,
      ctaTextHi: 'बैंड सीलर देखें',
      ctaTextEn: 'View Band Sealer',
      action: onNavigateProducts
    },
    {
      id: 'slide-weighing-scales',
      tagHi: 'राजस्थान सरकार अधिकृत मुहर सहित',
      tagEn: 'Rajasthan Govt Stamped & Certified',
      titleHi: 'इलेक्ट्रॉनिक कांटा व इंडस्ट्रियल वेइंग मशीनें',
      titleEn: 'Govt Certified Weighing Scales & Heavy Platform Balances',
      descHi: 'विधिक माप विज्ञान विभाग (बांट-माप) द्वारा प्रमाणित। 30 किलो टेबलटॉप किराना कांटा से लेकर 500 किलो हैवी-ड्यूटी प्लेटफॉर्म कांटे उपलब्ध।',
      descEn: 'Authorized legal metrology verified scales. From 30kg retail grocery balances to 500kg heavy duty industrial warehouse platform scales.',
      highlightBadgeHi: 'सरकारी स्टांपिंग सर्टिफिकेट फ्री',
      highlightBadgeEn: 'Govt Stamping Certificate Included',
      price: '₹2,600 से शुरू',
      original: '₹3,200',
      machineType: 'weighing-platform' as const,
      ctaTextHi: 'सभी कांटे देखें',
      ctaTextEn: 'Explore Weighing Scales',
      action: onNavigateProducts
    },
    {
      id: 'slide-pos-billing',
      tagHi: 'बिलिंग मशीन शॉप जोधपुर',
      tagEn: 'POS Billing Machine Shop Jodhpur',
      titleHi: 'टच स्क्रीन पीओएस बिलिंग मशीन + इनबिल्ट थर्मल प्रिंटर',
      titleEn: 'All-in-One Touch POS Terminal & Real-Time GST Billing',
      descHi: 'दुकान, सुपरमार्केट व शोरूम के लिए संपूर्ण समाधान। रियल-टाइम इन्वेंट्री ट्रैकिंग, बारकोड स्कैनिंग और तुरंत पक्का जीएसटी बिल प्रिंटिंग।',
      descEn: 'Complete retail suite with real-time stock inventory, barcode scanning, fast 3-inch thermal invoice generation, and customer management.',
      highlightBadgeHi: 'रियल-टाइम इन्वेंट्री + GST इनवॉइस',
      highlightBadgeEn: 'Real-Time Inventory + GST Thermal Printing',
      price: '₹24,500',
      original: '₹29,000',
      machineType: 'pos-touch' as const,
      ctaTextHi: 'लाइव बिलिंग डेमो चलाएं',
      ctaTextEn: 'Try Live POS Demo',
      action: onNavigatePosDemo
    },
    {
      id: 'slide-cash-counter',
      tagHi: 'काउंटिंग मशीन डीलर जोधपुर',
      tagEn: 'Cash Counting Machine Dealer Jodhpur',
      titleHi: 'नकली नोट पकड़ने वाली कैश काउंटिंग मशीन',
      titleEn: 'High-Speed Currency Counter with Fake Note Detector',
      descHi: '1000 नोट प्रति मिनट की रफ्तार। नए ₹500, ₹200, ₹100 के नोटों में से नकली नोट आते ही बीप अलार्म बजाकर तुरंत मशीन रोक देती है।',
      descEn: 'Heavy duty banknote counter with ultraviolet (UV), magnetic (MG), infrared (IR) sensors and dual customer viewing display.',
      highlightBadgeHi: 'UV/MG फेक नोट अलार्म सेंसर',
      highlightBadgeEn: 'Instant Fake Note Alarm Sensor',
      price: '₹8,900',
      original: '₹11,500',
      machineType: 'cash-counter' as const,
      ctaTextHi: 'कैश काउंटर देखें',
      ctaTextEn: 'View Cash Counters',
      action: onNavigateProducts
    },
    {
      id: 'slide-batch-coder',
      tagHi: 'हैंडहेल्ड बैच कोडिंग मशीन',
      tagEn: 'Handheld Inkjet Batch Coder',
      titleHi: 'स्मार्ट इंकजेट प्रिंटर - MRP, एक्सपायरी व बारकोड',
      titleEn: 'Portable TIJ Inkjet Coding Machine for MRP & Expiry',
      descHi: 'प्लास्टिक थैली, डिब्बे, कांच की बोतल या गत्ते पर तुरंत एमआरपी, एक्सपायरी डेट, बैच नंबर और क्यूआर कोड आसानी से छापें।',
      descEn: 'Touch screen mobile inkjet printer that marks batch number, manufacturing date, expiry and barcodes on any substrate instantly.',
      highlightBadgeHi: 'त्वरित सूखने वाली वाटरप्रूफ स्याही',
      highlightBadgeEn: 'Fast-Drying Waterproof Solvent Ink',
      price: '₹14,500',
      original: '₹17,500',
      machineType: 'batch-coder' as const,
      ctaTextHi: 'कोडिंग मशीन देखें',
      ctaTextEn: 'View Batch Coder',
      action: onNavigateProducts
    }
  ];

  // Auto-play interval like Flipkart/Amazon
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 4800);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div 
      className="relative bg-gradient-to-br from-amber-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Visual background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[420px]">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-4">
            {/* Category Subtitle Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>{lang === 'hi' ? slide.tagHi : slide.tagEn}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium">जोधपुर शोरूम</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              {lang === 'hi' ? slide.titleHi : slide.titleEn}
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {lang === 'hi' ? slide.descHi : slide.descEn}
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? slide.highlightBadgeHi : slide.highlightBadgeEn}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{lang === 'hi' ? '1 साल पक्की ऑनसाइट वारंटी' : '1 Year Onsite Warranty'}</span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-xs uppercase text-slate-500 font-semibold">
                {lang === 'hi' ? 'विशेष ऑफर मूल्य:' : 'Special Price:'}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                {slide.price}
              </span>
              <span className="text-sm text-slate-400 line-through tabular-nums">
                {slide.original}
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                GST बिल सहित
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={slide.action}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-98 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>{lang === 'hi' ? slide.ctaTextHi : slide.ctaTextEn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20${encodeURIComponent(slide.titleHi)}%20के%20बारे%20में%20जानकारी%20चाहिए`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'hi' ? 'व्हाट्सएप पूछताछ' : 'WhatsApp Enquiry'}</span>
              </a>

              <a
                href={`tel:${STORE_PHONE}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>84326 44312</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Machine Graphic Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm relative group">
              <MachineGraphic machineType={slide.machineType} className="h-64 sm:h-72 w-full" />
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="font-medium text-slate-700">
                  {lang === 'hi' ? 'दुकान पर लाइव टेस्ट उपलब्ध' : 'Live Showroom Testing'}
                </span>
                <span className="text-amber-600 font-bold">
                  {lang === 'hi' ? 'सरदारपुरा, जोधपुर' : 'Sardarpura, Jodhpur'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Bar (Amazon/Flipkart Style) */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/60">
          {/* Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-xs text-slate-500 font-medium ml-2 tabular-nums">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 transition-all rounded-full ${
                  currentSlide === idx
                    ? 'w-8 bg-amber-600'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="hidden sm:block text-xs text-slate-500 font-medium">
            {isPaused ? (
              <span className="text-amber-700 font-semibold">
                {lang === 'hi' ? 'रोका गया (पढ़ने के लिए)' : 'Paused on hover'}
              </span>
            ) : (
              <span>{lang === 'hi' ? 'स्वतः बदल रहा है...' : 'Auto-sliding...'}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
