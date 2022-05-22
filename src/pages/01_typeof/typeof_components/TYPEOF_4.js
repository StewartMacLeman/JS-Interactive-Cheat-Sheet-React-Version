import React from "react";

const TYPEOF_4 = ({showOutcome}) => {
const jsCode =
`let capacity = null;

 function whatIsTheType(variable){
   return typeof variable;
 }
 
 let outcome = whatIsTheType(capacity);`;
// -------------------------------------
let capacity = null;

function whatIsTheType(variable) {
  return typeof variable;
};

let outcome = whatIsTheType(capacity);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>typeof Operator: null</h3>

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

export default TYPEOF_4;
