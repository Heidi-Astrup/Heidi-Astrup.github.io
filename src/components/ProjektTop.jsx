import bordtennisHel from "/public/images/aabtHel.jpg";
import mensHel from "/public/images/mensHel.jpg";
import radarHel from "/public/images/radarHel.jpg";

export default function ProjectTop() {
  return (
    <div className="ProjektTop">
      <a href="https://aarhusbordtennis.dk/" className="projekt-del">
        <img src={bordtennisHel} alt="" />
        <p>Aarhus Bordtennis</p>
      </a>
      <a href="https://menstruation.astrupdesigns.dk/" className="projekt-del">
        <img src={mensHel} alt="" />
        <p>Menstruation information</p>
      </a>
      <a href="https://radar.astrupdesigns.dk" className="projekt-del">
        <img src={radarHel} alt="" />
        <p>Radar</p>
      </a>
    </div>
  );
}
