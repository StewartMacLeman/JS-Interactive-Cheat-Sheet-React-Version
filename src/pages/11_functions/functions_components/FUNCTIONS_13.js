import React from "react";

const FUNCTIONS_13 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  width: 2,
  height: 3
};

function funcEx() {
  let area = this.width * this.height;
  return area;
}

let outcome = funcEx.apply(varOne);`;
// -------------------------------------
let varOne = {
  width: 2,
  height: 3
};

function funcEx() {
  let area = this.width * this.height;
  return area;
}

let outcome = funcEx.apply(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: apply()</h3>

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

export default FUNCTIONS_13;
