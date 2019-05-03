import React from 'react';
import LangSelect from './langSelect.jsx';
import HomeNavs from './homeNavs.jsx';

const HomeNavDiv = (props) => {
  const { language, isMobile, languageChange } = props;
  if (isMobile) {
    return (
      <div className="mobile-home-nav-div">
        <HomeNavs language={language} languageChange={languageChange} isMobile={isMobile} />
      </div>
    )
  } else {
    return (
      <div className="home-nav-div">
        <LangSelect language={language} languageChange={languageChange} isMobile={isMobile} />
        <HomeNavs language={language} languageChange={languageChange} isMobile={isMobile} />
      </div>
    )
  }
}

export default HomeNavDiv;