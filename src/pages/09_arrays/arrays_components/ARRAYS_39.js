import React from "react";

const ARRAYS_39 = ({showOutcome}) => {
const jsCode =`
let varOne = [123, 23, 904, 1, 1000, 56];

function arrayFunc(var_1) {
  let index = var_1.some((item) => {
    return item > 900;
  })
  return index;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = [123, 23, 904, 1, 1000, 56];

function arrayFunc(var_1) {
  let index = var_1.some((item) => {
    return item > 900;
  })
  return index;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: some()</h3>

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

export default ARRAYS_39;
