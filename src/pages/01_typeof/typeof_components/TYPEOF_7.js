import React from "react";

const TYPEOF_7 = ({showOutcome}) => {
const jsCode =`
let colours = ["blue", "green", "yellow", "orange"];

function whatIsTheType(variable){
  return typeof variable;
}
 
let outcome = whatIsTheType(colours);`;
// -------------------------------------
let colours = ["blue", "green", "yellow", "orange"];

function whatIsTheType(variable) {
  return typeof variable;
};

let outcome = whatIsTheType(colours);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>typeof Operator: Arrays</h3>

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

export default TYPEOF_7;
