import React from "react";

const FUNCTIONS_6 = ({showOutcome}) => {
const jsCode =`
let funcEx = (greeting, name) => \`\${greeting} \${name}!\`;

let outcome = funcEx("Hello", "Bobby");`;
// -------------------------------------
let funcEx = (greeting, name) => `${greeting} ${name}!`;

let outcome = funcEx("Hello", "Bobby");
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: Arrow Functions V2</h3>

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

export default FUNCTIONS_6;
