// src/shared/components/common/ServiceDiscoveryMap/ServiceDiscoveryMap.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type MapVariant = 'hospital' | 'clinic' | 'ambulance';

export type AmbulanceType = 'private' | 'government';

export interface MapMarker {
  id: number;
  lat: number;
  lng: number;
  label?: string;
}

interface ServiceDiscoveryMapProps {
  variant: MapVariant;
  markers?: MapMarker[];
  // Ambulance-only props
  currentLocation?: string;
  onChangeLocation?: () => void;
  ambulanceType?: AmbulanceType;
  onAmbulanceTypeChange?: (type: AmbulanceType) => void;
  // Map iframe src (Google Maps embed or similar)
  mapSrc?: string;
  onExploreMap?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

const ServiceDiscoveryMap: React.FC<ServiceDiscoveryMapProps> = ({
  variant,
  currentLocation = 'Amba Talavdi Near, school',
  onChangeLocation,
  ambulanceType = 'private',
  onAmbulanceTypeChange,
  mapSrc,
  onExploreMap
}) => {
  const isAmbulance = variant === 'ambulance';

  // Local fallback if parent doesn't control ambulance type
  const [localType, setLocalType] = useState<AmbulanceType>(ambulanceType);
  const activeType = onAmbulanceTypeChange ? ambulanceType : localType;

  const handleTypeChange = (type: AmbulanceType) => {
    if (onAmbulanceTypeChange) {
      onAmbulanceTypeChange(type);
    } else {
      setLocalType(type);
    }
  };

  return (
    <div className={`sdmap${isAmbulance ? ' sdmap--ambulance' : ''}`}>
      {/* ── Map area ── */}
      <div className="sdmap__map">
        {mapSrc ? (
          <iframe
            src={mapSrc}
            className="sdmap__iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service location map"
          />
        ) : (
          // Placeholder when no mapSrc provided
          <div className="sdmap__placeholder">
            <Icon icon="mdi:map-outline" width="48" height="48" />
            <p>Map loading...</p>
          </div>
        )}

        {/* Explore Map button — always visible on map */}
        <button className="sdmap__explore-btn" onClick={onExploreMap} aria-label="Explore full map">
          Explore Map
        </button>
      </div>

      {/* ── Ambulance bottom panel ── */}
      {isAmbulance && (
        <div className="sdmap__panel">
          {/* Current location row */}
          <div className="sdmap__location-row">
            <div className="sdmap__location-info">
              <Icon icon="fluent:location-12-regular" className="sdmap__location-icon" />
              <div className="sdmap__location-text">
                <span className="sdmap__location-label">Current Location</span>
                <strong className="sdmap__location-address">{currentLocation}</strong>
              </div>
            </div>
            <button className="sdmap__change-btn" onClick={onChangeLocation}>
              Change
            </button>
          </div>

          {/* Ambulance type tabs */}
          <div className="sdmap__tabs">
            <button
              className={`sdmap__tab${activeType === 'private' ? ' sdmap__tab--active' : ''}`}
              onClick={() => handleTypeChange('private')}
            >
              Privet Ambulance
            </button>
            <button
              className={`sdmap__tab${activeType === 'government' ? ' sdmap__tab--active' : ''}`}
              onClick={() => handleTypeChange('government')}
            >
              Government Services
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDiscoveryMap;
