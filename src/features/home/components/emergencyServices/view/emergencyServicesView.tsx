import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';

const EmergencyServicesView: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (type: string) => {
    if (type === 'ambulance') {
      navigate(APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.AMBULANCES);
    }
    if (type === 'doctor') {
      navigate(APP_ROUTE.EMERGENCY_DOCTOR);
    }
  };

  return (
    <div className="emergency-section">
      <div className="container_layout">
        <div className="emergency-cards">
          {/* Ambulance */}
          <div className="ambulance-card" onClick={() => handleClick('ambulance')} role="button">
            <div className="card-header">
              <Icon icon="material-symbols:ambulance" width="45" height="45" color="#DC2727" />
              <h4 className="ambulance-card-label">Ambulance</h4>
            </div>
            <p>Get fast & reliable ambulance service whenever you need emergency transport</p>
          </div>

          {/* Emergency Doctor */}
          <div className="emergency-card" onClick={() => handleClick('doctor')} role="button">
            <div className="card-header">
              <Icon icon="material-symbols:emergency-home-outline" width="37" height="37" color="#fff" />
              <h4 className="emergency-card-label">Emergency Doctor</h4>
            </div>
            <p>Connect instantly with experienced doctors for immediate medical assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServicesView;
