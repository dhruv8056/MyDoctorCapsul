import React from 'react';
import { ClinicDiscoveryViewProps } from '../interface/IClinicDiscovery';
import ServiceDiscoveryMap from '@shared/components/common/ServiceDiscoveryMap';
import RecommendedClinicsContainer from '@features/home/components/recommendedClinics/container/recommendedClinics.container';

const ClinicDiscoveryView: React.FC<ClinicDiscoveryViewProps> = () => {
  return (
    <div className="container_layout my-10">
      <ServiceDiscoveryMap
        variant="clinic"
        mapSrc="https://www.google.com/maps/embed?pb=..."
        onExploreMap={() => window.open('https://maps.google.com')}
      />

      <RecommendedClinicsContainer />
    </div>
  );
};

export default ClinicDiscoveryView;
