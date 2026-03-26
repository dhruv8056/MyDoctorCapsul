import ClinicInformationView from '../view/clinicInformationView';
import doctor_video from '@assets/images/doctor-information/doctor-video.png';
import clinic_info from '@assets/images/doctor-information/clinic-info.png';

const ClinicInformationContainer = () => {
  const clinics = {
    name: 'Dr. Rahul Patel',
    image: clinic_info,
    video: doctor_video
  };

  const reviews = [
    {
      id: 1,
      name: 'Jisha Dave',
      image: clinic_info,
      date: '2 Days Ago',
      review: 'Exceptional care! The emergency response was incredibly fast and the doctors were very professional.',
      rating: 4
    },
    {
      id: 2,
      name: 'Harshid Kapoor',
      image: clinic_info,
      date: '5 Days Ago',
      review: 'Very supportive staff and clean hospital environment. Highly recommended.',
      rating: 5
    }
  ];

  return <ClinicInformationView clinics={clinics} reviews={reviews} />;
};

export default ClinicInformationContainer;
