import React from 'react';
import ReactDom from 'react-dom';
import HomeLogo from './homeLogo.jsx';
import { NavLink } from 'react-router-dom';

class HomeNavs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        english: ["ABOUT", "WORK", "EVENTS", "CONTACT"],
        traditional: ["關於我們", "作品集", "活動", "聯絡我們"],
        simplified: ["关于我们", "作品集", "活动","联系我们"]
      }
    }
  }

  getClassNames(url, nav) {
    const subDomain = url.split('//')[1].split('/')[1];
    if (subDomain === nav) {
      return "nav-button navbar-button current-nav";
    } else {
      return "nav-button navbar-button";
    }
  }

  render() {
    const { language } = this.props;
    const { info } = this.state;
    const context = info[language];
    const url = window.location.href;
    return (
      <div className="home-navs">
        <NavLink to="/about" style={{ textDecoration: 'none' }} className="home-nav-link">
          <div className={this.getClassNames(url, "about")}>
            {context[0]}
          </div>
        </NavLink>
        <NavLink to="/work" style={{ textDecoration: 'none' }} className="home-nav-link">
          <div className={this.getClassNames(url, "work")}>
            {context[1]}
          </div>
        </NavLink>
        <HomeLogo />
        <NavLink to="/events" style={{ textDecoration: 'none' }} className="home-nav-link">
          <div className={this.getClassNames(url, "events")}>
            {context[2]}
          </div>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: 'none' }} className="home-nav-link">
          <div className={this.getClassNames(url, "contact")}>
            {context[3]}
          </div>
        </NavLink>
      </div>
    )
  }
}

export default HomeNavs;