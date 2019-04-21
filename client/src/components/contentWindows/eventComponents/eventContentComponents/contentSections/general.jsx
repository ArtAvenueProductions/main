import React from "react";

const General = (props) => {
  const info = props.info;
  const address = info.address;
  const eventLocation = `${address.location}, ${address.street}, ${address.city}, ${address.state} ${address.zipcode}`;
  const artists = info.content[4].members;
  const team = info.content[3].members;
  return (
    <div>
      <img src={info.imgUrl} style={{width: "70%", height: "auto", objectFit: "contain"}} />
      <h2>{info.title}</h2>
      <p>{`Location: ${eventLocation}`}</p>
      <div className="general-people-list">
        <div>
          <p>Featured Artists:</p>
          {artists.map((artist, idx) => {
            return (<p key={`artist ${idx}`}>{artist.name}</p>);
          })}
        </div>
        <div>
          <p>Team:</p>
          {team.map((member, idx) => {
            return (<p key={`member ${idx}`}>{member.name}</p>);
          })}
        </div>
      </div>
    </div>
  )
}

export default General;