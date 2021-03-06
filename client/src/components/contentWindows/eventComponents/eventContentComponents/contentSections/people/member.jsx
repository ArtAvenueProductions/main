import React from "react";

const Member = (props) => {
  const { description, key } = props;
  return (
    <div key={key} className="individual-info">
      <img src={description.imgUrl} className="member-img"/>
      <p>{description.info}</p>
    </div>
  )
}

export default Member;