import React from "react";
import EventPanel from "./eventComponents/eventPanel.jsx";
import EventBody from "./eventComponents/eventBody.jsx";
import MobileEvent from "./eventComponents/mobileEvent/mobileEvent.jsx";

class EventPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eventInfo, isMobile } = this.props;
    if (isMobile) {
      return (
        <MobileEvent eventInfo={eventInfo} />
      )
    }
    return (
      <div className="event-page-div">
        <EventPanel eventInfo={eventInfo} />
        <EventBody eventInfo={eventInfo} />
      </div>
    )
  }
        // <EventBody />

}

export default EventPage;