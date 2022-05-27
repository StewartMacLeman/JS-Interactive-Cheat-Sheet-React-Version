import React, {useState} from "react";

const DATES_19 = ({showOutcome}) => {
const [display, setDisplay] = useState("");
// -------------------------------------
const jsCode =`
function dateFunc() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  let newTime = date.setTime(milliSecDay);
  let updatedTime = new Date(newTime);
  return updatedTime;
}

let outcome = dateFunc();`;
// -------------------------------------
function dateFunc() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  let newTime = date.setTime(milliSecDay);
  let updatedTime = new Date(newTime);
  return updatedTime;
}
// Combine functions for the click event.
function combinedFunctions(e) {
  showOutcome(e);
  let outcome = dateFunc();
  setDisplay(outcome);
}
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Dates: setTime() V2</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={combinedFunctions}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${display}`}</code></div>
          </div>
        </div>
      </div>
    );
};

export default DATES_19;
