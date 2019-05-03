import React from "react";
import General from "./sections/general.jsx";
import Historical from "./sections/historical.jsx";
import Concept from "./sections/concept.jsx";
import Team from "./sections/team.jsx";
import Artists from "./sections/artists.jsx";

class MobileEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: (<General info={this.props.eventInfo} />)
    }
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.renderSection = this.renderSection.bind(this);
  }

  renderSection(category, info) {
    let newSection;
    if (category === "Historical") {
      newSection = (<Historical info={info}/>);
    } else if (category === "Concept") {
      newSection = (<Concept info={info} />);
    } else if (category === "Team") {
      newSection = (<Team info={info} />);
    } else if (category === "Artists") {
      newSection = (<Artists info={info} />);
    } else {
      newSection = (<General info={this.props.eventInfo} />);
    }
    this.setState({
      section: newSection
    })
  }

  render() {
    const { eventInfo } = this.props;
    const { section } = this.state;
    const { address, date } = eventInfo;
    const team = eventInfo.content[3];
    const artists = eventInfo.content[4];
    let hour = date.getHours();
    const amOrPm = hour < 12 ? "AM" : "PM";
    hour %= 12;
    return (
      <div className="mobile-event-canvas">
        <img style={{height: "100%", width: "100%", objectFit: "contain"}} src={eventInfo.imgUrl} />
        <div className="mobile-event-title-div">
          <h2 className="mobile-event-title">{eventInfo.title}</h2>
          <p className="mobile-event-title-location">at <a href={address.url} target="_blank">{address.location}</a></p>
        </div>
        <div className="mobile-event-date-and-time">
          <div className="mobile-event-dat-img">
            <img src="https://img.icons8.com/ios/50/000000/calendar.png" />
          </div>
          <div className="mobile-event-dat">
            <p>{`${this.day[date.getDay()]}, ${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
            <p>{`${hour}:${date.getMinutes()} ${amOrPm} EDT`}</p>
          </div>
        </div>
        <div className="mobile-event-location">
          <div className="mobile-event-dat-img">
            <img src="https://img.icons8.com/ios/50/000000/marker.png" />
          </div>
          <div className="mobile-event-dat">
            <a href={address.url} target="_blank"><p>{address.location}</p></a>
            <p>{`${address.street}, ${address.city}, ${address.state} ${address.zipcode}`}</p>
          </div>
        </div>
        <div className="mobile-event-members">
          <div>
            <h3 className="mobile-event-members-title">{`Featured ${artists.title}`}</h3>
            {artists.members.map((key, i) => {
              return (
                <p key={`event-artists-${i}`}>{key.name}</p>
              )
            })}
          </div>
          <div>
            <h3 className="mobile-event-members-title">{team.title}</h3>
            {team.members.map((key, i) => {
              return (
                <p key={`event-team-${i}`}>{key.name}</p>
              )
            })}
          </div>
        </div>
        <div className="mobile-event-categories">
          {eventInfo.content.map((key, i) => {
            return <div className="mobile-event-category"><p key={`mobile-event-categories-${i}`} onClick={() => this.renderSection(key.title, key)}>{key.title}</p></div>
          })}
        </div>
        <div className="mobile-event-section-div">
          {section}
        </div>
      </div>
    )
  }
}

export default MobileEvent;