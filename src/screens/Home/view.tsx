import React, { FC, memo } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, Button } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { styles } from './styles'; 
import { Product, ProductCategory } from '../../services/Products/Models';

import ProductItem from '../../components/ProductItem';
import { HomeViewProps } from './Models/index';

const HomeView: FC<HomeViewProps> = ({
  categories,
  categoriesError,
  isLoadingCategories,
  products,
  refetchProducts,
  refetchCategories,
  productsError,
  isLoadingProducts,
  setSelectedCategory,
  selectedCategory,
  sortButtons,
  selectedSortValue,
  handleSortSelectionChange,
  navigation,
}) => {
  if (isLoadingCategories || isLoadingProducts) {
    return (
      <View style={styles.page}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (categoriesError || productsError) {
    return (
      <View style={styles.page}>
        <Text style={styles.errorText}>
          There was an issue loading the data.{"\n"}Please try again later.
        </Text>
        <Button
          title="Retry"
          onPress={categoriesError ? refetchCategories : refetchProducts}
        />
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.category,
            { backgroundColor: selectedCategory === undefined ? '#007BFF' : '#ccc' },
          ]}
          onPress={() => setSelectedCategory(undefined)}
        >
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>

        <FlatList
          data={categories}
          keyExtractor={(item: ProductCategory) => item.slug}
          renderItem={({ item }: { item: ProductCategory }) => (
            <TouchableOpacity
              style={[
                styles.category,
                { backgroundColor: selectedCategory === item.slug ? '#007BFF' : '#ccc' },
              ]}
              onPress={() => setSelectedCategory(item.slug)}
            >
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <Text style={{ fontSize: 16, color: '#000' }}>No categories available.</Text>
            </View>
          }
        />
      </View>

      <View style={styles.sortSection}>
        <Text style={styles.sortText}>Sort by</Text>
        <RadioGroup
          radioButtons={sortButtons}
          onPress={handleSortSelectionChange}
          selectedId={selectedSortValue}
          layout="row"
        />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item: Product) => String(item.id)}
        renderItem={({ item }: Product) => <ProductItem product={item} />}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: '#000' }}>No products available.</Text>
          </View>
        }
        contentContainerStyle={{
          paddingVertical: 10,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(HomeView);
