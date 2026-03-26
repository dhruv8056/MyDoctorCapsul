import React from 'react';
import RecommendedHospitalsView from '../view/recommendedHospitalsView';
import { Hospital, HOSPITALS_DATA } from '../interface/IRecommendedHospitals';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';

const RecommendedHospitalsContainer: React.FC<{ variant?: 'default' | 'white' }> = ({ variant }) => {
  const navigate = useNavigate();
  const redirectHospitalInfo = () => {
    navigate(APP_ROUTE.HEALTHCARE_INFORMATION + APP_ROUTE.DOCTOR);
  };
  const hospitals: Hospital[] = HOSPITALS_DATA;

  return <RecommendedHospitalsView hospitals={hospitals} onViewDetails={redirectHospitalInfo} variant={variant} />;
};
export default RecommendedHospitalsContainer;
