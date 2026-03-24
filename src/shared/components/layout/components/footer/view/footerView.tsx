import React from 'react';
import { Icon } from '@iconify/react';
import { FooterColumn, SocialLink } from '../interface/IFooter';
import footer_logo from '@assets/images/footer_logo.png';

// ─── Props ────────────────────────────────────────────────────────────────────

interface FooterViewProps {
  brandName: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

// ─── View ─────────────────────────────────────────────────────────────────────

const FooterView: React.FC<FooterViewProps> = ({ columns, socialLinks, copyrightText }) => {
  return (
    <footer className="footer">
      {/* ── Main band ── */}
      <div className="footer__main">
        <div className="container_layout">
          <div className="footer__inner">
            {/* Brand */}
            <div className="footer__brand">
              <img src={footer_logo} alt="MDC Logo" className="logo-image" />{' '}
            </div>

            {/* Vertical divider */}
            <div className="footer__divider" aria-hidden="true" />

            {/* Nav columns */}
            <nav className="footer__nav" aria-label="Footer navigation">
              {columns.map((col) => (
                <div key={col.title} className="footer__col">
                  <h3 className="footer__col-title">{col.title}</h3>
                  {col.links.map((link) => (
                    <a key={link.label} href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="container_layout">
          <div className="footer__bottom-inner">
            {/* Copyright */}
            <p className="footer__copy">{copyrightText}</p>

            {/* Social icons */}
            <div className="footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.ariaLabel}
                  href={social.href}
                  className="footer__social-btn"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
