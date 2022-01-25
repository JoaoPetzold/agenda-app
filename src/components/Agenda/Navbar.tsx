import { useContext } from "react";
import { AgendaContext, AgendaModes } from "../../contexts/AgendaContext";
import { Colors } from "../UI/color";
import { ButtonCircle, DDItem } from "../UI";
import { ButtonCircleDropdown } from "../UI/buttons"; 
import { FaUserAlt, FaMoon, FaSun } from "react-icons/fa";

import { Logoff } from './Utils/Funcoes';
import { FaRegAddressBook, FaDoorOpen } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isDarkTheme, setIsDarkTheme, setShowCalendar } = useContext(AgendaContext);

    return (
        <>
            <ButtonCircleDropdown idElement={"btn-user"} icon={<FaUserAlt />} colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6} >
                <DDItem onClick={() => setShowCalendar(false)}><Link to={'/'+AgendaModes.ViewAgendasMode}><FaRegAddressBook /> Minhas Agendas</Link></DDItem>
                <DDItem onClick={() => Logoff()}><FaDoorOpen /> Encerrar Sessão</DDItem>
            </ButtonCircleDropdown>

            <ButtonCircle colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => setIsDarkTheme(!isDarkTheme)}>
                {isDarkTheme ? <FaMoon /> : <FaSun />}
            </ButtonCircle>
        </>
    );
}

export default Navbar;