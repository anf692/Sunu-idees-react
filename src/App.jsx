import CardIdee from "./composants/CardIdee"
import Assane from "./assets/Assane.png"
import laye from "./assets/laye.jpeg"
import meth from "./assets/meth.jpeg"
import mame from "./assets/mame.jpeg"
import "./App.css"


const idees = [
  {
    id: 1,
    image: Assane,
    titre: "Bassirou DIEYE",
    description: "Le ‘expert en tout’ officiel de la classe. Dès qu’un nouveau arrive, il commence déjà à réfléchir comment le renvoyer avec stratégie diplomatique douteuse"
  },
  {
    id: 2,
    image: mame,
    titre: "Mame Saye LOM",
    description: "Elle ne pose pas des questions… elle mène des enquêtes scientifiques niveau NASA. Résultat : toute la classe est traumatisée intellectuellement"
  },
  {
    id: 3,
    image: meth,
    titre: "Mouhamed LO",
    description: "Surnommé ‘le magicien’ parce qu’il apparaît en cours… puis disparaît mystérieusement quand il y a un exercice au tableau "
  },
  {
    id: 4,
    image: laye,
    titre: "Abdoulaye NDIAYE",
    description: "description de Abdoulaye"
  },
  {
    id: 5,
    image: Assane,
    titre: "Assane Ndong FALL",
    description: "Expert mondial en tout et en rien à la fois. Il peut t’expliquer un sujet… puis te dire qu’il ne l’a jamais vu de sa vie"
  },
];

function App() {

  return (
    <div>
      <h1 className="title">Sunu-Idées (G3)💡</h1>
      <div className="parent">
        {idees.map((i)=>(
          <CardIdee
          key={i.id}
          id= {i.id}
          titre={i.titre}
          image= {i.image}
          description={i.description}
          />
        ))}
      </div>

    </div>
  )
}

export default App
