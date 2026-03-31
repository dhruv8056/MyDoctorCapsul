import { Icon } from '@iconify/react/dist/iconify.js';
import InputField from '@shared/components/common/InputFiled';
import { AddressStepProps } from '../interface/IProductCart';

const AddressStep: React.FC<AddressStepProps> = ({ onNext, onBack }) => {
  return (
    <div className="address-step">
      <div className="address-step__header">
        <button className="address-step__back" onClick={onBack}>
          <Icon icon="solar:arrow-left-linear" width="24" height="24" />
        </button>

        <h2 className="address-step__title">Delivery Address</h2>
      </div>
      <div className="address-step__content">
        <div className="address-step__form">
          <InputField
            type="text"
            label="Patient Name"
            placeholder="Full Name"
            labelClass="address-step__label"
            inputClass="address-step__input"
          />
          <InputField
            type="text"
            label="Street Address"
            placeholder="Street Address"
            labelClass="address-step__label"
            inputClass="address-step__input"
          />

          <div className="address-step__row">
            <InputField type="text" label="City" placeholder="City" labelClass="address-step__label" inputClass="address-step__input" />
            <InputField type="text" label="State" placeholder="State" labelClass="address-step__label" inputClass="address-step__input" />
          </div>

          <InputField
            type="text"
            label="Zip Code"
            placeholder="Zip Code"
            labelClass="address-step__label"
            inputClass="address-step__input"
          />
        </div>
        <div className="address-step__map">
          <iframe title="map" src="https://maps.google.com/maps?q=21.1702,72.8311&z=15&output=embed" loading="lazy" />
        </div>

        <button className="address-step__location-btn">
          <Icon icon="mdi:crosshairs-gps" width="18" color="#00458E" />
          Set Current Location
        </button>
      </div>
      <div className="address-step__footer">
        <button onClick={onNext} className="address-step__btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default AddressStep;
