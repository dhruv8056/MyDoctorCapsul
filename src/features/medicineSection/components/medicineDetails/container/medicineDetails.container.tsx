// src/features/medicineSection/components/medicineDetails/container/MedicineDetailsContainer.tsx
import React, { useCallback } from 'react';
import { IMedicineDetails } from '../interface/IMedicineDetails';
import MedicineDetailsView from '../view/medicineDetailsView';
import medicine_3 from '@assets/images/medicines/medicine-4.png';
import shop from '@assets/images/medicines/shop.png';

// ─── Mock Data ────────────────────────────────────────────────────────────────
// Replace with your API call / router param / store selector
const MOCK_MEDICINE: IMedicineDetails = {
  id: 'dolo-amlodipine-10mg',
  name: 'Dolo Amlodipine 10mg',
  brandAlias: 'Amlopress 10',
  rating: 4.8,
  isTopBrand: true,
  image: medicine_3,
  composition: 'About Amlodipine 10mg',
  manufacturer: 'Cipla Ltd',
  tabletsPerStrip: 10,
  inStock: true,
  price: 55.0,
  unit: 'Strip',
  freeShippingAbove: 600,
  deliveryTime: 'Within 24 hours',
  about:
    'Amlodipine is used with or without other medications to high blood pressure. Lowering blood pressure helps preveure helgh prevets, Rene strokes, and lelocks to a oee of brelengs to arslelonss of drugs known as calcium channel blockers. It works by relaxing blood vessels so blood flow more easily.',
  importantInfo: [
    {
      type: 'Dosage',
      description: 'As prescribed by your healthcare provider, Usually once daily'
    },
    {
      type: 'Side Effect',
      description: 'Common: Hradaches, swelling in feet, dizziness, or fatigue.'
    },
    {
      type: 'Medical Warning',
      description: 'Talk to your doctor before if you pregnancy plan, liver disease, or heart failure history'
    }
  ],
  pharmacy: {
    id: 'city-life-pharmacy',
    name: 'City Life Pharmacy',
    image: shop,
    distanceKm: 0.8,
    openUntil: '10 PM',
    phone: '+91-9876543210',
    mapsUrl: 'https://maps.google.com'
  },
  totalPayable: 150.0
};

// ─── Container ────────────────────────────────────────────────────────────────
const MedicineDetailsContainer: React.FC = () => {
  const medicine = MOCK_MEDICINE;

  const handleAddToCart = useCallback((medicineId: string) => {
    console.log('Add to cart:', medicineId);
  }, []);

  const handleCall = useCallback((phone: string) => {
    window.location.href = `tel:${phone}`;
  }, []);

  const handleDirections = useCallback((mapsUrl: string) => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return <MedicineDetailsView medicine={medicine} onAddToCart={handleAddToCart} onCall={handleCall} onDirections={handleDirections} />;
};

export default MedicineDetailsContainer;
