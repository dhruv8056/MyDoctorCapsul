import EmergencyDoctorPaymetView from '../view/emergencyDoctorPaymetView';

const EmergencyDoctorPaymentContainer: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  return <EmergencyDoctorPaymetView open={open} onClose={onClose} />;
};

export default EmergencyDoctorPaymentContainer;
