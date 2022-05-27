import React from "react";

const NUMBERS_17 = ({showOutcome}) => {
const jsCode =`
let varOne = 2;
let varTwo = 4;

function numFunc(var_1, var_2) {
  let newNumber = Math.pow(var_1, var_2);
  return newNumber;
}

let outcome = numFunc(varOne, varTwo);`;
// -------------------------------------
let varOne = 2;
let varTwo = 4;

function numFunc(var_1, var_2) {
  let newNumber = Math.pow(var_1, var_2);
  return newNumber;
}

let outcome = numFunc(varOne, varTwo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: Math.pow()</h3>

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

export default NUMBERS_17;
