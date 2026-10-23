import React from 'react';
import { ShieldCheck, Wrench, FileCheck, Truck, Phone, MessageSquare, Award, Clock } from 'lucide-react';
import { Language } from '../types';
import { STORE_PHONE, STORE_PHONE_INTL, STORE_ADDRESS } from '../data/products';

interface ServicesPageProps {
  lang: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ lang }) => {
  const services = [
    {
      titleHi: 'राजस्थान सरकार विधिक माप विज्ञान मुहर (Stamping & Verification)',
      titleEn: 'Rajasthan Legal Metrology Govt Stamping & Verification',
      descHi: 'सभी प्रकार के इलेक्ट्रॉनिक वेइंग स्केल, टेबलटॉप किराना कांटे व हैवी प्लेटफॉर्म कांटों पर राजस्थान सरकार बांट-माप विभाग की अधिकृत मुहर व सत्यापन प्रमाण पत्र उपलब्ध कराते हैं।',
      descEn: 'Authorized government stamping, calibration and verification certificates from Rajasthan Legal Metrology Department for commercial scales.',
      badgeHi: '100% कानूनी मान्यता',
      badgeEn: '100% Legal Compliance',
      icon: FileCheck
    },
    {
      titleHi: 'लगातार चलने वाली बैंड सीलर व पैकेजिंग मशीन रिपेयर',
      titleEn: 'Continuous Band Sealer & Packaging Machine Repairs',
      descHi: 'बैंड सीलर मशीनों की टेफ्लॉन बेल्ट, हीटिंग ब्लॉक, तापमान कंट्रोलर और कन्वेयर मोटर की तुरंत मरम्मत व ओरिजिनल स्पेयर पार्ट्स उपलब्ध।',
      descEn: 'Immediate repair and genuine spare parts for continuous band sealers, teflon belts, temperature controllers and conveyor motors.',
      badgeHi: 'तुरंत सर्विस',
      badgeEn: 'Fast Turnaround',
      icon: Wrench
    },
    {
      titleHi: 'पीओएस बिलिंग सॉफ्टवेयर व थर्मल प्रिंटर सेटअप',
      titleEn: 'POS Billing Software Setup & Thermal Printer Service',
      descHi: 'टच स्क्रीन बिलिंग मशीन का पूरा इंस्टॉलेशन, आपकी दुकान के उत्पादों की इन्वेंट्री लोडिंग, बारकोड प्रिंटिंग और कर्मचारियों को ट्रेनिंग।',
      descEn: 'Turnkey POS terminal installation, inventory catalog upload, barcode generation, and complete staff operating training.',
      badgeHi: 'ऑनसाइट ट्रेनिंग',
      badgeEn: 'Onsite Training',
      icon: ShieldCheck
    },
    {
      titleHi: 'कैश काउंटिंग मशीन सेंसर्स सर्विस व UV/MG कैलिब्रेशन',
      titleEn: 'Cash Counting Machine UV/MG Sensor Calibration',
      descHi: 'नकली नोट पकड़ने वाले UV/MG/IR सेंसर्स की सफाई, नोट फीडिंग रबर रोलर रिप्लेसमेंट व सॉफ्टवेयर अपडेट ताकि कोई नकली नोट न छूटे।',
      descEn: 'Ultra-precision cleaning and calibration for UV/MG counterfeit sensors, feeding roller replacements and currency firmware updates.',
      badgeHi: 'बैंक ग्रेड सुरक्षा',
      badgeEn: 'Bank Grade Accuracy',
      icon: Award
    }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'राजस्थान में 10+ वर्षों का अनुभव' : '10+ Years Trust in Rajasthan'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi'
              ? 'सरकारी मुहर (स्टांपिंग), रिपेयरिंग व मेंटेनेंस सेवाएं'
              : 'Government Stamping, Repairs & Maintenance Services'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'hi'
              ? 'रामस्नेही एंटरप्राइजेज केवल मशीनें बेचती ही नहीं, बल्कि राजस्थान सरकार द्वारा अधिकृत बांट-माप मुहर, वार्षिक रखरखाव (AMC) और जोधपुर व आसपास के जिलों में डोरस्टेप सर्विस भी प्रदान करती है।'
              : 'We don’t just supply machines—we provide government legal metrology stamping, annual maintenance contracts (AMC), and doorstep technical service across Rajasthan.'}
          </p>
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {lang === 'hi' ? s.badgeHi : s.badgeEn}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {lang === 'hi' ? s.titleHi : s.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === 'hi' ? s.descHi : s.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage District Strip */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-extrabold text-slate-900">
              {lang === 'hi' ? 'राजस्थान में ऑन-साइट सर्विस एवं डिलीवरी क्षेत्र' : 'Service & Fast Delivery Network Across Rajasthan'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            {lang === 'hi'
              ? 'हमारे कुशल इंजीनियर्स व सुरक्षित ट्रांसपोर्ट नेटवर्क द्वारा निम्नलिखित जिलों में त्वरित सेवा उपलब्ध है:'
              : 'Our trained technicians and express road cargo service cover the following trading hubs:'}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'जोधपुर शहर (Jodhpur)',
              'सरदारपुरा / पाल रोड',
              'पाली (Pali)',
              'नागौर (Nagaur)',
              'बाड़मेर (Barmer)',
              'जैसलमेर (Jaisalmer)',
              'बालोतरा (Balotra)',
              'बीकानेर (Bikaner)',
              'जालोर (Jalore)',
              'सिरोही (Sirohi)',
              'फलौदी (Phalodi)',
              'मेड़ता सिटी (Merta City)'
            ].map(area => (
              <span key={area} className="px-3 py-1.5 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200">
                ✓ {area}
              </span>
            ))}
          </div>
        </div>

        {/* Service Booking CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              {lang === 'hi' ? 'क्या आपकी मशीन में कोई खराबी है या सरकारी मुहर लगवानी है?' : 'Need Machine Repair or Govt Stamping Renewal?'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              {lang === 'hi'
                ? 'अभी कॉल करें या व्हाट्सएप पर मशीन का फोटो/वीडियो भेजें। हमारे इंजीनियर तुरंत सहायता करेंगे।'
                : 'Call directly or send a photo/video of your machine on WhatsApp for instant quote.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${STORE_PHONE}`}
              className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>कॉल करें: 84326 44312</span>
            </a>
            <a
              href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20मशीन%20सर्विस%20/%20सरकारी%20मुहर%20के%20लिए%20संपर्क%20करना%20है`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp सर्विस हेल्प</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
