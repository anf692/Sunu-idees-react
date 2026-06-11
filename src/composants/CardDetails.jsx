import { useParams, Link } from "react-router-dom";
import { idees } from "../data/data";
import "./css/CardDetail.css";

function CardDetail() {

  const { id } = useParams(); //id dans l'URL est une variable dynamique. useParams() est le hook React Router qui récupère cette variable depuis l'URL.

  console.log(useParams())
  const idee = idees.find((i) => i.id === parseInt(id));

  if (!idee) {
    return <p>Idée non trouvée</p>;
  }

  return (
    <div className="detail-container">
      
      <div className="detail-card">

        <div className="detail-image">
          <img src={idee.image} alt={idee.titre} />
        </div>

        <div className="detail-content">
          <h1>{idee.titre}</h1>
          <p>{idee.description}</p>

          <Link to="/" className="back-btn">
            ← Retour
          </Link>
        </div>

      </div>

    </div>
  );
}

export default CardDetail;

