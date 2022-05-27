import React, {useState} from "react";

const NUMBERS_28 = ({showOutcome}) => {
const [display, setDisplay] = useState(0);
// -------------------------------------
const jsCode =`
function numFunc() {
  let newNumber = Math.floor((Math.random() * 10) + 1);
  return newNumber;
}

let outcome = numFunc();`;
// -------------------------------------
function numFunc() {
  let newNumber = Math.floor((Math.random() * 10) + 1);
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
        <h3>Numbers: Math.random() V2</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={combinedFunctions}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${display}`}</code></div>
            <div><p>Creates a number between 1 &amp; 10.</p></div>
          </div>
        </div>
      </div>
    );
};

export default NUMBERS_28;
