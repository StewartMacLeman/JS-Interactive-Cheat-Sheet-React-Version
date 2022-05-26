import React from "react";

const IF_ETC_12 = ({showOutcome}) => {
const jsCode =`
let varOne = "pineapples";

function checkValue(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" :
    case "pineapples" :
    case "grapes" :
    price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
}

let outcome = checkValue(varOne);`;
// -------------------------------------
let varOne = "pineapples";

function checkValue(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" :
    case "pineapples" :
    case "grapes" :
    price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
}

let outcome = checkValue(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"if" Statements etc.: Switch V3</h3>

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

export default IF_ETC_12;
