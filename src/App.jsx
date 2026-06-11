import React, { useEffect, useState } from "react";
import CardIdee from "./components/CardIdee";
import { Idee } from "./constants";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">💡 Idées</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Idee.map((idee) => (
          <CardIdee key={idee.id} id={idee.id} titre={idee.titre} description={idee.description} />
        ))}
      </div>
    </div>
  );
};
export default App;
