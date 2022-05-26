import React from "react";

const FOR_ETC_5 = ({showOutcome}) => {
const jsCode =`
let varOne = {
  first: "one",
  second: "two",
  third: "three"
};

function loopThrough(object_1) {
  let numbers = "";
  for (let number in object_1){
    numbers = numbers + object_1[number] + " ";
  }
  return numbers;
}

let outcome = loopThrough(varOne);`;
// -------------------------------------
let varOne = {
  first: "one",
  second: "two",
  third: "three"
};

function loopThrough(object_1) {
  let numbers = "";
  for (let number in object_1){
    numbers = numbers + object_1[number] + " ";
  }
  return numbers;
}

let outcome = loopThrough(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"for" Statements etc.: for in</h3>

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

export default FOR_ETC_5;
