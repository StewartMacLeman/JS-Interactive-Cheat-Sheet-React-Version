import React, {useState} from "react";

const NUMBERS_29 = ({showOutcome}) => {
const [display, setDisplay] = useState(0);
// -------------------------------------
const jsCode =`
function numFunc() {
  let newNumber = Math.floor((Math.random() * 10));
  return newNumber;
}

let outcome = numFunc();`;
// -------------------------------------
function numFunc() {
  let newNumber = Math.floor((Math.random() * 10));
  return newNumber;
}
// Combine functions for the click event.
function combinedFunctions(e) {
  showOutcome(e);
  let outcome = numFunc();
  setDisplay(outcome);
}
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: Math.random() V3</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={combinedFunctions}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${display}`}</code></div>
            <div><p>Creates a number between 1 &amp; 9.</p></div>
          </div>
        </div>
      </div>
    );
};

export default NUMBERS_29;
