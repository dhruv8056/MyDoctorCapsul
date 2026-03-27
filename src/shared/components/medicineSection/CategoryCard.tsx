import React from 'react';
import { Icon } from '@iconify/react';

interface CategoryCardProps {
  bgColor: string;
  icon: string;
  iconColor?: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ bgColor, icon, iconColor = '#000', title }) => {
  return (
    <div className="text-center cursor-pointer">
      <div className="w-full h-[95px] rounded-[8px] flex items-center justify-center mb-3" style={{ backgroundColor: bgColor }}>
        <Icon icon={icon} width="40" height="40" color={iconColor} />
      </div>

      <p className="text-[20px] font-semibold text-[#000000]">{title}</p>
    </div>
  );
};

export default CategoryCard;
