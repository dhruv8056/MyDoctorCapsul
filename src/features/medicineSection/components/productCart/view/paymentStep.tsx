import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import InputField from '@shared/components/common/InputFiled';
import { PaymentStepProps } from '../interface/IProductCart';

const PaymentStep: React.FC<PaymentStepProps> = ({ onBack , onSuccess  }) => {
  const [activeMethod, setActiveMethod] = useState('card');

  return (
    <div className="payment-step">
      {/* Header */}
      <div className="payment-step__header">
        <button className="payment-step__back" onClick={onBack}>
          <Icon icon="solar:arrow-left-linear" width="24" height="24" />
        </button>
        <h2 className="payment-step__title">Payment</h2>
      </div>

      {/* Content */}
      <div className="payment-step__content">
        {/* Order Summary */}
        <div className="payment-step__summary">
          <div className="payment-step__summary-title">Order Summary</div>
          <p className="payment-step__summary-name">Doctor Consultation</p>
          <div className="payment-step__summary-price">
            ₹125.00 <span>/ Order Total</span>
          </div>
        </div>

        <div className="payment-step__section-title">Choose Payment Method</div>

        {/* CARD */}
        <div
          className={`payment-step__item ${activeMethod === 'card' ? 'payment-step__item--active' : ''}`}
          onClick={() => setActiveMethod('card')}
        >
          <div className="payment-step__item-top">
            <div className="payment-step__item-left">
              <div className="payment-step__icon">
                <Icon icon="mdi:credit-card-outline" width="24" height="24" />
              </div>
              <div>
                <div className="payment-step__text">
                  <span className="payment-step__method">Credit/Debit Card</span>
                  <span className="payment-step__sub">Visa, Mastercard, RuPay</span>
                </div>
              </div>
            </div>

            <div className={`payment-step__radio ${activeMethod === 'card' ? 'active' : ''}`}></div>
          </div>

          {activeMethod === 'card' && (
            <div className="payment-step__form">
              <InputField
                placeholder="XXXX XXXX XXXX 4242"
                label="Card Number"
                labelClass="payment-step__form-label"
                inputClass="payment-step__form-input"
              />
              <div className="payment-step__row">
                <InputField
                  placeholder="MM/YY"
                  label="Expiry Date"
                  labelClass="payment-step__form-label"
                  inputClass="payment-step__form-input"
                />
                <InputField placeholder="CVV" label="CVV" labelClass="payment-step__form-label" inputClass="payment-step__form-input" />
              </div>
            </div>
          )}
        </div>

        {/* UPI */}
        <div
          className={`payment-step__item ${activeMethod === 'upi' ? 'payment-step__item--active' : ''}`}
          onClick={() => setActiveMethod('upi')}
        >
          <div className="payment-step__item-top">
            <div className="payment-step__item-left">
              <div className="payment-step__icon">
                <Icon icon="mdi:qrcode-scan" width="24" height="24" />
              </div>
              <div className="payment-step__text">
                <span className="payment-step__method">UPI</span>
                <span className="payment-step__sub">upi</span>
              </div>
            </div>

            <div className={`payment-step__radio ${activeMethod === 'upi' ? 'active' : ''}`}></div>
          </div>

          {activeMethod === 'upi' && <div className="payment-step__form"></div>}
        </div>

        {/* NET BANKING */}
        <div
          className={`payment-step__item ${activeMethod === 'netbanking' ? 'payment-step__item--active' : ''}`}
          onClick={() => setActiveMethod('netbanking')}
        >
          <div className="payment-step__item-top">
            <div className="payment-step__item-left">
              <div className="payment-step__icon">
                <Icon icon="mdi:bank-outline" width="24" height="24" />
              </div>
              <div className="payment-step__text">
                <span className="payment-step__method">Net Banking</span>
                <span className="payment-step__sub">Select from all Indian banks</span>
              </div>
            </div>

            <div className={`payment-step__radio ${activeMethod === 'netbanking' ? 'active' : ''}`}></div>
          </div>

          {activeMethod === 'netbanking' && <div className="payment-step__form"></div>}
        </div>

        {/* COD */}
        <div
          className={`payment-step__item ${activeMethod === 'cod' ? 'payment-step__item--active' : ''}`}
          onClick={() => setActiveMethod('cod')}
        >
          <div className="payment-step__item-top">
            <div className="payment-step__item-left">
              <div className="payment-step__icon">
                <Icon icon="mdi:cash" width="24" height="24" />
              </div>
              <div className="payment-step__text">
                <span className="payment-step__method">Cash on Delivery</span>
                <span className="payment-step__sub">Pay at the clinic after consultation</span>
              </div>
            </div>

            <div className={`payment-step__radio ${activeMethod === 'cod' ? 'active' : ''}`}></div>
          </div>

          {activeMethod === 'cod' && (
            <div className="payment-step__form">
              <p>Pay when your order is delivered.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="payment-step__footer">
        <div className="payment-step__total">
          <span>Total Payable</span>
          <strong>₹125.00</strong>
        </div>

        <button className="payment-step__btn"  onClick={() => {onSuccess();}}>Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentStep;
