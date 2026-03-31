import React from 'react';
import { IDiagnosticCategoriesViewProps } from '../interface/IDiagnosticCategories';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import { APP_ROUTE } from '@shared/constant/app-route';
import CategoryCard from '@shared/components/medicineSection/CategoryCard';
import { useNavigate } from 'react-router-dom';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'diagnostic', href: APP_ROUTE.DIAGNOSTIC_SECTION + APP_ROUTE.DIAGNOSTIC_CENTRE },
  { label: 'categories', href: APP_ROUTE.DIAGNOSTIC_CATEGORIES }
];

const DiagnosticCategoriesView: React.FC<IDiagnosticCategoriesViewProps> = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className="container_layout">
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className="diagnostic-categories-card">
        <h2 className="diagnostic-categories-card__title">Medical Specialist</h2>

        <div className="diagnostic-categories-card__grid">
          {category.map((item) => (
            <CategoryCard
              key={item.id}
              bgColor={item.bgColor}
              icon={item.icon}
              iconColor={item.iconColor}
              title={item.title}
              onClick={() =>
                navigate(
                  APP_ROUTE.DIAGNOSTIC_SECTION +
                    APP_ROUTE.DIAGNOSTIC_CENTRE +
                    APP_ROUTE.DIAGNOSTIC_CATEGORIES +
                    APP_ROUTE.DIAGNOSTIC_DETAILS
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticCategoriesView;
