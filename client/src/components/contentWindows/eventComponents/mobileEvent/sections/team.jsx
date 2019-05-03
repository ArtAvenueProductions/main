import React from "react";

const Team = (props) => {
  const { info } = props;
  return (
    <div className="mobile-event-team-div">
      <h1>{info.title}</h1>
      {info.members.map((member, i) => {
        return (
          <div key={`mobile-event-team-member-${i}`} className="mobile-event-team-member-div">
            <div className="mobile-event-team-member-img-div">
              <div></div>
              <div className="mobile-event-team-member-img-holder">
                <img src={member.imgUrl} className="mobile-event-member-img" />
              </div>
              <div></div>
            </div>
            <div>
              <p>{`${member.name} - ${member.title}`}</p>
              <p>{member.info}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Team;