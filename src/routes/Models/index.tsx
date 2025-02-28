import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../../services/Products/Models/index';

export type RootStackParamList = {
  Home: { id?: number };
  Details: { product: Product }; 
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

export interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export interface DetailsProps {
  navigation: DetailsScreenNavigationProp;
  product: Product;
}

export type GoBackIconProps = {
  onPress: () => void;
};