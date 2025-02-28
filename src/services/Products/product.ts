import api from "../api";
import { ProductCategoriesResponse, ProductCategory, ProductListResponse } from "./Models";

export const fetchProducts = async (limit: number = 10, skip: number = 0): Promise<ProductListResponse> => {
  try {
    const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchCategories = async (): Promise<ProductCategoriesResponse> => {
  try {
    const response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category: string, limit: number = 10, skip: number = 0): Promise<ProductListResponse> => {
  try {
    const response = await api.get(`/products/category/${category}?limit=${limit}&skip=${skip}`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

export const fetchSortedProducts = async (param: string, order: string, category?: string | null): Promise<ProductListResponse> => {
  try {
    const path = !category ? `/products?sortBy=${param}&order=${order}` : `/products/category/${category}?sortBy=${param}&order=${order}`;
    const response = await api.get(path);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};