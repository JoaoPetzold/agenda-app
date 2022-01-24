import { useContext, useEffect } from 'react';
import { AgendaContainer, CalendarioContainer, AgendaBox, NavbarContainer, EventArea } from '../../components/UI/agenda';

import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import Navbar from '../../components/Agenda/Navbar';
import EventosLista from '../../components/Agenda/EventosLista';
import EventosNovo from '../../components/Agenda/EventosNovo';
import Calendario from '../../components/Agenda/Calendario';
import Agendas from '../../components/Agenda/Agendas';
import { useParams } from 'react-router-dom';

const Agenda = () => {
    const { routerAgendaMode } = useParams();
    const {agendaMode, setAgendaMode, showCalendar, mobileRes} = useContext(AgendaContext);

    useEffect(() => {
        if (Object.values(AgendaModes).some((i : string) => i === routerAgendaMode)) {
            setAgendaMode(routerAgendaMode);
        } else { setAgendaMode(AgendaModes.ViewMode) };
    },[routerAgendaMode, setAgendaMode])

    return (
        <AgendaContainer>
            <AgendaBox active={showCalendar}>

                {showCalendar || !mobileRes ? 
                    <CalendarioContainer>
                        <Calendario />
                    </CalendarioContainer>
                :
                    null
                }

                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>

                
                <EventArea>
                    {
                        {
                            [AgendaModes.CreateMode]  : <EventosNovo />,
                            [AgendaModes.ViewMode]    : <EventosLista />,
                            [AgendaModes.AgendaMode]  : <Agendas />
                        }[agendaMode]
                    }                
                </EventArea>

            </AgendaBox>
        </AgendaContainer>
    )
};
export default Agenda;
