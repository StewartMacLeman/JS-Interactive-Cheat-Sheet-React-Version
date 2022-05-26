import React from "react";
import IF_ETC_1 from "./if_etc_components/IF_ETC_1";
import IF_ETC_2 from "./if_etc_components/IF_ETC_2";
import IF_ETC_3 from "./if_etc_components/IF_ETC_3";
import IF_ETC_4 from "./if_etc_components/IF_ETC_4";
import IF_ETC_5 from "./if_etc_components/IF_ETC_5";
import IF_ETC_6 from "./if_etc_components/IF_ETC_6";
import IF_ETC_7 from "./if_etc_components/IF_ETC_7";
import IF_ETC_8 from "./if_etc_components/IF_ETC_8";
import IF_ETC_9 from "./if_etc_components/IF_ETC_9";
import IF_ETC_10 from "./if_etc_components/IF_ETC_10";
import IF_ETC_11 from "./if_etc_components/IF_ETC_11";
import IF_ETC_12 from "./if_etc_components/IF_ETC_12";

const IfEtc = ({showOutcome}) => {
  return (
      <main className="main">
          <IF_ETC_1 showOutcome={showOutcome} />
          <IF_ETC_2 showOutcome={showOutcome} />
          <IF_ETC_3 showOutcome={showOutcome} />
          <IF_ETC_4 showOutcome={showOutcome} />
          <IF_ETC_5 showOutcome={showOutcome} />
          <IF_ETC_6 showOutcome={showOutcome} />
          <IF_ETC_7 showOutcome={showOutcome} />
          <IF_ETC_8 showOutcome={showOutcome} />
          <IF_ETC_9 showOutcome={showOutcome} />
          <IF_ETC_10 showOutcome={showOutcome} />
          <IF_ETC_11 showOutcome={showOutcome} />
          <IF_ETC_12 showOutcome={showOutcome} />
      </main>

  )
}

export default IfEtc;