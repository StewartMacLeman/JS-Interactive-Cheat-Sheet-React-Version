import React from "react";

const TYPEOF_6 = ({showOutcome}) => {
const jsCode =`
let personInfo = { name: "Bobby", age: 55 };

function whatIsTheType(variable){
  return typeof variable;
}
 
let outcome = whatIsTheType(personInfo);`;
// -------------------------------------
let personInfo = { name: "Bobby", age: 55 };

function whatIsTheType(variable) {
  return typeof variable;
};

let outcome = whatIsTheType(personInfo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>typeof Operator: Objects</h3>

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

export default TYPEOF_6;
