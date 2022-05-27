import React, {useState} from "react";

const DATES_7 = ({showOutcome}) => {
const [display, setDisplay] = useState("");
// -------------------------------------
const jsCode =`
function dateFunc() {
  let newDate = new Date().getTime();
  return newDate;
}

let outcome = dateFunc();`;
// -------------------------------------
function dateFunc() {
  let newDate = new Date().getTime();
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
        <h3>Dates: getTime()</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={combinedFunctions}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${display}`}</code></div>
            <div><p>Milliseconds from the 1st of January, 1970</p></div>
          </div>
        </div>
      </div>
    );
};

export default DATES_7;
