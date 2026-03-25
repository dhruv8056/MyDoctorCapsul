import React from 'react';
import { Clinic } from '../interface/IRecommendedClinics';
import HealthcareListingCard from '@shared/components/common/HealthcareListingCard';

interface RecommendedClinicsViewProps {
  clinics: Clinic[];
  onViewDetails: (clinic: Clinic) => void;
}

const RecommendedClinicsView: React.FC<RecommendedClinicsViewProps> = ({ clinics, onViewDetails }) => {
  return (
    <section className="recommended-clinics">
      <div className="container_layout">
        <div className="recommended-clinics__header">
          <span className="recommended-clinics__subtitle">Find The Best Clinics</span>
          <h2 className="recommended-clinics__title">Recommended Clinics Near Me</h2>
        </div>

        <div className="recommended-clinics__grid">
          {clinics.map((clinic) => (
            <HealthcareListingCard key={clinic.id} item={clinic} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedClinicsView;
