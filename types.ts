
type priceType = {
  price: string;
  oldPrice?: string;
  discountPrice?: string;
};


export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  discountPrice?: string;
  image: string[];
  category: string;
  quantity: number;
  sizes: string[];
  inventoryId: string;
  rating: number;
  color: string[];
  type?: string;
};

export type ProductCheckoutType = {
  title: string;
  price: string;
  image: string;
  quantity: number;
  color: string;
  id: number;
  size?: string;
};


export type CartItemType = {
  category: string;
  image: string;
  title: string;
  type?: string;
  size?: string;
  color: string;
  oldPrice?: string;
  price: string;
  quantity: number;
  itemId: number;
};
