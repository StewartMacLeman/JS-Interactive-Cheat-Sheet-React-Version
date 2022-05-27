import React from "react";

const ARRAYS_11 = ({showOutcome}) => {
const jsCode =`
let varOne = ["ab", 123, "mangoes"];

function arrayFunc(var_1) {
  let string = var_1.toString();
  return string;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["ab", 123, "mangoes"];

function arrayFunc(var_1) {
  let string = var_1.toString();
  return string;
}

let outcome = arrayFunc(varOne);
let outcomeType = typeof outcome;
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: toString()</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={showOutcome}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${outcome}`}</code></div>
            <div><code>{`typeof outcome: ${outcomeType}`}</code></div>
          </div>
        </div>
      </div>
    );
};

export default ARRAYS_11;
