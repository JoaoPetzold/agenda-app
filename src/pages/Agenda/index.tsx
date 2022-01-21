import { useState } from 'react';
import { AgendaContainer, CalendarioContainer, AgendaBox, NavbarContainer, AreaContainer, EventControls } from '../../components/UI';
import { ThemeProvider } from 'styled-components';
import { ColorSchemeLight, ColorSchemeDark } from '../../components/UI/color'

import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import Navbar from '../../components/Agenda/Navbar';
import EventosLista from '../../components/Agenda/EventosLista';
import EventosNovo from '../../components/Agenda/EventosNovo';
import EventosControles from '../../components/Agenda/EventosControles';
import Calendario from '../../components/Agenda/Calendario';

const Agenda = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(false);
    const [agendaMode, setAgendaMode] = useState<AgendaModes>(AgendaModes.ViewMode);
    const [calendarDate, setCalendarDate] = useState<any>(new Date());
    const [flippedIndex, setFlippedIndex] = useState<number>(-1);

    return (
        <AgendaContext.Provider value={{ isDarkTheme, setIsDarkTheme, agendaMode, setAgendaMode, calendarDate, setCalendarDate, flippedIndex, setFlippedIndex }}>
            <ThemeProvider theme={isDarkTheme ? ColorSchemeDark : ColorSchemeLight}>

                <AgendaContainer>
                    <AgendaBox>

                        <CalendarioContainer>
                            <Calendario />
                        </CalendarioContainer>

                        <NavbarContainer>
                            <Navbar />
                        </NavbarContainer>

                        <AreaContainer>
                            {
                                {
                                    [AgendaModes.CreateMode]  : <EventosNovo />,
                                    [AgendaModes.ViewMode]    : <EventosLista />
                                }[agendaMode]
                            }
                        </AreaContainer>

                        <EventControls>
                            <EventosControles />
                        </EventControls>

                    </AgendaBox>
                </AgendaContainer>

            </ThemeProvider>
        </AgendaContext.Provider>
    )
};
export default Agenda;
