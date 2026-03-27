// src/features/medicineSection/components/medicineProducts/container/medicineProducts.container.tsx
import React, { useState, useMemo, useCallback } from 'react';
import MedicineProductsView from '../view/medicineProductsView';
import { IMedicineProduct, MedicineCategory } from '../interface/IMedicineProducts';
import medicine_1 from '@assets/images/medicines/medicine-1.png';
import medicine_2 from '@assets/images/medicines/medicine-2.png';
import medicine_3 from '@assets/images/medicines/medicine-3.png';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';

// ─── Mock Data ───────────────────────────────────────────────────────────────
// Replace this with your actual API/store integration
const ALL_PRODUCTS: IMedicineProduct[] = [
  {
    id: '1',
    name: 'Dolo 650',
    description: 'Paracetamol 650mg For Fever, Body Pain',
    price: 60,
    quantity: '15 Tablets / Strip',
    category: 'Tablet',
    badge: 'Fever',
    image: medicine_1
  },
  {
    id: '2',
    name: 'Crocin Advance',
    description: 'Paracetamol 650mg For Fever, Body Pain',
    price: 45,
    quantity: '10 Tablets / Strip',
    category: 'Tablet',
    badge: 'Pain',
    image: medicine_2
  },
  {
    id: '3',
    name: 'Calpol Syrup',
    description: 'Paracetamol 650mg For Fever, Body Pain',
    price: 47,
    quantity: '60ml bottle',
    category: 'Syrup',
    badge: 'Kids',
    image: medicine_3
  },
  {
    id: '4',
    name: 'Combiflam Plus',
    description: 'Paracetamol 650mg For Fever, Body Pain',
    price: 60,
    quantity: '50 Tablets / Strip',
    category: 'Tablet',
    badge: 'Strong',
    image: medicine_1
  },
  {
    id: '5',
    name: 'Panadol Cold',
    description: 'Paracetamol 500mg For Cold & Flu Relief',
    price: 55,
    quantity: '20 Tablets / Strip',
    category: 'Tablet',
    badge: 'Cold',
    image: medicine_2
  },
  {
    id: '6',
    name: 'Benadryl Syrup',
    description: 'Diphenhydramine For Cold, Cough Relief',
    price: 85,
    quantity: '100ml bottle',
    category: 'Syrup',
    badge: 'Cold',
    image: medicine_3
  },
  {
    id: '7',
    name: 'Amoxicillin 500',
    description: 'Broad-Spectrum Antibiotic Capsule',
    price: 120,
    quantity: '10 Capsules / Strip',
    category: 'Capsule',
    badge: 'Strong',
    image: medicine_1
  },
  {
    id: '8',
    name: 'Limcee Chewable',
    description: 'Vitamin C 500mg For Immunity Boost',
    price: 30,
    quantity: '15 Tablets / Strip',
    category: 'Tablet',
    badge: 'Immunity',
    image: medicine_2
  }
];

// ─── Container ────────────────────────────────────────────────────────────────
const MedicineProductsContainer: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<MedicineCategory>('All');

  const filteredProducts = useMemo<IMedicineProduct[]>(() => {
    if (activeCategory === 'All') return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((cat: MedicineCategory) => {
    setActiveCategory(cat);
  }, []);

  const handleAddToCart = useCallback((productId: string) => {
    navigate(APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE + APP_ROUTE.PRODUCT + APP_ROUTE.DETAILS + '/' + productId);
  }, []);

  return (
    <MedicineProductsView
      products={filteredProducts}
      totalItems={filteredProducts.length}
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
      onAddToCart={handleAddToCart}
    />
  );
};

export default MedicineProductsContainer;
