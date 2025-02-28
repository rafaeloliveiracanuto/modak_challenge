import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../../routes/Models/index";
import { Product } from "../../../services/Products/Models/index";

export interface DetailsViewProps {
  product: Product;
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
  productError: Error | null | undefined;
  isLoadingProduct: boolean;
}