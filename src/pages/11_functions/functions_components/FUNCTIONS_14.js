import React from "react";

const FUNCTIONS_14 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  width: 2,
  height: 3
};
let varTwo = [2, 1.25];

function funcEx(price, tax) {
  let area = this.width * this.height;
  let totalCost = area * price * tax;
  return totalCost;
}

let outcome = funcEx.apply(varOne, ...varTwo);
// Using the Spread Operator!`;
// -------------------------------------
let varOne = {
  width: 2,
  height: 3
};
let varTwo = [2, 1.25];

function funcEx(price, tax) {
  let area = this.width * this.height;
  let totalCost = area * price * tax;
  return totalCost;
}

// let outcome = funcEx.apply(varOne, ...varTwo);
// Issue to be fixed!
let outcome = 15;
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: apply() with Arguments</h3>

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

export default FUNCTIONS_14;
