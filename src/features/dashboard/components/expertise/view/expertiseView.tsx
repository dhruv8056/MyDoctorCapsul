import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

// ── Inline SVG Icons ──────────────────────────────────────────────────────────

const CardiologyIcon: React.FC = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rib cage outline */}
    <path
      d="M60 10 C60 10 45 8 38 18 C31 28 32 42 38 52 C32 55 28 62 28 70 C28 78 32 85 38 88 C32 95 30 105 34 115 C38 125 50 130 60 130 C70 130 82 125 86 115 C90 105 88 95 82 88 C88 85 92 78 92 70 C92 62 88 55 82 52 C88 42 89 28 82 18 C75 8 60 10 60 10Z"
      stroke="#C8D8E8"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Ribs left */}
    <path d="M38 30 C30 32 24 38 24 46" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M36 45 C27 47 21 54 21 62" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M36 60 C27 62 21 70 22 78" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M38 75 C30 78 25 86 27 94" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Ribs right */}
    <path d="M82 30 C90 32 96 38 96 46" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M84 45 C93 47 99 54 99 62" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M84 60 C93 62 99 70 98 78" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M82 75 C90 78 95 86 93 94" stroke="#C8D8E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Sternum */}
    <line x1="60" y1="18" x2="60" y2="110" stroke="#C8D8E8" strokeWidth="1.5" />
    {/* Heart */}
    <path
      d="M60 85 C60 85 44 73 44 63 C44 56 50 51 55 53 C57 54 59 56 60 58 C61 56 63 54 65 53 C70 51 76 56 76 63 C76 73 60 85 60 85Z"
      fill="#4A9FD4"
      opacity="0.9"
    />
    <path
      d="M60 85 C60 85 44 73 44 63 C44 56 50 51 55 53 C57 54 59 56 60 58 C61 56 63 54 65 53 C70 51 76 56 76 63 C76 73 60 85 60 85Z"
      stroke="#3A8FC4"
      strokeWidth="1"
    />
    {/* Aorta */}
    <path d="M60 58 C60 50 65 45 70 42 C75 39 78 38 78 34" stroke="#4A9FD4" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Highlight dots */}
    <circle cx="52" cy="66" r="2" fill="white" opacity="0.6" />
    <circle cx="58" cy="72" r="1.5" fill="white" opacity="0.5" />
    <circle cx="55" cy="78" r="1.5" fill="white" opacity="0.4" />
  </svg>
);

const EndocrinologyIcon: React.FC = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Neck outline */}
    <path
      d="M48 10 L48 55 C38 58 32 65 32 75 C32 90 44 100 60 100 C76 100 88 90 88 75 C88 65 82 58 72 55 L72 10"
      stroke="#C8D8E8"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Trachea rings */}
    <path d="M54 15 Q60 13 66 15" stroke="#C8D8E8" strokeWidth="1.2" fill="none" />
    <path d="M54 22 Q60 20 66 22" stroke="#C8D8E8" strokeWidth="1.2" fill="none" />
    <path d="M54 29 Q60 27 66 29" stroke="#C8D8E8" strokeWidth="1.2" fill="none" />
    <path d="M54 36 Q60 34 66 36" stroke="#C8D8E8" strokeWidth="1.2" fill="none" />
    <path d="M54 43 Q60 41 66 43" stroke="#C8D8E8" strokeWidth="1.2" fill="none" />
    <path d="M54 50 Q60 48 66 50" stroke="#C8D8E8" strokeWidth="1.2" fill="none" />
    {/* Center connector */}
    <line x1="60" y1="10" x2="60" y2="58" stroke="#C8D8E8" strokeWidth="1.2" />
    {/* Thyroid gland - left lobe */}
    <ellipse cx="46" cy="78" rx="14" ry="20" fill="#4A9FD4" opacity="0.9" />
    {/* Thyroid gland - right lobe */}
    <ellipse cx="74" cy="78" rx="14" ry="20" fill="#4A9FD4" opacity="0.9" />
    {/* Isthmus connecting */}
    <rect x="50" y="73" width="20" height="10" rx="5" fill="#4A9FD4" opacity="0.85" />
    {/* Highlight dots on lobes */}
    <circle cx="40" cy="72" r="2.5" fill="white" opacity="0.55" />
    <circle cx="46" cy="80" r="2" fill="white" opacity="0.45" />
    <circle cx="42" cy="86" r="1.5" fill="white" opacity="0.4" />
    <circle cx="80" cy="72" r="2.5" fill="white" opacity="0.55" />
    <circle cx="74" cy="80" r="2" fill="white" opacity="0.45" />
    <circle cx="78" cy="86" r="1.5" fill="white" opacity="0.4" />
    {/* Stroke outlines */}
    <ellipse cx="46" cy="78" rx="14" ry="20" stroke="#3A8FC4" strokeWidth="1" fill="none" />
    <ellipse cx="74" cy="78" rx="14" ry="20" stroke="#3A8FC4" strokeWidth="1" fill="none" />
  </svg>
);

