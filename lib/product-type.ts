type ItemCategory =
  | "electronics"
  | "clothing"
  | "groceies"
  | "accessories"
  | "jewelry"
  | "office supplies"
  | "shoes"
  | "books"
  | "home & kitchen"
  | "beauty"
  | "stationery"
  | "beverages"
  | "health & beauty"
  | "food & drink"
  | "fashion"
  | "toys"
  | "sports"
  | "pets"
  | "music"
  | "other";

type ImageType = {
  id: number;
  name: string;
  description: string;
  src: string;
};

type ReviewType = {
  id: number;
  rating: number;
  comment: string;
};

interface ProductType {
  id: number;
  category: ItemCategory;
  name: string;
  description: string;
  price: number;
  image: ImageType[];
  inventory: number;
  rating: number;
  review: ReviewType[];
  quantity: number;
  sizes?: string[];
  colors: string[];
}
