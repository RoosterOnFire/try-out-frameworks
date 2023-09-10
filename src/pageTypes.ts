export interface Products {
  [key: string]: Product;
}

export interface Product {
  name: string;
  price: number;
  href: string;
  breadcrumbs: { id: number; name: string; href: string }[];
  images: { src: string; alt: string }[];
  colors: { name: string; class: string; selectedClass: string }[];
  sizes: { name: string; inStock: boolean }[];
  description: string;
  highlights: string[];
  details: string;
}

export interface Reviews {
  [key: string]: Review;
}

export interface Review {
  href: string;
  average: number;
  totalCount: number;
}
