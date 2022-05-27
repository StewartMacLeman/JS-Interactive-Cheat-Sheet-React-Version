import React from "react";

const ARRAYS_1 = ({showOutcome}) => {
const jsCode =`
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  return var_1[0];
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  return var_1[0];
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: The Index Value V1</h3>

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

export default ARRAYS_1;
