import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Icon } from '@iconify/react/dist/iconify.js';

import General_doctor from '@assets/images/findDoctorBySymptoms/generaldoctor.png';
import Respiratory from '@assets/images/findDoctorBySymptoms/respiratory.png';
import heart from '@assets/images/findDoctorBySymptoms/heart.png';
import Gastrointestinal from '@assets/images/findDoctorBySymptoms/Gastrointestinal.png';
import mind from '@assets/images/findDoctorBySymptoms/mind.png';
import muscul from '@assets/images/findDoctorBySymptoms/muscul.png';
import skin from '@assets/images/findDoctorBySymptoms/skin.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const CARD_DATA = [
  {
    id: 1,
    title: 'General',
    subtitle: 'Physicians',
    image: General_doctor,
    points: ['Fever, chills', 'Weakness', 'Weight loss/gain'],
    defaultActive: true
  },
  {
    id: 2,
    title: 'Respiratory',
    subtitle: 'Pulmonologists Physicians',
    image: Respiratory,
    points: ['Cough', 'Breathlessness', 'Wheezing'],
    defaultActive: false
  },
  {
    id: 3,
    title: 'Cardiac',
    subtitle: 'Cardiologists',
    image: heart,
    points: ['Chest pain', 'Palpitations', 'Swelling in legs'],
    defaultActive: false
  },
  {
    id: 4,
    title: 'Gastrointestinal',
    subtitle: 'Gastroenterology',
    image: Gastrointestinal,
    points: ['Stomach pain', 'Acidity', 'Constipation', 'Loose motions'],
    defaultActive: false
  },
  {
    id: 5,
    title: 'Neurological',
    subtitle: 'Neuro Physician or Neurologist',
    image: mind,
    points: ['Headache', 'Dizziness', 'Seizures', 'Numbness'],
    defaultActive: false
  },
  {
    id: 6,
    title: 'Musculoskeletal',
    subtitle: 'Orthopedician or Rheumatologist',
    image: muscul,
    points: ['Joint pain', 'Back pain', 'Muscle stiffness'],
    defaultActive: false
  },
  {
    id: 7,
    title: 'Skin',
    subtitle: 'Dermatologist',
    image: skin,
    points: ['Rash', 'Itching', 'Pigmentation'],
    defaultActive: false
  }
];

// ─── Component ────────────────────────────────────────────────────────────────

const FindDoctorBySymptomsView: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeId, setActiveId] = useState<number>(1);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="fdbs">
      <div className="container_layout">
        {/* ── Title ── */}
        <h2 className="fdbs__title">Find Doctor By Symptoms</h2>

        {/* ── Slider wrapper ── */}
        <div className="fdbs__wrapper">
          {/* Prev */}
          <button
            className={`fdbs__nav fdbs__nav--prev${isBeginning ? ' fdbs__nav--disabled' : ''}`}
            onClick={handlePrev}
            aria-label="Previous"
            disabled={isBeginning}
          >
            <Icon icon="solar:arrow-left-linear" width="20" height="20" />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 18 },
              1024: { slidesPerView: 4, spaceBetween: 20 }
            }}
            className="fdbs__swiper"
          >
            {CARD_DATA.map((card) => (
              <SwiperSlide key={card.id}>
                <div className={`fdbs__card${activeId === card.id ? ' fdbs__card--active' : ''}`} onClick={() => setActiveId(card.id)}>
                  {/* Background image */}
                  <div className="fdbs__card-bg-image">
                    <img src={card.image} alt="" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="fdbs__card-title">{card.title}</h3>

                  {/* Subtitle */}
                  <p className="fdbs__card-subtitle">{card.subtitle}</p>

                  {/* Dashed divider */}
                  <div className="fdbs__card-divider" aria-hidden="true" />

                  {/* Symptom list */}
                  <ul className="fdbs__card-list">
                    {card.points.map((point) => (
                      <li key={point} className="fdbs__card-list-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next */}
          <button
            className={`fdbs__nav fdbs__nav--next${isEnd ? ' fdbs__nav--disabled' : ''}`}
            onClick={handleNext}
            aria-label="Next"
            disabled={isEnd}
          >
            <Icon icon="solar:arrow-right-linear" width="20" height="20" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindDoctorBySymptomsView;
