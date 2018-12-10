import React from 'react';
import HomeLogo from './homeLogo.jsx';
import LangSelect from './langSelect.jsx';
import HomeNavs from './homeNavs.jsx';

const HomeNavDiv = (props) => {
  return (
    <div className="home-nav-div">
      <div>
        <HomeLogo />
        <LangSelect language={props.language} languageChange={props.languageChange} />
      </div>
      <HomeNavs language={props.language} />
    </div>
  )
}

export default HomeNavDiv;