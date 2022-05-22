import React from "react";
import TYPEOF_1 from "./typeof_components/TYPEOF_1";
import TYPEOF_2 from "./typeof_components/TYPEOF_2";
import TYPEOF_3 from "./typeof_components/TYPEOF_3";
import TYPEOF_4 from "./typeof_components/TYPEOF_4";
import TYPEOF_5 from "./typeof_components/TYPEOF_5";
import TYPEOF_6 from "./typeof_components/TYPEOF_6";
import TYPEOF_7 from "./typeof_components/TYPEOF_7";
import TYPEOF_8 from "./typeof_components/TYPEOF_8";
import TYPEOF_9 from "./typeof_components/TYPEOF_9";

const TypeOf = ({showOutcome}) => {
  return (
    <main className="main">
      <TYPEOF_1 showOutcome={showOutcome} />
      <TYPEOF_2 showOutcome={showOutcome} />
      <TYPEOF_3 showOutcome={showOutcome} />
      <TYPEOF_4 showOutcome={showOutcome} />
      <TYPEOF_5 showOutcome={showOutcome} />
      <TYPEOF_6 showOutcome={showOutcome} />
      <TYPEOF_7 showOutcome={showOutcome} />
      <TYPEOF_8 showOutcome={showOutcome} />
      <TYPEOF_9 showOutcome={showOutcome} />
    </main>
  );
};

export default TypeOf;
