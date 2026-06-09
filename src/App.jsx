import CardIdee from "./composants/CardIdee"


const idees = [
  { id: 1, titre: "Idée 1", description: "Texte de la première idée" },
  { id: 2, titre: "Idée 2", description: "Texte de la deuxième idée" },
  { id: 3, titre: "Idée 3", description: "Texte de la troisième idée" },
]


function App() {

  return (
    <div>
      <h1>Sunu-Idées 💡</h1>
      {idees.map((i)=>(
        <CardIdee
        key={i.id}
        id= {i.id}
        titre={i.titre}
        description={i.description}
        />
      ))}

    </div>
  )
}

export default App
