import DiagnosticCenterView from '../view/diagnosticCenterView';
import diagnostic_1 from '@assets/images/diagnostic/diagnostic-1.png';
import diagnostic_2 from '@assets/images/diagnostic/diagnostic-2.png';
import diagnostic_3 from '@assets/images/diagnostic/diagnostic-3.png';
import diagnostic_4 from '@assets/images/diagnostic/diagnostic-4.png';
import { APP_ROUTE } from '@shared/constant/app-route';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const DiagnosticCenterContainer = () => {
  const navigate = useNavigate();

  const diagnosticCenter = [
    {
      id: 1,
      name: 'Apex Diagnostic Centers',
      distance: '0.8 km',
      timing: 'Open until 10 PM',
      deliveryTag: 'FAST DELIVERY',
      rating: 4.8,
      image: diagnostic_1,
      phone: '+91-9876543210',
      mapsUrl: 'https://maps.google.com'
    },
    {
      id: 2,
      name: 'Blue Shield Lab',
      distance: '0.8 km',
      timing: 'Open until 10 PM',
      deliveryTag: 'FAST DELIVERY',
      rating: 4.8,
      image: diagnostic_2,
      phone: '+91-9876543210',
      mapsUrl: 'https://maps.google.com'
    },
    {
      id: 3,
      name: 'Metropolis Health',
      distance: '0.8 km',
      timing: 'Open until 10 PM',
      deliveryTag: 'FAST DELIVERY',
      rating: 4.8,
      image: diagnostic_3,
      phone: '+91-9876543210',
      mapsUrl: 'https://maps.google.com'
    },
    {
      id: 4,
      name: 'Apex Diagnostic Centers',
      distance: '0.8 km',
      timing: 'Open until 10 PM',
      deliveryTag: 'FAST DELIVERY',
      rating: 4.8,
      image: diagnostic_4,
      phone: '+91-9876543210',
      mapsUrl: 'https://maps.google.com'
    }
  ];

  const handleCall = () => {
    navigate(APP_ROUTE.DIAGNOSTIC_SECTION + APP_ROUTE.DIAGNOSTIC_CENTRE + APP_ROUTE.DIAGNOSTIC_CATEGORIES);
  };

  const handleDirections = useCallback((mapsUrl: string) => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return <DiagnosticCenterView diagnosticCenter={diagnosticCenter} onCall={handleCall} onDirections={handleDirections} />;
};

export default DiagnosticCenterContainer;
