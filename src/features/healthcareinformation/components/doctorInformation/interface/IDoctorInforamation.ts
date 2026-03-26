export interface DoctorOverview {
  name: string;
  image: string;
  video?: string;
}

export interface IDoctorInformationProps {
  doctor: DoctorOverview;
}
