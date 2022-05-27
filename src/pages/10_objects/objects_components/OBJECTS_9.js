import React from "react";

const OBJECTS_9 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],

  get howOld(){
    return \`\${this.age} years old!\`
  },

  set howOld(years){
    this.age = years;
  }
};

function objectFunc(var_1) {
  var_1.howOld = 51;
  return var_1.howOld;
}

let outcome = objectFunc(varOne);`;
// -------------------------------------
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],

  get howOld(){
    return `${this.age} years old!`
  },

  set howOld(years){
    this.age = years;
  }
};

function objectFunc(var_1) {
  var_1.howOld = 51;
  return var_1.howOld;
}

let outcome = objectFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Objects: Setters</h3>

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

export default OBJECTS_9;
