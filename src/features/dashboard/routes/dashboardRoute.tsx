import React from 'react';
import HeroContainer from '../components/heroSection/container/hero.container';
import EmergencyServicesContainer from '../components/emergencyServices/container/emergencyServices.container';
import MedicalServicesContainer from '../components/medicalServices/container/medicalServices.container';
import AboutServicesView from '../components/aboutServices/view/aboutServicesView';
import FindDoctorBySymptomsContaine from '../components/findDoctorBySymptoms/container/findDoctorBySymptoms.containe';
import AbhaContainer from '../components/abhaSection/container/abha.container';
import RecommendedHospitalsContainer from '../components/recommendedHospitals/container/recommendedHospitals.container';
import RecommendedClinicsContainer from '../components/recommendedClinics/container/recommendedClinics.container';
// import ExpertiseContainer from '../components/expertise/container/expertise.container';

const DashboardRoute: React.FC = () => {
  return (
    <>
      <HeroContainer />
      <EmergencyServicesContainer />
      <MedicalServicesContainer />
      <AboutServicesView />
      <FindDoctorBySymptomsContaine />
      {/* <ExpertiseContainer /> */}
      <AbhaContainer />
      <RecommendedHospitalsContainer />
      <RecommendedClinicsContainer />
    </>
  );
};

export default DashboardRoute;
