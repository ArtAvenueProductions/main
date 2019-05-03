import React from "react";

const Concept = (props) => {
  const { info } = props;
  return (
    <div className="mobile-event-historical-div">
      <h2>{info.title}</h2>
      {info.body.map((key, i) => {
        return (
          <p key={`mobile-event-concept-p-${i}`}>{key}</p>
        )
      })}
    </div>
  )
}

export default Concept;