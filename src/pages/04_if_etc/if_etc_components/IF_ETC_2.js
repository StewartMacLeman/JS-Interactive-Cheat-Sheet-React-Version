import React from "react";

const IF_ETC_2 = ({showOutcome}) => {
const jsCode =`
let varOne = 4;

function checkValue(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  }
}

let outcome = checkValue(varOne);`;
// -------------------------------------
let varOne = 4;

function checkValue(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  }
}

let outcome = checkValue(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"if" Statements etc.: if V2</h3>

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

export default IF_ETC_2;
