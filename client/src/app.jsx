import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/homePage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'English',
      english: {},
      traditional: {},
      simplified: {}
    }
  }

  render() {
    const {language, english, traditional, simplified} = this.state;
    const library = language === 'English' ? english : language === 'Traditional' ? traditional : simplified;
    return (
      <HomePage info={library}/>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));