import React, { useState } from 'react';
import doctor_1 from '@assets/images/doctors/doctor-1.png';
import doctor_2 from '@assets/images/doctors/doctor-2.png';
import doctor_card_img from '@assets/images/doctors/doctor-card-img.png';
import { Icon } from '@iconify/react/dist/iconify.js';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const doctorList = [
  {
    id: 1,
    name: 'Dr. Rahul Patel',
    specialty: 'Cardiologist',
    experience: '12 yrs Exp.',
    fee: '$50',
    rating: 4.8,
    distance: '1.2 km away',
    timings: ['Mon–Fri: 9:00 am to 5:00pm', 'Sat: 10:00 am to 2:00pm', 'Sun: Closed'],
    features: ['Valet', 'Parking', 'Wheelchair accessible', 'Cooling'],
    image: doctor_1,
    clinicImage: doctor_card_img
  },
  {
    id: 2,
    name: 'Dr. Neha Sharma',
    specialty: 'Dermatologist',
    experience: '8 yrs Exp.',
    fee: '$40',
    rating: 4.6,
    distance: '2 km away',
    timings: ['Mon–Fri: 10:00 am to 6:00pm', 'Sat: 11:00 am to 3:00pm', 'Sun: Closed'],
    features: ['Parking', 'AC', 'Online Payment'],
    image: doctor_2,
    clinicImage: doctor_card_img
  },
  {
    id: 3,
    name: 'Dr. Amit Shah',
    specialty: 'Orthopedic',
    experience: '10 yrs Exp.',
    fee: '$45',
    rating: 4.7,
    distance: '800 m away',
    timings: ['Mon–Fri: 9:30 am to 5:30pm', 'Sat: 10:00 am to 1:00pm'],
    features: ['Parking', 'Lift', 'AC'],
    image: doctor_1,
    clinicImage: doctor_card_img
  },
  {
    id: 4,
    name: 'Dr. Priya Mehta',
    specialty: 'Gynecologist',
    experience: '9 yrs Exp.',
    fee: '$55',
    rating: 4.9,
    distance: '1.5 km away',
    timings: ['Mon–Fri: 10:00 am to 6:00pm'],
    features: ['Wheelchair accessible', 'AC'],
    image: doctor_2,
    clinicImage: doctor_card_img
  },
  {
    id: 5,
    name: 'Dr. Kiran Desai',
    specialty: 'Dentist',
    experience: '7 yrs Exp.',
    fee: '$30',
    rating: 4.5,
    distance: '2.5 km away',
    timings: ['Mon–Sat: 9:00 am to 4:00pm'],
    features: ['Parking', 'Online Payment'],
    image: doctor_1,
    clinicImage: doctor_card_img
  },
  {
    id: 6,
    name: 'Dr. Rakesh Kumar',
    specialty: 'Neurologist',
    experience: '15 yrs Exp.',
    fee: '$70',
    rating: 4.9,
    distance: '3 km away',
    timings: ['Mon–Fri: 11:00 am to 7:00pm'],
    features: ['AC', 'Lift', 'Parking'],
    image: doctor_2,
    clinicImage: doctor_card_img
  }
];

const FindAndBookDoctorView: React.FC = () => {
  const [active, setActive] = useState('book');

  return (
    <section className="find-and-book-doctor-section">
      <div className="container_layout">
        <h2 className="section-title">Book Doctor</h2>
        <p className="section-description">Find Your Doctor</p>

        {/* BUTTONS */}
        <div className="section-btn">
          <button className={`find-doctor-button ${active === 'book' ? 'active' : ''}`} onClick={() => setActive('book')}>
            Book Doctor
          </button>
          <button className={`find-doctor-button ${active === 'home' ? 'active' : ''}`} onClick={() => setActive('home')}>
            Home Visit
          </button>
          <button className={`find-doctor-button ${active === 'video' ? 'active' : ''}`} onClick={() => setActive('video')}>
            Video Consultation
          </button>
        </div>

        {/* SWIPER */}
        <div className="section-doctor-cards">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 }
            }}
          >
            {doctorList.map((doc) => (
              <SwiperSlide key={doc.id}>
                <div className="doctor-card">
                  {/* LEFT IMAGE */}
                  <div className="doctor-left">
                    <img src={doc.image} alt={doc.name} />
                  </div>

                  {/* CONTENT */}
                  <div className="doctor-content">
                    <div className="doctor-top">
                      <div className="doctor-middle">
                        <h3 className="doctor-name">{doc.name}</h3>

                        <p className="doctor-meta">
                          {doc.specialty} | {doc.experience}
                          <span className="fee">Fee {doc.fee}</span>
                        </p>

                        <div className="doctor-rating">
                          <Icon icon="fluent-color:star-16" width="16" height="16" />
                          {doc.rating}
                          <span>{doc.distance}</span>
                        </div>

                        <div className="doctor-timing">
                          {doc.timings.map((time, i) => (
                            <p key={i}>{time}</p>
                          ))}
                        </div>
                      </div>

                      <div className="doctor-right">
                        <img src={doc.clinicImage} alt="Clinic" />
                        <ul>
                          {doc.features.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="doctor-actions">
                      <button className="book-btn">Book Appointment</button>
                      <button className="call-btn">Call Clinic</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FindAndBookDoctorView;
