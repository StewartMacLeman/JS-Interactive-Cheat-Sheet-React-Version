import React from "react";

const NUMBERS_1 = ({showOutcome}) => {
const jsCode =`
let varOne = 1e3;

function numberFunc(var_1) {
  return var_1;
}

let outcome = numberFunc(varOne);`;
// -------------------------------------
let varOne = 1e3;

function numberFunc(var_1) {
  return var_1;
}

let outcome = numberFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Numbers: Exponents V1</h3>

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

export default NUMBERS_1;
