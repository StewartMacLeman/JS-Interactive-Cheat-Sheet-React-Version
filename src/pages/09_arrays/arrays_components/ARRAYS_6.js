import React from "react";

const ARRAYS_6 = ({showOutcome}) => {
const jsCode =`
let varOne = 
[["apples", "bananas"],
 ["mangoes", "grapes"]];

function arrayFunc(var_1) {
  return var_1[0][1];
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = [["apples", "bananas"], ["mangoes", "grapes"]];

function arrayFunc(var_1) {
  return var_1[0][1];
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: Multidimensionals</h3>

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

export default ARRAYS_6;
