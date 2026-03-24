import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import General_doctor from '@assets/images/findDoctorBySymptoms/general_doctor.png';
import Respiratory from '@assets/images/findDoctorBySymptoms/respiratory.png';
import heart from '@assets/images/findDoctorBySymptoms/heart.png';
import Gastrointestinal from '@assets/images/findDoctorBySymptoms/Gastrointestinal.png';
import mind from '@assets/images/findDoctorBySymptoms/mind.png';
import muscul from '@assets/images/findDoctorBySymptoms/muscul.png';
import skin from '@assets/images/findDoctorBySymptoms/skin.png';
import { Icon } from '@iconify/react/dist/iconify.js';

const cardData = [
  {
    title: 'General',
    subtitle: 'Physicians',
    image: General_doctor,
    points: ['Fever, chills', 'Weakness', 'Weight loss/gain'],
    active: true
  },
  {
    title: 'Respiratory',
    subtitle: 'Pulmonologists Physicians',
    image: Respiratory,
    points: ['Cough', 'Breathlessness', 'Wheezing']
  },
  {
    title: 'Cardiac',
    subtitle: 'Cardiologists',
    image: heart,
    points: ['Chest pain', 'Palpitations', 'Swelling in legs']
  },
  {
    title: 'Gastrointestinal',
    subtitle: 'Gastroenterology',
    image: Gastrointestinal,
    points: ['Stomach pain', 'Acidity', 'Constipation', 'Loose motions']
  },
  {
    title: 'Neurological',
    subtitle: 'Neuro Physician or Neurologist',
    image: mind,
    points: ['Headache', 'Dizziness', 'Seizures', 'Numbness']
  },

  {
    title: 'Musculoskeletal',
    subtitle: 'Orthopedician or Rheumatologist',
    image: muscul,
    points: ['Joint pain', 'Back pain', 'Muscle stiffness']
  },
  {
    title: 'Skin',
    subtitle: 'Dermatologist',
    image: skin,
    points: ['Rash', 'Itching', 'Pigmentation']
  }
];

const FindDoctorBySymptomsView: React.FC = () => {
  return (
    <div className="find-doctor-by-symptoms-section">
      <div className="container_layout">
        <h2 className="section-title">Find Doctor By Symptoms</h2>

        <div className="cards-wrapper">
          {/* Custom Navigation Buttons */}
          <div className="custom-prev">
            <span className="arrow left">
              <Icon icon="solar:arrow-left-linear" width="24" height="24" />
            </span>
          </div>

          <div className="custom-next">
            <span className="arrow right">
              <Icon icon="solar:arrow-right-linear" width="24" height="24" />
            </span>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev'
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`find-doctor-by-symptoms-section-card ${card.active ? 'active' : ''}`}>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>

                  {card.image && (
                    <div className="card-image">
                      <img src={card.image} alt={card.title} />
                    </div>
                  )}

                  <ul className="card-list">
                    {card.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FindDoctorBySymptomsView;
