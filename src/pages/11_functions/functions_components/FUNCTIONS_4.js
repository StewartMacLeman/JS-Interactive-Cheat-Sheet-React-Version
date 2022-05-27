import React from "react";

const FUNCTIONS_4 = ({showOutcome}) => {
const jsCode =`
let funcEx = function (name="Bobby") {
  return \`Hello \${name}!\`;
}

let outcome = funcEx("Mary");
// Arguments provided!`;
// -------------------------------------
let funcEx = function (name="Bobby") {
  return `Hello ${name}!`;
}

let outcome = funcEx("Mary");
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: Default Parameters V2</h3>

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

export default FUNCTIONS_4;
