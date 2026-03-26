import React from 'react';
import { IMedicineCategories } from '../interface/IMedicineCategories';
import Breadcrumb from '@shared/components/common/Breadcrumb';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: 'mdi:home-outline' },
  { label: 'medicine', isActive: true }
];

const MedicineCategoriesView: React.FC<IMedicineCategories> = () => {
  return (
    <div className="medicine-categories-section">
      <div className="container_layout">
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>
    </div>
  );
};

export default MedicineCategoriesView;
