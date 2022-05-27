import React from "react";

const NUMBERS_14 = ({showOutcome}) => {
const jsCode =`
let varOne = [123, 12, 1234, 1];

function numFunc(var_1) {
  let maxNumber = Math.max(var_1);
  return maxNumber;
}

let outcome = numFunc(varOne);`;
// -------------------------------------
let varOne = [123, 12, 1234, 1];

function numFunc(var_1) {
  let maxNumber = Math.max(var_1);
  return maxNumber;
}

let outcome = numFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: Math.max() V2</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={showOutcome}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${outcome}`}</code></div>
          </div>
        </div>
      </div>
    );
};

export default NUMBERS_14;
