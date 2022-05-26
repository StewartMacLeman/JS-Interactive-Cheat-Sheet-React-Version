import React from "react";

const TYPEOF_3 = ({showOutcome}) => {
const jsCode =`
let funLoving = true;

function whatIsTheType(variable){
  return typeof variable;
}
 
let outcome = whatIsTheType(funLoving);`;
// -------------------------------------
let funLoving = true;

function whatIsTheType(variable) {
  return typeof variable;
};

let outcome = whatIsTheType(funLoving);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>typeof Operator: Booleans</h3>

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

export default TYPEOF_3;
