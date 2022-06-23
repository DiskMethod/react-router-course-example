import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const classNameFn = ({ isActive }) => {
    return isActive ? classes.active : "";
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={classNameFn} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameFn} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
