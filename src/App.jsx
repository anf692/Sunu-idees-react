import { useState } from "react"
import CarteIdee from "./components/carteIdee"
import './App.css'

function App() {

  const idee =[
    {id: 1, titre: "idee1", description: "texte1"},
    {id: 2, titre: "idee2", description: "texte2"},
    {id: 3, titre: "idee3", description: "texte3"},
  ]
  return(
    <div className='col-red'>

      

      <h1 className="color"style={{backgroundColor: "black"}}>Home page</h1>
      {idee.map((i)=> (
        <CarteIdee
        id = {i.id}
        titre = {i.titre}
        description = {i.description}
        />
      ))}
       
    </div>
  )
}

export default App