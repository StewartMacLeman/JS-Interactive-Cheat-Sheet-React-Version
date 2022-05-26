import React from "react";

const STRINGS_15 = ({showOutcome}) => {
const jsCode =`
let varOne = "HeLLo";

function stringFunc(string_1) {
  return string_1.replace("LL", "ll");
}

let outcome = stringFunc(varOne);`;
// -------------------------------------
let varOne = "HeLLo";

function stringFunc(string_1) {
  return string_1.replace("LL", "ll");
}

let outcome = stringFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Strings: replace()</h3>

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

export default STRINGS_15;
