import React from 'react';
import { Icon } from '@iconify/react';

interface PharmacyCardProps {
  name: string;
  distance?: string;
  timing?: string;
  deliveryTag?: string;
  rating?: number;
  image?: string;

  // Actions
  onCall?: () => void;
  onDirections?: () => void;

  // Customization
  className?: string;
  showActions?: boolean;
  showRating?: boolean;

  // Advanced extensibility
  renderExtra?: React.ReactNode;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({
  name,
  distance,
  timing,
  deliveryTag,
  rating,
  image,
  onCall,
  onDirections,
  className = '',
  showActions = true,
  showRating = true,
  renderExtra
}) => {
  return (
    <div
      className={`border border-[#D9D9D9] rounded-2xl p-4 flex flex-col gap-4 
      shadow-sm hover:shadow-md transition-all duration-200 bg-white ${className}`}
    >
      {/* ───────────── TOP SECTION ───────────── */}
      <div className="flex items-start gap-4">
        {/* Image */}
        <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F3F6FA] flex items-center justify-center border border-[#E5E7EB]">
          {image ? (
            <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover" />
          ) : (
            <Icon icon="mdi:store-outline" className="text-[28px] text-[#014A97]/40" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[20px] font-semibold text-[#252525] font-lexend truncate">{name}</h3>

          {(distance || timing) && (
            <p className="text-[14.95px] text-[#252525]/70 mt-1 font-lexend">
              {distance && `${distance} away`}
              {distance && timing && ' | '}
              {timing}
            </p>
          )}

          {deliveryTag && <p className="text-[#014A97] text-[14.95px] font-medium mt-1 font-lexend">{deliveryTag}</p>}

          {/* Extra slot (for future reuse) */}
          {renderExtra && <div className="mt-1">{renderExtra}</div>}
        </div>

        {/* Rating */}
        {showRating && rating !== undefined && (
          <div className="bg-[#ECFDF5] text-[#27954E] text-[14.95px] font-semibold px-2 py-1 rounded-md flex items-center gap-1 font-lexend whitespace-nowrap">
            <Icon icon="mdi:star" width="14" />
            {rating.toFixed(1)}
          </div>
        )}
      </div>

      {/* ───────────── ACTIONS ───────────── */}
      {showActions && (onCall || onDirections) && (
        <div className="flex gap-3">
          {onCall && (
            <button
              onClick={onCall}
              aria-label={`Call ${name}`}
              className="flex-1 bg-[#014A97] text-white py-3 rounded-xl flex items-center justify-center gap-2 
              font-medium hover:bg-[#013d7a] active:scale-[0.98] transition"
            >
              <Icon icon="mdi:phone-outline" width="18" />
              Call
            </button>
          )}

          {onDirections && (
            <button
              onClick={onDirections}
              aria-label={`Directions to ${name}`}
              className="flex-1 bg-[#27954E] text-white py-3 rounded-xl flex items-center justify-center gap-2 
              font-medium hover:brightness-110 active:scale-[0.98] transition"
            >
              <Icon icon="mdi:directions" width="18" />
              Directions
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PharmacyCard;
