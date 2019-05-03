import React from "react";

const Historical = (props) => {
  const { info } = props;
  return (
    <div className="mobile-event-historical-div">
      <h2>{`${info.title} Background`}</h2>
      {info.body.map((key, i) => {
        return (
          <p key={`mobile-event-historical-p-${i}`}>{key}</p>
        )
      })}
    </div>
  )
}

export default Historical;