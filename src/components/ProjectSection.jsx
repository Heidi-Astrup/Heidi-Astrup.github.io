import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function ProjectSection() {
  const [projekter, setProjekter] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("data/projects.json");
      const data = await response.json();
      setProjekter(data);
    }
    fetchProjects();
  }, []);

  return (
    <section className="project-section">
      {projekter.map((projekt) => (
        <section key={projekt.id} className="projekt-card">
          <article>
            <h3>{projekt.title}</h3>
            <h4>{projekt.subtitle}</h4>
            <p>{projekt.description}</p>
            <p>{projekt.year}</p>
            <p>{projekt.tags.join(" | ")}</p>
            <NavLink to={`/projects/${projekt.id}`}>
              Se hele projektet her &#x2192;{" "}
            </NavLink>
            <a href={projekt.url}>
              <button>Se websiden online</button>{" "}
            </a>
          </article>
          <figure>
            <img src={projekt.image} alt={projekt.title} />
          </figure>
        </section>
      ))}
    </section>
  );
}
