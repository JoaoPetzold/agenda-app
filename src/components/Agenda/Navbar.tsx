import { useContext } from "react";
import { AgendaContext } from "../../contexts/AgendaContext";
import { MenuUser } from "./Utils/Menus";
import { Colors } from "../UI/color";
import { ButtonCircle } from "../UI";
import { ButtonCircleDropdown } from "../UI/buttons"; 
import { FaUserAlt, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    const { isDarkTheme, setIsDarkTheme } = useContext(AgendaContext);
    return (
        <>
            <ButtonCircleDropdown idElement={"btn-user"} colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} items={MenuUser}>
                <FaUserAlt />
            </ButtonCircleDropdown>

            <ButtonCircle colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => setIsDarkTheme(!isDarkTheme)}>
                {isDarkTheme ? <FaMoon /> : <FaSun />}
            </ButtonCircle>
        </>
    );
}

export default Navbar;