import React, { FC, memo } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity } from 'react-native';
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
    return <Text>Error: {categoriesError?.message}</Text>;
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <View style={styles.page}>
        <Text>No categories available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.category,
            { backgroundColor: selectedCategory === null ? '#007BFF' : '#ccc' },
          ]}
          onPress={() => setSelectedCategory(null)}
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
