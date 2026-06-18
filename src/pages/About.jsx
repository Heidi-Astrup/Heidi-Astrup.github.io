import profilbillede from "/public/images/profilbillede.png";

export default function About() {
  return (
    <main className="About">
      <article className="abouttekst">
        <h3>Lidt om mig</h3>
        <p>
          Hej, jeg hedder Heidi, og jeg er færdiguddannet multimediedesigner med speciale i{" "}
          <strong>frontend-udvikling</strong>. Jeg har en stor passion for
          programmering, som også er hovedårsagen til mit uddannelsesvalg – men
          jeg nyder samtidig at udfolde mig kreativt. Jeg er vild med at 
          designe webløsninger og kan en masse UX og har øje for detaljen, 
          både for brugeroplevelsen, det grafiske design og koden.
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
          I min fritid er jeg frivillig i Aarhus Bordtennis, hvor jeg er 
          bordtennistræner. Her har jeg fået erfaring med at  
          <strong>tage ansvar</strong>, formidle viden og
          skabe engagement – kompetencer, jeg også tager med mig ind i mit
          arbejde som multimediedesigner.
        </p>
        <br />
      </article>
      <img src={profilbillede} alt="Profilbillede af Heidi" />
    </main>
  );
}
