import React from "react";

const NUMBERS_24 = ({showOutcome}) => {
const jsCode =`
let varOne = 9.456;

function numFunc(var_1) {
  let newNumber = Math.floor(var_1);
  return newNumber;
}

let outcome = numFunc(varOne);`;
// -------------------------------------
let varOne = 9.456;

function numFunc(var_1) {
  let newNumber = Math.floor(var_1);
  return newNumber;
}

let outcome = numFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: Math.floor() V2</h3>

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

export default NUMBERS_24;
