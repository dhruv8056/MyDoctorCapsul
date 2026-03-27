// src/features/medicineSection/components/medicineProducts/view/medicineProductsView.tsx
import React from 'react';
import { MedicineProductsViewProps, MedicineCategory } from '../interface/IMedicineProducts';
import MedicineProductCard from '@shared/components/common/Medicineproductcard';

const CATEGORIES: MedicineCategory[] = ['All', 'Tablet', 'Syrup', 'Capsule'];

const MedicineProductsView: React.FC<MedicineProductsViewProps> = ({
  products = [],
  totalItems = 0,
  activeCategory = 'All',
  onCategoryChange,
  onAddToCart
}) => {
  return (
    <section className="medicine-products-section">
      <div className="container_layout">
        {/* ── Category Filter Bar ───────────────────────── */}
        <nav className="medicine-category-bar" aria-label="Medicine category filter">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`medicine-category-bar__btn ${
                activeCategory === cat ? 'medicine-category-bar__btn--active' : 'medicine-category-bar__btn--idle'
              }`}
              onClick={() => onCategoryChange?.(cat)}
              aria-pressed={activeCategory === cat}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* ── Section Header ────────────────────────────── */}
        <div className="medicine-section-header">
          <h2 className="medicine-section-header__title">Recommended Products</h2>
          <span className="medicine-section-header__count">{totalItems} ITEMS</span>
        </div>

        {/* ── Product Grid ──────────────────────────────── */}
        <div className="medicine-product-grid">
          <MedicineProductCard products={products} onAddToCart={onAddToCart} />
        </div>
      </div>
    </section>
  );
};

export default MedicineProductsView;
