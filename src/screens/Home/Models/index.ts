import { RadioButtonProps } from "../../../../node_modules/react-native-radio-buttons-group/lib/types";
import { RootStackParamList } from "../../../routes/Models/index";
import { Product, ProductCategory } from "../../../services/Products/Models/index";
import { StackNavigationProp } from '@react-navigation/stack';

export interface HomeViewProps {
  categories: ProductCategory[];
  categoriesError: Error | null;
  isLoadingCategories: boolean;
  products: Product[];
  productsError: Error | null;
  isLoadingProducts: boolean;
  setSelectedCategory: () => null;
  selectedCategory: string;
  sortButtons: RadioButtonProps[];
  selectedSortValue: string;
  handleSortSelectionChange: (value: string) => void; 
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}