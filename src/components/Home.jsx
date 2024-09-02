import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div style={styles.container}>
      <h2>{t('welcome')}</h2>
      <p>{t('description')}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#00000076',
    color: 'white',
  },
};

export default Home;
