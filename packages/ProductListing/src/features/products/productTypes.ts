export interface Product {
  id: number;
  name: string;
  image: string;
  stock: string;
  stockCount: number | null;
  price: string;
  brand: string;
  color: string;
}

export interface ProductFilter {
  brands?: string[];
  minPrice?: number;
  maxPrice?: number;
  colors?: string[];
  inStock?: boolean;
}

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filters: ProductFilter;
  selectedProduct: Product | null;
}
