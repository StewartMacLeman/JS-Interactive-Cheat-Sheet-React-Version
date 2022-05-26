import React from "react";

const COMPAR_OPS_6 = ({showOutcome}) => {
const jsCode =`
let compOne = 2;
let compTwo = "2";

function compare(comp_1, comp_2) {
  return comp_1 != comp_2;
}

let outcome = compare(compOne, compTwo);`;
// -------------------------------------
let compOne = 2;
let compTwo = "2";

function compare(comp_1, comp_2) {
  return comp_1 != comp_2;
}

let outcome = compare(compOne, compTwo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Comparison Operators: != V3</h3>

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

export default COMPAR_OPS_6;
