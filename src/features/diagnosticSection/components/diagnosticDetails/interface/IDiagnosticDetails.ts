export type FilterType = 'PRICE_LOW' | 'FAST' | 'HOME';

export interface DiagnosticDetailsViewProps {
  activeFilter: string;
  setActiveFilter: (value: FilterType) => void;
}
