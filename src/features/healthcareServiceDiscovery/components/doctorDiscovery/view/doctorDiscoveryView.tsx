import React from 'react';
import { Icon } from '@iconify/react';
import doctor_1 from '@assets/images/doctor-discovery/doctor-1.png';
import doctor_2 from '@assets/images/doctor-discovery/doctor-2.png';
import doctor_3 from '@assets/images/doctor-discovery/doctor-3.png';
import doctor_4 from '@assets/images/doctor-discovery/doctor-4.png';
import { APP_ROUTE } from '@shared/constant/app-route';
import { Link } from 'react-router-dom';

// ─── Types ────────────────────────────────────────────────────────────────────

interface IDoctorCardButton {
  id: number;
  label: string;
  variant: 'primary' | 'success';
  icon?: string;
  action: string; // action key for handler
}

interface IDoctorSchedule {
  day: string;
  time: string;
}

interface IDoctorCard {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  fee: string;
  rating: number;
  distance: string;
  image: string;
  schedule: IDoctorSchedule[];
  buttons: IDoctorCardButton[];
}

const doctorCardButtons: IDoctorCardButton[] = [
  {
    id: 1,
    label: 'Book Appointment',
    variant: 'primary',
    icon: 'solar:calendar-bold',
    action: 'book_appointment'
  },
  {
    id: 2,
    label: 'Call Clinic',
    variant: 'success',
    icon: 'solar:phone-bold',
    action: 'call_clinic'
  }
];

// ─── Mock Doctors Data ────────────────────────────────────────────────────────

const doctors: IDoctorCard[] = [
  {
    id: 1,
    name: 'Dr. Rahul Patel',
    specialization: 'Cardiologist',
    experience: '12 yrs Exp.',
    fee: '$50',
    rating: 4.8,
    distance: '1.2 km away',
    image: doctor_1,
    schedule: [
      { day: 'Mon-Fri:', time: '9:00 am to 5:00pm' },
      { day: 'Sat:', time: '10:00 am to  2:00pm' },
      { day: 'Sun:', time: 'Closed' }
    ],
    buttons: doctorCardButtons
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialization: 'Dermatologist',
    experience: '8 yrs Exp.',
    fee: '$40',
    rating: 4.6,
    distance: '2.5 km away',
    image: doctor_2,
    schedule: [
      { day: 'Mon-Fri:', time: '10:00 am to 6:00pm' },
      { day: 'Sat:', time: '10:00 am to  1:00pm' },
      { day: 'Sun:', time: 'Closed' }
    ],
    buttons: doctorCardButtons
  },
  {
    id: 3,
    name: 'Dr. Amit Verma',
    specialization: 'Neurologist',
    experience: '15 yrs Exp.',
    fee: '$70',
    rating: 4.9,
    distance: '3.1 km away',
    image: doctor_3,
    schedule: [
      { day: 'Mon-Wed:', time: '9:00 am to 4:00pm' },
      { day: 'Thu-Fri:', time: '11:00 am to 5:00pm' },
      { day: 'Sun:', time: 'Closed' }
    ],
    buttons: doctorCardButtons
  },
  {
    id: 4,
    name: 'Dr. Amit Verma',
    specialization: 'Neurologist',
    experience: '15 yrs Exp.',
    fee: '$70',
    rating: 4.9,
    distance: '3.1 km away',
    image: doctor_4,
    schedule: [
      { day: 'Mon-Wed:', time: '9:00 am to 4:00pm' },
      { day: 'Thu-Fri:', time: '11:00 am to 5:00pm' },
      { day: 'Sun:', time: 'Closed' }
    ],
    buttons: doctorCardButtons
  }
];

// ─── Button Handler ───────────────────────────────────────────────────────────

const handleButtonAction = (action: string, doctor: IDoctorCard) => {
  switch (action) {
    case 'book_appointment':
      console.log('Book appointment for', doctor.name);
      break;
    case 'call_clinic':
      console.log('Call clinic for', doctor.name);
      break;
    default:
      console.log('Unknown action:', action);
  }
};

// ─── Component ────────────────────────────────────────────────────────────────

const DoctorDiscoveryView: React.FC = () => {
  return (
    <div className="doctor-discovery-section">
      <div className="container_layout">
        <h2 className="doctor-discovery-section-title">Find Doctor</h2>

        <p className="doctor-discovery-section-description">Doctors Near You</p>
        <div className="doctor-discovery-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-discovery-card">
              {/* 🔹 Doctor Image */}
              <div className="doctor-discovery-card__image-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-discovery-card__image" />
              </div>

              {/* 🔹 Card Content */}
              <div className="doctor-discovery-card__content">
                {/* Name + Specialization row */}
                <div className="doctor-discovery-card__header">
                  <Link to={APP_ROUTE.HEALTHCARE_INFORMATION + APP_ROUTE.DOCTOR} className="doctor-discovery-card__name">
                    {doctor.name}
                  </Link>
                  <div className="doctor-discovery-card__meta-row">
                    <span className="doctor-discovery-card__specialization">
                      {doctor.specialization} | {doctor.experience}
                    </span>
                    <span className="doctor-discovery-card__fee">Fee {doctor.fee}</span>
                  </div>
                </div>

                {/* Rating + Distance */}
                <div className="doctor-discovery-card__rating-row">
                  <span className="doctor-discovery-card__rating">
                    <Icon icon="solar:star-bold" className="doctor-discovery-card__star-icon" />
                    {doctor.rating}
                  </span>
                  <span className="doctor-discovery-card__divider">|</span>
                  <span className="doctor-discovery-card__distance">{doctor.distance}</span>
                </div>

                {/* Schedule */}
                <div className="doctor-discovery-card__schedule">
                  {doctor.schedule.map((slot, idx) => (
                    <div key={idx} className="doctor-discovery-card__schedule-row">
                      <span className="doctor-discovery-card__schedule-text">
                        {slot.day} {slot.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="doctor-discovery-card__buttons">
                  {doctor.buttons.map((btn) => (
                    <button
                      key={btn.id}
                      className={`doctor-discovery-card__btn doctor-discovery-card__btn--${btn.variant}`}
                      onClick={() => handleButtonAction(btn.action, doctor)}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDiscoveryView;
