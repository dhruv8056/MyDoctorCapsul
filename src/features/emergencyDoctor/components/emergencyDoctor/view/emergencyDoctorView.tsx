import { useState } from 'react';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import { APP_ROUTE } from '@shared/constant/app-route';
import { Icon } from '@iconify/react';
import EmergencyDoctorTrackingModal from './EmergencyDoctorTrackingModal';
import { useNavigate } from 'react-router-dom';
import emr_doc from '@assets/images/eme-doc-1.png';

const EmergencyDoctorView: React.FC<{ onAction: (item: any) => void }> = ({ onAction }) => {
  const navigate = useNavigate();
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  const BREADCRUMB_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'emergency doctor', href: APP_ROUTE.EMERGENCY_DOCTOR }
  ];

  const emergencyOptions = [
    {
      id: 1,
      icon: 'mdi:video-plus',
      title: 'Instant Video Call',
      action: 'drawer',
      description: 'Start a video consultation with an emergency doctor within 2 minutes',
      buttonText: 'CONNECT NOW >>',
      route: '/'
    },
    {
      id: 2,
      icon: 'mdi:medical-bag',
      title: 'Request Home Visit',
      action: 'modal',
      description: 'Book a doctor to visit your location with real-time tracking facility',
      buttonText: 'DISPATCH MEDIC >>',
      route: ''
    }
  ];

  return (
    <div className="container_layout">
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className="emergency-doctor">
        <p className="emergency-doctor__subtitle">Find Doctor</p>
        <h2 className="emergency-doctor__title">Emergency Doctor</h2>

        {/* Cards */}
        <div className="emergency-doctor__cards">
          {emergencyOptions.map((item) => (
            <div key={item.id} className="emergency-doctor__card">
              <Icon icon={item.icon} width="43" height="34" color="#001C3A" />

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <button className="emergency-doctor__link" onClick={() => onAction(item)}>
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="emergency-status">
          <div className="emergency-status__avatars">
            <img src={emr_doc} alt="doc" />
            <img src={emr_doc} alt="doc" />
            <img src={emr_doc} alt="doc" />
          </div>

          <div className="emergency-status__info">
            <p className="online-text">14 Specializes doctors currently online</p>
            <span
              className="status-badge status-badge--clickable"
              role="button"
              tabIndex={0}
              onClick={() => navigate(APP_ROUTE.EMERGENCY_CALL_HUB)}
              onKeyDown={(e) => e.key === 'Enter' && navigate(APP_ROUTE.EMERGENCY_CALL_HUB)}
            >
              SYSTEM RESPONSE: NORMAL
            </span>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="emergency-doctor__cta">
          <button onClick={() => (window.location.href = 'tel:+911234567890')}>
            <Icon icon="mdi:phone" width="18" height="18" />
            CALL NOW FOR IMMEDIATE CONNECTION
          </button>
        </div>
      </div>

      <EmergencyDoctorTrackingModal open={isTrackingModalOpen} onClose={() => setIsTrackingModalOpen(false)} />
    </div>
  );
};

export default EmergencyDoctorView;
