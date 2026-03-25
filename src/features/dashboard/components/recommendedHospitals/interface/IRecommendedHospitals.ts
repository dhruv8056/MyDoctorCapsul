import hospital1 from '@assets/images/RecommendedHospitals/hospitals-1.png';
import hospital2 from '@assets/images/RecommendedHospitals/hospitals-2.png';
import hospital3 from '@assets/images/RecommendedHospitals/hospitals-3.png';
import { HealthcarePlaceItem } from '@shared/components/common/HealthcareListingCard';

// Hospital is a PlaceItem — no extra fields needed today.
// Extend here if hospitals ever need unique properties (e.g. bedCount).
export type Hospital = HealthcarePlaceItem;

export const HOSPITALS_DATA: Hospital[] = [
  {
    id: 1,
    name: 'City Central Hospital',
    image: hospital1,
    rating: 4.8,
    distance: '1.2 km away',
    isOpen24h: true,
    specialties: ['Cardiology', 'Orthopedics']
  },
  {
    id: 2,
    name: 'Apollo Central Hospital',
    image: hospital2,
    rating: 4.8,
    distance: '1.2 km away',
    isOpen24h: true,
    specialties: ['Cardiology', 'Orthopedics']
  },
  {
    id: 3,
    name: 'Wellness Central Hospital',
    image: hospital3,
    rating: 4.8,
    distance: '1.2 km away',
    isOpen24h: true,
    specialties: ['Cardiology', 'Orthopedics']
  }
];
