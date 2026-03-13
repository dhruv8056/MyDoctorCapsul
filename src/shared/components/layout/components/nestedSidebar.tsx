import React, { useState, useEffect } from 'react';
import { INestedMenuItem, NestedDropdownProps } from '../interface/ISidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { PointingArrowTooltip } from '@shared/utils/customTooltips';

const NestedDropdown: React.FC<NestedDropdownProps> = ({ items, level = 0, isCollapsed, onCloseSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavigate = (item: INestedMenuItem) => {
    if (item.route) {
      navigate(item.route);
      if (onCloseSidebar) onCloseSidebar();
    }
  };

  const isItemActive = (item: INestedMenuItem): boolean => {
    if (item.route === location.pathname) return true;
    if (item.children) {
      return item.children.some((child) => isItemActive(child));
    }
    return false;
  };

  useEffect(() => {
    items?.forEach((item, index) => {
      if (item.children && item.children.some((child) => isItemActive(child))) {
        setOpenDropdown(index);
      }
    });
  }, [location.pathname, items]);

  return (
    <ul className={`nested-menu level-${level}`}>
      {items?.map((item, index) => {
        const isActive = isItemActive(item);
        const hasChildren = item.children && item.children.length > 0;

        return (
          <li key={item.id || item.label} className="nested-item">
            {!isCollapsed ? (
              <>
                <button
                  onClick={() => (hasChildren ? handleDropdownToggle(index) : handleNavigate(item))}
                  className={`nested-button ${isActive ? 'active' : ''}`}
                  style={{ paddingLeft: `${level * 1}rem` }}
                >
                  <div className="button-content">
                    {item.icon && <Icon icon={item.icon} width={18} />}
                    <span className="label">{item.label}</span>
                  </div>
                  {hasChildren && (
                    <Icon icon="mdi:chevron-down" width={18} className={`dropdown-arrow ${openDropdown === index ? 'open' : ''}`} />
                  )}
                </button>
              </>
            ) : (
              <PointingArrowTooltip
                title={
                  <p
                    className={
                      'capitalize tracking-wider !text-[#345c7f] text-[0.5rem] sm:text-[0.6rem] md:text-[0.68rem] lg:!text-[0. 7rem] xl:!text-[0.8rem] py-[0.25rem] font-semibold'
                    }
                  >
                    {item?.label ?? ''}
                  </p>
                }
                placement="right"
                arrow
                tooltipbgColor="#fff"
                tooltipArrowColor="#fff"
                textColor="#345c7f"
                fontWeight="600"
                fontSize="0.7rem"
                boxShadow="rgba(0, 0, 0, 0.3) 0px 8px 24px"
                padding="0rem 0.5rem"
              >
                <button
                  onClick={() => (hasChildren ? handleDropdownToggle(index) : handleNavigate(item))}
                  className={`nested-button collapsed ${isActive ? 'active' : ''}`}
                >
                  {item.icon && <Icon icon={item.icon} width={18} />}
                </button>
              </PointingArrowTooltip>
            )}

            {hasChildren && openDropdown === index && (
              <div className={`nested-dropdown ${openDropdown === index ? 'open' : ''}`}>
                <NestedDropdown items={item.children} level={level + 1} isCollapsed={isCollapsed} onCloseSidebar={onCloseSidebar} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NestedDropdown;
