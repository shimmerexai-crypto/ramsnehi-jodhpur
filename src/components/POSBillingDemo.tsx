import React, { useState } from 'react';
import { 
  Monitor, 
  Printer, 
  Barcode, 
  Package, 
  Plus, 
  Minus, 
  Trash2, 
  RotateCcw, 
  QrCode, 
  CheckCircle2, 
  AlertTriangle,
  Receipt,
  Search,
  ShoppingCart
} from 'lucide-react';
import { Language, InventoryItem, BillItem } from '../types';
import { MOCK_INVENTORY, STORE_PHONE, STORE_ADDRESS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface POSBillingDemoProps {
  lang: Language;
}

export const POSBillingDemo: React.FC<POSBillingDemoProps> = ({ lang }) => {
  const [inventory, setInventory] = useState<InventoryItem[]>(MOCK_INVENTORY);
  const [billItems, setBillItems] = useState<BillItem[]>([]);
  const [customerName, setCustomerName] = useState('सुनील जी किराना स्टोर');
  const [customerPhone, setCustomerPhone] = useState('9829012345');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'pos' | 'inventory'>('pos');
  const [paymentMode, setPaymentMode] = useState<'cash' | 'upi' | 'card'>('upi');
  const [barcodeInput, setBarcodeInput] = useState('');
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [receiptType, setReceiptType] = useState<'thermal' | 'a4'>('thermal');

  const t = TRANSLATIONS[lang];

  // Add item to bill (decreases real-time inventory count)
  const handleAddToBill = (item: InventoryItem) => {
    if (item.stock <= 0) {
      alert(lang === 'hi' ? 'स्टॉक समाप्त हो चुका है!' : 'Out of stock!');
      return;
    }

    // Check if already in bill
    const existingIndex = billItems.findIndex(b => b.item.id === item.id);
    if (existingIndex > -1) {
      const updated = [...billItems];
      updated[existingIndex].quantity += 1;
      setBillItems(updated);
    } else {
      setBillItems([...billItems, { item, quantity: 1, discountPercent: 0 }]);
    }

    // Real-time stock decrement
    setInventory(prev => prev.map(inv => 
      inv.id === item.id ? { ...inv, stock: inv.stock - 1 } : inv
    ));
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    const existing = billItems.find(b => b.item.id === itemId);
    if (!existing) return;

    if (delta > 0) {
      // Check stock
      const inv = inventory.find(i => i.id === itemId);
      if (!inv || inv.stock <= 0) {
        alert(lang === 'hi' ? 'पर्याप्त स्टॉक नहीं है!' : 'Insufficient stock!');
        return;
      }
      setBillItems(prev => prev.map(b => b.item.id === itemId ? { ...b, quantity: b.quantity + 1 } : b));
      setInventory(prev => prev.map(i => i.id === itemId ? { ...i, stock: i.stock - 1 } : i));
    } else {
      if (existing.quantity <= 1) {
        handleRemoveFromBill(itemId);
      } else {
        setBillItems(prev => prev.map(b => b.item.id === itemId ? { ...b, quantity: b.quantity - 1 } : b));
        setInventory(prev => prev.map(i => i.id === itemId ? { ...i, stock: i.stock + 1 } : i));
      }
    }
  };

  const handleRemoveFromBill = (itemId: string) => {
    const existing = billItems.find(b => b.item.id === itemId);
    if (!existing) return;

    // Restore stock back
    setInventory(prev => prev.map(i => 
      i.id === itemId ? { ...i, stock: i.stock + existing.quantity } : i
    ));
    setBillItems(prev => prev.filter(b => b.item.id !== itemId));
  };

  const handleClearBill = () => {
    // Return all items back to inventory
    billItems.forEach(b => {
      setInventory(prev => prev.map(i => 
        i.id === b.item.id ? { ...i, stock: i.stock + b.quantity } : i
      ));
    });
    setBillItems([]);
  };

  // Barcode scanning simulator
  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barcodeInput) return;
    const found = inventory.find(i => i.barcode === barcodeInput.trim());
    if (found) {
      handleAddToBill(found);
      setBarcodeInput('');
    } else {
      alert(lang === 'hi' ? `बारकोड ${barcodeInput} नहीं मिला!` : `Barcode ${barcodeInput} not found!`);
    }
  };

  // Add stock to inventory
  const handleAddStock = (itemId: string, amount: number) => {
    setInventory(prev => prev.map(i => 
      i.id === itemId ? { ...i, stock: i.stock + amount } : i
    ));
  };

  // Calculations
  const grossSubtotal = billItems.reduce((acc, curr) => acc + (curr.item.sellingPrice * curr.quantity), 0);
  const taxableTotal = Math.round((grossSubtotal / 1.18) * 100) / 100;
  const gstTotal = Math.round((grossSubtotal - taxableTotal) * 100) / 100;
  const cgst = Math.round((gstTotal / 2) * 100) / 100;
  const sgst = cgst;

  const filteredInventory = inventory.filter(i => 
    i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.barcode.includes(searchTerm) ||
    i.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header Kicker */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              <Monitor className="w-4 h-4" />
              <span>{lang === 'hi' ? 'लाइव पीओएस व इन्वेंट्री डेमो' : 'Live POS & Inventory Demo'}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.inventoryTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              {t.inventorySubtitle}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('pos')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'pos'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? 'टच बिलिंग काउंटर (POS)' : 'POS Billing Counter'}
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'inventory'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? 'रियल-टाइम स्टॉक इन्वेंट्री' : 'Stock Inventory'}
            </button>
          </div>
        </div>

        {/* Barcode Quick Scanner Simulator Bar */}
        <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <form onSubmit={handleBarcodeSubmit} className="flex items-center gap-2 flex-1 max-w-md">
            <Barcode className="w-5 h-5 text-amber-400 shrink-0" />
            <input
              type="text"
              placeholder={lang === 'hi' ? 'बारकोड स्कैन करें या नंबर डालें (उदा: 8901001)' : 'Scan barcode or enter (e.g. 8901001)'}
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              className="w-full bg-slate-800 text-white placeholder-slate-400 px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-amber-400 font-mono text-xs"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg whitespace-nowrap cursor-pointer"
            >
              {lang === 'hi' ? 'स्कैन जोड़ें' : 'Scan'}
            </button>
          </form>

          {/* Quick Barcode Demo Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-400 text-[11px] font-medium hidden sm:inline">
              {lang === 'hi' ? 'तेज टेस्ट करें:' : 'Quick Test:'}
            </span>
            <button
              onClick={() => {
                const item = inventory[0];
                if (item) handleAddToBill(item);
              }}
              className="bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 text-[11px] text-amber-300 font-mono"
            >
              8901001 (नमकीन)
            </button>
            <button
              onClick={() => {
                const item = inventory[1];
                if (item) handleAddToBill(item);
              }}
              className="bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 text-[11px] text-emerald-300 font-mono"
            >
              8901002 (घेवर)
            </button>
            <button
              onClick={() => {
                const item = inventory[4];
                if (item) handleAddToBill(item);
              }}
              className="bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 text-[11px] text-sky-300 font-mono"
            >
              8901005 (थर्मल रोल)
            </button>
          </div>
        </div>

        {/* POS Tab */}
        {activeTab === 'pos' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 Columns: Product Selection Grid */}
            <div className="lg:col-span-7 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder={lang === 'hi' ? 'उत्पाद खोजें या बारकोड नंबर...' : 'Search item name or barcode...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-amber-500 shadow-xs"
                />
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filteredInventory.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleAddToBill(item)}
                    disabled={item.stock <= 0}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      item.stock <= 0
                        ? 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
                        : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-sm active:scale-98'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>{item.barcode}</span>
                        <span className={`font-semibold ${item.stock <= item.minStock ? 'text-rose-600' : 'text-emerald-600'}`}>
                          {item.stock} {item.unit}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-xs mt-1 line-clamp-2">
                        {item.name}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black text-slate-900 tabular-nums">
                        ₹{item.sellingPrice}
                      </span>
                      <span className="text-[10px] bg-amber-50 text-amber-700 font-bold px-1.5 py-0.5 rounded">
                        +{lang === 'hi' ? 'जोड़ें' : 'Add'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Live Billing Ledger */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div>
                {/* Ledger Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Receipt className="w-4 h-4 text-amber-600" />
                      <span>{lang === 'hi' ? 'बिल रसीद (Tax Invoice)' : 'Current Tax Invoice'}</span>
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Ramsnehi Touch POS System #01
                    </p>
                  </div>
                  {billItems.length > 0 && (
                    <button
                      onClick={handleClearBill}
                      className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.clearBill}</span>
                    </button>
                  )}
                </div>

                {/* Customer Info inputs */}
                <div className="grid grid-cols-2 gap-2 my-3 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">
                      {lang === 'hi' ? 'ग्राहक का नाम:' : 'Customer Name:'}
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-1.5 border border-slate-200 rounded text-xs bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">
                      {lang === 'hi' ? 'मोबाइल नंबर:' : 'Phone No:'}
                    </label>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-1.5 border border-slate-200 rounded text-xs bg-slate-50"
                    />
                  </div>
                </div>

                {/* Bill Items List */}
                <div className="max-h-64 overflow-y-auto space-y-2 border-y border-slate-100 py-2">
                  {billItems.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 text-xs">
                      <ShoppingCart className="w-8 h-8 mx-auto mb-1 text-slate-300" />
                      <p>{lang === 'hi' ? 'बिल में कोई सामान नहीं है। बाईं ओर से क्लिक करें या बारकोड स्कैन करें।' : 'No items added. Click any item on left or scan barcode.'}</p>
                    </div>
                  ) : (
                    billItems.map(b => (
                      <div key={b.item.id} className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg bg-slate-50">
                        <div className="flex-1 min-w-0 pr-2">
                          <p className="font-semibold text-slate-900 truncate">{b.item.name}</p>
                          <p className="text-[10px] text-slate-500">
                            ₹{b.item.sellingPrice} × {b.quantity}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <div className="flex items-center border border-slate-300 rounded bg-white">
                            <button
                              onClick={() => handleUpdateQuantity(b.item.id, -1)}
                              className="px-1.5 py-0.5 hover:bg-slate-100 text-slate-700"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-bold tabular-nums text-xs">
                              {b.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(b.item.id, 1)}
                              className="px-1.5 py-0.5 hover:bg-slate-100 text-slate-700"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-bold text-slate-900 tabular-nums w-14 text-right">
                            ₹{b.item.sellingPrice * b.quantity}
                          </span>

                          <button
                            onClick={() => handleRemoveFromBill(b.item.id)}
                            className="text-rose-500 hover:text-rose-700 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Total Calculation & GST Details */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>{lang === 'hi' ? 'कर योग्य राशि (Taxable):' : 'Taxable Amount:'}</span>
                    <span className="tabular-nums">₹{taxableTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CGST (9%) + SGST (9%):</span>
                    <span className="tabular-nums">₹{cgst} + ₹{sgst} = ₹{gstTotal}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-slate-900 pt-1.5 border-t border-slate-200">
                    <span>{t.grandTotal}:</span>
                    <span className="text-amber-700 tabular-nums">₹{grossSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Payment Mode Selector */}
                <div className="flex items-center gap-2 pt-1 text-xs">
                  <button
                    onClick={() => setPaymentMode('cash')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-bold border ${
                      paymentMode === 'cash' ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    Cash
                  </button>
                  <button
                    onClick={() => setPaymentMode('upi')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-bold border flex items-center justify-center gap-1 ${
                      paymentMode === 'upi' ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    UPI QR
                  </button>
                  <button
                    onClick={() => setPaymentMode('card')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-bold border ${
                      paymentMode === 'card' ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    Card POS
                  </button>
                </div>

                {/* Print Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      if (billItems.length === 0) return alert('कृपया पहले बिल में उत्पाद जोड़ें!');
                      setReceiptType('thermal');
                      setShowReceiptModal(true);
                    }}
                    className="py-2.5 px-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Printer className="w-3.5 h-3.5 text-amber-400" />
                    <span>3" थर्मल प्रिंट</span>
                  </button>

                  <button
                    onClick={() => {
                      if (billItems.length === 0) return alert('कृपया पहले बिल में उत्पाद जोड़ें!');
                      setReceiptType('a4');
                      setShowReceiptModal(true);
                    }}
                    className="py-2.5 px-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span>A4 जीएसटी इनवॉइस</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inventory Tracking Tab */}
        {activeTab === 'inventory' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-600" />
                  <span>{lang === 'hi' ? 'रियल-टाइम स्टॉक इन्वेंट्री ट्रैकिंग' : 'Real-Time Stock Inventory'}</span>
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'hi'
                    ? 'जैसे ही बिल बनता है, स्टॉक स्वतः कम हो जाता है। कम स्टॉक होने पर लाल चेतावनी आती है।'
                    : 'Stock automatically deducts when items are billed. Low stock alerts trigger dynamically.'}
                </p>
              </div>

              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                {lang === 'hi' ? `कुल उत्पाद: ${inventory.length}` : `Total SKUs: ${inventory.length}`}
              </span>
            </div>

            {/* Inventory Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                    <th className="py-3 px-4">बारकोड</th>
                    <th className="py-3 px-4">उत्पाद का नाम</th>
                    <th className="py-3 px-4">श्रेणी</th>
                    <th className="py-3 px-4 text-center">उपलब्ध स्टॉक</th>
                    <th className="py-3 px-4 text-right">लागत (Cost)</th>
                    <th className="py-3 px-4 text-right">बिक्री दर (Price)</th>
                    <th className="py-3 px-4 text-center">स्टॉक जोड़ें</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {inventory.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-4 font-mono font-medium text-slate-500">
                        {item.barcode}
                      </td>
                      <td className="py-2.5 px-4 font-bold text-slate-900">
                        {item.name}
                      </td>
                      <td className="py-2.5 px-4 text-slate-600">
                        {item.category}
                      </td>
                      <td className="py-2.5 px-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-xs tabular-nums ${
                            item.stock <= item.minStock
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {item.stock <= item.minStock && <AlertTriangle className="w-3 h-3" />}
                          {item.stock} {item.unit}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-right text-slate-500 tabular-nums">
                        ₹{item.costPrice}
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-slate-900 tabular-nums">
                        ₹{item.sellingPrice}
                      </td>
                      <td className="py-2.5 px-4 text-center">
                        <button
                          onClick={() => handleAddStock(item.id, 10)}
                          className="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded font-bold text-[11px] border border-amber-200"
                        >
                          +10 स्टॉक
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Thermal Receipt & A4 GST Invoice Preview Modal */}
        {showReceiptModal && (
          <div className="fixed inset-0 z-60 bg-black/75 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 text-slate-900 shadow-2xl relative">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Printer className="w-5 h-5 text-amber-600" />
                  <h3 className="font-extrabold text-base">
                    {receiptType === 'thermal' ? '3-इंच पीओएस थर्मल बिल रसीद' : 'A4 आधिकारिक जीएसटी टैक्स इनवॉइस'}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>प्रिंट (Print)</span>
                  </button>
                  <button
                    onClick={() => setShowReceiptModal(false)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Thermal 3-inch Layout */}
              {receiptType === 'thermal' ? (
                <div className="max-w-[320px] mx-auto bg-white p-4 border border-dashed border-slate-300 font-mono text-[11px] text-slate-900 shadow-inner space-y-2">
                  <div className="text-center border-b border-dashed border-slate-400 pb-2">
                    <p className="font-extrabold text-sm tracking-tight">RAMSNEHI ENTERPRISES</p>
                    <p className="text-[10px]">9th A, Pal Rd, Sardarpura, Jodhpur</p>
                    <p className="text-[10px]">Phone: 84326 44312 | GST: 08AAACR1234F1Z8</p>
                    <p className="font-bold text-[11px] mt-1">*** CASH RECEIPT ***</p>
                  </div>

                  <div className="text-[10px] space-y-0.5 border-b border-dashed border-slate-400 pb-2">
                    <p>Bill: #POS-{Date.now().toString().slice(-5)}</p>
                    <p>Date: {new Date().toLocaleString('en-IN')}</p>
                    <p>Customer: {customerName} ({customerPhone})</p>
                    <p>Payment: {paymentMode.toUpperCase()}</p>
                  </div>

                  {/* Items */}
                  <div className="border-b border-dashed border-slate-400 pb-2 space-y-1">
                    <div className="flex justify-between font-bold text-[10px]">
                      <span>ITEM</span>
                      <span>QTY x RATE</span>
                      <span>TOTAL</span>
                    </div>
                    {billItems.map(b => (
                      <div key={b.item.id} className="flex justify-between text-[10px]">
                        <span className="truncate max-w-[120px]">{b.item.name}</span>
                        <span>{b.quantity} x {b.item.sellingPrice}</span>
                        <span className="font-bold">₹{b.item.sellingPrice * b.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-0.5 text-[10px]">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₹{taxableTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CGST 9% + SGST 9%:</span>
                      <span>₹{gstTotal}</span>
                    </div>
                    <div className="flex justify-between font-extrabold text-xs pt-1 border-t border-slate-900">
                      <span>GRAND TOTAL:</span>
                      <span>₹{grossSubtotal}</span>
                    </div>
                  </div>

                  <div className="text-center pt-2 border-t border-dashed border-slate-400 text-[9px] text-slate-500">
                    <p>रामस्नेही एंटरप्राइजेज पर पधारने के लिए धन्यवाद!</p>
                    <p>Thank you! Visit Again!</p>
                  </div>
                </div>
              ) : (
                /* A4 Layout Preview */
                <div className="p-4 border border-slate-300 rounded-lg text-xs space-y-3 bg-white font-sans">
                  <div className="text-center border-b border-slate-300 pb-2">
                    <h2 className="text-base font-black">RAMSNEHI ENTERPRISES JODHPUR</h2>
                    <p className="text-[11px] text-slate-600">9TH A, Pal Rd, opp. Balaji Mandir, Sardarpura, Jodhpur (Raj.)</p>
                    <p className="text-[11px] font-semibold">Phone: 84326 44312 | GSTIN: 08AAACR1234F1Z8</p>
                  </div>

                  <div className="grid grid-cols-2 text-[11px] border-b border-slate-200 pb-2">
                    <div>
                      <p className="font-semibold">Billed To:</p>
                      <p>{customerName}</p>
                      <p>Phone: {customerPhone}</p>
                    </div>
                    <div className="text-right">
                      <p>Invoice No: RE-POS-{Date.now().toString().slice(-6)}</p>
                      <p>Date: {new Date().toLocaleDateString('en-IN')}</p>
                    </div>
                  </div>

                  <table className="w-full text-left text-[11px]">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-1">Item</th>
                        <th className="p-1 text-center">Qty</th>
                        <th className="p-1 text-right">Price</th>
                        <th className="p-1 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billItems.map(b => (
                        <tr key={b.item.id} className="border-b border-slate-100">
                          <td className="p-1 font-medium">{b.item.name}</td>
                          <td className="p-1 text-center">{b.quantity}</td>
                          <td className="p-1 text-right">₹{b.item.sellingPrice}</td>
                          <td className="p-1 text-right font-bold">₹{b.item.sellingPrice * b.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="text-right font-bold text-xs pt-2">
                    Grand Total: ₹{grossSubtotal} (Incl. GST)
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
