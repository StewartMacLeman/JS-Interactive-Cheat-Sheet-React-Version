import React from "react";

const STRINGS_18 = ({showOutcome}) => {
const jsCode =`
let varOne = "Hello friends";

function stringFunc(string_1) {
  let found = string_1.match(/friends/);
  return found;
}

let outcome = stringFunc(varOne);`;
// -------------------------------------
let varOne = "Hello friends";

function stringFunc(string_1) {
  let found = string_1.match(/friends/);
  return found;
}

let outcome = stringFunc(varOne);
let outcomeType = Array.isArray(outcome);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Strings: match()</h3>

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

export default STRINGS_18;
