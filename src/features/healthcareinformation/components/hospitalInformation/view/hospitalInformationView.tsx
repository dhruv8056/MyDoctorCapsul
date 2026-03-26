import InformationOverviewSection from '@shared/components/information-sections/information-overviewSection';
import React from 'react';
import { IHospitalsInformationProps } from '../interface/IHospitalsInformation';
import InformationRatingSection from '@shared/components/information-sections/information-ratingSection';
import { Icon } from '@iconify/react/dist/iconify.js';
import ServicesOffered from '@shared/components/common/ServicesOffered';
import ReviewCard from '@shared/components/common/ReviewCard';

interface ServiceFilter {
  id: string;
  label: string;
  icon: string; // iconify icon string
}

const HOSPITALS_SERVICES: ServiceFilter[] = [
  { id: 'icu', label: 'ICU Support', icon: 'mdi:heart-pulse' },
  { id: 'ambulance', label: 'Private Ambulance', icon: 'mdi:ambulance' },
  { id: 'pharmacy', label: 'Pharmacy', icon: 'mdi:heart-circle-outline' },
  { id: 'diagnosticlab', label: 'Diagnostic Lab', icon: 'mdi:heart-circle-outline' },
  { id: 'emergency', label: '24/7 Emergency', icon: 'mdi:heart-circle-outline' }
];

const availabilityTimings = [
  { days: 'Mon-Fri:', time: '9:00 am to 5:00pm' },
  { days: 'Sat:', time: '10:00 am to  2:00pm' }
];

const HospitalInformationView: React.FC<IHospitalsInformationProps> = ({ hospitals, reviews }) => {
  return (
    <div className="hospital-information-section">
      <div className="container_layout">
        <InformationOverviewSection video={hospitals.video} image={hospitals.image} name={hospitals.name} />
        <InformationRatingSection
          rating={4.8}
          totalReviews={56}
          totalPatients={34}
          visibleCards={['rating', 'review', 'ambulance', 'call', 'direction']}
        />

        {/* 🔹 Service & Location Section */}
        <div className="hospital-service-location">
          {/* ── Left Column ── */}
          <div className="hospital-service-location__left">
            {/* Services Offered */}
            <ServicesOffered services={HOSPITALS_SERVICES} />

            {/* Availability Timing */}
            <div className="hospital-service-location__availability">
              <h4 className="hospital-service-location__availability-title">Availability Timing</h4>
              <div className="hospital-service-location__timing-list">
                {availabilityTimings.map((row, idx) => (
                  <p key={idx} className="hospital-service-location__timing-row">
                    {row.days} {row.time}
                  </p>
                ))}
              </div>
              <span className="hospital-service-location__emergency-link">Emergency Only</span>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="hospital-service-location__right">
            <h4 className="hospital-service-location__title">Location &amp; Address</h4>

            <div className="hospital-service-location__location-card">
              <div className="hospital-service-location__map">
                <iframe
                  src="https://www.google.com/maps?q=City+cardiac+care+center+New+Delhi&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="hospital-service-location__address-card">
                <span className="hospital-service-location__pin-icon">
                  <Icon icon="mdi:address-marker-outline" width="28" height="28" />
                </span>

                <div className="hospital-service-location__address-info">
                  <span className="hospital-service-location__address-name">City cardiac care center</span>
                  <span className="hospital-service-location__address-text">1250, Medical near college, New Delhi - 395005</span>
                </div>
              </div>
            </div>
            <div className="hospital-service-location__action">
              <button className="hospital-service-location__book-btn">
                <Icon icon="tabler:calendar-plus" width="24" height="24" /> Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* review card */}
        <div className="hospital-information-patient-review">
          <h3>Patient Review</h3>

          <div className="review-list">
            {reviews.map((item) => (
              <ReviewCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        <h3 className="hospital-information-patient-review__title-2">View All 1,540 Reviews</h3>
      </div>
    </div>
  );
};

export default HospitalInformationView;
