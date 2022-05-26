import React from "react";

const IF_ETC_6 = ({showOutcome}) => {
const jsCode =`
let varOne = 3;
let varTwo = 4;

function checkValue(var_1, var_2) {
  if (var_1 > 3 || var_2 > 3){
    return "At least one is!";
  } else {
    return "Nope!";
  }
}

let outcome = checkValue(varOne, varTwo);`;
// -------------------------------------
let varOne = 3;
let varTwo = 4;

function checkValue(var_1, var_2) {
  if (var_1 > 3 || var_2 > 3){
    return "At least one is!";
  } else {
    return "Nope!";
  }
}

let outcome = checkValue(varOne, varTwo);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"if" Statements etc.: || (or)</h3>

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

export default IF_ETC_6;
