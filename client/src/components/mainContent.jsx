import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeWindow from "./contentWindows/homeWindow.jsx";
import AboutWindow from "./contentWindows/aboutWindow.jsx";
import WorkWindow from "./contentWindows/workWindow.jsx";
import EventsWindow from "./contentWindows/eventsWindow.jsx";
import ContactWindow from "./contentWindows/contactWindow.jsx";

const MainContent = (props) => {
  const { language, isMobile } = props;
  return (
    <div>
      <Switch>
        <Route path="/" render={(props) => <HomeWindow {...props} language={language} isMobile={isMobile} />} exact/>
        <Route path="/about" render={(props) => <AboutWindow {...props} language={language} isMobile={isMobile} />} />
        <Route path="/work" render={(props) => <WorkWindow {...props} language={language} isMobile={isMobile} />} />
        <Route path="/events" render={(props) => <EventsWindow {...props} language={language} isMobile={isMobile} />} />
        <Route path="/contact" render={(props) => <ContactWindow {...props} language={language} isMobile={isMobile} />} />
      </Switch>
    </div>
  )
}

export default MainContent;