import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="stor">
        <h1>HEIDI ASTRUP</h1>
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Hjem
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Projekter
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Om mig
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Kontakt
      </NavLink>
    </nav>
  );
}
