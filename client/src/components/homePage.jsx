import React from 'react';
import ReactDom from 'react-dom';
import HomeNavDiv from './homeNavDiv.jsx';
import MainContent from './mainContent.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 'main'
    }
    this.changeWindow = this.changeWindow.bind(this);
  }

  changeWindow(newWindow) {
    this.setState({
      window: newWindow
    })
  }

  render() {
    const {window} = this.state;
    let mainWindow;
    if (window === 'main') {
      mainWindow = <h1>Main Window</h1>;
    } else {
      mainWindow = <h1>Not the Main Window</h1>;
    }
    return (
      <div className="home-main-div">
        <HomeNavDiv clickFunction={this.changeWindow}/>
        <MainContent content = {window}/>
      </div>
    )
  }
}

export default HomePage;