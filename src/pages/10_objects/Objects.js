import React from "react";
import OBJECTS_1 from "./objects_components/OBJECTS_1";
import OBJECTS_2 from "./objects_components/OBJECTS_2";
import OBJECTS_3 from "./objects_components/OBJECTS_3";
import OBJECTS_4 from "./objects_components/OBJECTS_4";
import OBJECTS_5 from "./objects_components/OBJECTS_5";
import OBJECTS_6 from "./objects_components/OBJECTS_6";
import OBJECTS_7 from "./objects_components/OBJECTS_7";
import OBJECTS_8 from "./objects_components/OBJECTS_8";
import OBJECTS_9 from "./objects_components/OBJECTS_9";
import OBJECTS_10 from "./objects_components/OBJECTS_10";
import OBJECTS_11 from "./objects_components/OBJECTS_11";

const Objects = ({showOutcome}) => {
  return (
      <main className="main">
          <OBJECTS_1 showOutcome={showOutcome} />
          <OBJECTS_2 showOutcome={showOutcome} />
          <OBJECTS_3 showOutcome={showOutcome} />
          <OBJECTS_4 showOutcome={showOutcome} />
          <OBJECTS_5 showOutcome={showOutcome} />
          <OBJECTS_6 showOutcome={showOutcome} />
          <OBJECTS_7 showOutcome={showOutcome} />
          <OBJECTS_8 showOutcome={showOutcome} />
          <OBJECTS_9 showOutcome={showOutcome} />
          <OBJECTS_10 showOutcome={showOutcome} />
          <OBJECTS_11 showOutcome={showOutcome} />
      </main>

  )
}

export default Objects;