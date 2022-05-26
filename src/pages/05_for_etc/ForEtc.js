import React from "react";
import FOR_ETC_1 from "./for_etc-components/FOR_ETC_1";
import FOR_ETC_2 from "./for_etc-components/FOR_ETC_2";
import FOR_ETC_3 from "./for_etc-components/FOR_ETC_3";
import FOR_ETC_4 from "./for_etc-components/FOR_ETC_4";
import FOR_ETC_5 from "./for_etc-components/FOR_ETC_5";
import FOR_ETC_6 from "./for_etc-components/FOR_ETC_6";
import FOR_ETC_7 from "./for_etc-components/FOR_ETC_7";
import FOR_ETC_8 from "./for_etc-components/FOR_ETC_8";

const ForEtc = ({showOutcome}) => {
  return (
      <main className="main">
          <FOR_ETC_1 showOutcome={showOutcome} />
          <FOR_ETC_2 showOutcome={showOutcome} />
          <FOR_ETC_3 showOutcome={showOutcome} />
          <FOR_ETC_4 showOutcome={showOutcome} />
          <FOR_ETC_5 showOutcome={showOutcome} />
          <FOR_ETC_6 showOutcome={showOutcome} />
          <FOR_ETC_7 showOutcome={showOutcome} />
          <FOR_ETC_8 showOutcome={showOutcome} />
      </main>

  )
}

export default ForEtc;