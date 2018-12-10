import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

const HomeNavs = (props) => {
  const info = {
    english: ["ABOUT", "WORK", "EVENTS", "CONTACT"],
    traditional: ["關於我們", "作品集", "活動", "聯絡我們"],
    simplified: ["关于我们", "作品集", "活动","联系我们"]
  }
  const context = info[props.language];
  return (
    <div className="home-navs">
      <NavLink to="/about" style={{ textDecoration: 'none' }}>
        <div className="nav-button navbar-button">
          {context[0]}
        </div>
      </NavLink>
      <NavLink to="/work" style={{ textDecoration: 'none' }}>
        <div className="nav-button navbar-button">
          {context[1]}
        </div>
      </NavLink>
      <NavLink to="/events" style={{ textDecoration: 'none' }}>
        <div className="nav-button navbar-button">
          {context[2]}
        </div>
      </NavLink>
      <NavLink to="/contact" style={{ textDecoration: 'none' }}>
        <div className="nav-button navbar-button">
          {context[3]}
        </div>
      </NavLink>
    </div>
  )
}

export default HomeNavs;