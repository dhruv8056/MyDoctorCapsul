// src/features/ambulanceDiscovery/view/ambulanceDiscoveryView.tsx
import React from 'react';
import { AmbulanceDiscoveryViewProps } from '../interface/IAmbulanceDiscovery';
import ServiceDiscoveryMap from '@shared/components/common/ServiceDiscoveryMap';
import ServicesOffered, { AMBULANCE_SERVICES } from '@shared/components/common/ServicesOffered';

import ambulance1 from '@assets/images/ambulances/ambulance-1.png';
import ambulance2 from '@assets/images/ambulances/ambulance-2.png';
import AmbulanceCard, { AmbulanceItem } from '@shared/components/common/Ambulancecard';

// ─── Static data (move to container/interface when API is ready) ──────────────

const AMBULANCE_UNITS: AmbulanceItem[] = [
  {
    id: 1,
    name: 'Critical Lifecare',
    image: ambulance1,
    eta: '5–8 Mins',
    startingPrice: '2,000',
    facilities: ['Ventilator', 'Oxygen', '2 Medics'],
    hasRealTimeTracking: true
  },
  {
    id: 2,
    name: 'Critical Lifecare',
    image: ambulance2,
    eta: '5–8 Mins',
    startingPrice: '2,000',
    facilities: ['Ventilator', 'Oxygen', '2 Medics'],
    hasRealTimeTracking: true
  }
];

// ─── View ─────────────────────────────────────────────────────────────────────

const AmbulanceDiscoveryView: React.FC<AmbulanceDiscoveryViewProps> = () => {
  return (
    <div className="container_layout my-10">
      {/* ── Map ── */}
      <ServiceDiscoveryMap
        variant="ambulance"
        mapSrc="https://www.google.com/maps/embed?pb=..."
        currentLocation="Amba Talavdi Near, school"
        onExploreMap={() => window.open('https://maps.google.com')}
      />

      {/* ── Services Offered ── */}
      <div className="p-5 pb-0">
        <ServicesOffered services={AMBULANCE_SERVICES} />
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-black/10 mt-10"></div>

      {/* ── Find Ambulance ── */}
      <section className="find-ambulance mt-10">
        {/* Header */}
        <div className="find-ambulance__header mb-6">
          <p className="find-ambulance__subtitle">Find Ambulance</p>
          <h2 className="find-ambulance__title">Available Units Near You</h2>
        </div>

        {/* Grid */}
        <div className="find-ambulance__grid">
          {AMBULANCE_UNITS.map((item) => (
            <AmbulanceCard
              key={item.id}
              item={item}
              showViewDetails={true}
              onViewDetails={(item) => console.log('View details →', item.name)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AmbulanceDiscoveryView;
