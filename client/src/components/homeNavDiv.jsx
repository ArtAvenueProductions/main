import React from 'react';
// import ReactDom from 'react-dom';
import HomeLogo from './homeLogo.jsx';
import LangSelect from './langSelect.jsx';
import HomeNavs from './homeNavs.jsx';

const HomeNavDiv = (props) => {
  return (
    <div className="home-nav-div">
      <div>
        <HomeLogo />
        <LangSelect />
      </div>
      <HomeNavs changeWindow={props.clickFunction}/>
    </div>
  )
}

export default HomeNavDiv;