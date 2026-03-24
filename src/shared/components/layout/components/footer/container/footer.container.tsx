import React from 'react';
import FooterView from '../view/footerView';
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../interface/IFooter';

// ─── Container ────────────────────────────────────────────────────────────────

const FooterContainer: React.FC = () => {
  return (
    <FooterView
      columns={FOOTER_COLUMNS}
      socialLinks={SOCIAL_LINKS}
      brandName="My Doctor Capsule"
      copyrightText="© 2026 mydoctor capsule.com  all rights reserved."
    />
  );
};

export default FooterContainer;
