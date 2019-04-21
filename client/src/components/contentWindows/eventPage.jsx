import React from "react";
import EventPanel from "./eventComponents/eventPanel.jsx";
import EventBody from "./eventComponents/eventBody.jsx";

class EventPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eventInfo } = this.props;
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