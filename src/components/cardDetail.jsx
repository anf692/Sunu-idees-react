import { useParams } from "react-router-dom";
import { Idee } from "../constants";

const CardDetailId = () => {
  const {id} = useParams();
  const idee = Idee.find((i) => i.id === Number(id))
  if (!idee) {
    <h2>Aucune idée disponible</h2>
  }
  return <div>
    {idee.titre}
    {idee.description}
  </div>;
};

export default CardDetailId;
