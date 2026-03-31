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
import { APP_ROUTE } from '@shared/constant/app-route';
import { useNavigate } from 'react-router-dom';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: 'mdi:home-outline' },
  { label: 'medicine', isActive: true }
];

const PHARMACY_LIST = [
  {
    id: 1,
    name: 'City Life Pharmacy',
    distance: '0.8 km',
    timing: 'Open until 10 PM',
    deliveryTag: 'FAST DELIVERY',
    rating: 4.8,
    image: pharmacy_1,
    phone: '+91-9876543210',
    mapsUrl: 'https://maps.google.com'
  },
  {
    id: 1,
    name: 'City Life Pharmacy',
    distance: '0.8 km',
    timing: 'Open until 10 PM',
    deliveryTag: 'FAST DELIVERY',
    rating: 4.8,
    image: pharmacy_1,
    phone: '+91-9876543210',
    mapsUrl: 'https://maps.google.com'
  }
];

const MedicineCategoriesView: React.FC<IMedicineCategories> = ({ onCall, onDirections, category }) => {
  const navigate = useNavigate();
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
          {category.map((item) => (
            <CategoryCard
              key={item.id}
              bgColor={item.bgColor}
              icon={item.icon}
              iconColor={item.iconColor}
              title={item.title}
              onClick={() => navigate(APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE + APP_ROUTE.PRODUCT)}
            />
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
              onCall={() => onCall?.(item.phone)}
              onDirections={() => onDirections?.(item.mapsUrl)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineCategoriesView;
