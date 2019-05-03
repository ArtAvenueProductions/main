import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { context, route, isMobile } = this.props;
    if (isMobile) {
      return (
        <div>
          <div className="mobile-video-top-row">
            <div className="mobile-video-back-div">
              <NavLink to={`/work/${route}`} className="back-to-category">
                <img src="https://img.icons8.com/metro/52/000000/back.png" className="mobile-back-button"/>
              </NavLink>
            </div>
            <div className="mobile-video-title-div">
              <p className="mobile-video-title">{context.name}</p>
            </div>
            <div>
            </div>
          </div>
          <div className="mobile-video-container-div">
            <ReactPlayer controls url={context.link} className="mobile-work-video" width="100%" minHeight="360px" />
          </div>
        </div>
      )
    }
    return (
      <div className="video-container-div">
        <NavLink to={`/work/${route}`} className="back-to-category">
          back
        </NavLink>
        <h1 className="video-title">{context.name}</h1>
        <div className="work-video-div">
          <ReactPlayer controls url={context.link}/>
        </div>
      </div>
    )
  }
}

export default VideoContainer;