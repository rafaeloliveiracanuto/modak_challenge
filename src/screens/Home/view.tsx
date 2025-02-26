import React, {FC} from 'react';
import {ActivityIndicator, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import { Category, CategoryText, Container, Page, Paragraph } from './styles';
import { Product, ProductCategory } from '../../services/Products/Models/index';
import { HomeViewProps } from './Models/index';

const HomeView: FC<HomeViewProps> = ({
  categories,
  categoriesError,
  isLoadingCategories,
  products,
  productsError,
  isLoadingProducts,
  setSelectedCategory,
  selectedCategory,
  }) => {
    console.log('Categories:', categories);
    console.log('Products: ', products);

    if (isLoadingCategories || isLoadingProducts) {
      return <Page><ActivityIndicator size="large" color="#0000ff" /></Page>;
    }

    if (categoriesError || productsError) {
      return <Text>Error: {categoriesError?.message}</Text>;
    }

    if (!Array.isArray(categories) || categories.length === 0) {
      return <Page><Text>No categories available.</Text></Page>;
    }

    const ProductItem = ({ product }: { product: Product}) => {
        return (
          <TouchableOpacity
            style={{
              height: 250,
              width: 300,
              borderRadius: 20,
              marginVertical: 10,
              backgroundColor: '#E3F2FD',
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.3,
              shadowOffset: { width: 2, height: 5 },
              shadowRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
            >
              <Image
                source={{ uri: product.thumbnail }}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 15,
                  marginBottom: 10,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 16, color: '#333' }}>{product.title}</Text>
                <Text style={{ fontSize: 20, color: '#333', fontWeight: 'bold' }}>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(product.price)}
                </Text>
              </View>
            </TouchableOpacity>
          );
      };

    return (
      <Page>
        <Paragraph>Home</Paragraph>
        <View style={{ flexDirection: 'row', marginVertical: '0.5%' }}>
          <Category
            bgColor={selectedCategory === null ? "#007BFF" : "#ccc"}
            onPress={() => setSelectedCategory(null)}
          >
            <CategoryText>{'All'}</CategoryText>
          </Category>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.slug}
            renderItem={({ item }: { item: ProductCategory }) => (
              <Category
                bgColor={selectedCategory === item.slug ? "#007BFF" : "#ccc"}
                onPress={() => setSelectedCategory(item.slug)}
              >
                <CategoryText>{item.name}</CategoryText>
              </Category>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        
        <FlatList
          data={products}
          keyExtractor={(item) => item.slug}
          renderItem={({ item }) => (
            <ProductItem product={item} />
          )}
          contentContainerStyle={{
            paddingVertical: 10,
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
        />
    
      </Page>
    );
};

export default HomeView;