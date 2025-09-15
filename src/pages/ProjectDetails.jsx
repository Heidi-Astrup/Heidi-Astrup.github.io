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
        <section>
          <h3>{projekt.title}</h3>
          <img src={projekt.image} alt={projekt.title} />
        </section>
      ))}
    </main>
  );
}
