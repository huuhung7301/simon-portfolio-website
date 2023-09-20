import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Development",
          "Swinburne University of Technology",
          "Full-stack ability",
          "Technology - Finance enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 10
      }}
    />
  );
}

export default Type;
