import React from 'react';
import about_service from '@assets/images/about-services.png';

const AboutServicesView: React.FC = () => {
  return (
    <div className="about-services-section">
      <div className="container_layout">
        <h2 className="section-title">About</h2>

        <p className="section-description">Your Trusted Healthcare Ecosystem</p>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Doctor Capsule is a modern healthcare platform designed to make medical services simple and accessible for everyone. Our
              platform connects patients with trusted hospitals, experienced doctors, professional nurses, diagnostics, and nearby
              pharmacies in one place.
            </p>

            <p className="about-description">
              Users can easily consult doctors, book lab tests, order medicines, and access healthcare support whenever needed. Our goal is
              to provide fast, reliable, and convenient healthcare services at your fingertips.
            </p>
          </div>

          <div className="about-image">
            <img src={about_service} alt="About Doctor Capsule" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServicesView;
