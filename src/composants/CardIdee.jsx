import { useState } from "react";
import "./CardIdee.css";



function CardIdee(props){

    const [vote, setVote]= useState(0)

    function Comptevote(){
        setVote(vote + 1)
    }

    return(
        <div className="card">
            <img src={props.image} alt="" />

            <div className="card-content">
                <h2>{props.titre}</h2>
                <p>{props.description}</p>

                <button onClick={Comptevote}>
                Vote 👍 ({vote})
                </button>
            </div>
        </div>
    )
}

export default CardIdee;


