import React from "react";

class EventPanel extends React.Component {
  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return monthNames[date.getMonth()];
  }

  render() {
    const { eventInfo } = this.props;
    const address = eventInfo.address;
    const monthString = this.formatDate(eventInfo.date);
    return (
      <div className="event-panel-div">
        <div className="event-panel-img-div">
          <img style={{height: "100%", width: "100%", objectFit: "contain"}} src={eventInfo.imgUrl} />
        </div>
        <div className="event-panel-info-div">
          <div className="event-panel-date">
            <p>{monthString}</p>
            <p className="event-panel-date-day">{eventInfo.date.getDate()}</p>
          </div>
          <div className="event-panel-title">
            <p>{eventInfo.title}</p>
          </div>
          <div className="event-panel-address">
            <p>{`at `}<a href={address.url} target="_blank">{address.location}</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default EventPanel;