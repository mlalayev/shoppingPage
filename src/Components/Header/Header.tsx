import './Header.css';
import React, { useState } from 'react';
import samsung from '../../assets/samsung.png';
import iphone from '../../assets/iphonelogo.png';
import honor from '../../assets/honorlogo.png';
import irsad from '../../assets/0171.png';
import aze from '../../assets/az.svg';
import gb from '../../assets/gb.svg';
import rus from '../../assets/ru.svg';
import az from '../../../src/Components/translation/az/global.json';
import en from '../../../src/Components/translation/en/global.json';
import ru from '../../../src/Components/translation/ru/global.json';
import { RxPerson } from "react-icons/rx";

const Header: React.FC = () => {
  const [language, setLanguage] = useState('az');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const getCurrentLanguageLabel = () => {
    switch (language) {
      case 'az':
        return { label: 'Azərbaycan', flag: aze };
      case 'en':
        return { label: 'English', flag: gb };
      case 'ru':
        return { label: 'Russkiy', flag: rus };
      default:
        return { label: 'Azərbaycan', flag: aze };
    }
  };

  const translations = language === 'az' ? az : language === 'en' ? en : ru;

  return (
    <header>
      <div className="mobile-header-holder">
        <a href="#">{translations.header.companies}</a>
        <a href="#">{translations.header.stores}</a>
        <button className='outlet'>{translations.header.outlet}</button>
      </div>

      <div className="desktop-header-holder">
        <div className="headerleft">
          <a href="#">{translations.header.companies}</a>
          <a href="#">{translations.header.stores}</a>
          <a href="#">{translations.header.korporativ}</a>
          <a href="#"><img src={samsung} alt="SamsungLogo" className='samsung logo' /></a>
          <a href="#"><img src={iphone} alt="IphoneLogo" className='iphone logo' /></a>
          <a href="#"><img src={honor} alt="HonorLogo" className='honor logo' /></a>
          <button className='outlet'>{translations.header.outlet}</button>
          <button className='bicycle outlet'>{translations.header.bicycle}</button>
        </div>
        <div className="headerright">
          <a href="#"><img src={irsad} alt="0171logo" className='irshad logo' /></a>
          <div className="verticalline"></div>
          <div className="language-switcher">
            <button className="current-language" onClick={() => setLanguage(language)}>
              <img src={getCurrentLanguageLabel().flag} className='flag' alt={getCurrentLanguageLabel().label} />
              {getCurrentLanguageLabel().label}
            </button>
            <ul className="language-options">
              <li>
                <button className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>
                  <img src={gb} className='flag' alt="English" />
                  English
                </button>
              </li>
              <li>
                <button className={language === 'az' ? 'active' : ''} onClick={() => changeLanguage('az')}>
                  <img src={aze} className='flag' alt="Azərbaycan" />
                  Azərbaycan
                </button>
              </li>
              <li>
                <button className={language === 'ru' ? 'active' : ''} onClick={() => changeLanguage('ru')}>
                  <img src={rus} className='flag' alt="Russkiy" />
                  Русский
                </button>
              </li>
            </ul>
          </div>
          <div className="personalplace">
          <RxPerson /> <p>Şəxsi kabinet</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
