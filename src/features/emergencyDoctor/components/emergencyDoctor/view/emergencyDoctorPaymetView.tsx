import Drawer from '@shared/components/common/Drawer';
import { Icon } from '@iconify/react';

const EmergencyDoctorPaymetView: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  return (
    <Drawer isOpen={open} onClose={onClose}>
      <div className="payment">
        {/* Header */}
        <div className="payment__header">
          <Icon icon="mdi:arrow-left" width="20" onClick={onClose} />
          <h2>Payment</h2>
        </div>

        {/* Doctor Info */}
        <div className="payment__doctor">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="doctor" />
          <div>
            <span className="payment__speciality">Cardiology Specialist</span>
            <h3 className="payment__doctor-name">Dr. Aris Thorne</h3>
            <p className="payment__doctor-bio">Expert in cardiovascular preventative care</p>
          </div>
        </div>

        {/* Date Section */}
        <div className="payment__section">
          <div className="payment__section-header">
            <h4>Select Date</h4>
            <span>October 2023</span>
          </div>

          <div className="payment__calendar">
            {['25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8'].map((d, i) => (
              <div key={i} className={`payment__date ${d === '2' ? 'active' : ''}`}>
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="payment__section">
          <h4>Available Time Slots</h4>

          <div className="payment__slots">
            {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'].map((time) => (
              <button
                key={time}
                className={`payment__slot ${time === '10:00 AM' ? 'active' : ''} ${time === '11:30 AM' ? 'disabled' : ''}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Patient Details */}
        <div className="payment__section">
          <h4>Patient Details</h4>

          <input placeholder="eg. Julian Sterling" />
          <input placeholder="+1 (555) 000-0000" />
        </div>

        {/* Footer */}
        <div className="payment__footer">
          <div className="payment__total">
            <span>Total Payble</span>
            <h3>₹125.00</h3>
          </div>

          <button className="payment__confirm">Confirm Appointment</button>
        </div>
      </div>
    </Drawer>
  );
};

export default EmergencyDoctorPaymetView;
