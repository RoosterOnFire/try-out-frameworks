export interface Products {
  [key: string]: Product;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  descriptionHighlights: string[];
  details: string;
  price: number;
  reviews: { average: number; total: number };
  color: string[];
  size: { name: string; stock: number }[];
  images: string[][];
}

export interface Breadcrumbs {
  [key: string]: string[][];
}
