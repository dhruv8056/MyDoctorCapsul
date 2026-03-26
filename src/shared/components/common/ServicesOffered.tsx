// src\shared\components\common\ServicesOffered.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceFilter {
  id: string;
  label: string;
  icon: string; // iconify icon string
}

interface ServicesOfferedProps {
  services: ServiceFilter[];
  activeIds?: string[]; // controlled
  onToggle?: (id: string) => void; // controlled handler
}
// ─── Default services (ambulance page) ───────────────────────────────────────

export const AMBULANCE_SERVICES: ServiceFilter[] = [
  { id: 'icu', label: 'ICU Support', icon: 'mdi:heart-pulse' },
  { id: 'ventilator', label: 'Ventilator', icon: 'mdi:ambulance' },
  { id: 'oxygen', label: 'Oxygen', icon: 'mdi:heart-circle-outline' }
];

// ─── Component ────────────────────────────────────────────────────────────────

const ServicesOffered: React.FC<ServicesOfferedProps> = ({ services, activeIds, onToggle }) => {
  // Uncontrolled fallback — works standalone without props
  const [localActive, setLocalActive] = useState<string[]>([services[0]?.id ?? '']);

  const active = activeIds ?? localActive;

  const handleToggle = (id: string) => {
    if (onToggle) {
      onToggle(id);
    } else {
      setLocalActive((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    }
  };

  return (
    <div className="services-offered">
      <h3 className="services-offered__title">Services Offered</h3>

      <div className="services-offered__list">
        {services.map((service) => {
          const isActive = active.includes(service.id);
          return (
            <button
              key={service.id}
              className={`services-offered__btn${isActive ? ' services-offered__btn--active' : ''}`}
              onClick={() => handleToggle(service.id)}
              aria-pressed={isActive}
            >
              <Icon icon={service.icon} className="services-offered__btn-icon" />
              {service.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesOffered;
