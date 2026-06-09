import { useState } from "react";



function CardIdee(props){

    const [vote, setVote]= useState(0)

    function Comptevote(){
        setVote(vote + 1)
    }

    return(
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "12px" }}>
            <h2>{props.titre}</h2>
            <p>{props.description}</p>
            <button onClick={Comptevote}>
                Vote👍({vote})
            </button>
        </div>
    )
}

export default CardIdee;


