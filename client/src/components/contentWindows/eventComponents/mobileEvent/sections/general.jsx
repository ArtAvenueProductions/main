import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { info } = this.props;
    const { address } = info;
    const team = info.content[3];
    const artists = info.content[4];

    return (
      <div className="mobile-event-general-div">
        <h1>{info.title}</h1>
        <p className="mobile-event-general-slogan">{info.slogan}</p>
        <p className="mobile-event-general-address">Location: <a href={address.url} target="_blank">{address.location}</a></p>
        <p className="mobile-event-general-address">{`${address.street}, ${address.city}, ${address.state} ${address.zipcode}`}</p>
        <div className="mobile-event-members-general">
          <div>
            <h3 className="mobile-event-members-title">{`Featured ${artists.title}`}</h3>
            {artists.members.map((key, i) => {
              return (
                <p key={`event-artists-general-${i}`}>{key.name}</p>
              )
            })}
          </div>
          <div>
            <h3 className="mobile-event-members-title">{team.title}</h3>
            {team.members.map((key, i) => {
              return (
                <p key={`event-team-general-${i}`}>{key.name}</p>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default General;