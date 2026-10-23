import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  MessageSquare, 
  ShieldCheck, 
  Award, 
  Truck, 
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { Language, PageRoute, ProductCategory } from '../types';
import { 
  STORE_PHONE, 
  STORE_PHONE_INTL, 
  STORE_ADDRESS, 
  STORE_INSTAGRAM, 
  STORE_TIMINGS 
} from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
  onSelectCategory: (cat: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onSelectCategory
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800">
      {/* 4 Trust Badges Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {lang === 'hi' ? 'राजस्थान सरकारी मुहर' : 'Govt Stamped & Approved'}
              </h4>
              <p className="text-[11px] text-slate-400">विधिक माप विज्ञान प्रमाणित</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {lang === 'hi' ? '1 वर्ष ऑन-साइट वारंटी' : '1 Year Onsite Warranty'}
              </h4>
              <p className="text-[11px] text-slate-400">असली पार्ट्स व तकनीकी मदद</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {lang === 'hi' ? 'राजस्थान भर में डिलीवरी' : 'All Rajasthan Cargo'}
              </h4>
              <p className="text-[11px] text-slate-400">जोधपुर, पाली, बाड़मेर, नागौर</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {lang === 'hi' ? 'पक्का 18% GST इनवॉइस' : '100% ITC GST Invoice'}
              </h4>
              <p className="text-[11px] text-slate-400">इनपुट टैक्स क्रेडिट उपलब्ध</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand & Showroom Summary (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black text-lg">
                R
              </div>
              <span className="text-lg font-bold text-white">
                {lang === 'hi' ? 'रामस्नेही एंटरप्राइजेज' : 'Ramsnehi Enterprises'}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'hi'
                ? 'जोधपुर में इलेक्ट्रॉनिक कांटा, लगातार चलने वाली बैंड सीलर पैकेजिंग मशीन, पीओएस बिलिंग टर्मिनल व नकली नोट पकड़ने वाली कैश काउंटिंग मशीनों के अधिकृत विक्रेता।'
                : 'Authorised supplier in Jodhpur for electronic weighing balances, continuous band sealers, cash counting machines with counterfeit detection, and touch POS billing systems.'}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{STORE_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${STORE_PHONE}`} className="hover:text-amber-400 font-bold">
                  +91 84326 44312
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={STORE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-pink-600 text-white transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-emerald-600 text-white transition-colors"
                aria-label="WhatsApp chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STORE_PHONE}`}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-amber-600 text-white transition-colors"
                aria-label="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'hi' ? 'मुख्य मशीनें' : 'Core Categories'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                    onSelectCategory('weighing');
                  }}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>कांटा / वेइंग मशीन (राजस्थान मुहर)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                    onSelectCategory('packaging');
                  }}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>लगातार बैंड सीलर (Band Sealer)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pos-demo')}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>टच पीओएस बिलिंग व जीएसटी प्रिंटर</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                    onSelectCategory('cash-counting');
                  }}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>कैश काउंटिंग व फेक नोट डिटेक्टर</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                    onSelectCategory('batch-coding');
                  }}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>हैंडहेल्ड बैच कोडिंग मशीन</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.hoursTitle}</span>
            </h4>
            <div className="space-y-1 text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span>शुक्रवार (Friday):</span>
                <span className="text-slate-200">9 am – 5 pm</span>
              </div>
              <div className="flex justify-between">
                <span>शनिवार (Saturday):</span>
                <span className="text-slate-200">9 am – 8 pm</span>
              </div>
              <div className="flex justify-between">
                <span>रविवार (Sunday):</span>
                <span className="text-slate-200">9 am – 8:30 pm</span>
              </div>
              <div className="flex justify-between">
                <span>सोमवार (Monday):</span>
                <span className="text-slate-200">8 am – 5 pm</span>
              </div>
              <div className="flex justify-between">
                <span>मंगलवार (Tuesday):</span>
                <span className="text-slate-200">8 am – 8 pm</span>
              </div>
              <div className="flex justify-between">
                <span>बुधवार (Wednesday):</span>
                <span className="text-slate-200">9 am – 7 pm</span>
              </div>
              <div className="flex justify-between">
                <span>गुरुवार (Thursday):</span>
                <span className="text-slate-200">9 am – 8 pm</span>
              </div>
            </div>
          </div>

          {/* Direct Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'hi' ? 'वेबसाइट पेज' : 'Pages'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-400">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-amber-400">
                  {t.navProducts}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pos-demo')} className="hover:text-amber-400">
                  {t.navPosDemo}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400">
                  {t.navServices}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400">
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 Ramsnehi Enterprises. All Rights Reserved. Sardarpura, Jodhpur, Rajasthan.</p>
        <p className="text-[11px] text-slate-400">
          GST Registered Dealer · Weighing Machine, Band Sealer & POS Billing Specialist
        </p>
      </div>
    </footer>
  );
};
