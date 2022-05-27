import React from "react";

const OBJECTS_3 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  }
};

function objectFunc(var_1) {
  return var_1.pets[1];
}

let outcome = objectFunc(varOne);`;
// -------------------------------------
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  }
};

function objectFunc(var_1) {
  return var_1.pets[1];
}

let outcome = objectFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Objects: Accessing Properties V3</h3>

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

export default OBJECTS_3;
