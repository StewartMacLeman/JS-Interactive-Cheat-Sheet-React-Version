import React from "react";

const FUNCTIONS_10 = ({showOutcome}) => {
const jsCode =`
let outcome = (() => \`Hello!\`)();`;
// -------------------------------------
let outcome = (() => `Hello!`)();
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: IIFE</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={showOutcome}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${outcome}`}</code></div>
            <div><p>IIFE: Immediately Invoked Function Expression</p></div>
          </div>
        </div>
      </div>
    );
};

export default FUNCTIONS_10;
