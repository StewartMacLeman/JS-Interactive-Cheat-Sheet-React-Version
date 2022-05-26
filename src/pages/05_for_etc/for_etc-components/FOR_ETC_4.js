import React from "react";

const FOR_ETC_4 = ({showOutcome}) => {
const jsCode =`
let varOne = ["h","e", "l", "l", "o"];

function loopThrough(array_1) {
  let word = "";
  for (let letter of array_1){
    word = word + letter.toUpperCase();
  }
  return word;
}

let outcome = loopThrough(varOne);`;
// -------------------------------------
let varOne = ["h","e", "l", "l", "o"];

function loopThrough(array_1) {
  let word = "";
  for (let letter of array_1){
    word = word + letter.toUpperCase();
  }
  return word;
}

let outcome = loopThrough(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"for" Statements etc.: for of</h3>

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

export default FOR_ETC_4;
