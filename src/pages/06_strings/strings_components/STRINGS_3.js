import React from "react";

const STRINGS_3 = ({showOutcome}) => {
const jsCode =`
let varOne = "hello";

function stringFunc(string_1) {
  return string_1[string_1.length-1];
}

let outcome = stringFunc(varOne);`;
// -------------------------------------
let varOne = "hello";

function stringFunc(string_1) {
  return string_1[string_1.length-1];
}

let outcome = stringFunc(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>Strings: length V3</h3>

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

export default STRINGS_3;
