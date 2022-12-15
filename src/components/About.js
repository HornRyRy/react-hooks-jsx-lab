import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">About
    <h2>About Me
      <p>Any content of my choosing
        <img src={image}> alt = "I made this"
        </img>
      </p>
    </h2>


  </div>
  )
}

export default About;
