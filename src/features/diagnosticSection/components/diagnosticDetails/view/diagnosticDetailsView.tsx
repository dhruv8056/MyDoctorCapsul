import React from 'react';
import { DiagnosticDetailsViewProps } from '../interface/IDiagnosticDetails';
import TestCard from '@shared/components/common/TestCard';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import { APP_ROUTE } from '@shared/constant/app-route';
import { Icon } from '@iconify/react/dist/iconify.js';

const DiagnosticDetailsView: React.FC<DiagnosticDetailsViewProps> = ({ activeFilter, setActiveFilter }) => {
  const BREADCRUMB_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'diagnostic', href: APP_ROUTE.DIAGNOSTIC_SECTION + APP_ROUTE.DIAGNOSTIC_CENTRE },
    { label: 'categories', href: APP_ROUTE.DIAGNOSTIC_SECTION + APP_ROUTE.DIAGNOSTIC_CENTRE + APP_ROUTE.DIAGNOSTIC_CATEGORIES },
    { label: 'details', href: APP_ROUTE.DIAGNOSTIC_DETAILS }
  ];
  const testData = [
    {
      id: 1,
      badge: 'NABL CERTIFIED',
      title: 'CBC - Complete Blood Count',
      price: 350,
      features: [{ label: '4-6 hours' }, { label: 'Home Sample' }],
      linkText: 'View Details'
    },
    {
      id: 2,
      badge: 'POPULAR CHOICE',
      title: 'Diabetes Screening (HbA1c)',
      description: 'Measures average blood sugar levels over the past 3 months.',
      price: 499,
      features: [{ label: '12-24 hours' }, { label: 'Free Consultation' }],
      linkText: 'Know Requirements'
    },
    {
      id: 3,
      badge: 'POPULAR CHOICE',
      title: 'Diabetes Screening (HbA1c)',
      description: 'Measures average blood sugar levels over the past 3 months.',
      price: 499,
      features: [{ label: '12-24 hours' }, { label: 'Free Consultation' }],
      linkText: 'Know Requirements'
    }
  ];
  return (
    <div className="container_layout">
      <Breadcrumb items={BREADCRUMB_ITEMS} />
      <div className="diagnostic-details-card">
        <div className="diagnostic-details-card__filters">
          <button
            className={`diagnostic-details-card__filter ${activeFilter === 'PRICE_LOW' ? 'active' : ''}`}
            onClick={() => setActiveFilter('PRICE_LOW')}
          >
            <span>PRICE LOW TO HIGH</span>
            <Icon icon="fa7-solid:up-down" width="16" height="16" />
          </button>

          <button
            className={`diagnostic-details-card__filter ${activeFilter === 'FAST' ? 'active' : ''}`}
            onClick={() => setActiveFilter('FAST')}
          >
            FAST REPORT
          </button>

          <button
            className={`diagnostic-details-card__filter ${activeFilter === 'HOME' ? 'active' : ''}`}
            onClick={() => setActiveFilter('HOME')}
          >
            HOME COLLECTION
          </button>
        </div>
        <h2 className="diagnostic-details-card__title">Recommended Tests</h2>
        <p className="diagnostic-details-card__desc">Based on popular health screenings</p>

        <div className="diagnostic-details-card__grid">
          {testData.map((item) => (
            <TestCard
              key={item.id}
              badge={item.badge}
              title={item.title}
              description={item.description}
              price={item.price}
              features={item.features}
              linkText={item.linkText}
              onBookNow={() => console.log('Book:', item.title)}
              onLinkClick={() => console.log('Details:', item.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticDetailsView;
