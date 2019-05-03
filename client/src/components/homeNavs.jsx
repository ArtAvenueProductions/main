import React from 'react';
import ReactDom from 'react-dom';
import HomeLogo from './homeLogo.jsx';
import LangSelect from './langSelect.jsx';
import { NavLink } from 'react-router-dom';

class HomeNavs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        english: ["ABOUT", "WORK", "EVENTS", "CONTACT"],
        traditional: ["關於我們", "作品集", "活動", "聯絡我們"],
        simplified: ["关于我们", "作品集", "活动","联系我们"]
      },
      dropdown: false
    }
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  getClassNames(url, nav) {
    const subDomain = url.split('//')[1].split('/')[1];
    const { isMobile } = this.props;
    if (subDomain === nav) {
      if (isMobile) {
        return "nav-button navbar-button current-nav mobile-menu-category";
      }
      return "nav-button navbar-button current-nav";
    } else {
      if (isMobile) {
        return "nav-button navbar-button mobile-menu-category";
      }
      return "nav-button navbar-button";
    }
  }

  toggleDropDown() {
    const current = this.state.dropdown;
    this.setState({
      dropdown: !current
    }, () => {
      const maxHeight = document.getElementsByClassName("mobile-collapsible-menu")[0].style.maxHeight;
      if (maxHeight === "" || maxHeight === "0px") {
        document.getElementsByClassName("mobile-collapsible-menu")[0].style.maxHeight = "100%";
      } else {
        document.getElementsByClassName("mobile-collapsible-menu")[0].style.maxHeight = "0px";
      }
    })
  }

  render() {
    const { language, languageChange, isMobile } = this.props;
    const { info } = this.state;
    const context = info[language];
    const url = window.location.href;
    if (isMobile) {
      return (
        <div className="mobile-home-navs">
          <div className="mobile-home-navs-top-row">
            <div className="mobile-home-navs-logo">
              <HomeLogo isMobile={isMobile}/>
            </div>
            <div className="mobile-collapse-button-div">
              <button className="mobile-collapse-button" onClick={() => this.toggleDropDown()}><img src="https://img.icons8.com/windows/64/000000/menu.png" /></button>
            </div>
          </div>
          <div className="mobile-collapsible-menu">
            <NavLink to="/about" style={{ textDecoration: 'none' }} className="home-nav-link" onClick={() => this.toggleDropDown()}>
              <div className={this.getClassNames(url, "about")}>
                {context[0]}
              </div>
            </NavLink>
            <NavLink to="/work" style={{ textDecoration: 'none' }} className="home-nav-link" onClick={() => this.toggleDropDown()}>
              <div className={this.getClassNames(url, "work")}>
                {context[1]}
              </div>
            </NavLink>
            <NavLink to="/events" style={{ textDecoration: 'none' }} className="home-nav-link" onClick={() => this.toggleDropDown()}>
              <div className={this.getClassNames(url, "events")}>
                {context[2]}
              </div>
            </NavLink>
            <NavLink to="/contact" style={{ textDecoration: 'none' }} className="home-nav-link" onClick={() => this.toggleDropDown()}>
              <div className={this.getClassNames(url, "contact")}>
                {context[3]}
              </div>
            </NavLink>
          </div>
        </div>
      )
    } else {
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
          <HomeLogo isMobile={isMobile}/>
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
}

export default HomeNavs;