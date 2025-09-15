import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function ProjectDetails() {
  const [projekter, setProjekter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("../public/data/projects.json");
      const data = await response.json();
      const detteProjekt = data.find((p) => p.id === parseInt(id));
      setProjekter(detteProjekt ? [detteProjekt] : []);
    }
    fetchProjects();
  }, []);

  return (
    <main>
      {projekter.map((projekt) => (
        <section key={projekt.id} className="specifikt-projekt">
          <h3>{projekt.title}</h3>
          <h4>{projekt.subtitle}</h4>
          <p>{projekt.description}</p>
          <p>
            {projekt.year} - {projekt.semester}
          </p>
          <p>{projekt.grade}</p>
          <img src={projekt.image} alt={projekt.title} />
        </section>
      ))}
    </main>
  );
}
