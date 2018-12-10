import React from 'react';
import ReactDom from 'react-dom';
import HomeNavDiv from './homeNavDiv.jsx';
import MainContent from './mainContent.jsx';
import SocialMedia from './socialMedia.jsx';
import { BrowserRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { language } = this.props;
    return (
      <BrowserRouter>
        <div className="home-main-div">
            <HomeNavDiv language={ language } languageChange={this.props.languageChange} />
            <MainContent language={ language } />
            <SocialMedia />
        </div>
      </BrowserRouter>
    )
  }
}

export default HomePage;