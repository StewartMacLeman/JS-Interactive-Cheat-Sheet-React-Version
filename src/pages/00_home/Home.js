import React from "react";
import HomeText from "./text_demo/HomeText";
import Demo from "./text_demo/Demo";

const Home = ({showOutcome}) => {
  return (
      <main className="main">
        <HomeText />
        <Demo showOutcome={showOutcome}/>
      </main>

  )
}

export default Home;