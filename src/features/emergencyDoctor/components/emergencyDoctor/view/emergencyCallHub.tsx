import React from 'react';
import { Icon } from '@iconify/react';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import { APP_ROUTE } from '@shared/constant/app-route';

const EmergencyCallHub: React.FC = () => {
  const BREADCRUMB_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Emergency Doctors', href: APP_ROUTE.EMERGENCY_DOCTOR },
    { label: 'Call', href: APP_ROUTE.EMERGENCY_CALL_HUB }
  ];

  const handleInstantCall = () => {
    window.location.href = 'tel:+911234567890';
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {
        // In production this would share the live location
        alert('Location shared successfully!');
      });
    }
  };

  const handleStartNavigation = () => {
    window.open('https://maps.google.com/?q=Mount+Sinai+Hospital', '_blank');
  };

  return (
    <div className="container_layout">
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className="call-hub">
        {/* Page Header */}
        <div className="call-hub__header">
          <h1 className="call-hub__title">Emergency Call Hub</h1>
          <p className="call-hub__subtitle">
            Get immediate medical assistance from our on-call specialist team
          </p>
        </div>

        {/* Main Grid */}
        <div className="call-hub__grid">
          {/* ── Left Panel ── */}
          <div className="call-hub__left">
            {/* Instant Call Card */}
            <div className="call-hub__instant-card">
              <button
                className="call-hub__call-button"
                onClick={handleInstantCall}
                aria-label="Instant call to doctor"
              >
                <Icon icon="boxicons:siren-alt-filled" width="55px" height="42.5px" />
                <span className="call-hub__call-button-label">Instant Call</span>
                <span className="call-hub__call-button-sub">TO DOCTOR</span>
              </button>

              <div className="call-hub__availability">
                <p className="call-hub__availability-count">3 On Call Doctors Available</p>
                <p className="call-hub__availability-wait">Expected wait time: Less than 30s</p>
              </div>
            </div>

            {/* Option Tiles */}
            <div className="call-hub__options">
              {/* Video Consultation */}
              <div className="call-hub__option-tile">
                <div className="call-hub__option-icon">
                  <Icon icon="tdesign:video-camera" width="24" height="24" />
                </div>
                <div className="call-hub__option-info">
                  <p className="call-hub__option-title">Video Consultation</p>
                  <p className="call-hub__option-desc">Face-to-face virtual triage</p>
                </div>
              </div>

              {/* Request Home Visit */}
              <div className="call-hub__option-tile">
                <div className="call-hub__option-icon">
                  <Icon icon="material-symbols:home-health-outline" width="24px" height="24px" />
                </div>
                <div className="call-hub__option-info">
                  <p className="call-hub__option-title">Request Home Visit</p>
                  <p className="call-hub__option-desc">Doctor dispatched to your location</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Panel ── */}
          <div className="call-hub__right">
            {/* Location Card */}
            <div className="call-hub__location-card">
              <div className="call-hub__location-header">
                <Icon icon="fluent:location-12-regular" width="16 " height="16" />
                <span className="call-hub__location-label">Your Current Location</span>
              </div>
              <p className="call-hub__location-name">Central Park West, New York</p>
              <p className="call-hub__location-coords">
                40.7812° N, 73.9665° W • Highly Accurate
              </p>

              <button
                className="call-hub__share-btn"
                onClick={handleShareLocation}
                aria-label="Share your location"
              >
                <Icon icon="mdi:share-variant" width="16" height="16" />
                Share Location
              </button>

              {/* Map Embed */}
              <div className="call-hub__map">
                <iframe
                  title="Current Location Map"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=40.7812,-73.9665&z=14&output=embed"
                  className="call-hub__map-iframe"
                />
              </div>
            </div>

            {/* Nearest Hospital Card */}
            <div className="call-hub__hospital-card">
              <div className="call-hub__hospital-header">
                <Icon icon="vaadin:plus-square-o" width="18px" height="18px" />
                <span className="call-hub__hospital-label">Nearest Hospital</span>
              </div>
              <h2 className="call-hub__hospital-name">Mount Sinai</h2>
              <p className="call-hub__hospital-distance">0.8 miles away • 6 min drive</p>
              <span className="call-hub__er-badge">
                <span className="call-hub__er-dot" />
                ER: Low Wait Time
              </span>
              <button
                className="call-hub__nav-btn"
                onClick={handleStartNavigation}
                aria-label="Start navigation to Mount Sinai hospital"
              >
                Start Navigation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCallHub;
