import React from "react";

const Concept = (props) => {
  const body = props.info.body;
  const title = props.info.title;
  console.log(body);
  return (
    <div className="event-body-content-paragraphs">
      <h2>Concept</h2>
      {body.map((paragraph, idx) => {
        return (<p key={`${title} ${idx}`}>{paragraph}</p>);
      })}
    </div>
  )
}

export default Concept;