import { Navigate, Route, Routes } from 'react-router-dom';
import DoctorInformationContainer from '../components/doctorInformation/container/doctorInformation.container';
import { APP_ROUTE } from '@shared/constant/app-route';

const HealthcareInformationRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={APP_ROUTE.HEALTHCARE_INFORMATION + APP_ROUTE.DOCTOR} />} />
      <Route path={APP_ROUTE.DOCTOR} element={<DoctorInformationContainer />} />
    </Routes>
  );
};

export default HealthcareInformationRoute;
