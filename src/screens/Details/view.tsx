import React, {FC, memo} from 'react';
import styles from './styles';
import { DetailsViewProps } from './Models/index';
import { ActivityIndicator, Button, Image, ScrollView, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const DetailsView: FC<DetailsViewProps> = ({
  navigation,
  product,
  refetchProduct,
  productError,
  isLoadingProduct,
  }) => {
    if (isLoadingProduct) {
      return (
        <View style={styles.page}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    
    if (productError) {
      return (
        <View style={styles.page}>
          <Text style={styles.errorText}>
            There was an issue loading the data.{"\n"}Please try again later.
          </Text>
          <Button
            title="Retry"
            onPress={refetchProduct}
          />
        </View>
      );
    }
    
    return (
      <View style={styles.page}>
        <View style={styles.card}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.category}>{`Category: ${product.category}`}</Text>
            {product.brand && <Text style={styles.brand}>{`Brand: ${product.brand}`}</Text>}
            <Text style={styles.description}>{product.description}</Text>
    
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{product.rating.toFixed(1)} / 5</Text>
              <AirbnbRating count={5} defaultRating={product.rating} size={22} isDisabled showRating={false} />
            </View>
    
            <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
    
            <Text style={[styles.stock, { color: product.stock > 0 ? '#28a745' : '#dc3545' }]}>
              {product?.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
};

export default DetailsView;