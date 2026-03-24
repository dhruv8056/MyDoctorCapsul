import React from 'react';
import { Icon } from '@iconify/react';
import { Clinic } from '../interface/IRecommendedClinics';

// ─── Props ────────────────────────────────────────────────────────────────────

interface RecommendedClinicsViewProps {
  clinics: Clinic[];
  onViewDetails: (clinic: Clinic) => void;
}

// ─── Sub-component: ClinicCard ────────────────────────────────────────────────

interface ClinicCardProps {
  clinic: Clinic;
  onViewDetails: (clinic: Clinic) => void;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ clinic, onViewDetails }) => {
  const { name, image, rating, distance, isOpen24h, specialties } = clinic;

  return (
    <article className="recommended-clinics__card">
      {/* ── Image ── */}
      <div className="recommended-clinics__image-wrapper">
        <img src={image} alt={`${name} building`} className="recommended-clinics__image" loading="lazy" />
      </div>

      {/* ── Body ── */}
      <div className="recommended-clinics__body">
        {/* Row 1 — Name + Rating */}
        <div className="recommended-clinics__name-row">
          <h3 className="recommended-clinics__name">{name}</h3>
          <span className="recommended-clinics__rating-chip">
            <Icon icon="mingcute:star-fill" />
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Row 2 — Distance */}
        <p className="recommended-clinics__distance">
          <Icon icon="mingcute:location-fill" />
          {distance}
        </p>

        {/* Row 3 — Open badge */}
        {isOpen24h && <span className="recommended-clinics__open-badge">Open 24h</span>}

        {/* Row 4 — Specialties */}
        <p className="recommended-clinics__specialties">
          <Icon icon="icon-park-outline:dot" width="16" height="16" />
          <strong>Specialties:</strong> {specialties.join(', ')}
        </p>
      </div>

      {/* ── Footer ── */}
      <div className="recommended-clinics__footer">
        <button className="recommended-clinics__btn" onClick={() => onViewDetails(clinic)} aria-label={`View details for ${name}`}>
          View Details
        </button>
      </div>
    </article>
  );
};

// ─── View ─────────────────────────────────────────────────────────────────────

const RecommendedClinicsView: React.FC<RecommendedClinicsViewProps> = ({ clinics, onViewDetails }) => {
  return (
    <section className="recommended-clinics">
      <div className="container_layout">
        {/* Header */}
        <div className="recommended-clinics__header">
          <span className="recommended-clinics__subtitle">Find The Best Clinics</span>
          <h2 className="recommended-clinics__title" id="rc-title">
            Recommended Clinics Near Me
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="recommended-clinics__grid">
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedClinicsView;