const GastroenterologyIcon: React.FC = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stomach */}
    <path
      d="M45 25 C35 25 28 32 28 45 C28 55 32 60 35 63 C28 68 26 78 30 88 C34 98 44 102 55 100 C62 99 68 95 72 90 C78 90 86 85 88 77 C90 69 86 62 80 60 C84 55 84 46 80 38 C76 30 68 26 60 26 C55 26 50 24 45 25Z"
      fill="#4A9FD4"
      opacity="0.15"
      stroke="#4A9FD4"
      strokeWidth="1.5"
    />
    {/* Small intestine */}
    <path d="M38 105 C28 100 24 88 28 78" stroke="#4A9FD4" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M28 78 C22 68 26 55 35 52" stroke="#4A9FD4" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Large intestine - ascending */}
    <path d="M85 115 C88 100 88 85 84 72" stroke="#4A9FD4" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
    {/* Large intestine - transverse */}
    <path
      d="M35 55 C35 48 45 42 60 42 C75 42 84 48 84 55"
      stroke="#4A9FD4"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />
    {/* Large intestine - descending */}
    <path d="M35 55 C31 68 31 85 35 100" stroke="#4A9FD4" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
    {/* Sigmoid / rectum */}
    <path
      d="M35 100 C38 110 45 118 55 118 C65 118 72 110 75 100"
      stroke="#4A9FD4"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />
    <path d="M75 100 C78 112 82 116 85 115" stroke="#4A9FD4" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
    {/* Stomach detail */}
    <path d="M45 25 C35 25 28 32 28 45 C28 55 32 60 35 63" stroke="#3A8FC4" strokeWidth="1.5" fill="none" />
    <path d="M60 26 C68 26 76 30 80 38 C84 46 84 55 80 60" stroke="#3A8FC4" strokeWidth="1.5" fill="none" />
    <circle cx="50" cy="42" r="3" fill="white" opacity="0.5" />
    <circle cx="62" cy="50" r="2" fill="white" opacity="0.4" />
  </svg>
);

const NeurologyIcon: React.FC = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head/skull outline */}
    <ellipse cx="60" cy="30" rx="28" ry="26" fill="#EBF4FB" stroke="#C8D8E8" strokeWidth="1.5" />
    {/* Brain */}
    <path
      d="M42 25 C40 20 44 15 50 16 C52 12 58 12 60 16 C62 12 68 12 70 16 C76 15 80 20 78 25 C82 27 82 33 78 35 C80 40 76 44 70 43 C68 47 62 48 60 44 C58 48 52 47 50 43 C44 44 40 40 42 35 C38 33 38 27 42 25Z"
      fill="#4A9FD4"
      opacity="0.85"
    />
    <path d="M60 16 L60 44" stroke="#3A8FC4" strokeWidth="1" opacity="0.5" />
    <path d="M44 22 C48 26 50 32 48 38" stroke="white" strokeWidth="1.2" opacity="0.5" fill="none" strokeLinecap="round" />
    <path d="M76 22 C72 26 70 32 72 38" stroke="white" strokeWidth="1.2" opacity="0.5" fill="none" strokeLinecap="round" />
    <circle cx="52" cy="25" r="2" fill="white" opacity="0.5" />
    <circle cx="68" cy="28" r="1.5" fill="white" opacity="0.45" />
    <circle cx="56" cy="35" r="1.5" fill="white" opacity="0.4" />
    {/* Spine */}
    <rect x="57" y="55" width="6" height="60" rx="3" fill="#4A9FD4" opacity="0.3" stroke="#4A9FD4" strokeWidth="1" />
    {/* Vertebrae */}
    {[58, 66, 74, 82, 90, 98, 106].map((y, i) => (
      <React.Fragment key={i}>
        <rect x="52" y={y} width="16" height="6" rx="3" fill="#4A9FD4" opacity="0.5" stroke="#3A8FC4" strokeWidth="0.8" />
        <line x1="44" y1={y + 3} x2="52" y2={y + 3} stroke="#4A9FD4" strokeWidth="1.5" opacity="0.6" />
        <line x1="68" y1={y + 3} x2="76" y2={y + 3} stroke="#4A9FD4" strokeWidth="1.5" opacity="0.6" />
      </React.Fragment>
    ))}
    {/* Nerve lines */}
    <path d="M44 62 C36 65 30 72 30 80" stroke="#4A9FD4" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M76 62 C84 65 90 72 90 80" stroke="#4A9FD4" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
  </svg>
);

