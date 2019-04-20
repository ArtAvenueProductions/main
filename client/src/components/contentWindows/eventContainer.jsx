import React from 'react';

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  hoverEvent(e) {
    this.setState({
      hovered: true
    });
  }

  leaveEvent(e) {
    this.setState({
      hovered: false
    });
  }

  render() {
    const { event } = this.props;
    const { hovered } = this.state;
    if (event.img === "") {
      event.img = "https://s3.amazonaws.com/art-avenue-productions/events/coming-soon.jpg";
    }
          // { hovered ? 
          //   <p>{`${event.month} ${event.day} ${event.year} ${event.time}`}<br/>{`${event.venue}, ${event.location}`}</p>
          //   :
          //   <p>{`${event.dofW} ${event.month} ${event.day} | ${event.venue}`}</p>
          //   }
    return (
      <div className="event-container" onMouseEnter={(e) => this.hoverEvent(e)} onMouseLeave={(e)=> this.leaveEvent(e)}>
        <div className="event-photo-div">
          <img className="event-photo" src={event.img} />
        </div>
        <div className="event-info-div">
          <h2>{event.title}</h2>
          <p>{`${event.dofW} ${event.month} ${event.day} | ${event.venue}`}</p>
          <a href={event.url} target="_blank"><button className="register-button">
          {event.url ? "Register Now" : "Coming Soon"}</button></a>
        </div>
      </div>
    )
  }
}

export default EventContainer;