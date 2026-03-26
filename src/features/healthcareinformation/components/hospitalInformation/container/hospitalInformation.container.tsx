import HospitalInformationView from '../view/hospitalInformationView';
import doctor_video from '@assets/images/doctor-information/doctor-video.png';
import hospitals_info from '@assets/images/doctor-information/hospitals-info.png';

const HospitalInformationContainer = () => {
  const hospitals = {
    name: 'Jalandhar Hospital',
    image: hospitals_info,
    video: doctor_video
  };

  const reviews = [
    {
      id: 1,
      name: 'Jisha Dave',
      image: hospitals_info,
      date: '2 Days Ago',
      review: 'Exceptional care! The emergency response was incredibly fast and the doctors were very professional.',
      rating: 4
    },
    {
      id: 2,
      name: 'Harshid Kapoor',
      image: hospitals_info,
      date: '5 Days Ago',
      review: 'Very supportive staff and clean hospital environment. Highly recommended.',
      rating: 5
    }
  ];
  return <HospitalInformationView hospitals={hospitals} reviews={reviews} />;
};

export default HospitalInformationContainer;