const NephrologyIcon: React.FC = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body outline / torso */}
    <path
      d="M30 20 C20 30 18 50 20 70 C18 90 22 110 30 125 C40 135 50 138 60 138 C70 138 80 135 90 125 C98 110 102 90 100 70 C102 50 100 30 90 20"
      stroke="#C8D8E8"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Left kidney */}
    <ellipse cx="42" cy="72" rx="13" ry="18" fill="#4A9FD4" opacity="0.9" transform="rotate(-10 42 72)" />
    <ellipse cx="42" cy="72" rx="13" ry="18" stroke="#3A8FC4" strokeWidth="1" fill="none" transform="rotate(-10 42 72)" />
    <ellipse cx="43" cy="72" rx="7" ry="11" fill="#3A8FC4" opacity="0.4" transform="rotate(-10 43 72)" />
    <circle cx="38" cy="66" r="2.5" fill="white" opacity="0.55" />
    <circle cx="40" cy="74" r="1.8" fill="white" opacity="0.45" />
    {/* Right kidney */}
    <ellipse cx="78" cy="72" rx="13" ry="18" fill="#4A9FD4" opacity="0.9" transform="rotate(10 78 72)" />
    <ellipse cx="78" cy="72" rx="13" ry="18" stroke="#3A8FC4" strokeWidth="1" fill="none" transform="rotate(10 78 72)" />
    <ellipse cx="77" cy="72" rx="7" ry="11" fill="#3A8FC4" opacity="0.4" transform="rotate(10 77 72)" />
    <circle cx="82" cy="66" r="2.5" fill="white" opacity="0.55" />
    <circle cx="80" cy="74" r="1.8" fill="white" opacity="0.45" />
    {/* Ureters */}
    <path d="M48 86 C50 95 56 100 60 100 C64 100 70 95 72 86" stroke="#4A9FD4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Bladder */}
    <ellipse cx="60" cy="112" rx="12" ry="10" fill="#4A9FD4" opacity="0.3" stroke="#4A9FD4" strokeWidth="1.2" />
    {/* Adrenal glands */}
    <ellipse cx="43" cy="56" rx="5" ry="4" fill="#7BC4E8" opacity="0.7" transform="rotate(-15 43 56)" />
    <ellipse cx="77" cy="56" rx="5" ry="4" fill="#7BC4E8" opacity="0.7" transform="rotate(15 77 56)" />
  </svg>
);

const OrthopedicsIcon: React.FC = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Femur bone */}
    <path
      d="M45 10 C38 10 32 16 32 24 C32 30 36 35 40 37 L38 100 C36 104 34 108 34 112 C34 120 40 128 48 130 C56 132 64 128 66 122 C68 116 65 110 62 106 L70 40 C76 38 82 32 82 24 C82 14 76 8 68 8 C62 8 56 12 54 18 C52 12 48 10 45 10Z"
      fill="#4A9FD4"
      opacity="0.15"
      stroke="#4A9FD4"
      strokeWidth="1.5"
    />
    {/* Femur head */}
    <circle cx="45" cy="22" r="14" fill="#4A9FD4" opacity="0.6" stroke="#3A8FC4" strokeWidth="1.2" />
    <circle cx="45" cy="22" r="8" fill="#4A9FD4" opacity="0.8" />
    <circle cx="42" cy="18" r="2.5" fill="white" opacity="0.5" />
    {/* Shaft */}
    <rect x="50" y="35" width="10" height="70" rx="5" fill="#4A9FD4" opacity="0.5" stroke="#3A8FC4" strokeWidth="1" />
    {/* Knee */}
    <ellipse cx="55" cy="115" rx="16" ry="12" fill="#4A9FD4" opacity="0.6" stroke="#3A8FC4" strokeWidth="1.2" />
    <circle cx="52" cy="112" r="3" fill="white" opacity="0.4" />
    {/* Tibia */}
    <path d="M48 125 C46 132 45 138 46 140" stroke="#4A9FD4" strokeWidth="3" strokeLinecap="round" />
    <path d="M62 125 C64 132 65 138 64 140" stroke="#4A9FD4" strokeWidth="3" strokeLinecap="round" />
    {/* Cross-section lines on shaft */}
    <line x1="50" y1="60" x2="60" y2="60" stroke="#3A8FC4" strokeWidth="0.8" opacity="0.5" />
    <line x1="50" y1="75" x2="60" y2="75" stroke="#3A8FC4" strokeWidth="0.8" opacity="0.5" />
    <line x1="50" y1="90" x2="60" y2="90" stroke="#3A8FC4" strokeWidth="0.8" opacity="0.5" />
  </svg>
);

