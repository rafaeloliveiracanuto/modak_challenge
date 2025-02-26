import React, {FC, useEffect, useState} from 'react';
import HomeView from './view';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts, fetchProductsByCategory } from '../../services/Products/product';
import { ProductCategoriesResponse, ProductListResponse } from '../../services/Products/Models/index';

const Home: FC<HomeProps> = ({navigation}) => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);    
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: categories, error: categoriesError, isLoading: isLoadingCategories } = useQuery<ProductCategoriesResponse>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: products, isLoading: isLoadingProducts, error: productsError } = useQuery({
    queryKey: ["products", selectedCategory || 'all', limit, skip],
  queryFn: () => 
    selectedCategory === null
      ? fetchProducts(limit, skip)
      : fetchProductsByCategory(selectedCategory, limit, skip),
  });
  
  return (
    <HomeView
      categories={categories}
      categoriesError={categoriesError}
      isLoadingCategories={isLoadingCategories}
      products={products}
      productsError={productsError}
      isLoadingProducts={isLoadingProducts}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
    />
  );
};

export default Home;
