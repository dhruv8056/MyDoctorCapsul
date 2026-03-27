import React, { useState } from 'react';
import { IMedicineCategories } from '../interface/IMedicineCategories';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import { Icon } from '@iconify/react/dist/iconify.js';
import leftBg from '@assets/images/medicine/Icon-1.png';
import rightBg from '@assets/images/medicine/Icon-2.png';
import CategoryCard from '@shared/components/medicineSection/CategoryCard';
import PharmacyCard from '@shared/components/medicineSection/PharmacyCard';
import pharmacy_1 from '@assets/images/medicine/pharmacy-1.png';
import OrderMedicineModalView from './orderMedicineModalView';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: 'mdi:home-outline' },
  { label: 'medicine', isActive: true }
];

export const MEDICINE_CATEGORIES = [
  {
    id: 1,
    title: 'General',
    icon: 'mdi:leaf',
    iconColor: '#1D6FA5',
    bgColor: '#EAF3FB'
  },
  {
    id: 2,
    title: 'Cardiology',
    icon: 'mdi:heart-outline',
    iconColor: '#E53935',
    bgColor: '#FDECEC'
  },
  {
    id: 3,
    title: 'Diabetes',
    icon: 'mdi:medical-bag',
    iconColor: '#8E24AA',
    bgColor: '#F3E5F5'
  },
  {
    id: 4,
    title: 'Skin Care',
    icon: 'mdi:face-woman',
    iconColor: '#FB8C00',
    bgColor: '#FFF3E0'
  },
  {
    id: 1,
    title: 'General',
    icon: 'mdi:leaf',
    iconColor: '#1D6FA5',
    bgColor: '#EAF3FB'
  },
  {
    id: 2,
    title: 'Cardiology',
    icon: 'mdi:heart-outline',
    iconColor: '#E53935',
    bgColor: '#FDECEC'
  },
  {
    id: 3,
    title: 'Diabetes',
    icon: 'mdi:medical-bag',
    iconColor: '#8E24AA',
    bgColor: '#F3E5F5'
  },
  {
    id: 4,
    title: 'Skin Care',
    icon: 'mdi:face-woman',
    iconColor: '#FB8C00',
    bgColor: '#FFF3E0'
  },
  {
    id: 1,
    title: 'General',
    icon: 'mdi:leaf',
    iconColor: '#1D6FA5',
    bgColor: '#EAF3FB'
  },
  {
    id: 2,
    title: 'Cardiology',
    icon: 'mdi:heart-outline',
    iconColor: '#E53935',
    bgColor: '#FDECEC'
  },
  {
    id: 3,
    title: 'Diabetes',
    icon: 'mdi:medical-bag',
    iconColor: '#8E24AA',
    bgColor: '#F3E5F5'
  },
  {
    id: 4,
    title: 'Skin Care',
    icon: 'mdi:face-woman',
    iconColor: '#FB8C00',
    bgColor: '#FFF3E0'
  }
];

const PHARMACY_LIST = [
  {
    id: 1,
    name: 'City Life Pharmacy',
    distance: '0.8 km',
    timing: 'Open until 10 PM',
    deliveryTag: 'FAST DELIVERY',
    rating: 4.8,
    image: pharmacy_1
  },
  {
    id: 1,
    name: 'City Life Pharmacy',
    distance: '0.8 km',
    timing: 'Open until 10 PM',
    deliveryTag: 'FAST DELIVERY',
    rating: 4.8,
    image: pharmacy_1
  }
];

const MedicineCategoriesView: React.FC<IMedicineCategories> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container_layout">
      <Breadcrumb items={BREADCRUMB_ITEMS} />
      <div
        className="prescription-upload"
        style={{
          backgroundImage: `url(${leftBg}), url(${rightBg})`
        }}
      >
        <div className="prescription-upload__content">
          <h2 className="prescription-upload__title">Prescription Upload</h2>

          <p className="prescription-upload__desc">Order quickly by uploading your doctor’s prescription</p>

          <div className="prescription-upload__actions">
            <button className="prescription-upload__btn prescription-upload__btn--camera">
              <Icon icon="mdi:camera-outline" width="20" height="20" color="#014A97" />
              Camera
            </button>

            <button className="prescription-upload__btn prescription-upload__btn--upload">
              <Icon icon="material-symbols:upload-file-outline" width="20" height="20" />
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="medicine-categories">
        <div className="medicine-categories__header">
          <h2 className="medicine-categories__title">Shop by Category</h2>
          <button className="medicine-categories__view-all">View All</button>
        </div>

        <div className="medicine-categories__grid">
          {MEDICINE_CATEGORIES.map((item) => (
            <CategoryCard key={item.id} bgColor={item.bgColor} icon={item.icon} iconColor={item.iconColor} title={item.title} />
          ))}
        </div>

        <div className="medicine-categories__footer">
          <button className="medicine-categories__btn" onClick={() => setIsModalOpen(true)}>
            Can’t find your medicine
          </button>
        </div>
        <OrderMedicineModalView isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      <div className="medicine-categories-card">
        <div className="medicine-categories-card__header">
          <h2 className="medicine-categories-card__title">Shop by Category</h2>
          <button className="medicine-categories-card__view-all">View All</button>
        </div>
        <div className="medicine-categories-card__grid">
          {PHARMACY_LIST.map((item) => (
            <PharmacyCard
              key={item.id}
              name={item.name}
              distance={item.distance}
              timing={item.timing}
              deliveryTag={item.deliveryTag}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineCategoriesView;