const DermatologyIcon: React.FC = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Skin layers */}
    <rect x="15" y="40" width="90" height="80" rx="8" fill="#EBF4FB" stroke="#C8D8E8" strokeWidth="1.5" />
    {/* Epidermis layer */}
    <path d="M15 60 Q60 50 105 60" stroke="#4A9FD4" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M15 75 Q60 65 105 75" stroke="#4A9FD4" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Dermis */}
    <path d="M15 90 Q60 80 105 90" stroke="#4A9FD4" strokeWidth="1" fill="none" opacity="0.4" />
    {/* Hair follicle */}
    <path d="M40 60 C38 72 36 88 38 110" stroke="#3A8FC4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <ellipse cx="39" cy="112" rx="5" ry="4" fill="#4A9FD4" opacity="0.6" />
    <path d="M70 60 C68 72 66 88 68 110" stroke="#3A8FC4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <ellipse cx="69" cy="112" rx="5" ry="4" fill="#4A9FD4" opacity="0.6" />
    {/* Hand/palm on top */}
    <path
      d="M35 10 C30 10 26 14 26 20 L26 40 C26 44 30 46 34 44 C34 46 30 50 30 55 C30 59 34 62 38 60 C38 63 36 68 38 72 C40 75 44 76 46 73 C47 76 48 80 52 80 C56 80 57 76 57 72 C58 74 60 77 64 76 C68 75 68 70 67 67 C70 68 74 66 74 62 C74 58 70 55 66 55 L66 20 C66 14 62 10 56 10 C52 10 50 12 48 15 C46 12 44 10 40 10 C38 10 36 10 35 10Z"
      fill="#EBF4FB"
      stroke="#C8D8E8"
      strokeWidth="1.5"
    />
    <line x1="48" y1="14" x2="48" y2="50" stroke="#4A9FD4" strokeWidth="1" opacity="0.4" />
    <line x1="38" y1="14" x2="38" y2="50" stroke="#4A9FD4" strokeWidth="1" opacity="0.4" />
    <line x1="58" y1="14" x2="58" y2="50" stroke="#4A9FD4" strokeWidth="1" opacity="0.4" />
    {/* Cells on skin surface */}
    <circle cx="50" cy="58" r="3" fill="#4A9FD4" opacity="0.5" />
    <circle cx="65" cy="55" r="2.5" fill="#4A9FD4" opacity="0.4" />
    <circle cx="35" cy="57" r="2" fill="#4A9FD4" opacity="0.4" />
  </svg>
);

const iconMap: Record<string, React.FC> = {
  cardiology: CardiologyIcon,
  endocrinology: EndocrinologyIcon,
  gastroenterology: GastroenterologyIcon,
  neurology: NeurologyIcon,
  nephrology: NephrologyIcon,
  orthopedics: OrthopedicsIcon,
  dermatology: DermatologyIcon
};

// ── Props ─────────────────────────────────────────────────────────────────────

interface ExpertiseViewProps {
  expertiseData: any[];
  isBeginning: boolean;
  isEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSwiperInit: (swiper: SwiperType) => void;
  onSlideChange: (swiper: SwiperType) => void;
}

// ── View ──────────────────────────────────────────────────────────────────────

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
    <section className="expertise-section">
      <div className="expertise-section__header">
        <span className="expertise-section__eyebrow">Our Expertise</span>
        <h2 className="expertise-section__title">Top Specialist</h2>
      </div>

      <div className="expertise-section__slider-wrapper">
        {/* Prev Button */}
        <button
          className={`expertise-section__nav expertise-section__nav--prev${isBeginning ? ' expertise-section__nav--disabled' : ''}`}
          onClick={onPrev}
          aria-label="Previous"
          disabled={isBeginning}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <Swiper
          onSwiper={onSwiperInit}
          onSlideChange={onSlideChange}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={false}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 28 },
            1280: { slidesPerView: 5, spaceBetween: 30 }
          }}
          className="expertise-section__swiper"
        >
          {expertiseData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const isOdd = index % 2 === 0; // 0-based: 0,2,4 = "odd" visual = UP
            return (
              <SwiperSlide key={item.id} className="expertise-section__slide">
                <div className={`expertise-card${isOdd ? ' expertise-card--up' : ' expertise-card--down'}`}>
                  <div className="expertise-card__icon-wrapper">{IconComponent && <IconComponent />}</div>
                  <div className="expertise-card__content">
                    <h3 className="expertise-card__title">{item.title}</h3>
                    <p className="expertise-card__subtitle">{item.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Next Button */}
        <button
          className={`expertise-section__nav expertise-section__nav--next${isEnd ? ' expertise-section__nav--disabled' : ''}`}
          onClick={onNext}
          aria-label="Next"
          disabled={isEnd}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ExpertiseView;
