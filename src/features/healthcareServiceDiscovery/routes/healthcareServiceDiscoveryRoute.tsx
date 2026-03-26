import { Navigate, Route, Routes } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';
import HospitalDiscoveryContainer from '../components/hospitalDiscovery/container/hospitalDiscovery.container';
import ClinicDiscoveryContainer from '../components/clinicDiscovery/container/clinicDiscovery.container';
import AmbulanceDiscoveryContainer from '../components/ambulanceDiscovery/container/ambulanceDiscovery.container';
import DoctorDiscoveryContainer from '../components/doctorDiscovery/container/doctorDiscovery.container';

const HealthcareServiceDiscoveryRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.HEALTHCARE_SERVICES_HOSPITALS} />} />

      <Route path={APP_ROUTE.HEALTHCARE_SERVICES_HOSPITALS} element={<HospitalDiscoveryContainer />} />
      <Route path={APP_ROUTE.HEALTHCARE_SERVICES_CLINICS} element={<ClinicDiscoveryContainer />} />
      <Route path={APP_ROUTE.HEALTHCARE_SERVICES_AMBULANCES} element={<AmbulanceDiscoveryContainer />} />
      <Route path={APP_ROUTE.HEALTHCARE_SERVICES_DOCTOR} element={<DoctorDiscoveryContainer />} />
    </Routes>
  );
};

export default HealthcareServiceDiscoveryRoute;
