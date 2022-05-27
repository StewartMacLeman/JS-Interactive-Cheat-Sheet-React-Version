import React from "react";

const ARRAYS_7 = ({showOutcome}) => {
const jsCode =`
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1.push("grapes");
  return var_1;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1.push("grapes");
  return var_1;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: push()</h3>

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

export default ARRAYS_7;
