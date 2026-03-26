// src/features/healthcareinformation/components/ambulanceInformation/view/ambulanceInformationView.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { AmbulanceInformationViewProps } from '../interface/IAmbulanceInformation';
import Breadcrumb from '@shared/components/common/Breadcrumb';
import ServicesOffered, { AMBULANCE_SERVICES } from '@shared/components/common/ServicesOffered';
import ambulanceImg from '@assets/images/ambulances/ambulance-1.png';
import AmbulanceCard, { AmbulanceItem } from '@shared/components/common/Ambulancecard';

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
  { id: 'cash', label: 'Cash', icon: 'mdi:cash' },
  { id: 'upi', label: 'UPI', icon: 'mdi:qrcode-scan' },
  { id: 'card', label: 'Card', icon: 'mdi:credit-card-outline' }
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
    <div className="amb-info">
      <div className="container_layout">
        {/* ── Breadcrumb ── */}
        <div className="amb-info__breadcrumb">
          <Breadcrumb items={BREADCRUMB_ITEMS} />
        </div>

        {/* ══ ROW 1: Services Offered (left) + Ambulance Card (right) ══ */}
        <div className="amb-info__row amb-info__row--top">
          {/* Left — Services Offered */}
          <div className="amb-info__col">
            <ServicesOffered services={AMBULANCE_SERVICES} activeIds={activeServices} onToggle={handleServiceToggle} />
          </div>

          {/* Right — Ambulance Card (no View Details button) */}
          <div className="amb-info__col">
            <AmbulanceCard item={AMBULANCE_DATA} showViewDetails={false} />
          </div>
        </div>

        {/* ══ ROW 2: Left column (Location + Patient) + Right column (Fare) ══ */}
        <div className="amb-info__row amb-info__row--bottom">
          {/* ── LEFT COLUMN ── */}
          <div className="amb-info__col amb-info__col--left">
            {/* Location Details */}
            <section className="loc-details">
              <h2 className="amb-info__section-title">Location Details</h2>

              <div className="loc-details__card">
                {/* Pick Up row */}
                <div className="loc-details__row">
                  <Icon icon="mdi:map-marker-circle" className="loc-details__icon loc-details__icon--pickup" />
                  <div className="loc-details__text">
                    <span className="loc-details__label">PICK UP</span>
                    <span className="loc-details__value">Current Location (Sector 45, Residency Road)</span>
                  </div>
                </div>

                <div className="loc-details__divider" />

                {/* Drop row */}
                <div className="loc-details__row">
                  <Icon icon="mdi:map-marker" className="loc-details__icon loc-details__icon--drop" />
                  <div className="loc-details__text">
                    <span className="loc-details__label">DROP</span>
                    <span className="loc-details__value loc-details__value--placeholder">Enter Hospital Name or Address</span>
                  </div>
                  <Icon icon="mdi:map" className="loc-details__map-icon" />
                </div>

                {/* Change Location */}
                <button className="loc-details__change-btn">
                  <Icon icon="mdi:map-marker-outline" />
                  Change Location
                </button>
              </div>
            </section>

            {/* Patient Details */}
            <section className="patient-details">
              <h2 className="amb-info__section-title">Patient Details</h2>

              <div className="patient-details__card">
                {/* Patient Name */}
                <div className="patient-details__field">
                  <label className="patient-details__label">Patient Name</label>
                  <input type="text" className="patient-details__input" placeholder="Full Name" />
                </div>

                {/* Age + Gender row */}
                <div className="patient-details__row">
                  <div className="patient-details__field">
                    <label className="patient-details__label">Age</label>
                    <input type="number" className="patient-details__input" placeholder="years" min={0} />
                  </div>
                  <div className="patient-details__field">
                    <label className="patient-details__label">Age</label>
                    <select className="patient-details__input patient-details__select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Condition */}
                <div className="patient-details__field">
                  <label className="patient-details__label">Condition</label>
                  <textarea className="patient-details__textarea" placeholder="Brief Description of Description......" rows={3} />
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

          {/* ── RIGHT COLUMN ── */}
          <div className="amb-info__col amb-info__col--right">
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
