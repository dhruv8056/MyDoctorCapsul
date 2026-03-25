import React from 'react';
import { HospitalDiscoveryViewProps } from '../interface/IHospitalDiscovery';
import ServiceDiscoveryMap from '@shared/components/common/ServiceDiscoveryMap';
import RecommendedHospitalsContainer from '@features/home/components/recommendedHospitals/container/recommendedHospitals.container';

const HospitalDiscoveryView: React.FC<HospitalDiscoveryViewProps> = () => {
  return (
    <div className="container_layout my-10">
      <ServiceDiscoveryMap
        variant="hospital"
        mapSrc="https://www.google.com/maps/embed?pb=..."
        onExploreMap={() => window.open('https://maps.google.com')}
      />

      <RecommendedHospitalsContainer variant="white" />
    </div>
  );
};

export default HospitalDiscoveryView;
