import React, { useCallback } from 'react';
import RecommendedHospitalsView from '../view/recommendedHospitalsView';
import { Hospital, HOSPITALS_DATA } from '../interface/IRecommendedHospitals';

// ─── Container ────────────────────────────────────────────────────────────────
// Owns all logic: data, handlers, derived state.
// Passes only plain props down to the View.
// ──────────────────────────────────────────────────────────────────────────────

const RecommendedHospitalsContainer: React.FC = () => {
  const hospitals: Hospital[] = HOSPITALS_DATA;

  const handleViewDetails = useCallback((hospital: Hospital) => {
    console.log('View details →', hospital.name);
  }, []);

  return <RecommendedHospitalsView hospitals={hospitals} onViewDetails={handleViewDetails} />;
};

export default RecommendedHospitalsContainer;
