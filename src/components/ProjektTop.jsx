import bordtennisHel from "../images/aabtHel.jpg";
import mensHel from "../images/mensHel.jpg";
import radarHel from "../images/radarHel.jpg";

export default function ProjectTop() {
  return (
    <div className="ProjektTop">
      <div className="projektDel">
        <img src={bordtennisHel} alt="" />
        <p>Aarhus Bordtennis</p>
      </div>
      <div className="projektDel">
        <img src={mensHel} alt="" />
        <p>Menstruation information</p>
      </div>
      <div className="projektDel">
        <img src={radarHel} alt="" />
        <p>Radar</p>
      </div>
    </div>
  );
}
