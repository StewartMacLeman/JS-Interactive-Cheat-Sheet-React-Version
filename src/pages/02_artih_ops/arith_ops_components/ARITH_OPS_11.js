import React from "react";

const ARITH_OPS_11 = ({showOutcome}) => {
const jsCode =`
let numOne = 3;
let numTwo = 3;

function useExponent(num_1, num_2) {
  return num_1 ** num_2;
}

let outcome = useExponent(numOne, numTwo);`;
// -------------------------------------
let numOne = 3;
let numTwo = 3;

function useExponent(num_1, num_2) {
  return num_1 ** num_2;
}

let outcome = useExponent(numOne, numTwo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arithmetic Operators: ** (Exponential) V1</h3>

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

export default ARITH_OPS_11;
