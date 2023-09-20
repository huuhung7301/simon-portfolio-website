import classes from './NavElement.module.css';
import Icon from './Icon';

export const ProfileIcon = () => {
    return (
        <button className={classes.button} >
          <span className={classes.icon}>
            <Icon />
          </span>
        </button>
      );
}

export const ToolIcon = () => {
    return (
        <button className={classes.tool} >
          <span className={classes.icon}>
            <Icon />
          </span>
        </button>
      );
}