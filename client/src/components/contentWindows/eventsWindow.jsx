import React from 'react';
import EventContainer from './eventContainer.jsx';
import EventsList from './eventsList.jsx';
import EventPage from './eventPage.jsx';
import { Route, Switch } from "react-router-dom";
import contemporaryDissonance from "./../../events/contemporaryDissonance.js";

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
          locationUrl: "https://www.google.com/maps/place/OUTRO+NYC/@40.7327739,-73.9909446,15z/data=!4m2!3m1!1s0x0:0xf05f25545c3910be?sa=X&ved=2ahUKEwiLmdbI0-HhAhXEmOAKHZofDv8Q_BIwCnoECAsQCA",
          img: "https://s3.amazonaws.com/art-avenue-productions/events/contemporaryDissonance.png",
          title: "Contemporary Dissonance",
          dofW: "Sun",
          day: "19",
          month: "May",
          year: "2019",
          venue: "Outro NYC",
          location: "New York, NY, USA",
          navlink: "ContemporaryDissonance",
          external: false
        }
      ],
      past: [
        {
          eventId: 1,
          locationUrl: "https://www.google.com/maps/place/Brooklyn+Bazaar/@40.7299355,-73.9546495,15z/data=!4m2!3m1!1s0x0:0x753d4bec0b60c0f4?sa=X&ved=2ahUKEwjFkMOD1eHhAhXhlOAKHfK1Dp0Q_BIwG3oECAsQCA0",
          img: "https://s3.amazonaws.com/art-avenue-productions/events/past-event-1.jpg",
          title: "RAW Brooklyn presents CONNECT",
          dofW: "Wed",
          day: "26",
          month: "Sep",
          year: "2018",
          time: "7:00 PM",
          venue: "Brooklyn Bazzar",
          location: "15 Greenpoint Ave, Brooklyn, NY 11222, USA",
          url: "http://www.rawartists.org/katusha",
          external: true
        }
      ]
    }
  }

  render() {
    const { language, isMobile } = this.props;
    const { title, upcoming, past } = this.state;
    if (isMobile) {
      return (
        <div className="mobile-outer-events-canvas">
          <Switch>
            <Route path="/events" exact render={(props) => <EventsList {...props} title={title} upcoming={upcoming} past={past} language={language} isMobile={isMobile}/>}/>
            <Route path="/events/ContemporaryDissonance" exact render={(props) => <EventPage {...props} eventInfo={contemporaryDissonance} isMobile={isMobile} />} />
          </Switch>
        </div>
      )
    }
    return(
      <div className="events-canvas">
        <Switch>
          <Route path="/events" exact render={(props) => <EventsList {...props} title={title} upcoming={upcoming} past={past} language={language} isMobile={isMobile}/>}/>
          <Route path="/events/ContemporaryDissonance" exact render={(props) => <EventPage {...props} eventInfo={contemporaryDissonance} isMobile={isMobile} />} />
        </Switch>
      </div>
    )
  }

  // render() {
  //   const { title, upcoming, past } = this.state;
  //   const { language } = this.props;
  //   const upcomingTitle = title.upcoming[language];
  //   const pastTitle = title.past[language];
  //   return (
  //     <div className="events-canvas">
  //       <div>
  //         <h1 className="events-title">{upcomingTitle}</h1>
  //       </div>
  //       <div className="events-div">
  //       {
  //         upcoming.map((event) => {
  //           return (
  //             <EventContainer key={event.eventId} event={event}/>
  //           )
  //         })
  //       }
  //       </div>
  //       <div className="past-events-div">
  //         <h1 className="events-title">{pastTitle}</h1>
  //       </div>
  //       <div className="events-div past-div">
  //       {
  //         past.map((event) => {
  //           return (
  //             <EventContainer key={event.eventId} event={event}/>
  //           )
  //         })
  //       }
  //       </div>
  //     </div>
  //   )
  // }
}

export default EventsWindow;