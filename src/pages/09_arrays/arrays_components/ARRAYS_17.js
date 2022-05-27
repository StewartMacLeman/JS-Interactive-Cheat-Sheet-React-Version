import React from "react";

const ARRAYS_17 = ({showOutcome}) => {
const jsCode =`
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let newArray = var_1.slice(1, 3);
  return newArray;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let newArray = var_1.slice(1, 3);
  return newArray;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: slice() V2</h3>

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

export default ARRAYS_17;
