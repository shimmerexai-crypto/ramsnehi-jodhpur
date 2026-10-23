import React from 'react';
import { Scale, Package, Monitor, Banknote, Stamp, CheckCircle2 } from 'lucide-react';
import { Language, ProductCategory } from '../types';

interface CategoryQuickGridProps {
  lang: Language;
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryQuickGrid: React.FC<CategoryQuickGridProps> = ({
  lang,
  onSelectCategory
}) => {
  const categories = [
    {
      id: 'weighing' as ProductCategory,
      titleHi: 'कांटा / वेइंग मशीन',
      titleEn: 'Weighing Scales',
      subtitleHi: 'किराना कांटा, 500kg प्लेटफॉर्म, ज्वैलरी बैलेंस (सरकारी मुहर सहित)',
      subtitleEn: 'Tabletop, 500kg Platform & Jewellery Precision (Govt Stamped)',
      icon: Scale,
      color: 'from-amber-500 to-amber-600',
      badgeHi: 'राजस्थान बांट-माप प्रमाणित',
      badgeEn: 'Rajasthan Govt Approved'
    },
    {
      id: 'packaging' as ProductCategory,
      titleHi: 'बैंड सीलर / पैकिंग मशीन',
      titleEn: 'Continuous Band Sealers',
      subtitleHi: 'नमकीन, मसाले, पाउच व कट्टे मजबूत सील करने वाली मशीनें',
      subtitleEn: 'Pouch, Spices & Food Bag Continuous Sealing Machines',
      icon: Package,
      color: 'from-blue-600 to-indigo-700',
      badgeHi: 'लीक-प्रूफ पक्की सीलिंग',
      badgeEn: 'Heavy-Duty Conveyor'
    },
    {
      id: 'pos-billing' as ProductCategory,
      titleHi: 'टच पीओएस बिलिंग मशीन',
      titleEn: 'Touch POS Billing Systems',
      subtitleHi: 'थर्मल प्रिंटर, बारकोड स्कैनर, रियल-टाइम स्टॉक व जीएसटी बिल',
      subtitleEn: 'Thermal GST Printer, Barcode Scanner & Real-Time Stock',
      icon: Monitor,
      color: 'from-emerald-600 to-teal-700',
      badgeHi: 'पक्का GST बिलिंग सॉफ्टवेयर',
      badgeEn: 'GST Invoice Printing'
    },
    {
      id: 'cash-counting' as ProductCategory,
      titleHi: 'कैश काउंटिंग मशीन',
      titleEn: 'Cash Note Counters',
      subtitleHi: '1000 नोट/मिनट व नकली नोट पकड़ने वाला UV/MG अलार्म सेंसर',
      subtitleEn: '1000 Notes/Min with Counterfeit Fake Note Detection',
      icon: Banknote,
      color: 'from-purple-600 to-violet-700',
      badgeHi: 'फेक नोट बीप अलार्म',
      badgeEn: 'UV/MG Fake Detector'
    },
    {
      id: 'batch-coding' as ProductCategory,
      titleHi: 'बैच कोडिंग प्रिंटर',
      titleEn: 'Batch Coding Machines',
      subtitleHi: 'बोतल, पाउच, डिब्बों पर तुरंत MRP, एक्सपायरी व बारकोड छापें',
      subtitleEn: 'Handheld Inkjet Printer for MRP, EXP Date & QR Codes',
      icon: Stamp,
      color: 'from-rose-600 to-pink-700',
      badgeHi: 'वाटरप्रूफ सॉल्वेंट स्याही',
      badgeEn: 'Instant Dry Ink'
    }
  ];

  return (
    <section className="py-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'मुख्य मशीन श्रेणियां' : 'Core Machine Categories'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {lang === 'hi'
                ? 'अपनी जरूरत की मशीन पर क्लिक करें और तुरंत सही मॉडल देखें'
                : 'Click any category to browse tailored models and check prices'}
            </p>
          </div>
          <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full self-start sm:self-auto">
            {lang === 'hi' ? 'जोधपुर में सबसे कम थोक दाम' : 'Wholesale Rates in Jodhpur'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white mb-3 shadow-xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                    {lang === 'hi' ? cat.titleHi : cat.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {lang === 'hi' ? cat.subtitleHi : cat.subtitleEn}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="truncate text-amber-800">
                    {lang === 'hi' ? cat.badgeHi : cat.badgeEn}
                  </span>
                  <span className="text-amber-600 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
