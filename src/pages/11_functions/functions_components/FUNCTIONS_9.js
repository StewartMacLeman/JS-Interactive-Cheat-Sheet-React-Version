import React from "react";

const FUNCTIONS_9 = ({showOutcome}) => {
const jsCode =`
let funcEx = () => \`Hello!\`;

let outcome = funcEx();`;
// -------------------------------------
let funcEx = () => `Hello!`;

let outcome = funcEx();
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: Arrow Functions V5</h3>

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

export default FUNCTIONS_9;
