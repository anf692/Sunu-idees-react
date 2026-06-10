import React, { useEffect, useState } from "react";
import CardIdee from "./components/CardIdee";

const App = () => { 
  const idees = [
    {
      id: 1,
      titre: "Créer une application de gestion de tâches",
      description:
        "C'est une application qui permet de gérer les tâches de l'utilisateur. Elle permet de créer, modifier, supprimer et archiver les tâches.",
    },
    {
      id: 2,
      titre: "Créer une application de gestion de tâches",
      description:
        "C'est une application qui permet de gérer les tâches de l'utilisateur. Elle permet de créer, modifier, supprimer et archiver les tâches.",
    },
    {
      id: 3,
      titre: "Créer une application de gestion de tâches",
      description:
        "C'est une application qui permet de gérer les tâches de l'utilisateur. Elle permet de créer, modifier, supprimer et archiver les tâches.",
    },
    {
      id: 4,
      titre: "Créer une application de gestion de tâches",
      description:
        "C'est une application qui permet de gérer les tâches de l'utilisateur. Elle permet de créer, modifier, supprimer et archiver les tâches.",
    },
    {
      id: 5,
      titre: "Créer une application de gestion de tâches",
      description:
        "C'est une application qui permet de gérer les tâches de l'utilisateur. Elle permet de créer, modifier, supprimer et archiver les tâches.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">💡 Idées</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {idees.map((idee) => (
          <CardIdee key={idee.id} id={idee.id} titre={idee.titre} description={idee.description} />
        ))}
      </div>
    </div>
  );
};
export default App;
