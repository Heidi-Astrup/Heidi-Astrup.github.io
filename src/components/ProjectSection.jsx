import { useState, useEffect } from "react";

export default function ProjectSection() {
  const [projekter, setProjekter] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("../public/data/projects.json");
      const data = await response.json();
      setProjekter(data);
    }
    fetchProjects();
  }, []);

  return (
    <section className="project-section">
      {projekter.map((projekt) => (
        <section key={projekt.id} className="projekt">
          <img src={projekt.image} alt={projekt.title} />
          <article>
            <h3>{projekt.title}</h3>
            <h4>{projekt.subtitle}</h4>
            <p>{projekt.description}</p>
            <p>{projekt.year}</p>
            <p>{projekt.tags.join(" | ")}</p>
            <a href={projekt.url}>Se hele projektet &#x2192; </a>
            <button>Se websiden online</button>
          </article>
        </section>
      ))}
    </section>
  );
}
