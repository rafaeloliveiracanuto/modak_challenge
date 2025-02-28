import React, {FC, useEffect, useMemo, useState} from 'react';
import { DetailsProps } from '../../routes/Models/index';
import DetailsView from './view';

const Details: FC<DetailsProps> = ({navigation, route}) => {
  const { product } = route.params;

  return (
    <DetailsView
      product={product}
      navigation={navigation}
    />
  );
};

export default Details;
