import React from "react";

const FUNCTIONS_11 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  width: 2,
  height: 3
};

function funcEx() {
  let area = this.width * this.height;
  return area;
}

let outcome = funcEx.call(varOne);`;
// -------------------------------------
let varOne = {
  width: 2,
  height: 3
};

function funcEx() {
  let area = this.width * this.height;
  return area;
}

let outcome = funcEx.call(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: call()</h3>

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

export default FUNCTIONS_11;
