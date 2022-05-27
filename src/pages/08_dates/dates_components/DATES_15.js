import React, {useState} from "react";

const DATES_15 = ({showOutcome}) => {
const [display, setDisplay] = useState("");
// -------------------------------------
const jsCode =`
function dateFunc() {
  let date = new Date();
  let year = date.setFullYear(2017, 11, 5);
  let newYear = new Date(year).getFullYear();
  return newYear;
}

let outcome = dateFunc();`;
// -------------------------------------
function dateFunc() {
  let date = new Date();
  let year = date.setFullYear(2017, 11, 5);
  let newYear = new Date(year).getFullYear();
  return newYear;
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
        <h3>Dates: setFullYear() V3</h3>

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

export default DATES_15;
