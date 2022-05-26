import React from "react";

const ARITH_OPS_16 = ({showOutcome}) => {
const jsCode =`
let numOne = 3;

function useDecrement(num_1) {
  return num_1--;
}

let outcome = useDecrement(numOne);`;
// -------------------------------------
let numOne = 3;

function useDecrement(num_1) {
  return num_1--;
}

let outcome = useDecrement(numOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arithmetic Operators: -- (Decrement) V2</h3>

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

export default ARITH_OPS_16;
