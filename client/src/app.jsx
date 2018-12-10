import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/homePage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    }
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(lang) {
    this.setState({
      language: lang
    })
  }

  render() {
    const { language } = this.state;
    return (
      <HomePage language={language} languageChange={this.handleLanguageChange}/>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));