import React from 'react';
import '../i18n.js';  // Import your i18n setup
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();  // Get the i18n instance

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Switch to the selected language
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hi')}>Hindi</button>
      <button onClick={() => changeLanguage('ta')}>Tamil</button>
      <button onClick={() => changeLanguage('te')}>Telugu</button>
      <button onClick={() => changeLanguage('ka')}>Kannada</button>  {/* Added Kannada */}
    </div>
  );
};

export default LanguageSwitcher;
