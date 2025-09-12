import HeidiAstrup from "../images/HeidiAstrup.png";

export default function Home() {
  return (
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
        <p>Her kommer der en masse fede projekter</p>
      </article>
    </main>
  );
}
