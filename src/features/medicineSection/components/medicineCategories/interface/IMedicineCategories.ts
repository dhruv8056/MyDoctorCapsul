export interface IMedicineCategories {
  onCall?: (phone: string) => void;
  onDirections?: (mapsUrl: string) => void;
  category: CategoryItem[];
}

interface CategoryItem {
  id: number;
  title: string;
  icon: string;
  iconColor: string;
  bgColor: string;
}
