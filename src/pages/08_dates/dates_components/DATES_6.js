import React, {useState} from "react";

const DATES_6 = ({showOutcome}) => {
const [display, setDisplay] = useState("");
// -------------------------------------
const jsCode =`
function dateFunc() {
  let newDate = new Date().getDay();
  return newDate;
}

let outcome = dateFunc();`;
// -------------------------------------
function dateFunc() {
  let newDate = new Date().getDay();
  return newDate;
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
        <h3>Dates: getDay()</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={combinedFunctions}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${display}`}</code></div>
            <div><p>Sunday (0) to Saturday (6)!</p></div>
          </div>
        </div>
      </div>
    );
};

export default DATES_6;
