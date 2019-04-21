import React from "react";
import Member from "./people/member.jsx";

const Team = (props) => {
  const members = props.info.members;
  return (
    <div>
      <h2>Team</h2>
      {members.map((member, idx) => {
        return (<Member key={`member ${idx}`} description={member} />);
      })}
    </div>
  )
}

export default Team;