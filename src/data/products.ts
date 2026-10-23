import { Product } from '../types';

export const STORE_PHONE = "8432644312";
export const STORE_PHONE_INTL = "+918432644312";
export const STORE_ADDRESS = "9TH A, Pal Rd, opposite Balaji Mandir, near khadi Bhandar, Sardarpura, Jodhpur, Rajasthan 342003";
export const STORE_INSTAGRAM = "https://www.instagram.com/ramsnehi_enterprise?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==";

export const STORE_TIMINGS = [
  { day: "Monday", dayHi: "सोमवार", hours: "8:00 AM – 5:00 PM", openHour: 8, closeHour: 17 },
  { day: "Tuesday", dayHi: "मंगलवार", hours: "8:00 AM – 8:00 PM", openHour: 8, closeHour: 20 },
  { day: "Wednesday", dayHi: "बुधवार", hours: "9:00 AM – 7:00 PM", openHour: 9, closeHour: 19 },
  { day: "Thursday", dayHi: "गुरुवार", hours: "9:00 AM – 8:00 PM", openHour: 9, closeHour: 20 },
  { day: "Friday", dayHi: "शुक्रवार", hours: "9:00 AM – 5:00 PM", openHour: 9, closeHour: 17 },
  { day: "Saturday", dayHi: "शनिवार", hours: "9:00 AM – 8:00 PM", openHour: 9, closeHour: 20 },
  { day: "Sunday", dayHi: "रविवार", hours: "9:00 AM – 8:30 PM", openHour: 9, closeHour: 20.5 },
];

