import { useState } from "react";
import "./css/CardIdee.css";
import { idees } from "../data/data";
import CardItem from "./CardItem";



function CardIdee(){

    return(

        <div>

            <h2 className="title">Sunu-Idee (G3)👑</h2>

            <div className="parent">

                {idees.map((i)=>(
                    <CardItem 
                    key={i.id}
                    id={i.id}
                    titre={i.titre}
                    description={i.description}
                    image={i.image}
                    />
                ))}
                
            </div>

        </div>
        
    )
}

export default CardIdee;



