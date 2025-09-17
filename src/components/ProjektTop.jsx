import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function ProjectTop() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      const chosen = [data[4], data[3], data[1]]; //vælger 3 bestemte objekter i min JSON fil
      setSelectedItems(chosen);
    }
    fetchProjects();
  }, []);

  return (
    <section className="ProjektTop">
      {selectedItems.map((projekt) => (
        <div key={projekt.id} className="projekt-del">
          <NavLink to={`/projects/${projekt.id}`}>
            <img src={projekt.topImage} alt={projekt.title} />
            <p>{projekt.title}</p>
          </NavLink>
        </div>
      ))}
    </section>
  );
}
