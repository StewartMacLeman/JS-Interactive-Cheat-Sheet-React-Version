import React from "react";

const ARITH_OPS_13 = ({showOutcome}) => {
const jsCode =`
let numOne = 3;

function useIncrement(num_1) {
  return ++num_1;
}

let outcome = useIncrement(numOne);`;
// -------------------------------------
let numOne = 3;

function useIncrement(num_1) {
  return ++num_1;
}

let outcome = useIncrement(numOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arithmetic Operators: ++ (Increment) V1</h3>

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

export default ARITH_OPS_13;
