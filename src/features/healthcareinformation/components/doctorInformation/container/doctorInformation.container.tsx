import DoctorInformationView from '../view/doctorInformationView';
import doctor_video from '@assets/images/doctor-information/doctor-video.png';
import doctor_info from '@assets/images/doctor-information/doctor-info.png';

const DoctorInformationContainer = () => {
  const doctor = {
    name: 'Dr. Rahul Patel',
    image: doctor_info,
    video: doctor_video
  };
  return <DoctorInformationView doctor={doctor} />;
};

export default DoctorInformationContainer;
