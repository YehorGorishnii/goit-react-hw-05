import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

const navLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>

      <NavLink to="/movies" className={navLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}
