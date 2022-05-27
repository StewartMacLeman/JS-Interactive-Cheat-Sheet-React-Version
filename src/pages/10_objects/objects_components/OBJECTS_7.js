import React from "react";

const OBJECTS_7 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  howOld : function(){
    return \`\${this.age} years old!\`
  }
};

function objectFunc(var_1) {
  return var_1.howOld();
}

let outcome = objectFunc(varOne);`;
// -------------------------------------
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  howOld : function(){
    return `${this.age} years old!`
  }
};

function objectFunc(var_1) {
  return var_1.howOld();
}

let outcome = objectFunc(varOne);;
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Objects: Methods</h3>

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

export default OBJECTS_7;
