// src/features/medicineSection/components/medicineProducts/interface/IMedicineProducts.ts

export type MedicineCategory = 'All' | 'Tablet' | 'Syrup' | 'Capsule';

export type MedicineBadgeType = 'Fever' | 'Pain' | 'Kids' | 'Strong' | 'Cold' | 'Immunity';

export interface IMedicineProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: string;
  category: MedicineCategory;
  badge?: MedicineBadgeType;
  image: string;
}

export interface MedicineProductsViewProps {
  products?: IMedicineProduct[];
  totalItems?: number;
  activeCategory?: MedicineCategory;
  onCategoryChange?: (category: MedicineCategory) => void;
  onAddToCart?: (productId: string) => void;
}
