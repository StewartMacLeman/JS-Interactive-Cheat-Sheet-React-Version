import React from "react";

const ARRAYS_32 = ({showOutcome}) => {
const jsCode =`
let varOne = ["a", "bb", "ccc", "d", "ee"];

function arrayFunc(var_1) {
  let newArray = var_1.filter((item) => {
    return item.length >= 2;
  })
  return newArray;
}

let outcome = arrayFunc(varOne);`;
// -------------------------------------
let varOne = ["a", "bb", "ccc", "d", "ee"];

function arrayFunc(var_1) {
  let newArray = var_1.filter((item) => {
    return item.length >= 2;
  })
  return newArray;
}

let outcome = arrayFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Arrays: filter()</h3>

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

export default ARRAYS_32;
