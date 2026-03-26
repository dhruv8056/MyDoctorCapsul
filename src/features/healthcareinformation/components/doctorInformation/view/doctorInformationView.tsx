import React from 'react';
import InformationOverviewSection from '@shared/components/information-sections/information-overviewSection';
import { IDoctorInformationProps } from '../interface/IDoctorInforamation';
import InformationRatingSection from '@shared/components/information-sections/information-ratingSection';
import review_1 from '@assets/images/doctor-information/review-1.png';
import review_2 from '@assets/images/doctor-information/review-2.png';
import review_3 from '@assets/images/doctor-information/review-3.png';
import ServicesOffered from '@shared/components/common/ServicesOffered';
import { Icon } from '@iconify/react/dist/iconify.js';

const patientReviews = [
  {
    id: 1,
    video: review_1,
    review: '"Top-rated doctor reviews often highlight compassionate care, clear communication, and accurate diagnosis."',
    name: 'Jisha Dave',
    rating: 4
  },
  {
    id: 2,
    video: review_2,
    review: '"conditions and offer personalized treatment plans. Key feedback often mentions friendly staff"',
    name: 'Harshid Kapoor',
    rating: 4
  },
  {
    id: 3,
    video: review_3,
    review: '"conditions and offer personalized treatment plans. Key feedback often mentions friendly staff"',
    name: 'Mirja Roy',
    rating: 4
  },
  {
    id: 4,
    video: review_1,
    review: '"conditions and offer personalized treatment plans. Key feedback often mentions friendly staff"',
    name: 'Manik Foring',
    rating: 2
  }
];

interface ServiceFilter {
  id: string;
  label: string;
  icon: string; // iconify icon string
}

const SERVICES: ServiceFilter[] = [
  { id: 'icu', label: 'ICU Support', icon: 'mdi:heart-pulse' },
  { id: 'ambulance', label: 'Private Ambulance', icon: 'mdi:ambulance' },
  { id: 'ecg', label: 'ECG / TMT', icon: 'mdi:heart-circle-outline' }
];

const availabilityTimings = [
  { days: 'Mon-Fri:', time: '9:00 am to 5:00pm' },
  { days: 'Sat:', time: '10:00 am to  2:00pm' }
];

const DoctorInformationView: React.FC<IDoctorInformationProps> = ({ doctor }) => {
  return (
    <div className="doctor-information-section">
      <div className="container_layout">
        {/* 🔹 Overview Section */}
        <InformationOverviewSection video={doctor.video} image={doctor.image} name={doctor.name}>
          <p className="doctor-information-specialization">Cardiologist, MD</p>

          <p className="doctor-information-availability">Available for Home Visit</p>

          <p className="doctor-information-experience">Experience : 15 yrs</p>
        </InformationOverviewSection>

        <InformationRatingSection
          rating={4.8}
          totalReviews={56}
          totalPatients={34}
          visibleCards={['rating', 'review', 'patients', 'bookVideo', 'call']}
        />

        {/* 🔹 Service & Location Section */}
        <div className="doctor-service-location">
          {/* ── Left Column ── */}
          <div className="doctor-service-location__left">
            {/* Services Offered */}
            <ServicesOffered services={SERVICES} />

            {/* Availability Timing */}
            <div className="doctor-service-location__availability">
              <h4 className="doctor-service-location__availability-title">Availability Timing</h4>
              <div className="doctor-service-location__timing-list">
                {availabilityTimings.map((row, idx) => (
                  <p key={idx} className="doctor-service-location__timing-row">
                    {row.days} {row.time}
                  </p>
                ))}
              </div>
              <span className="doctor-service-location__emergency-link">Emergency Only</span>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="doctor-service-location__right">
            <h4 className="doctor-service-location__title">Location &amp; Address</h4>

            <div className="doctor-service-location__location-card">
              <div className="doctor-service-location__map">
                <iframe
                  src="https://www.google.com/maps?q=City+cardiac+care+center+New+Delhi&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="doctor-service-location__address-card">
                <span className="doctor-service-location__pin-icon">
                  <Icon icon="mdi:address-marker-outline" width="28" height="28" />
                </span>

                <div className="doctor-service-location__address-info">
                  <span className="doctor-service-location__address-name">City cardiac care center</span>
                  <span className="doctor-service-location__address-text">1250, Medical near college, New Delhi - 395005</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="doctor-information-patient-review">
          <h3 className="doctor-information-patient-review__title">Patient Review</h3>

          <div className="doctor-information-patient-review__list">
            {patientReviews.map((item) => (
              <div key={item.id} className="doctor-information-patient-review__card">
                {/* 🔹 Video Wrapper */}
                <div className="doctor-information-patient-review__video-wrapper">
                  <img src={item.video} />
                </div>

                {/* 🔹 Content */}
                <div className="doctor-information-patient-review__content">
                  <div className="doctor-information-patient-review__meta">
                    <span className="doctor-information-patient-review__name">{item.name}</span>
                    <div className="doctor-information-patient-review__stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={star <= item.rating ? 'star-filled' : 'star-empty'} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.385-2.459a1 1 0 00-1.176 0l-3.385 2.459c-.783.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.197 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="doctor-information-patient-review__text">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="doctor-information-patient-review__title-2">View All 1,540 Reviews</h3>
        </div>
      </div>
    </div>
  );
};

export default DoctorInformationView;
