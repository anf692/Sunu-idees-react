import { useState } from "react"


function CarteIdee (props){

    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(count + 1);
    }
    return(
  <div className="card m-2" style={{width: "18rem"}}>
    <div className="card-body" style={{backgroundColor: "grey"}}>
      <h5 className="card-title">{props.titre}</h5>
      <p className="card-text" style= {{margin: "5px"}}>{props.description}</p>
      <button onClick={handleIncrement} className="btn btn-primary">
        Voter 👍 {count}
      </button>
    </div>
  </div>
)
}

export default CarteIdee