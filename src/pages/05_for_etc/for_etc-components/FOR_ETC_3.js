import React from "react";

const FOR_ETC_3 = ({showOutcome}) => {
const jsCode =`
let varOne = [["h", "i"], ["t", "h", "e", "r", "e"]];

function loopThrough(array_1) {
  let words = "";
  for (let i = 0; i < array_1.length; i++){
    for (let j= 0; j < array_1[i].length; j++){
      words = words + array_1[i][j].toUpperCase();
    }
    words = words + " ";
  }
  return words;
}

let outcome = loopThrough(varOne);`;
// -------------------------------------
let varOne = [["h", "i"], ["t", "h", "e", "r", "e"]];

function loopThrough(array_1) {
  let words = "";
  for (let i = 0; i < array_1.length; i++){
    for (let j= 0; j < array_1[i].length; j++){
      words = words + array_1[i][j].toUpperCase();
    }
    words = words + " ";
  }
  return words;
}

let outcome = loopThrough(varOne);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>"for" Statements etc.: for V3</h3>

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

export default FOR_ETC_3;