export const PRODUCTS: Product[] = [
  {
    id: 'pos-touch-pro',
    nameEn: 'All-in-One Touch POS Billing Machine (with Inbuilt Thermal GST Printer)',
    nameHi: 'ऑल-इन-वन टच पीओएस बिलिंग मशीन (इनबिल्ट जीएसटी थर्मल प्रिंटर के साथ)',
    category: 'pos-billing',
    price: 24500,
    originalPrice: 29000,
    hsnCode: '8470',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Onsite Warranty',
    popular: true,
    machineType: 'pos-touch',
    shortDescEn: 'Commercial 15.6" capacitive touch POS terminal with real-time inventory management, 3-inch high-speed thermal GST printer, and barcode scanner interface.',
    shortDescHi: '15.6 इंच कैपेसिटिव टच स्क्रीन, रियल-टाइम स्टॉक इन्वेंट्री ट्रैकिंग, 3 इंच हाई स्पीड जीएसटी बिल प्रिंटर व बारकोड स्कैनर सपोर्ट। दुकान व सुपरमार्केट के लिए सर्वोत्तम।',
    specs: {
      "Display": "15.6 inch HD Touch Screen (1366x768)",
      "Printer": "Inbuilt 80mm (3 Inch) Auto-Cutter Thermal Printer",
      "Software": "Real-time Inventory, GST Invoices, Barcode generator",
      "Connectivity": "Wi-Fi, Bluetooth, USB x 6, LAN (Ethernet), Cash Drawer Port",
      "Processor": "Quad-core Intel / Android Dual OS Support",
      "Memory": "4GB RAM + 64GB High Speed SSD Storage"
    },
    audioSpeechHi: 'यह ऑल-इन-वन टच स्क्रीन पीओएस बिलिंग मशीन है। इसमें रियल-टाइम स्टॉक इन्वेंट्री और 3 इंच का सुपरफास्ट जीएसटी बिल प्रिंटर लगा हुआ है। 1 साल की ऑनसाइट वारंटी के साथ।',
    audioSpeechEn: 'All in one touch screen POS billing machine with real-time inventory tracking, integrated 3 inch GST thermal receipt printer, and 1 year warranty.'
  },
  {
    id: 'band-sealer-horizontal',
    nameEn: 'Continuous Band Sealer Machine (Heavy-Duty Horizontal Model)',
    nameHi: 'लगातार चलने वाली बैंड सीलर मशीन (हैवी ड्यूटी हॉरिजॉन्टल मॉडल)',
    category: 'packaging',
    price: 18500,
    originalPrice: 22000,
    hsnCode: '8422',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Warranty',
    popular: true,
    machineType: 'band-sealer',
    shortDescEn: 'Automated conveyor continuous sealing machine for plastic, laminated, aluminium foil pouches. Ideal for namkeen, spices, grains, and dry fruits.',
    shortDescHi: 'मसाले, नमकीन, दाल और ड्राई फ्रूट्स के पाउच सीलिंग के लिए स्वचालित कन्वेयर बैंड सीलर। तापमान नियंत्रण और एमआरपी तारीख एम्बॉसिंग व्हील के साथ।',
    specs: {
      "Sealing Speed": "0 to 12 Meters per Minute (Adjustable)",
      "Sealing Width": "10 mm Strong Leak-Proof Seal",
      "Conveyor Load": "Up to 5 kg single pouch / 15 kg total",
      "Temperature Range": "0 - 300°C Digital PID Controller",
      "Body Material": "Full Heavy Gauge Stainless Steel (SS304)",
      "Coding Wheel": "Built-in Date & Batch Code Embosser"
    },
    audioSpeechHi: 'यह हैवी ड्यूटी लगातार चलने वाली बैंड सीलर मशीन है। इससे नमकीन, मसाले और सभी तरह के प्लास्टिक व फॉयल पाउच तेजी से सील होते हैं। इसमें तारीख और बैच नंबर छापने की सुविधा भी है।',
    audioSpeechEn: 'Heavy duty horizontal continuous band sealer machine for namkeen, spices, and food pouches with digital temperature control and date coding.'
  },
  {
    id: 'cash-counter-detector',
    nameEn: 'Professional Cash Counting Machine with Fake Note Detector (UV/MG/IR)',
    nameHi: 'नकली नोट जांचने वाली सुपरफास्ट कैश काउंटिंग मशीन (UV/MG/IR सेंसर)',
    category: 'cash-counting',
    price: 8900,
    originalPrice: 11500,
    hsnCode: '8472',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Comprehensive Warranty',
    popular: true,
    machineType: 'cash-counter',
    shortDescEn: 'Bank-grade high-speed currency note counter with automatic fake note detection, batching, addition, and dual customer display.',
    shortDescHi: 'बैंक ग्रेड करेंसी नोट काउंटिंग मशीन। 1000 नोट प्रति मिनट की रफ्तार। नकली नोट, कटे-फटे नोट आते ही बीप अलार्म बजाकर तुरंत रोक देती है।',
    specs: {
      "Counting Speed": "≥ 1,000 Notes / Minute",
      "Detection Sensors": "Ultraviolet (UV), Magnetic (MG), Infrared (IR) & Half-Note",
      "Hopper Capacity": "200 Notes with Auto Start/Stop",
      "Display": "Bright Color LCD + External Customer View Screen",
      "Supported Currency": "New Indian Rupee Notes (₹10, ₹20, ₹50, ₹100, ₹200, ₹500)"
    },
    audioSpeechHi: 'यह बैंक ग्रेड कैश काउंटिंग मशीन है। यह 1 मिनट में 1000 नोट गिनती है और नकली नोट आते ही अलार्म बजाकर मशीन को तुरंत रोक देती है।',
    audioSpeechEn: 'Professional high-speed currency counting machine with counterfeit fake note detector and external customer display.'
  },
  {
    id: 'weighing-platform-300kg',
    nameEn: 'Heavy-Duty Industrial Platform Weighing Scale (300kg / 500kg)',
    nameHi: 'हैवी-ड्यूटी इंडस्ट्रियल प्लेटफॉर्म कांटा वेइंग मशीन (300 किलो / 500 किलो)',
    category: 'weighing',
    price: 7800,
    originalPrice: 9500,
    hsnCode: '8423',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Rajasthan Govt Certified Stamping',
    popular: true,
    machineType: 'weighing-platform',
    shortDescEn: 'Rajasthan Government certified heavy platform weighing scale with mild steel checkered plate, bright green/red LED pole display, and 72-hour battery backup.',
    shortDescHi: 'राजस्थान सरकार विधिक माप विज्ञान (बांट-माप विभाग) से मुहर लगी हुई 300 किलो क्षमता वाली मजबूत कांटे की मशीन। मंडी, गोदाम व कारखानों के लिए।',
    specs: {
      "Capacity": "300 kg (Also available in 500 kg)",
      "Accuracy": "20 grams / 50 grams",
      "Platform Size": "600 x 600 mm (Heavy Checkered Plate)",
      "Display": "Double Sided Bright Red LED Pole Display",
      "Battery Backup": "Inbuilt Rechargeable 6V Battery (72 Hours Backup)",
      "Certification": "Rajasthan Legal Metrology (W&M) Stamped"
    },
    audioSpeechHi: 'यह 300 किलो क्षमता का इंडस्ट्रियल प्लेटफॉर्म कांटा है। इस पर राजस्थान सरकार की सरकारी मुहर (स्टांपिंग) लगी है और 72 घंटे का बैटरी बैकअप मिलता है।',
    audioSpeechEn: 'Industrial 300kg platform weighing scale stamped and certified by Rajasthan Legal Metrology with heavy duty platform and 72 hour battery backup.'
  },
  {
    id: 'batch-coding-handheld',
    nameEn: 'Handheld Smart Inkjet Batch Coding Machine (MRP & Expiry Date Printer)',
    nameHi: 'हैंडहेल्ड स्मार्ट इंकजेट बैच कोडिंग मशीन (MRP, एक्सपायरी व बारकोड प्रिंटर)',
    category: 'batch-coding',
    price: 14500,
    originalPrice: 17500,
    hsnCode: '8443',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Warranty',
    popular: true,
    machineType: 'batch-coder',
    shortDescEn: 'Portable touch screen TIJ inkjet printer for printing MRP, batch number, manufacturing date, expiry date, QR code on plastic, glass, metal, paper.',
    shortDescHi: 'पाउच, डिब्बे, बोतल और प्लास्टिक की थैलियों पर तुरंत एमआरपी, मैन्युफैक्चरिंग डेट, एक्सपायरी डेट और क्यूआर कोड प्रिंट करने वाली पोर्टेबल मशीन।',
    specs: {
      "Print Height": "2 mm to 12.7 mm (Adjustable Font)",
      "Screen": "4.3 inch Color Touch Screen for direct typing",
      "Ink Type": "Quick-Drying Solvent Ink Cartridge (Black / White / Yellow)",
      "Battery": "Rechargeable Lithium Battery (10 Hours Continuous)",
      "Print Materials": "Pouch, Plastic, Metal, Cardboard, Glass, Pipe",
      "Languages": "English, Hindi, Numbers, Barcode, QR Code, Logo"
    },
    audioSpeechHi: 'यह हैंडहेल्ड बैच कोडिंग मशीन है। इससे आप किसी भी बोतल, पाउच या गत्ते के डिब्बे पर एमआरपी, एक्सपायरी डेट और क्यूआर कोड आसानी से छाप सकते हैं।',
    audioSpeechEn: 'Portable handheld inkjet batch coding printer for MRP, expiry dates, batch numbers and QR codes on plastic, bottles, and boxes.'
  },
  {
    id: 'weighing-tabletop-30kg',
    nameEn: 'Electronic Tabletop Weighing Scale (30kg / 1g Accuracy)',
    nameHi: 'इलेक्ट्रॉनिक टेबलटॉप किराना वेइंग कांटा (30 किलो / 1 ग्राम एक्यूरेसी)',
    category: 'weighing',
    price: 2600,
    originalPrice: 3200,
    hsnCode: '8423',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Rajasthan Govt Stamped',
    popular: false,
    machineType: 'weighing-tabletop',
    shortDescEn: 'High-accuracy digital weighing balance for grocery stores, sweet shops, bakeries, and retail marts. Stainless steel pan with dual pole display.',
    shortDescHi: 'किराना दुकान, मिठाई शॉप और जनरल स्टोर के लिए सबसे लोकप्रिय टेबलटॉप कांटा। दोनों तरफ दिखने वाला लाल एलईडी डिस्प्ले और सरकारी स्टांपिंग के साथ।',
    specs: {
      "Capacity": "30 Kilograms",
      "Accuracy": "1 gram",
      "Pan Size": "240 x 290 mm Stainless Steel (SS304)",
      "Display": "Front & Back Dual LED Display",
      "Battery Backup": "Up to 50 Hours on Single Charge",
      "Stamping": "Government Approved Weights & Measures Model"
    },
    audioSpeechHi: 'यह 30 किलो क्षमता का टेबलटॉप कांटा है। किराना दुकान और मिठाई की दुकानों के लिए एकदम सही, सरकारी मुहर लगी हुई और 1 ग्राम की सटीक तौल।',
    audioSpeechEn: 'Electronic 30kg tabletop weighing balance with dual display, stainless steel pan, and government stamping for retail stores.'
  },
  {
    id: 'pedal-sealer-heavy',
    nameEn: 'Heavy-Duty Foot Pedal Impulse Sealing Machine (20 Inch / 24 Inch)',
    nameHi: 'हैवी-ड्यूटी फुट पेडल इम्पल्स सीलर मशीन (पैर से दबाकर सील करने वाली)',
    category: 'packaging',
    price: 4900,
    originalPrice: 6200,
    hsnCode: '8422',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Warranty',
    popular: false,
    machineType: 'pedal-sealer',
    shortDescEn: 'Foot-operated impulse bag sealer for heavy sacks, fertilizer bags, atta/grain pouches, and bulk plastic bags with heavy cast iron frame.',
    shortDescHi: 'आटा, दाल, चावल व भारी प्लास्टिक कट्टों को पैर से दबाकर मजबूत सील करने वाली पेडल सीलिंग मशीन। 20 इंच व 24 इंच उपलब्ध।',
    specs: {
      "Sealing Length": "20 Inch (500mm) / 24 Inch (600mm)",
      "Sealing Width": "3mm / 5mm Double Heating Wire",
      "Operation": "Heavy Foot Pedal with Spring Return",
      "Heating Time": "0.2 to 2 Seconds Adjustable Dial",
      "Body": "Heavy Cast Iron Solid Floor Stand"
    },
    audioSpeechHi: 'यह पैर से दबाकर काम करने वाली पेडल सीलिंग मशीन है। भारी कट्टों और मोटे प्लास्टिक बैग को 2 सेकंड में मजबूत सील कर देती है।',
    audioSpeechEn: 'Heavy duty foot pedal impulse bag sealer for heavy grain bags, packaging sacks, and bulk pouches.'
  },
  {
    id: 'weighing-jewel-precision',
    nameEn: 'High-Precision Gold & Silver Jewellery Scale (0.01g / 600g)',
    nameHi: 'सोने-चांदी व लैब के लिए हाई-प्रिसिजन ज्वैलरी कांटा (0.01 ग्राम / 600 ग्राम)',
    category: 'weighing',
    price: 3800,
    originalPrice: 4800,
    hsnCode: '8423',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Rajasthan Govt Stamped',
    popular: false,
    machineType: 'weighing-jewel',
    shortDescEn: 'Micro-precision balance with draft shield windshield for jewelers, goldsmiths, laboratories, and precious chemical weighing.',
    shortDescHi: 'जोधपुर व राजस्थान के सर्राफा व्यापारियों के लिए विशेष रूप से डिज़ाइन किया गया 0.01 ग्राम की शुद्धता वाला ज्वैलरी कांटा। कांच के विंडशील्ड के साथ।',
    specs: {
      "Capacity": "600 grams",
      "Accuracy": "0.01 gram (10 Milligram)",
      "Pan": "Stainless Steel Round Pan with Glass Draft Shield",
      "Units": "Gram, Carat, Tola, Ounce",
      "Calibration": "Auto Zero Tracking & Precision Calibration"
    },
    audioSpeechHi: 'यह सोने-चांदी के व्यापारियों और ज्वैलरी के लिए 0.01 ग्राम की शुद्धता वाला कांटा है। इसमें हवा से बचाव के लिए कांच का शील्ड लगा हुआ है।',
    audioSpeechEn: 'High precision jewellery balance for gold, silver, and precious stones with 0.01g accuracy and glass draft shield.'
  },
  {
    id: 'pos-handheld-android',
    nameEn: 'Handheld Android Smart POS Billing Machine with Barcode Scanner & 4G',
    nameHi: 'हैंडहेल्ड पोर्टेबल स्मार्ट पीओएस बिलिंग मशीन (4G, बारकोड स्कैनर व प्रिंटर)',
    category: 'pos-billing',
    price: 13500,
    originalPrice: 16500,
    hsnCode: '8470',
    gstPercent: 18,
    inStock: true,
    warranty: '1 Year Comprehensive Warranty',
    popular: false,
    machineType: 'pos-handheld',
    shortDescEn: 'Mobile POS device with inbuilt thermal receipt printer, laser 1D/2D QR scanner, 4G SIM & Wi-Fi. Perfect for delivery, billing on foot, van sales.',
    shortDescHi: 'हाथ में लेकर चलने वाली पोर्टेबल बिलिंग मशीन। 4जी सिम, वाईफाई, बारकोड स्कैनर और इनबिल्ट थर्मल प्रिंटर। डिलीवरी व गाड़ियों पर बिक्री के लिए उत्तम।',
    specs: {
      "OS": "Android 11 / 12 Secure POS Edition",
      "Printer": "58mm High-speed Thermal Receipt Printer",
      "Camera & Scanner": "Fast 1D/2D Barcode & QR Code Reader",
      "Battery": "5200mAh Large Capacity All-Day Battery",
      "Connectivity": "4G VoLTE, Dual SIM, Wi-Fi, Bluetooth"
    },
    audioSpeechHi: 'यह हाथ में लेकर चलने वाली स्मार्ट बिलिंग मशीन है। इसमें 4जी सिम डलती है और तुरंत बिल का प्रिंट निकल जाता है।',
    audioSpeechEn: 'Mobile Android handheld POS billing terminal with thermal printer, 4G connectivity and barcode scanner.'
  }
];

