import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <h1>HEIDI ASTRUP</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
