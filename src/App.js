import BoasVindas from "./BoasVindas";
import Perguntas from "./Perguntas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App () {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BoasVindas />} />
                <Route path="/perguntas" element={<Perguntas />} />
            </Routes>
        </BrowserRouter>
    )
}