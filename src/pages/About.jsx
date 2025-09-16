import profilbillede from "../images/profilbillede.png";

export default function About() {
  return (
    <main className="About">
      <article className="abouttekst">
        <h3>Lidt om mig</h3>
        <p>
          Hej, jeg hedder Heidi, og jeg studerer multimediedesign med speciale i{" "}
          <strong>frontend-udvikling</strong>. Jeg har en stor passion for
          programmering, som også er hovedårsagen til mit uddannelsesvalg – men
          jeg nyder samtidig at udfolde mig kreativt.
        </p>
        <br />
        <p>
          Når jeg arbejder, er jeg{" "}
          <strong>systematisk, fokuseret og detaljeorienteret</strong>. Jeg
          sørger altid for at gøre en opgave færdig og stræber ikke blot efter
          at den er “fin nok”, men at den er{" "}
          <strong>grundig og velovervejet</strong>.
        </p>
        <br />
        <p>
          Ved siden af studiet arbejder jeg som bordtennistræner. Her har jeg
          fået erfaring med at <strong>tage ansvar</strong>, formidle viden og
          skabe engagement – kompetencer, jeg også tager med mig ind i mit
          arbejde som multimediedesigner.
        </p>
        <br />
        <p>
          Jeg elsker at lære nyt og ser frem til at <strong>udvikle</strong> mig
          yderligere gennem min kommende praktik.
        </p>
        <br />
      </article>
      <img src={profilbillede} alt="Profilbillede af Heidi" />
    </main>
  );
}
