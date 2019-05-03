import React from 'react';
import ReactDom from 'react-dom';
import HomeNavDiv from './homeNavDiv.jsx';
import MainContent from './mainContent.jsx';
import SocialMedia from './socialMedia.jsx';
import { BrowserRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { language } = this.props;
    const { width } = this.state;
    const isMobile = width < 1080;
    return (
      <BrowserRouter>
        <div className="home-main-div">
            <HomeNavDiv language={ language } languageChange={this.props.languageChange} isMobile={isMobile}/>
            <MainContent language={ language } isMobile={isMobile} />
            <SocialMedia language={ language } isMobile={isMobile} languageChange={this.props.languageChange} />
        </div>
      </BrowserRouter>
    )
  }
}

export default HomePage;