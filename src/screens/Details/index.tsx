import React, {FC, useEffect, useMemo, useState} from 'react';
import { DetailsProps } from '../../routes/Models/index';
import DetailsView from './view';
import { fetchProductByID } from '../../services/Products/product';
import { useQuery } from '@tanstack/react-query';

const Details: FC<DetailsProps> = ({navigation, route}) => {
  const { product, id } = route.params;

  const { data: productFromID, refetch: refetchProduct, error: productError, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product', id], 
    queryFn: () => fetchProductByID(id),
    enabled: !!id,
  });

  return (
    <DetailsView
      navigation={navigation}
      product={product || productFromID}
      refetchProduct={refetchProduct}
      productError={productError}
      isLoadingProduct={isLoadingProduct}
    />
  );
};

export default Details;
