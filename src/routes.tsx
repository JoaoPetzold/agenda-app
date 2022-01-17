import { Route, Routes, BrowserRouter } from "react-router-dom";

import Agenda from './pages/Agenda';

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Agenda />} />
                <Route path="*" element={<Agenda />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;