import React from "react";
import COMPAR_OPS_1 from "./compar_ops_components/COMPAR_OPS_1";
import COMPAR_OPS_2 from "./compar_ops_components/COMPAR_OPS_2";
import COMPAR_OPS_3 from "./compar_ops_components/COMPAR_OPS_3";
import COMPAR_OPS_4 from "./compar_ops_components/COMPAR_OPS_4";
import COMPAR_OPS_5 from "./compar_ops_components/COMPAR_OPS_5";
import COMPAR_OPS_6 from "./compar_ops_components/COMPAR_OPS_6";
import COMPAR_OPS_7 from "./compar_ops_components/COMPAR_OPS_7";

const ComparOps = ({showOutcome}) => {
  return (
      <main className="main">
          <COMPAR_OPS_1 showOutcome={showOutcome} />
          <COMPAR_OPS_2 showOutcome={showOutcome} />
          <COMPAR_OPS_3 showOutcome={showOutcome} />
          <COMPAR_OPS_4 showOutcome={showOutcome} />
          <COMPAR_OPS_5 showOutcome={showOutcome} />
          <COMPAR_OPS_6 showOutcome={showOutcome} />
          <COMPAR_OPS_7 showOutcome={showOutcome} />
      </main>

  )
}

export default ComparOps;