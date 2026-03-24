// ─── Image Imports (bundler processes these correctly) ────────────────────────
import clinic1 from '@assets/images/RecommendedClinics/clinic-1.png';
import clinic2 from '@assets/images/RecommendedClinics/clinic-2.png';
import clinic3 from '@assets/images/RecommendedClinics/clinic-3.png';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Clinic {
  id: number;
  name: string;
  image: string;
  rating: number;
  distance: string;
  isOpen24h: boolean;
  specialties: string[];
}

// ─── Static Data ──────────────────────────────────────────────────────────────

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
