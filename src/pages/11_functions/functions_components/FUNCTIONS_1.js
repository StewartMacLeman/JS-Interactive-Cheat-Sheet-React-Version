import React from "react";

const FUNCTIONS_1 = ({showOutcome}) => {
const jsCode =`
let varOne = 2;
let varTwo = "2";

function compare(var_1, var_2) {
  return var_1 >= var_2;
}

let outcome = compare(varOne, varTwo);`;
// -------------------------------------
let varOne = 2;
let varTwo = "2";

function compare(var_1, var_2) {
  return var_1 >= var_2;
}

let outcome = compare(varOne, varTwo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: Declarative / Named</h3>

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

export default FUNCTIONS_1;
