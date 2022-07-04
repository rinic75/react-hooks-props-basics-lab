import React from "react";
import Links from "./links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

function isBio(props) {
  if ((props.bio) && !(props.bio === "")) {
    return <p>{props.bio}</p>
  } else {
    return null
  }
}
export default About;
