import { NavLink } from "react-router";

export default function ProjectSection({ projekt }) {
  return (
    <section className="project-section">
      <section className="projekt-card">
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
    </section>
  );
}
