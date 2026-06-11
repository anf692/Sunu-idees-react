import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardIdee from "../composants/CardIdee";
import CardDetail from "../composants/CardDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardIdee />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


