import abha_section_image from '@assets/images/abha_section.png';
import { Icon } from '@iconify/react/dist/iconify.js';
const AbhaView = () => {
  return (
    <div className="abha-section">
      <div className="container_layout">
        <div className="abha-wrapper">
          {/* LEFT SIDE */}
          <div className="abha-left">
            <div className="abha-logo">
              <img src={abha_section_image} alt="ABHA" />
            </div>

            <div className="abha-content">
              <p className="sub-title">Ayushman Bharat Health Account</p>
              <h2 className="title">Get a Create Link Your ABHA ID</h2>

              <button className="create-btn">Create Now</button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="abha-right">
            <ul>
              <li>
                <Icon icon="lets-icons:check-fill" className="icon" width={24} height={24} color="#D9C7C8" />
                Government Health Benefits
              </li>
              <li>
                <Icon icon="lets-icons:check-fill" className="icon" width={24} height={24} color="#D9C7C8" />
                Secure Health Records
              </li>
              <li>
                <Icon icon="lets-icons:check-fill" className="icon" width={24} height={24} color="#D9C7C8" />
                Hassle-Free Hospital Visits
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbhaView;
