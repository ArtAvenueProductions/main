import React from 'react';
import LangSelect from './langSelect.jsx';
import HomeNavs from './homeNavs.jsx';

const HomeNavDiv = (props) => {
  return (
    <div className="home-nav-div">
      <LangSelect language={props.language} languageChange={props.languageChange} />
      <HomeNavs language={props.language} />
    </div>
  )
}

export default HomeNavDiv;