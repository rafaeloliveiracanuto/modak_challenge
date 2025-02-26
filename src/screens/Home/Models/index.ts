import { ProductCategory } from "../../../services/Products/Models/index";

export interface HomeViewProps {
  categories: ProductCategory[];
  categoriesError: Error | null;
  isLoadingCategories: boolean;
}

