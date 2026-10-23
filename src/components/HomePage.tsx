import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  FileCheck, 
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Product, Language, PageRoute, ProductCategory } from '../types';
import { HeroSlider } from './HeroSlider';
import { CategoryQuickGrid } from './CategoryQuickGrid';
import { ProductCard } from './ProductCard';
import { PRODUCTS, STORE_PHONE, STORE_PHONE_INTL, STORE_ADDRESS, STORE_TIMINGS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface HomePageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
  onSelectCategory: (cat: ProductCategory) => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onSelectCategory,
  onAddToCart,
  onViewDetails
}) => {
  const t = TRANSLATIONS[lang];

  // Dynamic Open/Closed Status
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const todayTiming = STORE_TIMINGS.find(t => t.day.toLowerCase() === dayName.toLowerCase()) || STORE_TIMINGS[0];
  const isOpenNow = currentHour >= todayTiming.openHour && currentHour <= todayTiming.closeHour;

  // Featured top products
  const featuredProducts = PRODUCTS.slice(0, 6);

  const testimonials = [
    {
      nameHi: 'कैलाश गहलोत',
      nameEn: 'Kailash Gehlot',
      businessHi: 'श्री बालाजी नमकीन भंडार, जोधपुर',
      businessEn: 'Shree Balaji Namkeen, Jodhpur',
      commentHi: 'रामस्नेही से ली गई हॉरिजॉन्टल बैंड सीलर मशीन पिछले 2 साल से लगातार चल रही है। हमारे भुजिया और मिर्ची वड़ा मसाला के पाउच बहुत मजबूत सील होते हैं। सर्विस भी बहुत तेज है।',
      commentEn: 'The continuous band sealer machine purchased from Ramsnehi has been running flawlessly for 2 years for our namkeen and spice pouches.',
      stars: 5
    },
    {
      nameHi: 'महेंद्र सोनी',
      nameEn: 'Mahendra Soni',
      businessHi: 'सोनी ज्वैलर्स, सर्राफा बाजार, पाली',
      businessEn: 'Soni Jewellers, Sarafa Bazar, Pali',
      commentHi: '0.01 ग्राम वाला गोल्ड वेइंग कांटा लिया था। राजस्थान सरकार की मुहर लगी हुई मिली और एकदम सटीक तौल देता है। ग्राहकों का पूरा भरोसा बना रहता है।',
      commentEn: 'Bought a 0.01g gold precision scale with government stamping. Reliable accuracy and exceptional customer trust.',
      stars: 5
    },
    {
      nameHi: 'सुरेश चौधरी',
      nameEn: 'Suresh Choudhary',
      businessHi: 'मारवाड़ सुपरमार्ट, बालोतरा',
      businessEn: 'Marwar Supermart, Balotra',
      commentHi: 'टच स्क्रीन बिलिंग मशीन और बारकोड स्कैनर लगवाया। इन्वेंट्री अपने आप मैनेज होती है और तुरंत पक्का जीएसटी बिल निकल जाता है। बहुत ही सरल सिस्टम है।',
      commentEn: 'Installed their touch POS machine with barcode scanner. Real-time inventory tracking and rapid GST thermal billing made store management seamless.',
      stars: 5
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* 1. Amazon/Flipkart Style Auto-sliding Carousel */}
      <HeroSlider
        lang={lang}
        onNavigateProducts={() => onNavigate('products')}
        onNavigatePosDemo={() => onNavigate('pos-demo')}
      />

      {/* 2. Visual 5-Category Quick Grid */}
      <CategoryQuickGrid
        lang={lang}
        onSelectCategory={(cat) => {
          onSelectCategory(cat);
          onNavigate('products');
        }}
      />

      {/* 3. Featured Best-Selling Machines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'hi' ? 'लोकप्रिय मशीनें' : 'Featured Industrial Equipment'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'राजस्थान में सबसे ज्यादा बिकने वाली मशीनें' : 'Most Popular Machinery in Rajasthan'}
            </h2>
          </div>

          <button
            onClick={() => {
              onSelectCategory('all');
              onNavigate('products');
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>{lang === 'hi' ? 'सभी मशीनें देखें' : 'View Full Catalog'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </section>

      {/* 4. Interactive POS Billing Machine & GST Feature Highlight Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>#POS Billing Machine Shop Jodhpur</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                {lang === 'hi'
                  ? 'रियल-टाइम इन्वेंट्री ट्रैकिंग व जीएसटी बिल प्रिंटिंग मशीन'
                  : 'Touch POS Machine with Real-Time Stock & GST Invoicing'}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {lang === 'hi'
                  ? 'अपनी दुकान, सुपरमार्ट या थोक व्यापार को आधुनिक बनाएं। जैसे ही बिल कटेगा, स्टॉक अपने आप घट जाएगा। 3-इंच सुपरफास्ट थर्मल प्रिंटर से 2 सेकंड में पक्का बिल निकालें।'
                  : 'Automate stock levels, scan barcodes effortlessly, and issue authentic GST tax receipts in under 2 seconds. Live interactive demo ready on our website!'}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>रियल-टाइम स्टॉक ट्रैकिंग</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>3" इनबिल्ट थर्मल प्रिंटर</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>बारकोड स्कैनर सपोर्ट</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('pos-demo')}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  {lang === 'hi' ? 'लाइव बिलिंग डेमो चलाकर देखें' : 'Launch Interactive POS Demo'}
                </button>
                <a
                  href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20POS%20बिलिंग%20मशीन%20की%20कीमत%20व%20डेमो%20चाहिए`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp पर कोटेशन लें</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/80 text-xs space-y-3">
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                {lang === 'hi' ? 'मशीन पैकेज में क्या मिलेगा:' : 'Complete Package Includes:'}
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>15.6" कैपेसिटिव एचडी टच स्क्रीन टर्मिनल</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>80mm ऑटो-कटर थर्मल बिलिंग प्रिंटर</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>हाई स्पीड 1D/2D लेजर बारकोड स्कैनर</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>लाइफटाइम जीएसटी बिलिंग व इन्वेंट्री सॉफ्टवेयर</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>1 साल ऑनसाइट वारंटी व फ्री ऑपरेटर ट्रेनिंग</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-700 flex justify-between items-center text-slate-400">
                <span>विशेष ऑफर मूल्य:</span>
                <span className="text-base font-extrabold text-white">₹24,500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Ramsnehi Enterprises (Trust Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.featuresTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {lang === 'hi'
              ? 'जोधपुर व पूरे राजस्थान के व्यापारी हमें क्यों अपनी पहली पसंद मानते हैं'
              : 'The leading choice for trading houses, retailers, and food manufacturers across Rajasthan'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{t.feat1Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.feat1Desc}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{t.feat2Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.feat2Desc}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{t.feat3Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.feat3Desc}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{t.feat4Title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.feat4Desc}</p>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              {lang === 'hi' ? 'ग्राहक समीक्षा' : 'Trader Testimonials'}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'राजस्थान के व्यापारियों का सच्चा अनुभव' : 'Trusted by Businesses Across Rajasthan'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{lang === 'hi' ? test.commentHi : test.commentEn}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {lang === 'hi' ? test.nameHi : test.nameEn}
                  </h4>
                  <p className="text-[11px] text-amber-700 font-medium">
                    {lang === 'hi' ? test.businessHi : test.businessEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Showroom Location & Timings Quick Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span className="text-xs font-bold text-slate-700">
                {isOpenNow ? t.storeStatusOpen : t.storeStatusClosed}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {lang === 'hi' ? 'पाल रोड सरदारपुरा शोरूम पर आपका स्वागत है' : 'Visit Our Flagship Store on Pal Road'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              {STORE_ADDRESS}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${STORE_PHONE}`}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>कॉल करें: 8432644312</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 cursor-pointer"
            >
              <span>{lang === 'hi' ? 'दुकान का समय व नक्शा' : 'Store Timings & Map'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
