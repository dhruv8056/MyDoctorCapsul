import React, { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import ExpertiseView from '../view/expertiseView';
import Cardiology from '@assets/images/Expertise/Cardiology.png';
import Endocrinology from '@assets/images/Expertise/Endocrinology.png';
import Gastroenterology from '@assets/images/Expertise/Gastroenterology.png';
import Neurology from '@assets/images/Expertise/Neurology.png';
import Nephrology from '@assets/images/Expertise/Nephrology.png';
import Rheumatology from '@assets/images/Expertise/Rheumatology.png';
import Haematology from '@assets/images/Expertise/Haematology.png';
import Pulmonology from '@assets/images/Expertise/Pulmonology.png';

import Oncology from '@assets/images/Expertise/Oncology.png';
import AllergyandImmunology from '@assets/images/Expertise/AllergyandImmunology.png';

export interface ExpertiseItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string; // SVG path key
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    title: 'Cardiology',
    subtitle: 'Heart & Blood Vessels',
    icon: Cardiology
  },
  {
    id: 2,
    title: 'Endocrinology',
    subtitle: 'Hormones, Diabetes, Thyroid',
    icon: Endocrinology
  },
  {
    id: 3,
    title: 'Gastroenterology',
    subtitle: 'Digestive System',
    icon: Gastroenterology
  },
  {
    id: 4,
    title: 'Neurology',
    subtitle: 'Brain & Nervous System',
    icon: Neurology
  },
  {
    id: 5,
    title: 'Nephrology',
    subtitle: 'Lungs & Respiratory Diseases',
    icon: Nephrology
  },
  {
    id: 6,
    title: 'Rheumatology',
    subtitle: 'Joints & Auto Immune Diseases',
    icon: Rheumatology
  },
  {
    id: 7,
    title: 'Haematology ',
    subtitle: 'Blood & Cancer Diseases',
    icon: Haematology
  },
  {
    id: 8,
    title: 'Pulmonology',
    subtitle: 'Lungs & Respiratory Diseases',
    icon: Pulmonology
  },
  {
    id: 9,
    title: 'Oncology',
    subtitle: 'Cancer Diseases',
    icon: Oncology
  },
  {
    id: 10,
    title: 'Allergy and ',
    subtitle: 'Immunology',
    icon: AllergyandImmunology
  }
];

const ExpertiseContainer: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <ExpertiseView
      expertiseData={expertiseData}
      isBeginning={isBeginning}
      isEnd={isEnd}
      onPrev={handlePrev}
      onNext={handleNext}
      onSwiperInit={handleSwiperInit}
      onSlideChange={handleSlideChange}
    />
  );
};

export default ExpertiseContainer;
