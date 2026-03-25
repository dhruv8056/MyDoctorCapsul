import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AmbulanceItem {
  id: number;
  name: string;
  image: string;
  eta: string;
  startingPrice: string;
  facilities: string[];
  hasRealTimeTracking?: boolean;
}

interface AmbulanceCardProps {
  item: AmbulanceItem;
  showViewDetails?: boolean; // toggle button visibility
  onViewDetails?: (item: AmbulanceItem) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

const AmbulanceCard: React.FC<AmbulanceCardProps> = ({ item, showViewDetails = true, onViewDetails }) => {
  const { name, image, eta, startingPrice, facilities, hasRealTimeTracking = true } = item;

  return (
    <article className="amb-card">
      {/* ── Image ── */}
      <div className="amb-card__image-wrapper">
        <img src={image} alt={name} className="amb-card__image" loading="lazy" />

        {hasRealTimeTracking && <span className="amb-card__tracking-badge">Real-Time Traking</span>}
      </div>

      {/* ── Body ── */}
      <div className="amb-card__body">
        {/* Row 1 — Name + Price */}
        <div className="amb-card__top-row">
          <div className="amb-card__name-group">
            <h3 className="amb-card__name">{name}</h3>
            <p className="amb-card__eta">• ETA: {eta}</p>
          </div>
          <div className="amb-card__price-group">
            <span className="amb-card__starting-label">STARTING AT</span>
            <span className="amb-card__price">₹ {startingPrice}</span>
          </div>
        </div>

        {/* Row 2 — Facilities */}
        <div className="amb-card__facility-pill">
          <span className="amb-card__facility-label">Facility :</span>
          {facilities.map((f, i) => (
            <React.Fragment key={f}>
              <span className="amb-card__facility-value">{f}</span>
              {i < facilities.length - 1 && <span className="amb-card__facility-sep">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Footer button (optional) ── */}
      {showViewDetails && (
        <div className="amb-card__footer">
          <button className="amb-card__btn" onClick={() => onViewDetails?.(item)} aria-label={`View details for ${name}`}>
            View Details
          </button>
        </div>
      )}
    </article>
  );
};

export default AmbulanceCard;
