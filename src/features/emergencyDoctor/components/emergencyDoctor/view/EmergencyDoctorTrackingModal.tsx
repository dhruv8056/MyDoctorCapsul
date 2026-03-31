import React from 'react';
import DinamicPopupModel from '@shared/components/common/DinamicPopupModel';
import { Icon } from '@iconify/react/dist/iconify.js';


interface EmergencyDoctorTrackingModalProps {
  open: boolean;
  onClose: () => void;
}

const EmergencyDoctorTrackingModal: React.FC<EmergencyDoctorTrackingModalProps> = ({ open, onClose }) => {
  return (
    <DinamicPopupModel
      open={open}
      onClose={onClose}
      title="Visit Tracking"
      rightTopText="Estimated Arrival"
      rightBottomText="10:11 AM"
      rightIcon={<Icon icon="mynaui:alarm-clock" width="24" height="24" />}
    >
      <div className="visit-tracking">
        {/* Map Area */}
        <div className="visit-tracking__map">
          {/* A dotted line curve from Doctor to Home */}
          <div className="visit-tracking__map-route">
            <iframe
              className="visit-tracking__map-iframe"
              loading="lazy"
              src="https://maps.google.com/maps?q=21.1702,72.8311&z=14&output=embed"
            />
          </div>
        </div>

        {/* Info Card */}
        <div className="visit-tracking__info">
          <div className="visit-tracking__info-header">
            <div>
              <h3>Dr. Mebilar is 5 mins away</h3>
              <p>
                <Icon icon="mdi:map-marker-outline" width="20" height="20" />
                0.8 miles from your location
              </p>
            </div>
            <div className="visit-tracking__action-buttons">
              <button className="visit-tracking__icon-btn visit-tracking__icon-btn--call">
                <Icon icon="mdi:phone-outline" width="22" height="22" />
              </button>
              <button className="visit-tracking__icon-btn visit-tracking__icon-btn--chat">
                <Icon icon="mdi:message-outline" width="22" height="22" />
              </button>
            </div>
          </div>

          <div className="visit-tracking__progress-tracker">
            <div className="visit-tracking__step visit-tracking__step--completed">
              <div className="visit-tracking__step-icon">
                <Icon icon="mdi:check" width="24" height="24" />
              </div>
              <span>Requested</span>
            </div>
            <div className="visit-tracking__step-line visit-tracking__step-line--completed"></div>

            <div className="visit-tracking__step visit-tracking__step--completed">
              <div className="visit-tracking__step-icon">
                <Icon icon="mdi:check" width="24" height="24" />
              </div>
              <span>Dispatched</span>
            </div>
            <div className="visit-tracking__step-line"></div>

            <div className="visit-tracking__step visit-tracking__step--active">
              <div className="visit-tracking__step-icon">
                <Icon icon="mdi:truck" width="24" height="24" />
              </div>
              <span>On the way</span>
            </div>
            <div className="visit-tracking__step-line"></div>

            <div className="visit-tracking__step">
              <div className="visit-tracking__step-icon">
                <Icon icon="mdi:package-variant" width="24" height="24" />
              </div>
              <span>Arrived</span>
            </div>
          </div>

          <div className="visit-tracking__doctor-profile">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Doctor"
              className="visit-tracking__doc-avatar"
            />
            <div className="visit-tracking__doc-details">
              <div className="visit-tracking__doc-name-row">
                <h4>Dr. Alex Chen</h4>
                <div className="visit-tracking__doc-rating">
                  <Icon icon="mdi:star" color="#FFA901" width="16" height="16" /> 4.9
                </div>
              </div>
              <p className="visit-tracking__doc-exp">General Physician • 12 yrs exp.</p>
              <div className="visit-tracking__doc-badges">
                <span className="visit-tracking__badge">CRITICAL CARE</span>
                <span className="visit-tracking__badge">ENGLISH / MANDARIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DinamicPopupModel>
  );
};

export default EmergencyDoctorTrackingModal;
