import React from "react";

const ARITH_OPS_3 = ({showOutcome}) => {
const jsCode =`
let numOne = 50;
let numTwo = 50;
let numThree = "50";

function addNumbers(num_1, num_2, num_3) {
  return num_1 + num_2 + num_3;
}

let outcome = addNumbers(numOne, numTwo, numThree);`;
// -------------------------------------
let numOne = 50;
let numTwo = 50;
let numThree = "50";

function addNumbers(num_1, num_2, num_3) {
  return num_1 + num_2 + num_3;
}

let outcome = addNumbers(numOne, numTwo, numThree);
let outcomeType = typeof outcome;
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arithmetic Operators: + (Plus) V3</h3>

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

export default ARITH_OPS_3;
