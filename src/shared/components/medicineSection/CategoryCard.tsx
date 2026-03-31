import React from 'react';
import { Icon } from '@iconify/react';

interface CategoryCardProps {
  bgColor: string;
  icon: string;
  iconColor?: string;
  title: string;
  onClick?: () => void; // ✅ add this
}

const CategoryCard: React.FC<CategoryCardProps> = ({ bgColor, icon, iconColor = '#000', title, onClick }) => {
  return (
    <div onClick={onClick} className="text-center cursor-pointer group">
      <div
        className="w-full h-[95px] rounded-[8px] flex items-center justify-center mb-3 transition-all duration-200 group-hover:scale-105"
        style={{ backgroundColor: bgColor }}
      >
        <Icon icon={icon} width="40" height="40" color={iconColor} />
      </div>

      <p className="text-[20px] font-semibold text-[#000000]">{title}</p>
    </div>
  );
};

export default CategoryCard;
