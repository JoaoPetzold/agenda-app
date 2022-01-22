import { useContext } from 'react';
import { AgendaContainer, CalendarioContainer, AgendaBox, NavbarContainer, EventArea } from '../../components/UI';

import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import Navbar from '../../components/Agenda/Navbar';
import EventosLista from '../../components/Agenda/EventosLista';
import EventosNovo from '../../components/Agenda/EventosNovo';
import Calendario from '../../components/Agenda/Calendario';
import Agendas from '../../components/Agenda/Agendas';

const Agenda = () => {
    const {agendaMode} = useContext(AgendaContext);

    return (
        <AgendaContainer>
            <AgendaBox>

                <CalendarioContainer>
                    <Calendario />
                </CalendarioContainer>

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
