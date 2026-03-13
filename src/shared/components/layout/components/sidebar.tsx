import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from './header.component';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryComponent from '@shared/hooks/ErrorBoundary';
import { logout } from '@shared/components/auth/login/store-slice/login.slice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@store/app.store';
import { useDispatch, useSelector } from 'react-redux';
import { APP_ROUTE } from '@shared/constant/app-route';
import { generateNavigationLinks } from '@shared/utils/menuItems';
import NestedDropdown from './nestedSidebar';
import { PointingArrowTooltip } from '@shared/utils/customTooltips';
import { Scrollbar } from 'smooth-scrollbar-react';
import type { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnyAction>>();
  const userPermissions = useSelector((state: RootState) => state.permission.data);
  const user = useSelector((state: RootState) => state.user.data);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollbar = useRef<BaseScrollbar | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuLink = generateNavigationLinks(userPermissions);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const closeSidebar = () => {
    if (isMobile) setIsCollapsed(true);
  };

  const handleMenuClick = (index: number, hasChildren: boolean, route?: string) => {
    if (hasChildren) {
      setOpenDropdown(openDropdown === index ? null : index);
    } else {
      setOpenDropdown(null);
      if (route) {
        navigate(route);
        closeSidebar();
      }
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(APP_ROUTE.LOGIN);
  };

  const isItemActive = (item: any): boolean => {
    if (item.route === location.pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isItemActive(child));
    }
    return false;
  };

  return (
    <div className="app-container">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="sidebar-header">
          {!isCollapsed ? (
            <div className="header-content">
              <Link to="/" className="logo-link"></Link>
              <button onClick={toggleSidebar} className="toggle-button">
                <Icon icon="material-symbols:chevron-right" width={24} />
              </button>
            </div>
          ) : (
            <div className="header-content collapsed">
              <Link to="/" className="logo-link collapsed"></Link>
              <button onClick={toggleSidebar} className="toggle-button collapsed">
                <Icon icon="material-symbols:chevron-left" width={24} />
              </button>
            </div>
          )}
        </div>

        <nav className="nav-menu">
          <ul className="menu-list">
            {menuLink.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = isItemActive(item);

              return (
                <li key={item.id || item.label} className="menu-item">
                  {!isCollapsed ? (
                    <button
                      onClick={() => handleMenuClick(index, hasChildren, item.route)}
                      className={`nav-button ${isActive ? 'active' : ''}`}
                    >
                      <div className="button-content">
                        {item.icon && <Icon icon={item.icon} width={20} />}
                        <span className="label">{item.label}</span>
                      </div>
                      {hasChildren && (
                        <Icon icon="mdi:chevron-down" width={20} className={`dropdown-arrow ${openDropdown === index ? 'open' : ''}`} />
                      )}
                    </button>
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
                        onClick={() => handleMenuClick(index, hasChildren, item.route)}
                        className={`nav-button collapsed ${isActive ? 'active' : ''}`}
                      >
                        {item.icon && <Icon icon={item.icon} width={20} />}
                      </button>
                    </PointingArrowTooltip>
                  )}

                  {hasChildren && openDropdown === index && (
                    <div className={`dropdown-content ${openDropdown === index ? 'open' : ''}`}>
                      <NestedDropdown items={item.children} level={1} isCollapsed={isCollapsed} onCloseSidebar={closeSidebar} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="logout-section">
          <PointingArrowTooltip
            title={
              <p
                className={
                  'capitalize tracking-wider !text-[#345c7f] text-[0.5rem] sm:text-[0.6rem] md:text-[0.68rem] lg:!text-[0. 7rem] xl:!text-[0.8rem] py-[0.25rem] font-semibold'
                }
              >
                Sign Out
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
            <button onClick={handleLogout} className={`logout-button ${isCollapsed ? 'collapsed' : ''}`}>
              <Icon icon="material-symbols:logout" width={24} />
              {!isCollapsed && <span>Sign Out</span>}
            </button>
          </PointingArrowTooltip>
        </div>
      </aside>

      <div className="main-content">
        <Header toggleSidebar={toggleSidebar} user={user} />
        <Scrollbar
          ref={scrollbar}
          plugins={{
            overscroll: {} as const
          }}
        >
          <div className={`outlet ${isCollapsed ? 'outlet-close' : 'outlet-open'}`}>
            <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
              <main className="main">
                <div className="container">
                  <Outlet />
                </div>
              </main>
            </ErrorBoundary>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default Sidebar;
