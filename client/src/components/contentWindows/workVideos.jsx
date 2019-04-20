import React from "react";
import { NavLink } from 'react-router-dom';

class WorkVideos extends React.Component {
  constructor(props) {
    super(props);
  }

  styleDivBg(src) {
    console.log(src);
    return ({
      backgroundImage: `url(${src})`
    });
  }

  render() {
    const { context, route } = this.props;
    const videos = context.videos;
    return (
      <div className="videos-div">
        <NavLink to="/work" className="back-to-work">
          back
        </NavLink>
        <div className="videos-title-div">
          <h1 className="videos-title">{context.name}</h1>
        </div>
        <div className="videos-box">
          {
            videos.map((video, i) => {
              if (i % 2 === 0 && videos[i + 1]) {
                return (
                  <div key={i} className="videos-row">
                    {
                      videos[i].status === "coming soon" ? 
                      (<div className="video-grid" style={{ backgroundImage: `url(${videos[i].img})`, backgroundSize: "cover" }}>
                        <h1 className="video-p">{videos[i].name}</h1>
                        <span className="coming-soon">COMING SOON</span>
                      </div>)
                      : 
                      (<NavLink to={`/work/${route}/${video.identifier}`} className="video-grid" style={{ textDecoration: "none", backgroundImage: `url(${videos[i].img})`, backgroundSize: "cover" }}>
                        <div key={i}>
                          <h1 className="video-p">{videos[i].name}</h1>
                        </div>
                      </NavLink>)
                    }
                    {
                      videos[i + 1].status === "coming soon" ? 
                      (<div className="video-grid" style={{ backgroundImage: `url(${videos[i + 1].img})`, backgroundSize: "cover" }}>
                        <h1 className="video-p">{videos[i + 1].name}</h1>
                        <span className="coming-soon">COMING SOON</span>
                      </div>)
                      : 
                      (<NavLink to={`/work/${route}/${videos[i + 1].identifier}`} className="video-grid" style={{ textDecoration: "none", backgroundImage: `url(${videos[i + 1].img})`, backgroundSize: "cover" }}>
                        <div key={i}>
                          <h1 className="video-p">{videos[i + 1].name}</h1>
                        </div>
                      </NavLink>)
                    }
                  </div>
                )
              } else if (i % 2 === 0) {
                return (
                  <div key={i} className="videos-row">
                    {
                      videos[i].status === "coming soon" ? 
                      (<div className="video-grid" style={{ backgroundImage: `url(${videos[i].img})`, backgroundSize: "cover" }}>
                        <h1 className="video-p">{videos[i].name}</h1>
                        <span className="coming-soon">COMING SOON</span>
                      </div>)
                      : 
                      (<NavLink to={`/work/${route}/${video.identifier}`} className="video-grid" style={{ textDecoration: "none", backgroundImage: `url(${videos[i].img})`, backgroundSize: "cover" }}>
                        <div key={i}>
                          <h1 className="video-p">{videos[i].name}</h1>
                        </div>
                      </NavLink>)
                    }
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default WorkVideos;