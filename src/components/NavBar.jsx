import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <NavLink to="/" className="stor">
        <h1>HEIDI ASTRUP</h1>
      </NavLink>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section className={menuOpen ? "open" : ""}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
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
      </section>
    </nav>
  );
}
