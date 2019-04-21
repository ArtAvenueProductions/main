import React from "react";
import General from "./contentSections/general.jsx";
import Historical from "./contentSections/historical.jsx";
import Concept from "./contentSections/concept.jsx";
import Team from "./contentSections/team.jsx";
import Artists from "./contentSections/artists.jsx";

const content = (props) => {
  const { displayInfo } = props;
  const { title } = displayInfo;
  if (title === "Contemporary Dissonance") {
    return (
      <General info={displayInfo} />
    );
  } else if (title === "Historical") {
    return (
      <Historical info={displayInfo} />
    );
  } else if (title === "Concept") {
    return (
      <Concept info={displayInfo} />
    );
  } else if (title === "Team") {
    return (
      <Team info={displayInfo} />
    );
  } else if (title === "Artists") {
    return (
      <Artists info={displayInfo} />
    );
  }
}

export default content;