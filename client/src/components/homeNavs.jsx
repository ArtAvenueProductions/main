import React from 'react';
import ReactDom from 'react-dom';

const HomeNavs = (props) => {
  return (
    <div className="home-navs">
      <div onClick={() => props.changeWindow("main")}>ART AVENUE PRODUCTIONS</div>
      <div onClick={() => props.changeWindow("about")}>ABOUT</div>
      <div onClick={() => props.changeWindow("work")}>WORK</div>
      <div onClick={() => props.changeWindow("events")}>EVENTS</div>
      <div onClick={() => props.changeWindow("contact")}>CONTACT</div>
    </div>
  )
}

export default HomeNavs;