export const MOCK_INVENTORY: {
  id: string;
  barcode: string;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  costPrice: number;
  sellingPrice: number;
  gstRate: number;
  unit: string;
}[] = [
  { id: 'inv-1', barcode: '8901001', name: 'जोधपुरी नमकीन भुजिया 500g', category: 'खाद्य सामग्री', stock: 45, minStock: 10, costPrice: 95, sellingPrice: 140, gstRate: 5, unit: 'Pouch' },
  { id: 'inv-2', barcode: '8901002', name: 'देसी घी घेवर 1 Kg', category: 'मिठाई', stock: 18, minStock: 5, costPrice: 420, sellingPrice: 580, gstRate: 5, unit: 'Box' },
  { id: 'inv-3', barcode: '8901003', name: 'माचिया स्पेशल मिर्ची वड़ा मसाला', category: 'मसाला', stock: 85, minStock: 20, costPrice: 45, sellingPrice: 70, gstRate: 12, unit: 'Packet' },
  { id: 'inv-4', barcode: '8901004', name: 'प्रीमियम बासमती चावल 5 Kg', category: 'अनाज', stock: 32, minStock: 8, costPrice: 380, sellingPrice: 490, gstRate: 0, unit: 'Bag' },
  { id: 'inv-5', barcode: '8901005', name: 'थर्मल बिलिंग पेपर रोल (80mm)', category: 'स्टेशनरी', stock: 150, minStock: 30, costPrice: 40, sellingPrice: 65, gstRate: 18, unit: 'Roll' },
  { id: 'inv-6', barcode: '8901006', name: 'इंकजेट कोडिंग स्याही कार्ट्रिज', category: 'मशीन स्पेयर', stock: 12, minStock: 4, costPrice: 1600, sellingPrice: 2200, gstRate: 18, unit: 'Pc' },
  { id: 'inv-7', barcode: '8901007', name: 'सीलिंग मशीन टेफ्लॉन बेल्ट सेट', category: 'मशीन स्पेयर', stock: 24, minStock: 6, costPrice: 280, sellingPrice: 450, gstRate: 18, unit: 'Set' },
  { id: 'inv-8', barcode: '8901008', name: 'कांटा 6V 4.5Ah रिचार्जेबल बैटरी', category: 'कांटा पार्ट्स', stock: 40, minStock: 10, costPrice: 380, sellingPrice: 550, gstRate: 18, unit: 'Pc' },
];
