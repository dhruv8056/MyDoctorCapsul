import React from 'react';
import service_hospital from '@assets/images/services/service_hospitals.png';
import service_clinics from '@assets/images/services/service_clinics.png';
import service_doctor from '@assets/images/services/service_doctor.png';
import service_nurses from '@assets/images/services/service_nurses.png';
import service_medicine from '@assets/images/services/service_medicine.png';
import service_diagnostics from '@assets/images/services/service_diagnostics.png';
import service_physiotherapy from '@assets/images/services/service_physiotherapy.png';
import service_insurance from '@assets/images/services/service_insurance.png';

const services = [
  { img: service_hospital, title: 'Hospitals' },
  { img: service_clinics, title: 'Clinics' },
  { img: service_doctor, title: 'Doctors', desc: 'Consult experienced doctors easily' },
  { img: service_nurses, title: 'Nurses', desc: 'Book professional nursing support' },
  { img: service_medicine, title: 'Medicine', desc: 'Medicines from nearby pharmacies' },
  { img: service_diagnostics, title: 'Diagnostics', desc: 'Book lab tests & health checkups' },
  { img: service_physiotherapy, title: 'Physiotherapy', desc: 'Explore health insurance plans' },
  { img: service_insurance, title: 'Insurance', desc: 'Explore health insurance plans' }
];

const MedicalServicesView: React.FC = () => {
  return (
    <div className="medical-services-section">
      <div className="container_layout">
        <h2 className="section-title">Services</h2>
        <p className="section-description">All Medical Services in One Place</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} />
              <h3 className="service-title">{service.title}</h3>
              {service.desc && <p className="service-description">{service.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalServicesView;
