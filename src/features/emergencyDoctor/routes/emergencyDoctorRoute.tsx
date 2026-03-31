import { Route, Routes } from 'react-router-dom';
import EmergencyDoctorContainer from '../components/emergencyDoctor/container/emergencyDoctor.container';

const EmergencyDoctorRoute = () => {
  return (
    <Routes>
      <Route index element={<EmergencyDoctorContainer />} />{' '}
    </Routes>
  );
};

export default EmergencyDoctorRoute;
