import React from 'react';
import { Icon } from '@iconify/react';
import dummy_img from '@assets/images/dummy_avtar.png';
import { NavbarProps } from '../interface/ISidebar';

const Header: React.FC<NavbarProps> = ({ toggleSidebar, user }) => {
  return (
    <div className="header">
      <div className="header-left">
        <button onClick={toggleSidebar} className="menu-toggle">
          <Icon icon="material-symbols:menu" width={20} />
        </button>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <div className="avatar-container">
            <img src={dummy_img} alt="Profile" onError={dummy_img} />
            <span className="status-dot"></span>
          </div>
          <div className="user-info">
            <div className="email">{user?.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
