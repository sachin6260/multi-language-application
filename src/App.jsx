import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
 import Footer from './components/Footer'; // Optional, if you have a footer component
import Home from './components/Home';
import About from './components/About';

const App = () => {
  const { i18n } = useTranslation();
  
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="app">
        <Header onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={ <About/>} />
        </Routes>
        <Footer /> {/* Optional, if you have a footer component */}
      </div>
    </Router>
  );
};

export default App;
