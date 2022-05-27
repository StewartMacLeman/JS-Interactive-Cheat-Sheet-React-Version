import React from "react";

const NUMBERS_13 = ({showOutcome}) => {
const jsCode =`
let varOne = 123;
let varTwo = 12;
let varThree = 1234;
let varFour = 1;

function numFunc(var_1, var_2, var_3, var_4) {
  let maxNumber = Math.max(var_1, var_2, var_3, var_4);
  return maxNumber;
}

let outcome = numFunc(varOne, varTwo, varThree, varFour);`;
// -------------------------------------
let varOne = 123;
let varTwo = 12;
let varThree = 1234;
let varFour = 1;

function numFunc(var_1, var_2, var_3, var_4) {
  let maxNumber = Math.max(var_1, var_2, var_3, var_4);
  return maxNumber;
}

let outcome = numFunc(varOne, varTwo, varThree, varFour);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: Math.max() V1</h3>

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

export default NUMBERS_13;
