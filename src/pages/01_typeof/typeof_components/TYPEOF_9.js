import React from "react";

const TYPEOF_9 = ({showOutcome}) => {
const jsCode =
`let name = NaN;

 function whatIsTheType(variable){
   return typeof variable;
 }
 
 let outcome = whatIsTheType(name);`;
// -------------------------------------
let name = NaN;

function whatIsTheType(variable) {
  return typeof variable;
};

let outcome = whatIsTheType(name);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>typeof Operator: NaN</h3>

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

export default TYPEOF_9;
