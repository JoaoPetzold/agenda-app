import { useState } from 'react';
import Calendar from 'react-calendar';
import { AgendaContainer, CalendarioContainer, AgendaBox, NavbarContainer, ButtonCircle, AreaContainer, EventContainer, EventGroup, EventTitle, EventTime, EventControls } from '../../components/UI';
import { ButtonCircleDropdown } from '../../components/UI/buttons';
import styles from './styles.module.scss';
import { ThemeContext, Colors, Theme } from '../../contexts/ThemeContext';
import { FaUserAlt, FaMoon, FaSun, FaPlus } from 'react-icons/fa';
import { format } from 'date-fns';

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
    {
        CD_EVENTO: 5,
        CD_AGENDA: 1,
        CD_USUARIO: 1,
        EVENTO: "Oficina Mecânica",
        DESCRICAO: "Lembrar de pedir para trocar o óleo",
        DATA: "2022-01-11T15:30:00Z"
    },
    {
        CD_EVENTO: 6,
        CD_AGENDA: 1,
        CD_USUARIO: 1,
        EVENTO: "Oficina Mecânica",
        DESCRICAO: "Lembrar de pedir para trocar o óleo",
        DATA: "2022-01-11T15:30:00Z"
    },
    {
        CD_EVENTO: 7,
        CD_AGENDA: 1,
        CD_USUARIO: 1,
        EVENTO: "Oficina Mecânica",
        DESCRICAO: "Lembrar de pedir para trocar o óleo",
        DATA: "2022-01-11T15:30:00Z"
    },
    {
        CD_EVENTO: 8,
        CD_AGENDA: 1,
        CD_USUARIO: 1,
        EVENTO: "Oficina Mecânica",
        DESCRICAO: "Lembrar de pedir para trocar o óleo",
        DATA: "2022-01-11T15:30:00Z"
    },
];

const Agenda = () => {
    const [theme, setTheme] = useState<Theme>(Theme.Light);
    const [valorData, setValorData] = useState<Date>(new Date());
    const [flippedIndex, setFlippedIndex] = useState<number>(-1);
    const [toggleUserMenu, setToggleUserMenu] = useState<Boolean>(false);

    const toggleFlippedIndex = (cd_evento : number) => {
        setFlippedIndex(flippedIndex === cd_evento ? -1 : cd_evento)
    };

    const colorGroup = (cd_agenda : number) => {
        return Agendas.find(a => a.CD_AGENDA === cd_agenda)?.COR as keyof typeof Colors
    }

    const changeTheme = () => {
        setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
    };

    const MenuUser = [
        {
            idEvent: "agendas",
            caption: "Minhas Agendas",
            icon: <FaMoon />
        },
        {
            idEvent: "sair",
            caption: "Sair da conta",
            icon: <FaSun />
        }
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
                        <ButtonCircleDropdown idElement={"btn-user"} theme={theme} color={theme === Theme.Light ? Colors.Gray1 : Colors.Gray3} items={MenuUser} active={toggleUserMenu} onClick={() => setToggleUserMenu(!toggleUserMenu)}>
                            <FaUserAlt />
                        </ButtonCircleDropdown>

                        <ButtonCircle theme={theme} color={theme === Theme.Light ? Colors.Gray1 : Colors.Gray3} onClick={() => changeTheme()}>
                            {theme === Theme.Light ? <FaMoon /> : <FaSun />}
                        </ButtonCircle>
                    </NavbarContainer>

                    <AreaContainer theme={theme}>
                        { 
                            EventosDia.map(item => 
                                <EventContainer key={item.CD_EVENTO} theme={theme} color={Colors.Gray6} onClick={() => toggleFlippedIndex(item.CD_EVENTO)} active={flippedIndex === item.CD_EVENTO}>
                                    <EventGroup theme={theme} color={Colors[colorGroup(item.CD_AGENDA)]} />
                                    <EventTitle>{item.EVENTO}</EventTitle>
                                    <EventTime>{format(new Date(item.DATA), 'hh:mm')}</EventTime>
                                </EventContainer>
                            )
                        }
                    </AreaContainer>

                    <EventControls theme={theme}>
                        <ButtonCircle theme={theme} color={theme === Theme.Light ? Colors.Gray1 : Colors.Gray3}>
                            <FaPlus />
                        </ButtonCircle>
                    </EventControls>
                </AgendaBox>
            </AgendaContainer>
        </ThemeContext.Provider>
    )
};
export default Agenda;
