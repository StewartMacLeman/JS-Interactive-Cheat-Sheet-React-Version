import React from "react";

const FUNCTIONS_8 = ({showOutcome}) => {
const jsCode =`
let funcEx = name => \`Hello \${name}!\`;

let outcome = funcEx("Bobby");`;
// -------------------------------------
let funcEx = name => `Hello ${name}!`;

let outcome = funcEx("Bobby");
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: Arrow Functions V4</h3>

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

export default FUNCTIONS_8;
