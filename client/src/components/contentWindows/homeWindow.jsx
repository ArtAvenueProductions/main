import React from 'react';
import ReactPlayer from 'react-player';

class HomeWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  handleVideoClick() {
    console.log(document.getElementById('home-vid').volume);
    document.getElementById('home-vid').muted = !document.getElementById('home-vid').muted;
  }

  componentDidMount() {
    document.getElementById('home-vid').play();
  }

  render() {
    console.log(this.props.language);
    return (
      <div className="home-video-player">
        <video autoPlay muted loop id="home-vid" onClick={() => this.handleVideoClick()}>
          <source src="https://s3.amazonaws.com/art-avenue-productions/artAvenue_reel_v03.mp4" type="video/mp4"/>
        </video>
      </div>
    )
  }
}

export default HomeWindow;