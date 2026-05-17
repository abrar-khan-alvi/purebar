export interface Product {
  id: string;
  name: string;
  category: 'skin' | 'hair' | 'gift';
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  rating: number;
  badge?: string;
  longDescription?: string;
  ingredients?: string[];
  usage?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
