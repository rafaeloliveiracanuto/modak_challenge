export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  description: string;
  brand: string;
  stock: number;
}
  
export type ProductListResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductCategory = string;

export type ProductCategoriesResponse = ProductCategory[];