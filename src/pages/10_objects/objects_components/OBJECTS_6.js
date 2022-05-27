import React from "react";

const OBJECTS_6 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"]
};

function objectFunc(var_1) {
  delete var_1.age;
  return var_1.age;
}

let outcome = objectFunc(varOne);`;
// -------------------------------------
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"]
};

function objectFunc(var_1) {
  delete var_1.age;
  return var_1.age;
}

let outcome = objectFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Objects: Deleting Properties</h3>

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

export default OBJECTS_6;
