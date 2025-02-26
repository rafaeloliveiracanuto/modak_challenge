import React, {FC, useEffect, useState} from 'react';
import HomeView from './view';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/Products/product';

const Home: FC<HomeProps> = ({navigation}) => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['products', 10, 0],  // Aqui estamos passando um array como chave
        queryFn: () => fetchProducts(10, 0),  // Função que retorna os dados
      });

  console.log({data})
  
  return (
    <HomeView
    />
  );
};

export default Home;
