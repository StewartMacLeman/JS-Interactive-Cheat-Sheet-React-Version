import React from "react";

const IF_ETC_8 = ({showOutcome}) => {
const jsCode =`
let varOne = 5;
let varTwo = 4;

function checkValue(var_1, var_2) {
  return (var_1 > var_2) ? "Yes!" : "No";
}

let outcome = checkValue(varOne, varTwo);`;
// -------------------------------------
let varOne = 5;
let varTwo = 4;

function checkValue(var_1, var_2) {
  return (var_1 > var_2) ? "Yes!" : "No";
}

let outcome = checkValue(varOne, varTwo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"if" Statements etc.: Ternary Operator V2</h3>

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

export default IF_ETC_8;
