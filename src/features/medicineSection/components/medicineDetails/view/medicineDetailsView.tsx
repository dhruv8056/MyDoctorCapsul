// src/features/medicineSection/components/medicineDetails/view/MedicineDetailsView.tsx
import React from 'react';
import { Icon } from '@iconify/react';
import { MedicineDetailsViewProps } from '../interface/IMedicineDetails';
import Breadcrumb from '../../../../../shared/components/common/Breadcrumb';
import { APP_ROUTE } from '@shared/constant/app-route';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: 'mdi:home-outline' },
  { label: 'Medicine Product', href: APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE + APP_ROUTE.PRODUCT, icon: 'mdi:pill' },
  { label: 'Medicine Details', isActive: true }
];

// Map info type → css modifier + icon
const INFO_META = {
  Dosage: { mod: 'dosage', icon: 'mdi:pill-outline', titleMod: 'dosage' },
  'Side Effect': { mod: 'side-effect', icon: 'mdi:alert-circle-outline', titleMod: 'side-effect' },
  'Medical Warning': { mod: 'warning', icon: 'mdi:alert-outline', titleMod: 'warning' }
} as const;

const MedicineDetailsView: React.FC<MedicineDetailsViewProps> = ({ medicine, onAddToCart, onCall, onDirections }) => {
  const {
    id,
    name,
    brandAlias,
    rating,
    isTopBrand,
    image,
    composition,
    manufacturer,
    tabletsPerStrip,
    inStock,
    price,
    unit,
    freeShippingAbove,
    deliveryTime,
    about,
    importantInfo,
    pharmacy,
    totalPayable
  } = medicine;

  return (
    <div className="mdp">
      <div className="container_layout">
        {/*
         * ══════════════════════════════════════════════════════════════════
         * MASTER GRID
         * col-1 (260px) | col-2 (1fr) | col-3 (300px sidebar)
         * ══════════════════════════════════════════════════════════════════
         */}
        <div className="mdp__grid">
          {/* ── ROW 1: Breadcrumb (col 1+2) ──────────────────────────── */}
          <div className="mdp__breadcrumb-row">
            <Breadcrumb items={BREADCRUMB_ITEMS} />
          </div>

          {/* ── ROW 2: Name / Alias / Badges (col 1+2) ───────────────── */}
          <div className="mdp__title-row">
            <h1 className="mdp__name">{name}</h1>
            <p className="mdp__alias">{brandAlias}</p>
            <div className="mdp__badges">
              {isTopBrand && (
                <span className="mdp__top-brand">
                  <Icon icon="mdi:check-decagram" />
                  Top Brand
                </span>
              )}
              <span className="mdp__rating">
                <span className="mdp__star">
                  <Icon icon="mdi:star" style={{ color: '#F59E0B' }} />
                </span>
                {rating}
              </span>
            </div>
          </div>

          {/* ── ROW 3 col-1: Product Image ───────────────────────────── */}
          <div className="mdp__image-col">
            <div className="mdp__image-wrap">
              {image ? (
                <img src={image} alt={name} loading="lazy" />
              ) : (
                <div className="mdp__img-placeholder">
                  <Icon icon="mdi:pill" />
                </div>
              )}
            </div>
          </div>

          {/* ── ROW 3 col-2: Composition / Manufacturer / Price / Delivery */}
          <div className="mdp__meta-col">
            {/* Composition */}
            <div className="mdp__field">
              <p className="mdp__field-label">Composition</p>
              <h2 className="mdp__field-value">{composition}</h2>
            </div>

            {/* Manufacturer */}
            <div className="mdp__field">
              <p className="mdp__field-label">Manufacturer</p>
              <p className="mdp__field-value mdp__field-value--md">{manufacturer}</p>
              <span className="mdp__strip-badge">{tabletsPerStrip} Tablets per strip</span>
            </div>

            {/* In Stock Price Card */}
            <div className="mdp__price-card">
              {inStock && (
                <div className="mdp__stock-row">
                  <Icon icon="mdi:check-circle-outline" />
                  In Stock
                </div>
              )}
              <p className="mdp__best-price">BEST PRICE</p>
              <div className="mdp__price-row">
                <span className="mdp__price">₹{price.toFixed(2)}</span>
                <span className="mdp__price-unit">/ {unit}</span>
              </div>
            </div>

            {/* Delivery */}
            <div className="mdp__field">
              <p className="mdp__field-label">Delivery Time</p>
              <p className="mdp__delivery-time">{deliveryTime}</p>
              <p className="mdp__shipping">
                <Icon icon="mdi:truck-delivery-outline" style={{ color: '#014A97', fontSize: 16 }} />
                Free shipping on ₹{freeShippingAbove}+
              </p>
            </div>
          </div>

          {/* ── ROW 4 col-1: About ───────────────────────────────────── */}
          <div className="mdp__about-col">
            <h3 className="mdp__about-heading">About {composition}</h3>
            <hr className="mdp__about-divider" />
            <div className="mdp__about-card">{about}</div>
            <div className="mdp__trust">
              <span className="mdp__trust-item">
                <span className="mdp__trust-icon">
                  <Icon icon="mdi:shield-check-outline" style={{ color: 'rgba(0,78,159,1)', fontSize: 20 }} />
                </span>
                Safe &amp; Secure
              </span>
              <span className="mdp__trust-item">
                <span className="mdp__trust-icon">
                  <Icon icon="mdi:account-check-outline" style={{ color: 'rgba(0,78,159,1)', fontSize: 20 }} />
                </span>
                Certified Pharmacists
              </span>
            </div>
          </div>

          {/* ── ROW 4 col-2: Important Information ───────────────────── */}
          <div className="mdp__info-col">
            <h3 className="mdp__info-heading">Important Information</h3>
            <div className="mdp__info-cards">
              {importantInfo.map((info, idx) => {
                const meta = INFO_META[info.type];
                return (
                  <div key={idx} className={`mdp__info-card mdp__info-card--${meta.mod}`}>
                    <p className={`mdp__info-title mdp__info-title--${meta.titleMod}`}>
                      <Icon icon={meta.icon} style={{ fontSize: 18 }} />
                      {info.type}
                    </p>
                    <p className="mdp__info-desc">{info.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── COL-3: Sticky Sidebar (spans all 4 rows) ─────────────── */}
          <aside className="mdp__sidebar">
            {/* TOP: Fulfilment Pharmacy */}
            <div className="mdp__pharmacy">
              <h3 className="mdp__pharmacy-heading">Fulfilment Pharmacy</h3>

              <div className="mdp__pharmacy-card">
                <div className="mdp__pharmacy-info">
                  <div className="mdp__pharmacy-img-wrap">
                    {pharmacy.image ? (
                      <img src={pharmacy.image} alt={pharmacy.name} />
                    ) : (
                      <div className="mdp__pharmacy-img-placeholder">
                        <Icon icon="mdi:store-outline" />
                      </div>
                    )}
                  </div>

                  <div className="mdp__pharmacy-text">
                    <p className="mdp__pharmacy-name">{pharmacy.name}</p>
                    <p className="mdp__pharmacy-dist">{pharmacy.distanceKm} km away</p>
                    <p className="mdp__pharmacy-open">Open Until {pharmacy.openUntil}</p>
                  </div>
                </div>

                <div className="mdp__pharmacy-actions">
                  <button
                    className="mdp__pharmacy-btn mdp__pharmacy-btn--call"
                    onClick={() => onCall?.(pharmacy.phone)}
                    aria-label={`Call ${pharmacy.name}`}
                  >
                    <Icon icon="mdi:phone-outline" />
                    Call
                  </button>
                  <button
                    className="mdp__pharmacy-btn mdp__pharmacy-btn--directions"
                    onClick={() => onDirections?.(pharmacy.mapsUrl)}
                    aria-label={`Directions to ${pharmacy.name}`}
                  >
                    <Icon icon="mdi:directions" />
                    Directions
                  </button>
                </div>
              </div>
            </div>

            {/* MIDDLE: Empty spacer — grows to fill */}
            <div className="mdp__sidebar-spacer" />

            {/* BOTTOM: Total Payable + Add to Cart */}
            <div className="mdp__total">
              <p className="mdp__total-label">TOTAL PAYABLE</p>
              <p className="mdp__total-amount">₹{totalPayable.toFixed(2)}</p>
              <button className="mdp__cart-btn" onClick={() => onAddToCart?.(id)} aria-label={`Add ${name} to cart`}>
                <Icon icon="mdi:cart-outline" />
                Add to Cart
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsView;
