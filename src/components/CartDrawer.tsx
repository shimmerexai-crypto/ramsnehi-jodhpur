import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageSquare, Printer, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';
import { CartItem, Language } from '../types';
import { STORE_PHONE_INTL, STORE_ADDRESS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  lang: Language;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  lang,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [showInvoicePrint, setShowInvoicePrint] = useState(false);

  const t = TRANSLATIONS[lang];

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Approximate GST (18%) breakdown
  const baseTotal = Math.round((subtotal / 1.18) * 100) / 100;
  const totalGst = Math.round((subtotal - baseTotal) * 100) / 100;
  const cgst = Math.round((totalGst / 2) * 100) / 100;
  const sgst = cgst;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = `*🛒 नया ऑर्डर - रामस्नेही एंटरप्राइजेज (जोधपुर)*\n`;
    message += `---------------------------------\n`;
    message += `*ग्राहक का नाम:* ${customerName || 'सम्मानित ग्राहक'}\n`;
    message += `*मोबाइल:* ${customerPhone || 'उपलब्ध नहीं'}\n`;
    message += `*शहर / पता:* ${customerAddress || 'जोधपुर / राजस्थान'}\n`;
    if (customerNote) {
      message += `*विशेष नोट:* ${customerNote}\n`;
    }
    message += `---------------------------------\n`;
    message += `*ऑर्डर की गई मशीनें:*\n`;

    cart.forEach((item, idx) => {
      message += `${idx + 1}. ${item.product.nameHi}\n   संख्या: ${item.quantity} | दर: ₹${item.product.price} | कुल: ₹${item.product.price * item.quantity}\n`;
    });

    message += `---------------------------------\n`;
    message += `*कुल देय राशि:* ₹${subtotal.toLocaleString('en-IN')} (18% GST सहित)\n`;
    message += `---------------------------------\n`;
    message += `कृपया मुझे डिलीवरी समय और भुगतान का विवरण प्रदान करें।`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_PHONE_INTL}?text=${encoded}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-bold text-slate-900">
              {lang === 'hi' ? 'आपकी कार्ट (शॉपिंग बैग)' : 'Your Shopping Cart'}
            </h2>
            <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
              {totalItemsCount} {lang === 'hi' ? 'मशीनें' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-slate-600 font-medium">{t.cartEmpty}</p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg text-xs font-bold hover:bg-amber-700 transition-colors"
              >
                {lang === 'hi' ? 'मशीनें ब्राउज़ करें' : 'Browse Machines'}
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.product.id} className="py-3.5 flex gap-3 items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center p-1 shrink-0 border border-slate-200">
                      <span className="text-xs font-bold text-slate-500">
                        {item.product.machineType.split('-')[0].toUpperCase()}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {lang === 'hi' ? item.product.nameHi : item.product.nameEn}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        ₹{item.product.price.toLocaleString('en-IN')} × {item.quantity} ={' '}
                        <span className="font-bold text-slate-900">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </p>

                      {/* Quantity adjustments */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-slate-200 rounded-md bg-slate-50 text-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-0.5 hover:bg-slate-200 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 font-bold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 hover:bg-slate-200 font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>हटाएं</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown Card */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>{lang === 'hi' ? 'मूल बेस मूल्य (बिना टैक्स):' : 'Taxable Amount:'}</span>
                  <span className="tabular-nums font-medium">₹{baseTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>CGST (9%) + SGST (9%):</span>
                  <span className="tabular-nums font-medium">₹{cgst.toLocaleString('en-IN')} + ₹{sgst.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-bold text-sm pt-2 border-t border-slate-200">
                  <span>{t.grandTotal}:</span>
                  <span className="text-amber-700 tabular-nums">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <span className="text-[10px] text-slate-500 block text-right">
                  {lang === 'hi' ? '★ पक्का जीएसटी इनवॉइस उपलब्ध' : '★ Official GST Invoice included'}
                </span>
              </div>

              {/* Customer Contact Details for WhatsApp Order & Bill */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {lang === 'hi' ? 'ऑर्डर भेजने वाले का विवरण:' : 'Your Contact Details:'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <input
                    type="text"
                    placeholder={t.enterName}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 bg-white"
                  />
                  <input
                    type="tel"
                    placeholder={t.enterPhone}
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 bg-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder={t.enterCity}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 text-xs bg-white"
                />
                <input
                  type="text"
                  placeholder={t.enterNotes}
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 text-xs bg-white"
                />
              </div>

              {/* Printable Invoice Modal Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => setShowInvoicePrint(true)}
                  className="w-full py-2 px-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'hi' ? 'जीएसटी बिल / कोटेशन रसीद देखें व प्रिंट करें' : 'Preview & Print GST Quotation'}</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Cart Bottom Actions */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-2">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.sendOrderBtn}</span>
            </button>
            <p className="text-[11px] text-center text-slate-500">
              {lang === 'hi'
                ? 'सीधा 8432644312 पर मैसेज जाएगा व तुरंत रिप्लाई मिलेगा'
                : 'Directly sends order to +91 8432644312 on WhatsApp'}
            </p>
          </div>
        )}
      </div>

      {/* Instant GST Invoice Print View Modal */}
      {showInvoicePrint && (
        <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 text-slate-900 shadow-2xl relative">
            <div className="flex justify-between items-center mb-4 no-print">
              <h3 className="font-bold text-base text-slate-800">
                रामस्नेही एंटरप्राइजेज - प्रोफोर्मा जीएसटी बिल
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>प्रिंट करें (Print)</span>
                </button>
                <button
                  onClick={() => setShowInvoicePrint(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Paper Format */}
            <div className="border border-slate-300 p-6 rounded-lg text-xs space-y-4 bg-white print-area">
              {/* Header */}
              <div className="text-center border-b border-slate-300 pb-3">
                <h1 className="text-lg font-black tracking-wide text-slate-900">
                  RAMSNEHI ENTERPRISES
                </h1>
                <p className="text-[11px] text-slate-600">
                  9TH A, Pal Rd, Opp. Balaji Mandir, Near Khadi Bhandar, Sardarpura, Jodhpur (Raj.) - 342003
                </p>
                <p className="text-[11px] font-semibold text-slate-700">
                  Phone: +91 84326 44312 | GSTIN: 08AAACR1234F1Z8
                </p>
                <p className="text-xs font-bold bg-slate-100 py-1 mt-2">
                  TAX INVOICE / ESTIMATE QUOTATION
                </p>
              </div>

              {/* Bill Details */}
              <div className="grid grid-cols-2 gap-4 text-[11px] border-b border-slate-200 pb-2">
                <div>
                  <p><span className="font-semibold">Customer:</span> {customerName || 'Cash Customer'}</p>
                  <p><span className="font-semibold">Phone:</span> {customerPhone || '-'}</p>
                  <p><span className="font-semibold">Address:</span> {customerAddress || 'Rajasthan'}</p>
                </div>
                <div className="text-right">
                  <p><span className="font-semibold">Bill No:</span> RE-{Date.now().toString().slice(-6)}</p>
                  <p><span className="font-semibold">Date:</span> {new Date().toLocaleDateString('en-IN')}</p>
                  <p><span className="font-semibold">Place of Supply:</span> Rajasthan (08)</p>
                </div>
              </div>

              {/* Itemized Table */}
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-50">
                    <th className="py-1 px-2">#</th>
                    <th className="py-1 px-2">Item Description</th>
                    <th className="py-1 px-2">HSN</th>
                    <th className="py-1 px-2 text-center">Qty</th>
                    <th className="py-1 px-2 text-right">Rate</th>
                    <th className="py-1 px-2 text-right">Total (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
                    <tr key={item.product.id} className="border-b border-slate-200">
                      <td className="py-1 px-2">{idx + 1}</td>
                      <td className="py-1 px-2 font-medium">{item.product.nameEn}</td>
                      <td className="py-1 px-2">{item.product.hsnCode}</td>
                      <td className="py-1 px-2 text-center">{item.quantity}</td>
                      <td className="py-1 px-2 text-right tabular-nums">₹{item.product.price}</td>
                      <td className="py-1 px-2 text-right tabular-nums font-semibold">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="flex justify-end pt-2">
                <div className="w-64 space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span>Taxable Amount:</span>
                    <span className="tabular-nums">₹{baseTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CGST @ 9%:</span>
                    <span className="tabular-nums">₹{cgst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SGST @ 9%:</span>
                    <span className="tabular-nums">₹{sgst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-xs pt-1 border-t border-slate-300">
                    <span>Grand Total:</span>
                    <span className="tabular-nums text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-300 flex justify-between items-end text-[10px] text-slate-500">
                <div>
                  <p>• Goods once sold will be serviced under warranty.</p>
                  <p>• Subject to Jodhpur Jurisdiction.</p>
                </div>
                <div className="text-center font-bold text-slate-700">
                  <p>For RAMSNEHI ENTERPRISES</p>
                  <p className="mt-6">Authorised Signatory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
