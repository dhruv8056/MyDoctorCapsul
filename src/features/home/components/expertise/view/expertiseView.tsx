import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ExpertiseViewProps {
  expertiseData: any[];
  isBeginning: boolean;
  isEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSwiperInit: (swiper: SwiperType) => void;
  onSlideChange: (swiper: SwiperType) => void;
}

const ExpertiseView: React.FC<ExpertiseViewProps> = ({
  expertiseData,
  isBeginning,
  isEnd,
  onPrev,
  onNext,
  onSwiperInit,
  onSlideChange
}) => {
  return (
    <div className="expertise-section">
      <div className="container_layout">
        {/* ── Header ── */}
        <div className="expertise-section__header">
          <p className="expertise-section__subtitle">Our Expertise</p>
          <h2 className="expertise-section__title">Top Specialist</h2>
        </div>

        {/* ── Slider wrapper ── */}
        <div className="expertise-section__wrapper">
          {/* Prev btn */}
          <button
            className={`expertise-section__nav expertise-section__nav--prev ${isBeginning ? 'expertise-section__nav--disabled' : ''}`}
            onClick={onPrev}
            aria-label="Previous"
            disabled={isBeginning}
          >
            <Icon icon="solar:arrow-left-linear" width="22" height="22" />
          </button>

          {/* Swiper */}
          <Swiper
            onSwiper={onSwiperInit}
            onSlideChange={onSlideChange}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1025: { slidesPerView: 4 },
              1281: { slidesPerView: 5 }
            }}
            className="expertise-section__swiper"
          >
            {expertiseData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className={`expertise-card ${index % 2 === 0 ? 'expertise-card--up' : 'expertise-card--down'}`}>
                  {/* ── Image area (white top) ── */}
                  <div className="expertise-card__image-area">
                    <img src={item.icon} alt={item.title} className="expertise-card__image" />
                  </div>

                  {/* ── Content area (light blue bottom) ── */}
                  <div className="expertise-card__content">
                    <h3 className="expertise-card__title">{item.title}</h3>
                    <p className="expertise-card__subtitle">{item.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next btn */}
          <button
            className={`expertise-section__nav expertise-section__nav--next ${isEnd ? 'expertise-section__nav--disabled' : ''}`}
            onClick={onNext}
            aria-label="Next"
            disabled={isEnd}
          >
            <Icon icon="solar:arrow-right-linear" width="22" height="22" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseView;
