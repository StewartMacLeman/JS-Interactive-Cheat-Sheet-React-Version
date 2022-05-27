import React from "react";

const ARRAYS_28 = ({showOutcome}) => {
const jsCode =`
let varOne = [123, 23, 4, 1, 1000, 56];

function arrayFunc(var_1) {
  var_1.sort( function(a, b) {
    return b - a;
  })
  return var_1;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = [123, 23, 4, 1, 1000, 56];

function arrayFunc(var_1) {
  var_1.sort( function(a, b) {
    return b - a;
  })
  return var_1;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: sort() V4</h3>

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

export default ARRAYS_28;
