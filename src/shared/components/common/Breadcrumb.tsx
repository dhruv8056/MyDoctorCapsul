import React from 'react';
import { Icon } from '@iconify/react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separatorIcon?: string;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separatorIcon = 'mdi:chevron-right', className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`w-full ${className}`}>
      <ol className="flex items-center flex-wrap gap-1 text-[11px] font-normal text-black/70">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {/* LINK / LABEL */}
              <div className="flex items-center gap-1">
                {item.icon && <Icon icon={item.icon} className={`text-[13px] ${isLast ? 'text-[#014A97]' : 'text-black/50'}`} />}

                {item.href ? (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className={`
                      transition-all duration-200
                      hover:text-[#014A97]
                      ${isLast ? 'text-[#014A97] font-medium pointer-events-none' : 'text-black/70'}
                    `}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={`
                      ${isLast ? 'text-[#014A97] font-medium' : 'text-black/70'}
                    `}
                  >
                    {item.label}
                  </span>
                )}
              </div>

              {/* SEPARATOR */}
              {!isLast && <Icon icon={separatorIcon} className="mx-1 text-[14px] text-black/40" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
