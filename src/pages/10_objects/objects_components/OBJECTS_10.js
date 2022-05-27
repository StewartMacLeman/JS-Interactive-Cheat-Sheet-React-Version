import React from "react";

const OBJECTS_10 = ({showOutcome}) => {
const jsCode =`
function Person(age, gender, nationality){
  this._age = age;
  this._gender = gender;
  this._nationality = nationality;
  this.howOld = function(){
    return \`\${this._age} years old!\`
  };
};

let varOne = new Person(25, "female", "Mexican");

function objectFunc(var_1) {
  return var_1.howOld();
}

let outcome = objectFunc(varOne);`;
// -------------------------------------
function Person(age, gender, nationality){
  this._age = age;
  this._gender = gender;
  this._nationality = nationality;
  this.howOld = function(){
    return `${this._age} years old!`
  };
};

let varOne = new Person(25, "female", "Mexican");

function objectFunc(var_1) {
  return var_1.howOld();
}

let outcome = objectFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Objects: Constructors</h3>

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

export default OBJECTS_10;
