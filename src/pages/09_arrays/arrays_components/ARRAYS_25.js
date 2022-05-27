import React from "react";

const ARRAYS_25 = ({showOutcome}) => {
const jsCode =`
let varOne = ["b", "c", "a", "c", "e", "d"];

function arrayFunc(var_1) {
  var_1.sort();
  return var_1;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["b", "c", "a", "c", "e", "d"];

function arrayFunc(var_1) {
  var_1.sort();
  return var_1;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: sort() V1</h3>

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

export default ARRAYS_25;
