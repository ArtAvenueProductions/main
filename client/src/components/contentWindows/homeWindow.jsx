import React from 'react';
import ReactPlayer from 'react-player';

class HomeWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: (<div className="home-video-overlay"></div>),
      withinVideo: false
    };

    this.video = React.createRef();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeaveFirst = this.handleMouseLeaveFirst.bind(this);
    this.handleMouseLeaveSecond = this.handleMouseLeaveSecond.bind(this);
    // this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    // this.handleFadeIn = this.handleFadeIn(this);
  }

  handleOverlayClick() {
    console.log(document.getElementsByClassName('home-video-overlay')[0]);
    document.getElementsByClassName('home-video-overlay')[0].setAttribute("style", "display:none");
    document.getElementById('home-vid').controls = true;
    document.getElementById('home-vid').setAttribute("style", "opacity: 1");
    document.getElementById('home-vid').play();
  }

  // handleVideoClick() {
  //   console.log(document.getElementById('home-vid').volume);
  //   document.getElementById('home-vid').muted = !document.getElementById('home-vid').muted;
  // }

  componentDidMount() {
    setTimeout(() => {this.handleMouseLeaveFirst()}, 1000);
  }

  handleMouseEnter() {
    this.setState({
      overlay: (<div className="home-video-overlay"><h2 className="h2-overlay">People around the world, all have stories to tell.</h2><h2 className="h2-overlay">Let's tell these stories through art, at Art Avenue.</h2><h2 className="watch-our-reel h2-overlay" onClick={() => this.handleOverlayClick()}>Play Now</h2></div>),
      withinVideo: true
    })
  }

  handleMouseLeaveFirst() {
    this.setState({
      overlay: (<div className="home-video-overlay"><h2 className="h2-overlay">People around the world, all have stories to tell.</h2></div>)
    }, () => {
        setTimeout(() => {
          if (this.state.withinVideo) {
            this.handleMouseEnter();
          } else {
            this.handleMouseLeaveSecond()
          }
        }, 1500);
    });
  }

  handleMouseLeaveSecond() {
    this.setState({
      overlay: (<div className="home-video-overlay"><h2 className="h2-overlay">People around the world, all have stories to tell.</h2><h2 className="h2-overlay">Let's tell these stories through art, at Art Avenue.</h2></div>)
    });
  }

  componentWillMount() {
    const { isMobile } = this.props;
    if (isMobile) {
      this.handleMouseEnter();
    }
  }
  // handleFadeIn() {
  //   document.getElementById("h2-overlay-1").setAttribute("style", "opacity: 1, transition: all 1s ease");
  //   document.getElementById("h2-overlay-2").setAttribute("style", "opacity: 1");
  // }

  render() {
    const { isMobile } = this.props;
    const { overlay } = this.state;
    console.log(this.state.withinVideo);
    if (isMobile) {
      return (
      <div className="home-video">
        <div className="home-video-overlay">
          <h2 className="h2-overlay">
            People around the world, all have stories to tell.
          </h2>
          <h2 className="h2-overlay">
            Let's tell these stories through art, at Art Avenue.
          </h2>
          <h2 className="watch-our-reel h2-overlay" onClick={() => this.handleOverlayClick()}>Play Now
          </h2>
        </div>
        <video playinline="true" loop id="home-vid" className="mobile-home-video-player">
          <source src="https://s3.amazonaws.com/art-avenue-productions/artAvenue_reel_v05_h264.mp4" type="video/mp4"/>
        </video>
      </div>
    )
    }
    return (
      <div className="home-video" onMouseEnter={() => {
        this.setState({
          withinVideo: true
        }, () => {
          this.handleMouseEnter()
        })
      }} onMouseLeave={() => {
        this.setState({
          withinVideo: false
        }, () => {
          this.handleMouseLeaveSecond()
        })
      }}>
        {overlay}
        <video playinline="true" loop id="home-vid" className="home-video-player">
          <source src="https://s3.amazonaws.com/art-avenue-productions/artAvenue_reel_v05_h264.mp4" type="video/mp4"/>
        </video>
      </div>
    )
  }
}

export default HomeWindow;