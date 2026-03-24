import React from 'react';
import { Icon } from '@iconify/react';
import { Hospital } from '../interface/IRecommendedHospitals';

// ─── Props ────────────────────────────────────────────────────────────────────

interface RecommendedHospitalsViewProps {
  hospitals: Hospital[];
  onViewDetails: (hospital: Hospital) => void;
}

// ─── Sub-component: HospitalCard ──────────────────────────────────────────────

interface HospitalCardProps {
  hospital: Hospital;
  onViewDetails: (hospital: Hospital) => void;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital, onViewDetails }) => {
  const { name, image, rating, distance, isOpen24h, specialties } = hospital;

  return (
    <article className="recommended-hospitals__card">
      {/* ── Image ── */}
      <div className="recommended-hospitals__image-wrapper">
        <img src={image} alt={`${name} building`} className="recommended-hospitals__image" loading="lazy" />
      </div>

      {/* ── Body ── */}
      <div className="recommended-hospitals__body">
        {/* Row 1 — Name + Rating */}
        <div className="recommended-hospitals__name-row">
          <h3 className="recommended-hospitals__name">{name}</h3>
          <span className="recommended-hospitals__rating-chip">
            <Icon icon="mingcute:star-fill" />
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Row 2 — Distance */}
        <p className="recommended-hospitals__distance">
          <Icon icon="mingcute:location-fill" />
          {distance}
        </p>

        {/* Row 3 — Open badge */}
        {isOpen24h && <span className="recommended-hospitals__open-badge">Open 24h</span>}

        {/* Row 4 — Specialties */}
        <p className="recommended-hospitals__specialties">
          <Icon icon="icon-park-outline:dot" width="16" height="16" />
          <strong>Specialties:</strong> {specialties.join(', ')}
        </p>
      </div>

      {/* ── Footer ── */}
      <div className="recommended-hospitals__footer">
        <button className="recommended-hospitals__btn" onClick={() => onViewDetails(hospital)} aria-label={`View details for ${name}`}>
          View Details
        </button>
      </div>
    </article>
  );
};

// ─── View ─────────────────────────────────────────────────────────────────────

const RecommendedHospitalsView: React.FC<RecommendedHospitalsViewProps> = ({ hospitals, onViewDetails }) => {
  return (
    <section className="recommended-hospitals">
      <div className="container_layout">
        {/* Header */}
        <div className="recommended-hospitals__header">
          <span className="recommended-hospitals__subtitle">Find The Best Hospitals</span>
          <h2 className="recommended-hospitals__title" id="rh-title">
            Recommended Hospitals Near Me
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="recommended-hospitals__grid">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedHospitalsView;
