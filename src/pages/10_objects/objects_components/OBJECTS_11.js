import React from "react";

const OBJECTS_11 = ({showOutcome}) => {
const jsCode =`
class AnotherPerson{
  constructor(age, gender, nationality){
    this._age = age;
    this._gender = gender;
    this._nationality = nationality;
  }

  get howOld(){
    return \`\${this._age} years old!\`
  }
}

let varOne = new AnotherPerson(25, "female", "Mexican");

function objectFunc(var_1) {
  return var_1.howOld;
}

let outcome = objectFunc(varOne);`;
// -------------------------------------
class AnotherPerson{
  constructor(age, gender, nationality){
    this._age = age;
    this._gender = gender;
    this._nationality = nationality;
  }

  get howOld(){
    return `${this._age} years old!`
  }
}

let varOne = new AnotherPerson(25, "female", "Mexican");

function objectFunc(var_1) {
  return var_1.howOld;
}

let outcome = objectFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Objects: Classes</h3>

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

export default OBJECTS_11;
