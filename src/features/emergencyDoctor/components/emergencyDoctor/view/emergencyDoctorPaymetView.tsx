import Drawer from '@shared/components/common/Drawer';
import { Icon } from '@iconify/react';
import InputField from '@shared/components/common/InputFiled';
import { useState } from 'react';
import payment_doc_1 from '@assets/images/payment_doc_1.jpg';

const EmergencyDoctorPaymetView: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  // Get current week dates (Mon–Sun)
  const getTwoWeekDates = () => {
    const start = new Date(today);
    const day = start.getDay() || 7;

    // Move to Monday
    if (day !== 1) start.setDate(start.getDate() - (day - 1));

    // Create 14 days (2 weeks)
    return Array.from({ length: 14 }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  };

  const weekDates = getTwoWeekDates();

  return (
    <Drawer isOpen={open} onClose={onClose}>
      <div className="payment">
        {/* Header */}
        <div className="payment__header">
          <Icon className="payment__back" icon="mdi:arrow-left" width="20" onClick={onClose} />
          <h2 className="payment__title">Payment</h2>
        </div>

        {/* Content */}
        <div className="payment__content">
          {/* Doctor Info */}
          <div className="payment__doctor">
            <img src={payment_doc_1} alt="doctor" />
            <div className="payment__doctor-info">
              <span className="payment__speciality">Cardiology Specialist</span>
              <h3 className="payment__doctor-name">Dr. Aris Thorne</h3>
              <p className="payment__doctor-bio">Expert in cardiovascular preventative care</p>
            </div>
          </div>

          {/* Date Section */}
          <div className="payment__section">
            <div className="payment__section-header">
              <h4 className="payment__section-title">Select Date</h4>
              <span className="payment__section-sub">October 2023</span>
            </div>

            <div className="payment__calendar">
              {/* Days Row */}
              <div className="payment__calendar-days">
                {days.map((d) => (
                  <div key={d} className="payment__day">
                    {d}
                  </div>
                ))}
              </div>

              {/* Dates Row */}
              <div className="payment__calendar-dates">
                {weekDates.map((dateObj, i) => {
                  const date = dateObj.getDate();
                  const isPast = dateObj < new Date(new Date().setHours(0, 0, 0, 0));

                  return (
                    <div
                      key={i}
                      className={`payment__date 
            ${selectedDate === date ? 'active' : ''} 
            ${isPast ? 'disabled' : ''}`}
                      onClick={() => !isPast && setSelectedDate(date)}
                    >
                      {date}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="payment__section">
            <h4 className="payment__section-title">Available Time Slots</h4>

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
            <h4 className="payment__section-title">Patient Details</h4>

            <InputField
              placeholder="eg. Julian Sterling"
              label="Patient Name"
              inputClass="payment__section-input"
              labelClass="payment__section-label"
            />
            <InputField
              placeholder="+1 (555) 000-0000"
              label="Phone Number"
              inputClass="payment__section-input"
              labelClass="payment__section-label"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="payment__footer">
          <div className="payment__total">
            <span>Total Payable</span>
            <strong>₹125.00</strong>
          </div>

          <button className="payment__btn">Confirm Appointment</button>
        </div>
      </div>
    </Drawer>
  );
};

export default EmergencyDoctorPaymetView;
