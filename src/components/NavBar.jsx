import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <NavLink to="/" className="stor">
        <h1>HEIDI ASTRUP</h1>
      </NavLink>

      <div className="menu" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section className={menuOpen ? "open" : ""}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={toggle}
        >
          Hjem
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={toggle}
        >
          Projekter
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={toggle}
        >
          Om mig
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={toggle}
        >
          Kontakt
        </NavLink>
      </section>
    </nav>
  );
}
