export interface IClinicInformationProps {
  clinics: ClinicsOverview;
  reviews: ClinicsPatientReview[];
}

export interface ClinicsOverview {
  name: string;
  image: string;
  video?: string;
}

export interface ClinicsPatientReview {
  id: number;
  name: string;
  image: string;
  date: string;
  review: string;
  rating: number;
}
