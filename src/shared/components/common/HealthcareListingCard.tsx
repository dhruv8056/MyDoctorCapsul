import React from 'react';
import { Icon } from '@iconify/react';

export interface HealthcarePlaceItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  distance: string;
  isOpen24h: boolean;
  specialties: string[];
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface HealthcareListingCardProps {
  item: HealthcarePlaceItem;
  onViewDetails: (item: HealthcarePlaceItem) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

const HealthcareListingCard: React.FC<HealthcareListingCardProps> = ({ item, onViewDetails }) => {
  const { name, image, rating, distance, isOpen24h, specialties } = item;

  return (
    <article className="healthcare-listing-card">
      {/* ── Image ── */}
      <div className="healthcare-listing-card__image-wrapper">
        <img src={image} alt={`${name} building`} className="healthcare-listing-card__image" loading="lazy" />
      </div>

      {/* ── Body ── */}
      <div className="healthcare-listing-card__body">
        {/* Row 1 — Name + Rating */}
        <div className="healthcare-listing-card__name-row">
          <h3 className="healthcare-listing-card__name">{name}</h3>
          <span className="healthcare-listing-card__rating-chip">
            <Icon icon="mingcute:star-fill" />
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Row 2 — Distance */}
        <p className="healthcare-listing-card__distance">
          <Icon icon="mingcute:location-fill" />
          {distance}
        </p>

        {/* Row 3 — Open badge (conditional) */}
        {isOpen24h && <span className="healthcare-listing-card__open-badge">Open 24h</span>}

        {/* Row 4 — Specialties */}
        <p className="healthcare-listing-card__specialties">
          <Icon icon="icon-park-outline:dot" width="12" height="12" />
          <span className="healthcare-listing-card__specialties-title">Specialties:</span>
          <span className="healthcare-listing-card__specialties-value">{specialties.join(', ')}</span>
        </p>
      </div>

      {/* ── Footer ── */}
      <div className="healthcare-listing-card__footer">
        <button className="healthcare-listing-card__btn" onClick={() => onViewDetails(item)} aria-label={`View details for ${name}`}>
          View Details
        </button>
      </div>
    </article>
  );
};

export default HealthcareListingCard;
