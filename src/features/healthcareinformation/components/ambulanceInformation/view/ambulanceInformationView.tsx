// src/features/healthcareinformation/components/ambulanceInformation/view/ambulanceInformationView.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { AmbulanceInformationViewProps } from '../interface/IAmbulanceInformation';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import ServicesOffered, { AMBULANCE_SERVICES } from '@shared/components/common/ServicesOffered';
import ambulanceImg from '@assets/images/ambulances/ambulance-1.png';
import AmbulanceCard, { AmbulanceItem } from '@shared/components/common/Ambulancecard';
import InputField from '@shared/components/common/InputFiled';
import SelectField from '@shared/components/common/SelectField';

// ─── Static ambulance data ────────────────────────────────────────────────────

const AMBULANCE_DATA: AmbulanceItem = {
  id: 1,
  name: 'Critical Lifecare',
  image: ambulanceImg,
  eta: '5-8 Mins',
  startingPrice: '2,000',
  facilities: ['Ventilator', 'Oxygen', '2 Medics'],
  hasRealTimeTracking: true
};

// ─── Breadcrumb items ─────────────────────────────────────────────────────────

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: 'mdi:home-outline' },
  { label: 'Find Ambulance', href: '/ambulance', icon: 'mdi:ambulance' },
  { label: 'Ambulance Information', isActive: true }
];

// ─── Fare rows ────────────────────────────────────────────────────────────────

const FARE_ROWS = [
  { label: 'Base Fare (Life shield Critical)', amount: '₹ 1500', isHighlight: false },
  { label: 'Distance  (Life shield Critical)', amount: '₹ 300', isHighlight: false },
  { label: 'Emergency Priority Charges', amount: '₹ 200', isHighlight: true }
];

type PaymentMethod = 'cash' | 'upi' | 'card';

const PAYMENT_OPTIONS: { id: PaymentMethod; label: string; icon: string }[] = [
  { id: 'cash', label: 'Cash', icon: 'mdi:cash-multiple' },
  { id: 'upi', label: 'UPI', icon: 'boxicons:wallet' },
  { id: 'card', label: 'Card', icon: 'mdi:credit-card-outline' }
];

const GENDER_OPTIONS = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
];

// ─── View ─────────────────────────────────────────────────────────────────────

