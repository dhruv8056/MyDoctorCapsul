import { Navigate, Route, Routes } from 'react-router-dom';
import DoctorInformationContainer from '../components/doctorInformation/container/doctorInformation.container';
import { APP_ROUTE } from '@shared/constant/app-route';
import AmbulanceInformationContainer from '../components/ambulanceInformation/container/ambulanceInformation.container';
import HospitalInformationContainer from '../components/hospitalInformation/container/hospitalInformation.container';
import ClinicInformationContainer from '../components/clinicInformation/container/clinicInformation.container';

const HealthcareInformationRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={APP_ROUTE.HEALTHCARE_INFORMATION + APP_ROUTE.DOCTOR} />} />
      <Route path={APP_ROUTE.DOCTOR} element={<DoctorInformationContainer />} />
      <Route path={APP_ROUTE.HOSPITALS} element={<HospitalInformationContainer />} />
      <Route path={APP_ROUTE.CLINICS} element={<ClinicInformationContainer />} />
      <Route path={APP_ROUTE.AMBULANCES} element={<AmbulanceInformationContainer />} />
    </Routes>
  );
};

export default HealthcareInformationRoute;
