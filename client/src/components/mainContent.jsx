import React from "react";
import AboutWindow from "./contentWindows/aboutWindow.jsx";
import WorkWindow from "./contentWindows/workWindow.jsx";


const MainContent = (props) => {
  let currentContent;
  if (props.content === "main") {
    currentContent = <h1>Main video</h1>;
  } else if (props.content === "about") {
    currentContent = <AboutWindow />;
  } else if (props.content === "work") {
    currentContent = <WorkWindow />;
  } else if (props.content === "events") {
    currentContent = <h1>Events</h1>;
  } else {
    currentContent = <h1>Contact</h1>;
  }
  return (
    <div>
      {currentContent}
    </div>
  )
}

export default MainContent;