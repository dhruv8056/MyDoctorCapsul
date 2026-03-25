import React, { useCallback } from 'react';
import RecommendedClinicsView from '../view/recommendedClinicsView';
import { Clinic, CLINICS_DATA } from '../interface/IRecommendedClinics';

// ─── Container ────────────────────────────────────────────────────────────────
// Owns all logic: data, handlers, derived state.
// Passes only plain props down to the View.
// ──────────────────────────────────────────────────────────────────────────────

const RecommendedClinicsContainer: React.FC = () => {
  const clinics: Clinic[] = CLINICS_DATA;

  const handleViewDetails = useCallback((clinic: Clinic) => {
    console.log('View details →', clinic.name);
  }, []);

  return <RecommendedClinicsView clinics={clinics} onViewDetails={handleViewDetails} />;
};

export default RecommendedClinicsContainer;
