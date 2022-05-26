import React from "react";

const STRINGS_17 = ({showOutcome}) => {
const jsCode =`
let varOne = "Hello";

function stringFunc(string_1) {
  return string_1.repeat(3);
}

let outcome = stringFunc(varOne);`;
// -------------------------------------
let varOne = "Hello";

function stringFunc(string_1) {
  return string_1.repeat(3);
}

let outcome = stringFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Strings: repeat()</h3>

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

export default STRINGS_17;
