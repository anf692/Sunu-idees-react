import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardIdee from "../composants/CardIdee";
import CardDetail from "../composants/CardDetails";
import Erreur from "../_utils/Erreur";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardIdee />} />
        <Route path="/detail/:id" element={<CardDetail />} />

        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


