import { useState } from "react";
import "./CardIdee.css";



function CardIdee({image, titre, description}){

    const [vote, setVote]= useState(0)

    function Comptevote(){
        setVote(vote + 1)
    }

    return(
        <div className="card">
            <img src={image} alt="" />

            <div className="card-content">
                <h2>{titre}</h2>
                <p>{description}</p>

                <button onClick={Comptevote}>
                Vote 👍 ({vote})
                </button>
            </div>
        </div>
    )
}

export default CardIdee;


