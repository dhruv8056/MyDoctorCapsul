// ─── Image Imports (bundler processes these correctly) ────────────────────────
import hospital1 from '@assets/images/RecommendedHospitals/hospitals-1.png';
import hospital2 from '@assets/images/RecommendedHospitals/hospitals-2.png';
import hospital3 from '@assets/images/RecommendedHospitals/hospitals-3.png';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Hospital {
  id: number;
  name: string;
  image: string;
  rating: number;
  distance: string;
  isOpen24h: boolean;
  specialties: string[];
}

// ─── Static Data ──────────────────────────────────────────────────────────────

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
