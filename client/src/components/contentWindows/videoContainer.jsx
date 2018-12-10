import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { context, route } = this.props;
    return (
      <div className="video-container-div">
        <NavLink to={`/work/${route}`} className="back-to-category">
          back
        </NavLink>
        <h1 className="video-title">{context.name}</h1>
        <div className="work-video-div">
          <ReactPlayer controls url={context.link} />
        </div>
      </div>
    )
  }
}

export default VideoContainer;