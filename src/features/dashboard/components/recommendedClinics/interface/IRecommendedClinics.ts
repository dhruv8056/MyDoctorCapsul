import clinic1 from '@assets/images/RecommendedClinics/clinic-1.png';
import clinic2 from '@assets/images/RecommendedClinics/clinic-2.png';
import clinic3 from '@assets/images/RecommendedClinics/clinic-3.png';
import { HealthcarePlaceItem } from '@shared/components/common/HealthcareListingCard';

export type Clinic = HealthcarePlaceItem;

export const CLINICS_DATA: Clinic[] = [
  {
    id: 1,
    name: 'Medical Clinic',
    image: clinic1,
    rating: 4.8,
    distance: '1.2 km away',
    isOpen24h: true,
    specialties: ['Cardiology', 'Orthopedics']
  },
  {
    id: 2,
    name: 'Farma Medical Clinic',
    image: clinic2,
    rating: 4.8,
    distance: '1.2 km away',
    isOpen24h: true,
    specialties: ['Cardiology', 'Orthopedics']
  },
  {
    id: 3,
    name: 'Apollo Clinic',
    image: clinic3,
    rating: 4.8,
    distance: '1.2 km away',
    isOpen24h: true,
    specialties: ['Cardiology', 'Orthopedics']
  }
];
