import profilbillede from "../images/profilbillede.png";

export default function About() {
  return (
    <main className="About">
      <article className="abouttekst">
        <h3>Heidi Astrup</h3>
        <p>
          Multimediedesignstuderende med Speciale i <strong>frontend</strong>{" "}
          udvikling
        </p>
        <br />
        <p>
          Udover studiet arbejder jeg som bordtennistræner, hvilket har givet
          mig erfaring med at <strong>tage ansvar</strong>, at formidle viden og
          skabe engagement hos andre – kompetencer jeg også tager med ind i mit
          arbejde som multimediedesigner.
        </p>
        <br />
        <p>
          Jeg elsker at lære nyt og håber på at kunne <strong>udvikle</strong>{" "}
          mig meget under min praktik
        </p>
        <br />
      </article>
      <img src={profilbillede} alt="Profilbillede af Heidi" />
    </main>
  );
}
