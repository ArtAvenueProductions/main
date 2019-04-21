import React from "react";
import Member from "./member.jsx";

const Artist = (props) => {
  const { key, artist } = props;
  return (
    <div key={key}>
      <Member description={artist} key={key} />
      <p>{artist.description}</p>
    </div>
  )
}

export default Artist;