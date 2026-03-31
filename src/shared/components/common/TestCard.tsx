import React from 'react';

interface Feature {
  icon?: React.ReactNode;
  label: string;
}

interface TestCardProps {
  badge?: string;
  title: string;
  description?: string;
  price: number;
  features?: Feature[];
  linkText?: string;
  onLinkClick?: () => void;
  onBookNow?: () => void;
}

const TestCard: React.FC<TestCardProps> = ({ badge, title, description, price, features = [], linkText, onLinkClick, onBookNow }) => {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_12px_40px_0px_#00478D0F] p-5 w-full  flex flex-col justify-between">
      {/* TOP */}
      <div>
        {/* Badge + Price */}
        <div className="flex justify-between items-start mb-3">
          {badge && <span className="text-[11px] font-medium px-3 py-[4px] rounded-full bg-[#B1F0CE4D] text-[#0F5238]">{badge}</span>}

          <div className="text-right">
            <p className="text-[#0273BF] font-semibold text-[22px] leading-none">₹{price}</p>
            <p className="text-[10px] text-[#6B7280] mt-1">INC. TAXES</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[#191C21] font-semibold text-[20px] leading-[26px] mb-3">{title}</h3>

        {/* Description */}
        {description && <p className="text-[12px] text-[#424752] leading-[20px] mb-3 font-Gilroy-Medium">{description}</p>}

        {/* Features Box (IMPORTANT FIX) */}
        {features.length > 0 && (
          <div className="bg-[#F2F3FB80] rounded-[5px] px-3 py-3 flex items-center gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-[12px] text-[#424752] font-Gilroy-Bold font-semibold">
                {item.icon}
                <span>{item.label}</span>

                {/* Divider except last */}
                {index !== features.length - 1 && <div className="w-[1px] h-4 bg-gray-300 ml-2"></div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between items-center mt-5">
        {linkText && (
          <button onClick={onLinkClick} className="text-[#00468C] text-[14px] font-medium flex items-center gap-1 font-Gilroy-Bold">
            {linkText}
            <span className="text-[16px]">›</span>
          </button>
        )}

        <button onClick={onBookNow} className="bg-[#014A97] text-white text-[14px] font-medium px-6 py-2.5 rounded-[5px] shadow-md">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TestCard;
