import React, {useState} from "react";

const DATES_17 = ({showOutcome}) => {
const [display, setDisplay] = useState("");
// -------------------------------------
const jsCode =`
function dateFunc() {
  let date = new Date();
  let month = date.setMonth(5);
  let newMonth = new Date(month).getMonth();
  return newMonth;
}

let outcome = dateFunc();`;
// -------------------------------------
function dateFunc() {
  let date = new Date();
  let month = date.setMonth(5);
  let newMonth = new Date(month).getMonth();
  return newMonth;
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
        <h3>Dates: setMonth() V2</h3>

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

export default DATES_17;
