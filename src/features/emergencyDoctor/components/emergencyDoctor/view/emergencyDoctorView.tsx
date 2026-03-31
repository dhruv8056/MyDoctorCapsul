import Breadcrumb from '@shared/components/common/Breadcrumb';
import { APP_ROUTE } from '@shared/constant/app-route';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const EmergencyDoctorView = () => {
  const navigate = useNavigate();
  const BREADCRUMB_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'emergency doctor', href: APP_ROUTE.EMERGENCY_DOCTOR }
  ];

  const emergencyOptions = [
    {
      id: 1,
      icon: 'mdi:video-plus',
      title: 'Instant Video Call',
      description: 'Start a video consultation with an emergency doctor within 2 minutes',
      buttonText: 'CONNECT NOW >>',
      route: '/'
    },
    {
      id: 2,
      icon: 'mdi:medical-bag',
      title: 'Request Home Visit',
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
              <Icon icon={item.icon} width="43" height="34" color='#001C3A'/>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <button className="emergency-doctor__link" onClick={() => navigate(item.route)}>
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="emergency-doctor__cta">
          <button onClick={() => (window.location.href = 'tel:+911234567890')}>
            <Icon icon="mdi:phone" width="18" height="18" />
            CALL NOW FOR IMMEDIATE CONNECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyDoctorView;
