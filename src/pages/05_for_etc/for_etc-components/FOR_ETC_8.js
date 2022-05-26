import React from "react";

const FOR_ETC_8 = ({showOutcome}) => {
const jsCode =`
let varOne = 0;

function loopThrough(capacity) {
  let liquid = 0;
  let cup = "";
  do {
    cup = cup + " Glug";
    liquid++;
  } while (liquid <= capacity);
  return cup + ".";
}

let outcome = loopThrough(varOne);`;
// -------------------------------------
let varOne = 0;

function loopThrough(capacity) {
  let liquid = 0;
  let cup = "";
  do {
    cup = cup + " Glug";
    liquid++;
  } while (liquid <= capacity);
  return cup + ".";
}

let outcome = loopThrough(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"for" Statements etc.: do while</h3>

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

export default FOR_ETC_8;
