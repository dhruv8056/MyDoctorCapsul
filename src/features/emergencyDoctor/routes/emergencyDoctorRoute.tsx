import { Route, Routes } from 'react-router-dom';
import EmergencyDoctorContainer from '../components/emergencyDoctor/container/emergencyDoctor.container';
import EmergencyCallHub from '../components/emergencyDoctor/view/emergencyCallHub';

const EmergencyDoctorRoute = () => {
  return (
    <Routes>
      <Route index element={<EmergencyDoctorContainer />} />
      <Route path="call-hub" element={<EmergencyCallHub />} />
    </Routes>
  );
};

export default EmergencyDoctorRoute;
