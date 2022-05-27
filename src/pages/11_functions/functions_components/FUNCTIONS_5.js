import React from "react";

const FUNCTIONS_5 = ({showOutcome}) => {
const jsCode =`
let funcEx = (greeting, name) => {
  return \`\${greeting} \${name}!\`;
}

let outcome = funcEx("Morning", "Mary");`;
// -------------------------------------
let funcEx = (greeting, name) => {
  return `${greeting} ${name}!`;
}

let outcome = funcEx("Morning", "Mary");
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: Arrow Functions V1</h3>

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

export default FUNCTIONS_5;
