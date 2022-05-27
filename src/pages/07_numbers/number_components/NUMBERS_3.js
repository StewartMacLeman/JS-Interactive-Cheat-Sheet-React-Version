import React from "react";

const NUMBERS_3 = ({showOutcome}) => {
const jsCode =`
let varOne = "1234";

function numberFunc(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
}

let outcome = numberFunc(varOne);`;
// -------------------------------------
let varOne = "1234";

function numberFunc(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
}

let outcome = numberFunc(varOne);
let outcomeType = typeof outcome;
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: parseInt() V1</h3>

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

export default NUMBERS_3;
