import React from 'react';
import authImage from '@assets/images/authImage.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* LEFT SIDE (COMMON) */}
        <div className="auth-left">
          <div className="logo-box">
            <img src={authImage} alt="Logo" className="logo" />
          </div>
        </div>

        {/* RIGHT SIDE (DYNAMIC) */}
        <div className="auth-right">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
