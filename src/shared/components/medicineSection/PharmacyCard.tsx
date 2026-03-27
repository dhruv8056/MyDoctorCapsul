import React from 'react';
import { Icon } from '@iconify/react';

interface PharmacyCardProps {
  name: string;
  distance: string;
  timing: string;
  deliveryTag?: string;
  rating: number;
  image: string;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ name, distance, timing, deliveryTag, rating, image }) => {
  return (
    <div className="border border-[#D9D9D9] rounded-2xl p-4 flex flex-col gap-4 shadow-sm">
      {/* Top Section */}
      <div className="flex items-start gap-4">
        {/* Image */}
        <img src={image} alt={name} className="w-20 h-20 rounded-lg object-cover" />

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-[20px] font-semibold text-[#252525] font-lexend">{name}</h3>

          <p className="text-[14.95px] text-[#252525] opacity-[0.7] mt-1 font-lexend">
            {distance} away | {timing}
          </p>

          {deliveryTag && <p className="text-[#014A97] text-[14.95px] font-medium mt-1 font-lexend">{deliveryTag}</p>}
        </div>

        {/* Rating */}
        <div className="bg-[#ECFDF5]  text-[#27954E] text-[14.95px] font-semibold px-2 py-1 rounded-md flex items-center gap-1 font-lexend">
          <Icon icon="mdi:star" width="14" />
          {rating}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#014A97] text-white py-3 rounded-xl flex items-center justify-center gap-2 ">
          <Icon icon="mdi:phone-outline" width="18" />
          Call
        </button>

        <button className="flex-1 bg-[#27954E] text-white py-3 rounded-xl flex items-center justify-center gap-2 ">
          <Icon icon="mdi:directions" width="18" />
          Directions
        </button>
      </div>
    </div>
  );
};

export default PharmacyCard;
