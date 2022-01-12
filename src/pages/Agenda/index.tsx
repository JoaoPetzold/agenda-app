import { useState } from 'react';
import Calendar from 'react-calendar';
import { AgendaContainer, CalendarioContainer, AgendaBox, NavbarContainer, ButtonIconedCircle, AreaContainer, EventContainer, EventGroup, EventTitle, EventTime } from '../../components/UI';
import styles from './styles.module.scss';
import { ThemeContext, Colors, Theme } from '../../contexts/ThemeContext';
import { FaUserAlt, FaMoon, FaSun } from 'react-icons/fa';
import { format } from 'date-fns';

const Agenda = () => {
    const [theme, setTheme] = useState<Theme>(Theme.Light);
    const [valorData, setValorData] = useState<Date>(new Date());

    const Agendas = [
        {
            CD_AGENDA: 1,
            AGENDA: "Pessoal",
            COR: "Purple"
        },
        {
            CD_AGENDA: 2,
            AGENDA: "Trabalho",
            COR: "Blue"
        }
    ];

    const EventosDia = [
        {
            CD_EVENTO: 1,
            CD_AGENDA: 1,
            CD_USUARIO: 1,
            EVENTO: "Dentista",
            DESCRICAO: "Levar 150 reais",
            DATA: "2022-01-11T09:00:00Z"
        },
        {
            CD_EVENTO: 2,
            CD_AGENDA: 2,
            CD_USUARIO: 1,
            EVENTO: "Cliente",
            DESCRICAO: "Ciclano Beltrano",
            DATA: "2022-01-11T11:30:00Z"
        },
        {
            CD_EVENTO: 3,
            CD_AGENDA: 2,
            CD_USUARIO: 1,
            EVENTO: "Cliente",
            DESCRICAO: "Fulano de Tal",
            DATA: "2022-01-11T13:00:00Z"
        },
        {
            CD_EVENTO: 4,
            CD_AGENDA: 1,
            CD_USUARIO: 1,
            EVENTO: "Oficina Mecânica",
            DESCRICAO: "Lembrar de pedir para trocar o óleo",
            DATA: "2022-01-11T15:30:00Z"
        },
    ];

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <AgendaContainer theme={theme}>
                <AgendaBox theme={theme}>
                    <CalendarioContainer theme={theme}>
                        <Calendar 
                            className={styles.reactCalendar}
                            value={valorData} 
                            onClickDay={(e : any) => setValorData(e.target)}
                            calendarType={'US'}
                            formatShortWeekday={(Locale, value) => ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][value.getDay()]}
                        />
                    </CalendarioContainer>

                    <NavbarContainer theme={theme}>
                        <ButtonIconedCircle 
                            theme={theme} 
                            color={theme === Theme.Light ? Colors.Gray1 : Colors.Gray3}
                        >
                            <FaUserAlt />
                        </ButtonIconedCircle>

                        <ButtonIconedCircle
                            theme={theme} 
                            color={theme === Theme.Light ? Colors.Gray1 : Colors.Gray3}
                            onClick={() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)}
                        >
                            {theme === Theme.Light ? <FaMoon /> : <FaSun />}
                        </ButtonIconedCircle>
                    </NavbarContainer>

                    <AreaContainer theme={theme}>
                        { 
                            EventosDia.map(item => 
                                <EventContainer key={item.CD_EVENTO} theme={theme} color={Colors.Gray6}>
                                    <EventGroup 
                                        theme={theme} 
                                        color={Colors[Agendas.find(a => a.CD_AGENDA === item.CD_AGENDA)?.COR as keyof typeof Colors]} 
                                    />

                                    <EventTitle>{item.EVENTO}</EventTitle>
                                    <EventTime>{format(new Date(item.DATA), 'hh:mm')}</EventTime>
                                </EventContainer>
                            ) 
                        }
                    </AreaContainer>
                </AgendaBox>
            </AgendaContainer>
        </ThemeContext.Provider>
    )
};
export default Agenda;
