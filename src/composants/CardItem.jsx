import { useState } from "react";
import "./css/CardItem.css";
import { Link } from "react-router-dom";



function CardItem({image,titre,description,id}){

    const [vote, setVote]= useState(0)

    function Comptevote(){
        setVote(vote + 1)
    }
    
    return(
        <div className="card">

            <div className="card-image">
                <img src={image} alt={titre} />
            </div>

            <div className="card-content">
                <h2>{titre}</h2>
                <p>{description}</p>

                <div className="card-actions">
                    <button onClick={Comptevote}>
                        👍 {vote}
                    </button>

                    <Link to={`/detail/${id}`}>
                        Détail
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default CardItem;



