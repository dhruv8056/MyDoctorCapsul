import React from 'react';
import { Icon } from '@iconify/react';
import InputField from '@shared/components/common/InputFiled';

interface OrderMedicineModalViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderMedicineModalView: React.FC<OrderMedicineModalViewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="order-modal">
      <div className="order-modal__overlay" onClick={onClose}></div>

      <div className="order-modal__box">
        {/* Header */}
        <div className="order-modal__header">
          <button onClick={onClose}>
            <Icon icon="mdi:arrow-left" width="24" />
          </button>

          <h2 className="order-modal__title">Order Medicine</h2>

          <Icon icon="mdi:share-variant-outline" width="22" />
        </div>

        {/* Steps */}
        <div className="order-modal__steps">
          <div className="order-modal__step order-modal__step--active">
            <span className="dot"></span>
            Upload
          </div>

          <div className="line"></div>

          <div className="order-modal__step">
            <span className="dot"></span>
            Review
          </div>

          <div className="line"></div>

          <div className="order-modal__step">
            <span className="dot"></span>
            Payment
          </div>
        </div>

        {/* Banner */}
        <div className="order-modal__banner">
          <p className="order-modal__banner-title">Upload Prescription</p>
          <p className="order-modal__banner-desc">Our Pharmacist will check your prescription and add medicines to your cart.</p>
        </div>

        {/* Form */}
        <div className="order-modal__form">
          <h3 className="order-modal__form-title">Can’t find your medicine?</h3>
          <p className="order-modal__form-desc">Enter details manually and we’ll source it for you</p>

          <div className="order-modal__fields">
            <InputField placeholder="Medicine Brand Name" />
            <InputField placeholder="Composition / Strength" />

            <div className="order-modal__upload">
              <Icon icon="mdi:camera-outline" width="20" />
              <span>Upload Photo</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <button className="order-modal__submit">Add to Cart</button>
      </div>
    </div>
  );
};

export default OrderMedicineModalView;