const AmbulanceInformationView: React.FC<AmbulanceInformationViewProps> = () => {
  const [emergencyPriority, setEmergencyPriority] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [activeServices, setActiveServices] = useState<string[]>(['icu']);

  const handleServiceToggle = (id: string) => {
    setActiveServices((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
      <div className="container_layout">
        {/* ── Breadcrumb ── */}
          <Breadcrumb items={BREADCRUMB_ITEMS} />
        {/* ══ ROW 1: Services Offered (left) + Ambulance Card (right) ══ */}
        <div className="amb-info__row amb-info__row--top">
          {/* Left — Services Offered */}
          <div className="amb-info__col">
            <ServicesOffered services={AMBULANCE_SERVICES} activeIds={activeServices} onToggle={handleServiceToggle} />
            <section className="loc-details">
              <h2 className="amb-info__section-title">Location Details</h2>

              <div className="loc-details__card">
                {/* Pick Up row */}
                <div className="loc-details__row">
                  <Icon icon="mdi:target" width="28" height="28" color="#005A97" />{' '}
                  <div className="loc-details__text">
                    <span className="loc-details__label">PICK UP</span>
                    <span className="loc-details__value">Current Location (Sector 45, Residency Road)</span>
                  </div>
                </div>

                <div className="loc-details__divider" />

                {/* Drop row */}
                <div className="loc-details__row">
                  <Icon icon="lucide:map-pin" width="28" height="28" color="#BA1A1A" />{' '}
                  <div className="loc-details__text">
                    <span className="loc-details__label">DROP</span>
                    <span className="loc-details__value loc-details__value--placeholder">Enter Hospital Name or Address</span>
                  </div>
                  <Icon icon="mdi:map" width="28" height="28" color="#005A97" />
                </div>

                {/* Change Location */}
                <button className="loc-details__change-btn">
                  <Icon icon="mdi:map-marker-outline" width="28" height="28" />
                  Change Location
                </button>
              </div>
            </section>
            {/* Patient Details */}
            <section className="patient-details">
              <h2 className="amb-info__section-title">Patient Details</h2>

              <div className="patient-details__card">
                <div className="patient-details__field">
                  <InputField
                    label="Patient Name"
                    name="patientName"
                    placeholder="Full Name"
                    inputClass="bg-[#f9f9f9] border-[#e4e9ec] text-[18px] focus:border-[#005a97]"
                    labelClass="text-[17px] text-black font-normal"
                  />
                </div>

                <div className="patient-details__row">
                  <div className="patient-details__field">
                    <InputField type="number" label="Age" name="age" placeholder="years" inputClass="bg-[#f9f9f9] border-[#e4e9ec]" />
                  </div>

                  <div className="patient-details__field">
                    <SelectField
                      label="Gender"
                      name="gender"
                      options={GENDER_OPTIONS}
                      placeholder="Select Gender"
                      labelClass="text-[17px] text-black font-normal"
                      selectClass="bg-[#f9f9f9] border-[#e4e9ec]  focus:border-[#005a97]"
                    />
                  </div>
                </div>

                <div className="patient-details__field">
                  <label className="patient-details__label">Condition</label>
                  <textarea
                    name="condition"
                    placeholder="Brief Description..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-[#e4e9ec] bg-[#f9f9f9] text-[18px]"
                  />
                </div>

                {/* Emergency Priority toggle */}
                <div className="patient-details__emergency">
                  <span className="patient-details__emergency-label">Emergency Priority</span>
                  <button
                    className={`toggle-switch${emergencyPriority ? ' toggle-switch--on' : ''}`}
                    onClick={() => setEmergencyPriority((p) => !p)}
                    aria-pressed={emergencyPriority}
                    aria-label="Toggle emergency priority"
                  >
                    <span className="toggle-switch__thumb" />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right — Ambulance Card (no View Details button) */}
          <div className="amb-info__col">
            <AmbulanceCard item={AMBULANCE_DATA} showViewDetails={false} />
            {/* ══ ROW 2: Left column (Location + Patient) + Right column (Fare) ══ */}
            {/* ── RIGHT COLUMN ── */}
            <div className="fare-Summery-payment-options">
              {/* Fare Summary */}
              <section className="fare-summary">
                <h2 className="amb-info__section-title">Fare Summery</h2>

                <div className="fare-summary__card">
                  {/* Fare rows */}
                  <div className="fare-summary__rows">
                    {FARE_ROWS.map((row) => (
                      <div key={row.label} className="fare-summary__row">
                        <span className={`fare-summary__row-label${row.isHighlight ? ' fare-summary__row-label--red' : ''}`}>
                          {row.label}
                        </span>
                        <span className={`fare-summary__row-amount${row.isHighlight ? ' fare-summary__row-amount--red' : ''}`}>
                          {row.amount}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="fare-summary__divider" />

                  {/* Total */}
                  <div className="fare-summary__total">
                    <span className="fare-summary__total-label">Total Amount</span>
                    <span className="fare-summary__total-amount">₹ 2,000</span>
                  </div>
                </div>

                {/* Payment Options */}
                <h2 className="amb-info__section-title" style={{ marginTop: '24px' }}>
                  Payment Options
                </h2>

                <div className="payment-options">
                  {PAYMENT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      className={`payment-options__btn${paymentMethod === opt.id ? ' payment-options__btn--active' : ''}`}
                      onClick={() => setPaymentMethod(opt.id)}
                    >
                      <Icon icon={opt.icon} className="payment-options__icon" />
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Confirm Booking */}
                <button className="amb-info__confirm-btn">
                  <Icon icon="mdi:navigation-variant-outline" />
                  Confirm Booking &amp; Track
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AmbulanceInformationView;
