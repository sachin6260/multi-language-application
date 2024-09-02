import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css'; // Ensure to create and include the CSS file

const Header = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h2 className='logos'>MultiVerse

</h2>
       </div>
      <div className="header-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="header-right">
        <button onClick={() => handleLanguageChange('en')} className="language-btn">English</button>
        <button onClick={() => handleLanguageChange('hi')} className="language-btn">Hindi</button>
      </div>
    </header>
  );
};

export default Header;
