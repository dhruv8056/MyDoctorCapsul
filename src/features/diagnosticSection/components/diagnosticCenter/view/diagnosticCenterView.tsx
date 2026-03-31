import React from 'react';
import { DiagnosticCenterViewProps } from '../interface/IDiagnosticCenter';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import PharmacyCard from '@shared/components/medicineSection/PharmacyCard';

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'diagnostic', href: 'APP_ROUTE.DIAGNOSTIC_CENTRE' }
];

const DiagnosticCenterView: React.FC<DiagnosticCenterViewProps> = ({ diagnosticCenter, onCall, onDirections }) => {
  return (
    <div className="container_layout">
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className="diagnostic-section-card">
        <h2 className="diagnostic-section-card__title">Diagnostic Centers</h2>
        <div className="diagnostic-section-card__grid">
          {diagnosticCenter.map((item) => (
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

export default DiagnosticCenterView;
