import React from "react";

const ARITH_OPS_5 = ({showOutcome}) => {
const jsCode =`
let numOne = 50;
let numTwo = "25";

function subtractNumbers(num_1, num_2) {
  return num_1 - num_2;
}

let outcome = subtractNumbers(numOne, numTwo);`;
// -------------------------------------
let numOne = 50;
let numTwo = "25";

function subtractNumbers(num_1, num_2) {
  return num_1 - num_2;
}

let outcome = subtractNumbers(numOne, numTwo);
let outcomeType = typeof outcome;
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arithmetic Operators: - (Minus) V2</h3>

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

export default ARITH_OPS_5;
