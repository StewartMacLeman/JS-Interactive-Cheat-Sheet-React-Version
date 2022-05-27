import React from "react";

const FUNCTIONS_12 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  width: 2,
  height: 3
};

function funcEx(price) {
  let area = this.width * this.height;
  let totalCost = area * price;
  return totalCost;
}

let outcome = funcEx.call(varOne, 2);`;
// -------------------------------------
let varOne = {
  width: 2,
  height: 3
};

function funcEx(price) {
  let area = this.width * this.height;
  let totalCost = area * price;
  return totalCost;
}

let outcome = funcEx.call(varOne, 2);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: call() with Arguments</h3>

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

export default FUNCTIONS_12;
