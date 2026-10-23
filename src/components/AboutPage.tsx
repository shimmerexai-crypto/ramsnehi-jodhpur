import React from 'react';
import { Building2, ShieldCheck, Award, MapPin, Instagram, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { STORE_PHONE, STORE_PHONE_INTL, STORE_ADDRESS, STORE_INSTAGRAM } from '../data/products';

interface AboutPageProps {
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Hero Banner */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'जोधपुर का प्रतिष्ठित मशीन प्रतिष्ठान' : 'Premier Industrial Equipment Hub in Jodhpur'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'रामस्नेही एंटरप्राइजेज, सरदारपुरा, जोधपुर' : 'Ramsnehi Enterprises, Sardarpura, Jodhpur'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            {lang === 'hi'
              ? 'रामस्नेही एंटरप्राइजेज राजस्थान भर में वेइंग मशीनों (इलेक्ट्रॉनिक कांटे), लगातार चलने वाली बैंड सीलर पैकेजिंग मशीनों, पीओएस टच बिलिंग सिस्टम, बैंक-ग्रेड कैश काउंटिंग मशीनों और हैंडहेल्ड बैच कोडिंग इंकजेट प्रिंटर्स का प्रमुख व अधिकृत विक्रेता है। हमारा मुख्य उद्देश्य मारवाड़ और पूरे राजस्थान के छोटे-बड़े व्यापारियों, किराना स्टोर्स, मिठाई विक्रेताओं, मसाला व नमकीन निर्माताओं को असली और भरोसेमंद मशीनें उचित दाम पर उपलब्ध कराना है।'
              : 'Ramsnehi Enterprises is a leading authorized supplier in Rajasthan for certified electronic weighing scales, continuous band sealer packaging machines, POS billing systems, counterfeit note detection cash counters, and handheld TIJ batch coding printers. We are committed to empowering retailers, food manufacturers, and wholesalers with robust equipment, genuine parts, and verified government stamping.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums">10,000+</span>
              <p className="text-xs text-slate-500 mt-0.5">संतुष्ट व्यापारी ग्राहक</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums">100%</span>
              <p className="text-xs text-slate-500 mt-0.5">सरकारी मुहर प्रमाणित</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums">1 Year</span>
              <p className="text-xs text-slate-500 mt-0.5">पक्की ऑनसाइट वारंटी</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums">7 Days</span>
              <p className="text-xs text-slate-500 mt-0.5">शोरूम व सर्विस सहायता</p>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {lang === 'hi' ? 'राजस्थान सरकार द्वारा प्रमाणित' : 'Rajasthan Govt Stamped'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'हमारे सभी वेइंग कांटे विधिक माप विज्ञान विभाग राजस्थान से अधिकृत स्टांपिंग मुहर के साथ आते हैं, जिससे आपको भविष्य में किसी सरकारी जांच की चिंता नहीं रहती।'
                : 'All our commercial balances come with official Legal Metrology department verification marks and certificates.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {lang === 'hi' ? 'सरदारपुरा शोरूम पर लाइव डेमो' : 'Live Showroom Demonstrations'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'पाल रोड पर बालाजी मंदिर के ठीक सामने हमारा विशाल शोरूम स्थित है। आप स्वयं आकर अपनी सामग्री (पाउच, नोट, वजन) से मशीनों का लाइव टेस्ट कर सकते हैं।'
                : 'Visit our flagship store opposite Balaji Mandir on Pal Road, Sardarpura to test packaging sealers, counters, and scales with your own samples.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {lang === 'hi' ? 'स्पेयर पार्ट्स व ऑन-साइट सर्विस' : 'Genuine Spares & Technical Service'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'सीलिंग मशीन की टेफ्लॉन बेल्ट, प्रिंटर पेपर रोल, कार्ट्रिज स्याही व कांटा बैटरी हमेशा स्टॉक में तैयार रहती है ताकि आपका काम कभी न रुके।'
                : 'Readily available backup parts: teflon belts, ink cartridges, thermal rolls, and loadcell batteries.'}
            </p>
          </div>
        </div>

        {/* Instagram Connect Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-rose-700 text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Instagram className="w-4 h-4 text-pink-300" />
              <span>@ramsnehi_enterprise</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              {lang === 'hi' ? 'इंस्टाग्राम पर हमारे लाइव मशीन वीडियो देखें' : 'Follow Us on Instagram for Machine Video Demonstrations'}
            </h3>
            <p className="text-pink-100 text-xs sm:text-sm max-w-xl">
              {lang === 'hi'
                ? 'बैंड सीलर कैसे काम करता है, कैश काउंटर नकली नोट कैसे पकड़ता है, और हैंडहेल्ड कोडर से प्रिंटिंग कैसे होती है - सभी वीडियो देखें।'
                : 'Watch high-speed packaging demos, counterfeit detection in action, and client delivery showcases.'}
            </p>
          </div>

          <a
            href={STORE_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white text-rose-800 hover:bg-pink-50 font-extrabold text-sm rounded-xl flex items-center gap-2 shrink-0 shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            <Instagram className="w-5 h-5 text-pink-600" />
            <span>{lang === 'hi' ? 'इंस्टाग्राम प्रोफाइल खोलें' : 'Visit Instagram'}</span>
          </a>
        </div>

        {/* Location & Contact Bar */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              {lang === 'hi' ? 'शोरूम का पता' : 'Showroom Address'}
            </p>
            <p className="text-sm font-bold text-slate-900">
              {STORE_ADDRESS}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${STORE_PHONE}`}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>कॉल: 8432644312</span>
            </a>
            <a
              href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
