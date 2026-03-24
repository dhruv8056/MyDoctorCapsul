import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import ExpertiseView from "../view/expertiseView";

export interface ExpertiseItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string; // SVG path key
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    title: "Cardiology",
    subtitle: "Heart & Blood Vessels",
    icon: "cardiology",
  },
  {
    id: 2,
    title: "Endocrinology",
    subtitle: "Hormones, Diabetes, Thyroid",
    icon: "endocrinology",
  },
  {
    id: 3,
    title: "Gastroenterology",
    subtitle: "Digestive System",
    icon: "gastroenterology",
  },
  {
    id: 4,
    title: "Neurology",
    subtitle: "Brain & Nervous System",
    icon: "neurology",
  },
  {
    id: 5,
    title: "Nephrology",
    subtitle: "Lungs & Respiratory Diseases",
    icon: "nephrology",
  },
  {
    id: 6,
    title: "Orthopedics",
    subtitle: "Bones & Joints",
    icon: "orthopedics",
  },
  {
    id: 7,
    title: "Dermatology",
    subtitle: "Skin & Hair",
    icon: "dermatology",
  },
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