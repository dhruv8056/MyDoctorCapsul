export interface IHospitalsInformationProps {
  hospitals: HospitalsOverview;
  reviews: HospitalsPatientReview[];
}

export interface HospitalsOverview {
  name: string;
  image: string;
  video?: string;
}

export interface HospitalsPatientReview {
  id: number;
  name: string;
  image: string;
  date: string;
  review: string;
  rating: number;
}
