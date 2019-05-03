import React from "react";

const Artists = (props) => {
  const { info } = props;
  return (
    <div className="mobile-event-team-div">
      <h1 className="mobile-event-artists-title">{info.title}</h1>
      {info.members.map((artist, i) => {
        return (
          <div key={`mobile-event-artists-member-${i}`} className="mobile-event-artists-member-div">
            <div className="mobile-event-artists-info-div">
              <div className="mobile-event-artists-member-img-div">
                <div></div>
                <div className="mobile-event-artists-member-img-holder">
                  <img src={artist.imgUrl} className="mobile-event-member-img" />
                </div>
                <div></div>
              </div>
              <div>
                <p>{artist.name}</p>
                <p>{artist.info}</p>
              </div>
            </div>
            <div>{artist.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Artists;