import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>{t('footer.contactUs')}</h2>
          <p>{t('footer.address')}</p>
          <p>{t('footer.email')}</p>
        </div>
        <div className="footer-section">
          <h2>{t('footer.followUs')}</h2>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <a href="#privacy-policy">{t('footer.privacyPolicy')}</a>
          <a href="#terms-of-service">{t('footer.termsOfService')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
