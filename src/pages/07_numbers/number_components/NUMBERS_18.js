import React from "react";

const NUMBERS_18 = ({showOutcome}) => {
const jsCode =`
let varOne = 9;

function numFunc(var_1) {
  let newNumber = Math.sqrt(var_1);
  return newNumber;
}

let outcome = numFunc(varOne);`;
// -------------------------------------
let varOne = 9;

function numFunc(var_1) {
  let newNumber = Math.sqrt(var_1);
  return newNumber;
}

let outcome = numFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: Math.sqrt()</h3>

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

export default NUMBERS_18;
