import React from "react";

const ARRAYS_34 = ({showOutcome}) => {
const jsCode =`
let varOne = [ 1, 2, 3, 4, 5 ];

function arrayFunc(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 10);
  return total;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = [ 1, 2, 3, 4, 5 ];

function arrayFunc(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 10);
  return total;
}

let outcome = arrayFunc(varOne);
let outcomeType = typeof outcome;
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: reduce() V2</h3>

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

export default ARRAYS_34;
