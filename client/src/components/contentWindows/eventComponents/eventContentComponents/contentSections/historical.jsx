import React from "react";

const Historical = (props) => {
  const body = props.info.body;
  const title = props.info.title;
  console.log(body);
  return (
    <div>
      {body.map((paragraph, idx) => {
        return (<p key={`${title} ${idx}`}>{paragraph}</p>);
      })}
    </div>
  )
}

export default Historical;