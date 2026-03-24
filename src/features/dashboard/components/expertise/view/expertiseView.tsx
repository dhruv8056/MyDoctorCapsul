import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

// ⚠️ VERY IMPORTANT (missing in your code)
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
        {/* HEADER */}
        <div className="section-header">
          <p className="sub-title">Our Expertise</p>
          <h2 className="title">Top Specialist</h2>
        </div>

        <div className="expertise-wrapper">
          {/* PREV */}
          <div className={`nav-btn prev ${isBeginning ? 'disabled' : ''}`} onClick={onPrev}>
            <Icon icon="solar:arrow-left-linear" width="24" height="24" />
          </div>

          {/* SWIPER */}
          <Swiper
            onSwiper={onSwiperInit}
            onSlideChange={onSlideChange}
            spaceBetween={14}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
            className="expertise-swiper"
          >
            {expertiseData.map((item, index) => {
              const isUp = index % 2 === 0;

              return (
                <SwiperSlide key={item.id}>
                  <div className={`expertise-card ${isUp ? 'up' : 'down'}`}>
                    {/* ICON */}
                    <div className="icon">
                      <img src={item.icon} alt={item.title} />
                    </div>

                    {/* CONTENT */}
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* NEXT */}
          <div className={`nav-btn next ${isEnd ? 'disabled' : ''}`} onClick={onNext}>
            <Icon icon="solar:arrow-right-linear" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseView;
