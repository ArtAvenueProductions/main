import React from "react";
import Artist from "./people/artist.jsx";

const Artists = (props) => {
  const artists = props.info.members;
  console.log(artists);
  return (
    <div className="event-body-content-artists">
      <h3>Artists</h3>
      {artists.map((artist, idx) => {
        return (<Artist key={`artist ${idx}`} artist={artist} />);
      })}
    </div>
  )
}

export default Artists;