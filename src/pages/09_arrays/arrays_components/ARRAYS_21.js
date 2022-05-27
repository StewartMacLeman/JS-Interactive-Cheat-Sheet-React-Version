import React from "react";

const ARRAYS_21 = ({showOutcome}) => {
const jsCode =`
let varOne = ["a", "b", "c"];
let varTwo = ["d", "e", "f"];

function arrayFunc(var_1, var_2) {
  let newArray = var_1.concat(var_2);
  return newArray;
}

let outcome = arrayFunc(varOne, varTwo);`;
// -------------------------------------
let varOne = ["a", "b", "c"];
let varTwo = ["d", "e", "f"];

function arrayFunc(var_1, var_2) {
  let newArray = var_1.concat(var_2);
  return newArray;
}

let outcome = arrayFunc(varOne, varTwo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: concat()</h3>

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

export default ARRAYS_21;
