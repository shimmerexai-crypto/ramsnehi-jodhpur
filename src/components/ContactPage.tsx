import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { 
  STORE_PHONE, 
  STORE_PHONE_INTL, 
  STORE_ADDRESS, 
  STORE_INSTAGRAM, 
  STORE_TIMINGS 
} from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [machineType, setMachineType] = useState('कांटा / वेइंग मशीन');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const t = TRANSLATIONS[lang];

  // Dynamic Open/Closed Status
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const todayTiming = STORE_TIMINGS.find(t => t.day.toLowerCase() === dayName.toLowerCase()) || STORE_TIMINGS[0];
  const isOpenNow = currentHour >= todayTiming.openHour && currentHour <= todayTiming.closeHour;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    let text = `*नई पूछताछ - रामस्नेही एंटरप्राइजेज वेबसाईट*\n`;
    text += `*नाम:* ${name}\n`;
    text += `*मोबाइल:* ${phone}\n`;
    text += `*मशीन में रुचि:* ${machineType}\n`;
    if (message) text += `*संदेश:* ${message}\n`;

    const url = `https://wa.me/${STORE_PHONE_INTL}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
            <MapPin className="w-3.5 h-3.5" />
            <span>सरदारपुरा, जोधपुर, राजस्थान</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'शोरूम पधारें या सीधा संपर्क करें' : 'Visit Our Showroom or Get in Touch'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600">
            {lang === 'hi'
              ? 'पाल रोड, बालाजी मंदिर के सामने स्थित हमारे शोरूम में सभी मशीनें लाइव डेमो के लिए तैयार हैं।'
              : 'All weighing scales, continuous band sealers, and POS billing machines are ready for testing at our Sardarpura showroom.'}
          </p>
        </div>

        {/* 2-Column Split: Contact Cards & Timing vs Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 6 Columns: Address, Direct Buttons & Hours Matrix */}
          <div className="lg:col-span-6 space-y-6">
            {/* Showroom Status Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'hi' ? 'दुकान की स्थिति' : 'Showroom Status'}
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  isOpenNow
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  <span>{isOpenNow ? t.storeStatusOpen : t.storeStatusClosed}</span>
                </span>
              </div>

              {/* Address */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {lang === 'hi' ? 'रामस्नेही एंटरप्राइजेज - मुख्य शोरूम' : 'Ramsnehi Enterprises - Flagship Store'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {STORE_ADDRESS}
                  </p>
                  <p className="text-[11px] text-amber-700 font-semibold mt-1">
                    (Landmark: Opp. Balaji Mandir, Near Khadi Bhandar, Pal Road)
                  </p>
                  <a
                    href="https://maps.google.com/?q=ramsnehi+enterprises+jodhpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 mt-2"
                  >
                    <span>{lang === 'hi' ? 'गूगल मैप पर लोकेशन खोलें' : 'Open in Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${STORE_PHONE}`}
                  className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>कॉल करें: 84326 44312</span>
                </a>

                <a
                  href={`https://wa.me/${STORE_PHONE_INTL}?text=नमस्ते%20रामस्नेही%20एंटरप्राइजेज,%20मुझे%20मशीन%20की%20जानकारी%20चाहिए`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp चैट</span>
                </a>
              </div>

              {/* Instagram */}
              <a
                href={STORE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span>{lang === 'hi' ? 'इंस्टाग्राम प्रोफाइल: @ramsnehi_enterprise' : 'Instagram: @ramsnehi_enterprise'}</span>
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-600" />
                <h3>{t.hoursTitle}</h3>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs divide-y divide-slate-100">
                {STORE_TIMINGS.map(tm => {
                  const isToday = tm.day.toLowerCase() === dayName.toLowerCase();
                  return (
                    <div
                      key={tm.day}
                      className={`py-2 px-3 flex justify-between items-center ${
                        isToday ? 'bg-amber-50/70 font-bold text-amber-950' : 'text-slate-600'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>}
                        <span>{lang === 'hi' ? tm.dayHi : tm.day}</span>
                        {isToday && <span className="text-[10px] text-amber-700 font-semibold">(आज / Today)</span>}
                      </span>
                      <span className="tabular-nums font-semibold">{tm.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Instant Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {lang === 'hi' ? 'मशीन पूछताछ फॉर्म (Inquiry Form)' : 'Quick Machine Inquiry Form'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'hi'
                  ? 'अपना विवरण भरें, हमारी टीम आपको तुरंत व्हाट्सएप पर मशीन की कीमत व वीडियो भेजेगी।'
                  : 'Fill the form to receive prices and video demos directly on your phone.'}
              </p>
            </div>

            {sentSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? 'संदेश भेजा जा चुका है! हम शीघ्र संपर्क करेंगे।' : 'Message sent successfully! We will connect promptly.'}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'आपका पूरा नाम:' : 'Your Full Name:'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'hi' ? 'जैसे: रमेश कुमार' : 'e.g. Ramesh Kumar'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'मोबाइल नंबर (WhatsApp):' : 'Phone / WhatsApp Number:'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="84326XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'किस मशीन की जानकारी चाहिए:' : 'Machine Interested In:'}
                </label>
                <select
                  value={machineType}
                  onChange={(e) => setMachineType(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 bg-white"
                >
                  <option value="कांटा / वेइंग मशीन (Weighing Scale)">कांटा / वेइंग मशीन (Weighing Scale)</option>
                  <option value="लगातार चलने वाली बैंड सीलर (Band Sealer)">लगातार चलने वाली बैंड सीलर (Band Sealer)</option>
                  <option value="टच स्क्रीन बिलिंग मशीन (POS Billing Machine)">टच स्क्रीन बिलिंग मशीन (POS Billing Machine)</option>
                  <option value="नकली नोट पकड़ने वाली कैश मशीन (Cash Counter)">नकली नोट पकड़ने वाली कैश मशीन (Cash Counter)</option>
                  <option value="हैंडहेल्ड बैच कोडिंग मशीन (Batch Coder)">हैंडहेल्ड बैच कोडिंग मशीन (Batch Coder)</option>
                  <option value="सरकारी बांट-माप मुहर व रिपेयरिंग (Stamping/Repair)">सरकारी बांट-माप मुहर व रिपेयरिंग (Stamping/Repair)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'आपका संदेश या कोई विशेष जरूरत:' : 'Message or Custom Requirement:'}
                </label>
                <textarea
                  rows={3}
                  placeholder={lang === 'hi' ? 'जैसे: मुझे नमकीन पाउच सील करने के लिए मशीन चाहिए...' : 'Details about your business needs...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'hi' ? 'व्हाट्सएप पर तुरंत पूछताछ भेजें' : 'Send Inquiry via WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
