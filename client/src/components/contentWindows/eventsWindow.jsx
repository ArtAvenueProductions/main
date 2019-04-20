import React from 'react';
import EventContainer from './eventContainer.jsx';

class EventsWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        upcoming: {
          english: "Upcoming Events",
          traditional: "活動預告",
          simplified: "活动预告"
        },
        past: {
          english: "Past Events",
          traditional: "過去活動",
          simplified: "过去活动"
        }
      },
      upcoming: [
        {
          eventId: 2,
          img: "",
          title: "Contemporary dissonance",
          dofW: "",
          day: "1-29",
          month: "Apr",
          year: "2019",
          time: "",
          venue: "TBD",
          location: "New York, NY, USA",
          url: ""
        }
      ],
      past: [
        {
          eventId: 1,
          img: "https://s3.amazonaws.com/art-avenue-productions/events/past-event-1.jpg",
          title: "RAW Brooklyn presents CONNECT",
          dofW: "Wed,",
          day: "26",
          month: "Sep",
          year: "2018",
          time: "7:00 PM",
          venue: "Brooklyn Bazzar",
          location: "15 Greenpoint Ave, Brooklyn, NY 11222, USA",
          url: "http://www.rawartists.org/katusha"
        }
      ]
    }
  }

  render() {
    const { title, upcoming, past } = this.state;
    const { language } = this.props;
    const upcomingTitle = title.upcoming[language];
    const pastTitle = title.past[language];
    return (
      <div className="events-canvas">
        <div>
          <h1 className="events-title">{upcomingTitle}</h1>
        </div>
        <div className="events-div">
        {
          upcoming.map((event) => {
            return (
              <EventContainer key={event.eventId} event={event}/>
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
              <EventContainer key={event.eventId} event={event}/>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default EventsWindow;