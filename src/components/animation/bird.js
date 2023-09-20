import classes from "./bird.module.css";

const Bird = (props) => {
  return (
    <div className={classes.bird}>
      <div className={classes.body}></div>
      <div className={classes.feather1}></div>
      <div className={classes.eye}>
        <div className={classes.eyeball}></div>
      </div>
      <div className={classes.beak}>
        <div className={classes.goal}>
          <p>{props.quote}</p>
        </div>
      </div>
      <div className={classes.feather2}>
        <div className={classes.inner}></div>
      </div>
    </div>
  );
};

export default Bird;
