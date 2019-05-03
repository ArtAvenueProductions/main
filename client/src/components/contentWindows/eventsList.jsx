import React from "react";
import EventContainer from "./eventContainer.jsx";


class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { language, title, upcoming, past, isMobile } = this.props;
    const upcomingTitle = title.upcoming[language];
    const pastTitle = title.past[language];
    return (
      <div>
        <div>
          <h1 className="events-title">{upcomingTitle}</h1>
        </div>
        <div className={isMobile ? "mobile-events-div" : "events-div"}>
          {
            upcoming.map((event) => {
              return (
                <EventContainer key={event.eventId} event={event} isMobile={isMobile}/>
              )
            })
          }
        </div>
        <div className="past-events-div">
          <h1 className="events-title">{pastTitle}</h1>
        </div>
        <div className="events-div past-div">
        {
          past.map((event) => {
            return (
              <EventContainer key={event.eventId} event={event} isMobile={isMobile}/>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default EventsList;