import { Route, Routes, BrowserRouter } from "react-router-dom";
import UseToken from "./UseToken";

import Login from "./pages/Login";
import Agenda from './pages/Agenda';

const Rotas = () => {
    const {token, setToken} = UseToken();

    if(!token!) {
        return <Login setToken={setToken} />
    }

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