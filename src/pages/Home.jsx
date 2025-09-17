import HeidiAstrup from "/public/images/HeidiAstrup.png";
import ProjectTop from "../components/ProjektTop.jsx";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <>
      <main>
        <div className="startside">
          <article>
            <h2>Heidi astrup</h2>
            <h4>Multimediedesignstuderende</h4>
            <p>
              med speciale i <strong>frontend</strong>
            </p>
          </article>
          <img src={HeidiAstrup} alt="Profilbillede af Heidi Astrup" />
        </div>
        <article className="fedeProjekter">
          <h3>Projekter</h3>
          <ProjectTop />
          <NavLink to="/projects">Se alle projekter &#x2192; </NavLink>
        </article>
        <article className="kompetencerBoks">
          <h3>Jeg arbejder i</h3>
          <div className="kompetencer">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Figma</p>
            <p>GitHub</p>
            <p>Adobe</p>
            <p>VS code</p>
            <p>Canva</p>
          </div>
        </article>
      </main>
    </>
  );
}
