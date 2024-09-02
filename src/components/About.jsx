import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css'; // Import the CSS file

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="about-container">
      <h1>{t('aboutTitle')}</h1>
      <div className="content-section">
        <h2>{t('welcomeMessage')}</h2>
        <p>{t('description')}</p>
        <h3>{t('whyMultiLanguage')}</h3>
        <p>{t('multiLanguageExplanation')}</p>
        <h3>{t('features')}</h3>
        <ul>
          <li>{t('languageSwitcher')}</li>
          <li>{t('richContent')}</li>
          <li>{t('userFriendlyInterface')}</li>
          <li>{t('responsiveDesign')}</li>
        </ul>
        <h3>{t('mission')}</h3>
        <p>{t('missionStatement')}</p>
        <p>{t('thankYou')}</p>
      </div>
    </div>
  );
};

export default About;
