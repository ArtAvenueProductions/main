import React from "react";
import Member from "./member.jsx";

const Artist = (props) => {
  const { key, artist } = props;
  return (
    <div key={key} className="artist-div">
      <div className="artist-info-div">
        <img src={artist.imgUrl} className="artist-img" />
        <p>{artist.info}</p>
      </div>
      <p>{artist.description}</p>
    </div>
  )
}

export default Artist;