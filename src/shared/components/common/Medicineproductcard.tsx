// src/shared/components/common/MedicineProductList.tsx
import React from 'react';
import { Icon } from '@iconify/react';
import { IMedicineProduct } from '@features/medicineSection/components/medicineProducts/interface/IMedicineProducts';

interface MedicineProductCardProps {
  products: IMedicineProduct[];
  onAddToCart?: (productId: string) => void;
}

const MedicineProductCard: React.FC<MedicineProductCardProps> = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className="medicine-empty-state">
        <Icon icon="mdi:pill-off" />
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <article className="medicine-card">
          {/* ── Image Section ─────────────────────────────────── */}
          <div className="medicine-card__image-wrap">
            {product?.image ? (
              <img src={product?.image} alt={product?.name} className="medicine-card__image" loading="lazy" />
            ) : (
              <div className="medicine-card__image-placeholder">
                <Icon icon="mdi:pill" />
              </div>
            )}
          </div>

          {/* ── Details Section ───────────────────────────────── */}
          <div className="medicine-card__details">
            {/* Name + Badge */}
            <div className="medicine-card__top-row">
              <h3 className="medicine-card__name" title={product?.name}>
                {product?.name}
              </h3>
              {product?.badge && <span className={`medicine-card__badge medicine-card__badge--${product?.badge}`}>{product?.badge}</span>}
            </div>

            {/* Description */}
            <p className="medicine-card__description">{product?.description}</p>

            {/* Price + CTA */}
            <div className="medicine-card__bottom-row">
              <div className="medicine-card__pricing">
                <p className="medicine-card__price">₹{product?.price}</p>
                <p className="medicine-card__quantity">{product?.quantity}</p>
              </div>

              <button
                className="medicine-card__add-btn"
                onClick={() => onAddToCart?.(product?.id)}
                aria-label={`Add ${product?.name} to cart`}
              >
                <Icon icon="mdi:plus" />
                Add
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default MedicineProductCard;
