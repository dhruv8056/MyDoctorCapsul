export interface IDiagnosticCategoriesViewProps {
  category: CategoryItem[];
}
interface CategoryItem {
  id: number;
  title: string;
  icon: string;
  iconColor: string;
  bgColor: string;
}
