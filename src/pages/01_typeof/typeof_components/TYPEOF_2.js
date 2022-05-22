import React from "react";

const TYPEOF_2 = ({showOutcome}) => {
const jsCode =
`let age = 55;

 function whatIsTheType(variable){
   return typeof variable;
 }
 
 let outcome = whatIsTheType(age);`;
// -------------------------------------
let age = 55;

function whatIsTheType(variable) {
  return typeof variable;
};

let outcome = whatIsTheType(age);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>typeof Operator: Numbers</h3>

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

export default TYPEOF_2;
