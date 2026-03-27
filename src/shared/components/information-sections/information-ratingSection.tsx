import React from 'react';
import { Icon } from '@iconify/react';

type CardType = 'rating' | 'review' | 'patients' | 'bookVideo' | 'call' | 'direction' | 'ambulance';

type CardConfig = {
  label: string;
  value?: number | string;
  icon?: string;
  active?: boolean;
};

type InformationRatingSectionProps = {
  rating: number;
  totalReviews: number;
  totalPatients: number;
  visibleCards: CardType[];
};

const InformationRatingSection: React.FC<InformationRatingSectionProps> = ({ rating, totalReviews, totalPatients, visibleCards }) => {
  const allCards: Record<CardType, CardConfig> = {
    rating: { label: 'Rating', value: rating.toFixed(1), icon: 'fluent-color:star-28' },
    review: { label: 'Review', value: totalReviews },
    patients: { label: 'Patients', value: totalPatients },
    bookVideo: { label: 'Book Video', icon: 'material-symbols:video-call-outline' },
    call: { label: 'Call', icon: 'ic:round-call', active: true },
    direction: { label: 'Direction', icon: 'carbon:direction-fork' },
    ambulance: { label: 'Ambulance', icon: 'charm:north-star' }
  };

  return (
    <div className="information-rating-section">
      <div className="information-rating-section__cards">
        {visibleCards.map((key) => {
          const item = allCards[key];

          return (
            <div key={key} className={`information-rating-section__card ${item.active ? 'information-rating-section__card--active' : ''}`}>
              <div className="information-rating-section__top">
                {item.icon && <Icon icon={item.icon} className="information-rating-section__icon my-1.5" />}

                {item.value && <span className="information-rating-section__value">{item.value}</span>}
              </div>

              <p className="information-rating-section__label">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InformationRatingSection;
