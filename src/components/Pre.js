import React from "react";
import Bird from "./animation/bird";
import classes from './Pre.module.css'

function Pre(props) {
  return props.load ? (
    <div className={classes.preContainer}>
      <div className={classes.animationContainer}>
        <Bird quote={"The screen is loading, please wait..."}/>
      </div>
    </div>
  ) : null;
}

export default Pre;