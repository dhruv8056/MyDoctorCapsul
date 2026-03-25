import React from 'react';
import { Hospital } from '../interface/IRecommendedHospitals';
import HealthcareListingCard from '@shared/components/common/HealthcareListingCard';

interface RecommendedHospitalsViewProps {
  hospitals: Hospital[];
  onViewDetails: (hospital: Hospital) => void;
  variant?: 'default' | 'white';
}

const RecommendedHospitalsView: React.FC<RecommendedHospitalsViewProps> = ({ hospitals, onViewDetails, variant = 'default' }) => {
  return (
    <section className={`recommended-hospitals ${variant === 'white' ? 'recommended-hospitals--white' : ''}`}>
      <div className="container_layout">
        <div className="recommended-hospitals__header">
          <span className="recommended-hospitals__subtitle">Find The Best Hospitals</span>
          <h2 className="recommended-hospitals__title">Recommended Hospitals Near Me</h2>
        </div>

        <div className="recommended-hospitals__grid">
          {hospitals.map((hospital) => (
            <HealthcareListingCard key={hospital.id} item={hospital} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedHospitalsView;
