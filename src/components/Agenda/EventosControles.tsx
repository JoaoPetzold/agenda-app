import { useContext } from "react";
import { AgendaContext, AgendaModes } from "../../contexts/AgendaContext";
import { MenuEventoOpcoes } from "./Utils/Menus";
import { Colors } from "../UI/color";
import { ButtonCircle } from "../UI";
import { ButtonCircleDropdown } from "../UI/buttons";
import { FaTimes, FaCheck, FaPlus, FaEllipsisH } from "react-icons/fa";

const EventosControles = () => {
    const { isDarkTheme, flippedIndex, agendaMode, setAgendaMode } = useContext(AgendaContext);

    return (
        <>
            {
                flippedIndex === -1 ?
                    (
                        agendaMode === AgendaModes.CreateMode ?
                            <>
                                <ButtonCircle colorx={Colors.Red} onClick={() => setAgendaMode(AgendaModes.ViewMode)}>
                                    <FaTimes />
                                </ButtonCircle>

                                <ButtonCircle colorx={Colors.Green}>
                                    <FaCheck />
                                </ButtonCircle>
                            </>
                        :
                            <ButtonCircle colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => setAgendaMode(AgendaModes.CreateMode)}>
                                <FaPlus />
                            </ButtonCircle>  
                    )                          
                :
                    (
                        <ButtonCircleDropdown idElement={"btn-event-options"} colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} items={MenuEventoOpcoes}>
                            <FaEllipsisH />
                        </ButtonCircleDropdown>
                    )
            }
        </>
    );
};

export default EventosControles;