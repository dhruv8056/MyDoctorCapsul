import React from 'react';
import RecommendedClinicsView from '../view/recommendedClinicsView';
import { Clinic, CLINICS_DATA } from '../interface/IRecommendedClinics';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';

const RecommendedClinicsContainer: React.FC = () => {
  const navigate = useNavigate();
  const redirectClinicInfo = () => {
    navigate(APP_ROUTE.HEALTHCARE_INFORMATION + APP_ROUTE.CLINICS);
  };
  const clinics: Clinic[] = CLINICS_DATA;

  return <RecommendedClinicsView clinics={clinics} onViewDetails={redirectClinicInfo} />;
};

export default RecommendedClinicsContainer;
