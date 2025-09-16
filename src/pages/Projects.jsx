import { useState, useEffect } from "react";

import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  const [projekter, setProjekter] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjekter(data);
    }
    fetchProjects();
  }, []);

  return (
    <main className="Projects">
      {projekter.map((projekt) => (
        <ProjectSection client={projekt} key={projekt.id} />
      ))}
    </main>
  );
}
