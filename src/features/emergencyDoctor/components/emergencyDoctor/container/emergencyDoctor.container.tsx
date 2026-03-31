import React, { useState } from 'react';
import EmergencyDoctorView from '../view/emergencyDoctorView';
import EmergencyDoctorPaymentContainer from './emergencyDoctorPayment.container';
import EmergencyDoctorTrackingModal from '../view/EmergencyDoctorTrackingModal';
import { useNavigate } from 'react-router-dom';

const EmergencyDoctorContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const handleAction = (item: any) => {
    switch (item.action) {
      case 'drawer':
        setIsDrawerOpen(true);
        break;

      case 'modal':
        setIsModalOpen(true);
        break;

      case 'navigate':
        navigate(item.route);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <EmergencyDoctorView onAction={handleAction} />

      {/* Modal */}
      <EmergencyDoctorTrackingModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Drawer */}
      <EmergencyDoctorPaymentContainer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default EmergencyDoctorContainer;
