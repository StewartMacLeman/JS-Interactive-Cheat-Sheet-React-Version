import React from "react";

const FUNCTIONS_2 = ({showOutcome}) => {
const jsCode =`
let funcEx = function(){
  return "Hello!";
}

let outcome = funcEx();`;
// -------------------------------------
let funcEx = function(){
  return "Hello!";
}

let outcome = funcEx();
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Functions: Expressions / Anonymous</h3>

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

export default FUNCTIONS_2;
