import React from "react";

const General = (props) => {
  const info = props.info;
  const address = info.address;
  const eventLocation = `, ${address.street}, ${address.city}, ${address.state} ${address.zipcode}`;
  const artists = info.content[4].members;
  const team = info.content[3].members;
  return (
    <div>
      <h2>{info.title}</h2>
      <p className="event-body-general-slogan">{info.slogan}</p>
      <p>{`Location: `}<a href={address.url} target="_blank">{address.location}</a>{eventLocation}</p>
      <div className="general-people-list">
        <div>
          <p className="event-body-artists-title">FEATURED ARTISTS</p>
          {artists.map((artist, idx) => {
            return (<p key={`artist ${idx}`}>{artist.name}</p>);
          })}
        </div>
        <div>
          <p className="event-body-artists-title">TEAM</p>
          {team.map((member, idx) => {
            return (<p key={`member ${idx}`}>{member.name}</p>);
          })}
        </div>
      </div>
    </div>
  )
}

export default General;