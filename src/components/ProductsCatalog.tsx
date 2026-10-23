import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, Scale, Package, Monitor, Banknote, Stamp, Check } from 'lucide-react';
import { Product, Language, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { ProductCard } from './ProductCard';

interface ProductsCatalogProps {
  lang: Language;
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  lang,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onViewDetails
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  const t = TRANSLATIONS[lang];

  const categories = [
    { id: 'all' as ProductCategory, labelHi: 'सभी मशीनें', labelEn: 'All Machines' },
    { id: 'weighing' as ProductCategory, labelHi: 'कांटा / वेइंग मशीन', labelEn: 'Weighing Scales' },
    { id: 'packaging' as ProductCategory, labelHi: 'बैंड सीलर (पैकिंग)', labelEn: 'Band Sealers' },
    { id: 'pos-billing' as ProductCategory, labelHi: 'पीओएस बिलिंग सिस्टम', labelEn: 'POS Billing' },
    { id: 'cash-counting' as ProductCategory, labelHi: 'कैश काउंटिंग मशीन', labelEn: 'Cash Counters' },
    { id: 'batch-coding' as ProductCategory, labelHi: 'बैच कोडिंग प्रिंटर', labelEn: 'Batch Coders' }
  ];

  // Filtering
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      p.nameHi.toLowerCase().includes(term) ||
      p.nameEn.toLowerCase().includes(term) ||
      p.shortDescHi.toLowerCase().includes(term) ||
      p.shortDescEn.toLowerCase().includes(term) ||
      p.hsnCode.includes(term);

    return matchesCat && matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
  });

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Page Title & Search Header */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'रामस्नेही मशीन स्टोर - उत्पाद कैटलॉग' : 'Machine Catalog & Online Store'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {lang === 'hi'
                ? 'सभी उत्पाद 1 वर्ष की ऑन-साइट वारंटी व अधिकृत 18% GST बिल के साथ आते हैं'
                : 'All industrial machines include 1-year onsite warranty and verified GST tax invoices.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills & Sort Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {lang === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 text-xs shrink-0 self-end sm:self-auto">
            <span className="text-slate-500 font-medium">
              {lang === 'hi' ? 'क्रम:' : 'Sort by:'}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-amber-500"
            >
              <option value="popular">{lang === 'hi' ? 'लोकप्रियता (Popular)' : 'Most Popular'}</option>
              <option value="price-asc">{lang === 'hi' ? 'कम से ज्यादा दाम (Price: Low to High)' : 'Price: Low to High'}</option>
              <option value="price-desc">{lang === 'hi' ? 'ज्यादा से कम दाम (Price: High to Low)' : 'Price: High to Low'}</option>
            </select>
          </div>
        </div>

        {/* Product Count indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>
            {lang === 'hi'
              ? `दिखाई जा रही मशीनें: ${sortedProducts.length}`
              : `Showing ${sortedProducts.length} equipment units`}
          </span>
          <span className="text-emerald-700 font-semibold hidden sm:inline">
            ✓ {lang === 'hi' ? 'जोधपुर शोरूम में सभी मशीनें उपलब्ध' : 'All machines ready in showroom'}
          </span>
        </div>

        {/* Product Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
            <p className="text-slate-500 font-medium text-sm">
              {lang === 'hi' ? 'कोई मशीन नहीं मिली। कृपया दूसरा नाम खोजें।' : 'No machines found matching your query.'}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                onSelectCategory('all');
              }}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg text-xs font-bold"
            >
              {lang === 'hi' ? 'सभी मशीनें देखें' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
