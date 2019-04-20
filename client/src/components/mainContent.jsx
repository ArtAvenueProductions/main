import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeWindow from "./contentWindows/homeWindow.jsx";
import AboutWindow from "./contentWindows/aboutWindow.jsx";
import WorkWindow from "./contentWindows/workWindow.jsx";
import EventsWindow from "./contentWindows/eventsWindow.jsx";
import ContactWindow from "./contentWindows/contactWindow.jsx";

const MainContent = (props) => {
  const { language } = props;
  return (
    <div>
      <Switch>
        <Route path="/" render={(props) => <HomeWindow {...props} language={language} />} exact/>
        <Route path="/about" render={(props) => <AboutWindow {...props} language={language} />} />
        <Route path="/work" render={(props) => <WorkWindow {...props} language={language} />} />
        <Route path="/events" render={(props) => <EventsWindow {...props} language={language} />} />
        <Route path="/contact" render={(props) => <ContactWindow {...props} language={language} />} />
      </Switch>
    </div>
  )
}

export default MainContent;