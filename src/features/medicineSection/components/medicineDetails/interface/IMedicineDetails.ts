// src/features/medicineSection/components/medicineDetails/interface/IMedicineDetails.ts

export interface IImportantInfoItem {
  type: 'Dosage' | 'Side Effect' | 'Medical Warning';
  description: string;
}

export interface IFulfilmentPharmacy {
  id: string;
  name: string;
  image: string;
  distanceKm: number;
  openUntil: string;
  phone: string;
  mapsUrl: string;
}

export interface IMedicineDetails {
  id: string;
  name: string;
  brandAlias: string;
  rating: number;
  isTopBrand: boolean;
  image: string;
  composition: string;
  manufacturer: string;
  tabletsPerStrip: number;
  inStock: boolean;
  price: number;
  unit: string;
  freeShippingAbove: number;
  deliveryTime: string;
  about: string;
  importantInfo: IImportantInfoItem[];
  pharmacy: IFulfilmentPharmacy;
  totalPayable: number;
}

export interface MedicineDetailsViewProps {
  medicine: IMedicineDetails;
  onAddToCart?: (medicineId: string) => void;
  onCall?: (phone: string) => void;
  onDirections?: (mapsUrl: string) => void;
}
