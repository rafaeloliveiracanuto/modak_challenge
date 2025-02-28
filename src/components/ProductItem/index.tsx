import React, { FC, memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Product } from '../../services/Products/Models/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/Models/index';
import styles from './styles'; 

const ProductItem = memo(({ product }: { product: Product, isDisabled: boolean }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', { product })}
    >
      <Image source={{ uri: product?.thumbnail }} style={styles.productImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{product?.title}</Text>
        <View style={styles.ratingContainer}>
          <AirbnbRating count={5} isDisabled defaultRating={product?.rating} size={25} />
        </View>
        <Text style={styles.price}>{`$${product?.price.toFixed(2)}`}</Text>
      </View>
    </TouchableOpacity>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.product.id === nextProps.product.id &&
    prevProps.product.price === nextProps.product.price &&
    prevProps.product.rating === nextProps.product.rating &&
    prevProps.product.thumbnail === nextProps.product.thumbnail
  );
});

export default ProductItem;
