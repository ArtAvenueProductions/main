import React from "react";

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);

    this.handleLanguageSelect = this.handleLanguageSelect.bind(this);
  }

  handleLanguageSelect(target) {
    console.log(target.target.value);
    this.props.languageChange(target.target.value);
  }

  render() {
    const { isMobile, languageChange, language } = this.props;
    if (isMobile) {
      return (
        <div className="mobile-bottom">
          <div></div>
          <div className="logos-div">
            <a href="https://www.facebook.com/artavenue.global/" target="_blank">
              <img src="https://s3.amazonaws.com/art-avenue-productions/icons/fb.jpg" className="mobile-social-logos" />
            </a>
            <a href="https://www.instagram.com/artavenue.global/" target="_blank">
              <img src="https://s3.amazonaws.com/art-avenue-productions/icons/ig.jpg" className="mobile-social-logos"/>
            </a>
            <a href="https://www.linkedin.com/company/art-avenue-productions/" target="_blank">
              <img src="https://s3.amazonaws.com/art-avenue-productions/icons/in.jpg" className="mobile-social-logos"/>
            </a>
            <img src="https://s3.amazonaws.com/art-avenue-productions/icons/yt.jpg" className="mobile-social-logos"/>
          </div>
          <div className="mobile-lang-select-div">
            <select value={language} className="mobile-lang-select" onChange={this.handleLanguageSelect}>
              <option value="english">English</option>
              <option value="traditional">繁體中文</option>
              <option value="simplified">简体中文</option>
            </select>
          </div>
        </div>
      )
    }
    return (
      <div className="logos-div">
        <a href="https://www.facebook.com/artavenue.global/" target="_blank">
          <img src="https://s3.amazonaws.com/art-avenue-productions/icons/fb.jpg" className="social-logos" />
        </a>
        <a href="https://www.instagram.com/artavenue.global/" target="_blank">
          <img src="https://s3.amazonaws.com/art-avenue-productions/icons/ig.jpg" className="social-logos"/>
        </a>
        <a href="https://www.linkedin.com/company/art-avenue-productions/" target="_blank">
          <img src="https://s3.amazonaws.com/art-avenue-productions/icons/in.jpg" className="social-logos"/>
        </a>
        <img src="https://s3.amazonaws.com/art-avenue-productions/icons/yt.jpg" className="social-logos"/>
      </div>
    )
  }
}

export default SocialMedia;