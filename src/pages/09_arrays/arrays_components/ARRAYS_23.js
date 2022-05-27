import React from "react";

const ARRAYS_23 = ({showOutcome}) => {
const jsCode =`
let varOne = ["a", "b", "c", 123, "d", "e"];

function arrayFunc(var_1) {
  let status = var_1.includes(123);
  return status;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["a", "b", "c", 123, "d", "e"];

function arrayFunc(var_1) {
  let status = var_1.includes(123);
  return status;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: includes() V2</h3>

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

export default ARRAYS_23;
