import React from "react";

const STRINGS_19 = ({showOutcome}) => {
const jsCode =`
let varOne = "Hello my friends";

function stringFunc(string_1) {
  let newArray = string_1.split(" ");
  return newArray;
}

let outcome = stringFunc(varOne);`;
// -------------------------------------
let varOne = "Hello my friends";

function stringFunc(string_1) {
  let newArray = string_1.split(" ");
  return newArray;
}

let outcome = stringFunc(varOne);
let outcomeType = Array.isArray(outcome);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Strings: split()</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={showOutcome}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${outcome}`}</code></div>
            <div><code>{`Array.isArray(outcome): ${outcomeType}`}</code></div>
          </div>
        </div>
      </div>
    );
};

export default STRINGS_19;
