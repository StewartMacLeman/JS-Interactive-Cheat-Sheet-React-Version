import React from "react";

const ARRAYS_20 = ({showOutcome}) => {
const jsCode =`
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  var_1.splice(2, 2, 123, 456);
  return var_1;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  var_1.splice(2, 2, 123, 456);
  return var_1;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: splice() V3</h3>

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

export default ARRAYS_20;
