export type Language = 'hi' | 'en';

export type ProductCategory = 
  | 'all'
  | 'weighing'
  | 'packaging'
  | 'pos-billing'
  | 'cash-counting'
  | 'batch-coding';

export interface Product {
  id: string;
  nameEn: string;
  nameHi: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  hsnCode: string;
  gstPercent: number;
  inStock: boolean;
  warranty: string;
  shortDescEn: string;
  shortDescHi: string;
  specs: { [key: string]: string };
  audioSpeechHi: string;
  audioSpeechEn: string;
  popular?: boolean;
  machineType: 'weighing-tabletop' | 'weighing-platform' | 'weighing-jewel' | 'band-sealer' | 'pedal-sealer' | 'vacuum-sealer' | 'pos-touch' | 'pos-handheld' | 'cash-counter' | 'batch-coder';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface InventoryItem {
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
}

export interface BillItem {
  item: InventoryItem;
  quantity: number;
  discountPercent: number;
}

export type PageRoute = 
  | 'home'
  | 'products'
  | 'pos-demo'
  | 'services'
  | 'about'
  | 'contact';
