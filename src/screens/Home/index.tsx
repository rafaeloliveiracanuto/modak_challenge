import React, {FC, useEffect, useMemo, useState} from 'react';
import HomeView from './view';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts, fetchProductsByCategory, fetchSortedProducts } from '../../services/Products/product';
import { ProductCategoriesResponse, ProductListResponse } from '../../services/Products/Models/index';
import {RadioButtonProps} from 'react-native-radio-buttons-group';
import { HomeProps } from '../../routes/Models/index';

const Home: FC<HomeProps> = ({navigation}) => {
  const [limit, setLimit] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);    
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSortValue, setSelectedSortValue] = useState<string>('1');
  
  const sortButtons: RadioButtonProps[] = useMemo(() => ([
    {
      id: '1',
      label: 'None',
      value: 'none',
    },
    {
      id: '2',
      label: 'Lower price',
      value: 'price',
    },
    {
      id: '3',
      label: 'Best rating',
      value: 'rating',
    }
  ]), [selectedSortValue]);

  const getValueById = (id: string) => {
    if (id === '2') return 'price';
    if (id === '3') return 'rating';
    return 'none';
  }

  const handleSortSelectionChange = (selectedButton: string) => {
    if (selectedButton === '1') setSelectedSortValue('1'); 
    if (selectedButton === '2') setSelectedSortValue('2'); 
    if (selectedButton === '3') setSelectedSortValue('3'); 
  };

  const { data: categories, error: categoriesError, isLoading: isLoadingCategories } = useQuery<ProductCategoriesResponse>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: products, isLoading: isLoadingProducts, error: productsError } = useQuery({
    queryKey: ["products", selectedCategory || 'all', limit, skip, getValueById(selectedSortValue)],
    queryFn: () => {
      if (selectedSortValue !== '1') {
        const order = selectedSortValue === '3' ? 'desc' : 'asc';
        const sortValue = selectedSortValue === '3' ? 'rating' : 'price';
        return fetchSortedProducts(sortValue, order, selectedCategory); 
      }
      
      return selectedCategory === null
        ? fetchProducts(limit, skip)
        : fetchProductsByCategory(selectedCategory, limit, skip);
      },
      keepPreviousData: true,
    });
  
  return (
    <HomeView
      navigation={navigation}
      categories={categories}
      categoriesError={categoriesError}
      isLoadingCategories={isLoadingCategories}
      products={products}
      productsError={productsError}
      isLoadingProducts={isLoadingProducts}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
      sortButtons={sortButtons}
      selectedSortValue={selectedSortValue}
      handleSortSelectionChange={handleSortSelectionChange}
    />
  );
};

export default Home;
