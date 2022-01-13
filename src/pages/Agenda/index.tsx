import { useState } from 'react';
import Calendar from 'react-calendar';
import { AgendaContainer, CalendarioContainer, AgendaBox, NavbarContainer, ButtonCircle, AreaContainer, EventContainer, EventGroup, EventTitle, EventTime, EventControls } from '../../components/UI';
import { ButtonCircleDropdown } from '../../components/UI/buttons';
import styles from './styles.module.scss';
import { ThemeProvider } from 'styled-components';
import { Colors, ColorSchemeLight, ColorSchemeDark } from '../../components/UI/color'
import { FaUserAlt, FaMoon, FaSun, FaPlus, FaDoorOpen, FaRegAddressBook } from 'react-icons/fa';
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
    {
        CD_EVENTO: 9,
        CD_AGENDA: 1,
        CD_USUARIO: 1,
        EVENTO: "Oficina Mecânica",
        DESCRICAO: "Lembrar de pedir para trocar o óleo",
        DATA: "2022-01-11T15:30:00Z"
    },
    {
        CD_EVENTO: 10,
        CD_AGENDA: 1,
        CD_USUARIO: 1,
        EVENTO: "Oficina Mecânica",
        DESCRICAO: "Lembrar de pedir para trocar o óleo",
        DATA: "2022-01-11T15:30:00Z"
    },
];

const Agenda = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(false);
    const [valorData, setValorData] = useState<Date>(new Date());
    const [flippedIndex, setFlippedIndex] = useState<number>(-1);
    const [toggleUserMenu, setToggleUserMenu] = useState<Boolean>(false);

    const toggleFlippedIndex = (cd_evento : number) => {
        setFlippedIndex(flippedIndex === cd_evento ? -1 : cd_evento);
    };

    const colorGroup = (cd_agenda : number) => {
        return Agendas.find(a => a.CD_AGENDA === cd_agenda)?.COR as keyof typeof Colors
    }

    const MenuUser = [
        {
            idEvent: "agendas",
            caption: "Minhas Agendas",
            icon: <FaRegAddressBook />
        },
        {
            idEvent: "sair",
            caption: "Encerrar Sessão",
            icon: <FaDoorOpen />
        }
    ];

    return (
        <ThemeProvider theme={isDarkTheme ? ColorSchemeDark : ColorSchemeLight}>
            <AgendaContainer>
                <AgendaBox>
                    <CalendarioContainer>
                        <Calendar 
                            className={styles.reactCalendar}
                            value={valorData} 
                            onClickDay={(e : any) => setValorData(e.target)}
                            calendarType={'US'}
                            formatShortWeekday={(Locale, value) => ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][value.getDay()]}
                        />
                    </CalendarioContainer>
                    {/* active={toggleUserMenu} onClick={() => setToggleUserMenu(!toggleUserMenu)} */}
                    <NavbarContainer>
                        <ButtonCircleDropdown idElement={"btn-user"} colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} items={MenuUser} >
                            <FaUserAlt />
                        </ButtonCircleDropdown>

                        <ButtonCircle colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => setIsDarkTheme(!isDarkTheme)}>
                            {isDarkTheme ? <FaMoon /> : <FaSun />}
                        </ButtonCircle>
                    </NavbarContainer>

                    <AreaContainer>
                        { 
                            EventosDia.map(item => 
                                <EventContainer key={item.CD_EVENTO} colorx={Colors.Gray6} onClick={() => toggleFlippedIndex(item.CD_EVENTO)} active={flippedIndex === item.CD_EVENTO}>
                                    <EventGroup colorx={Colors[colorGroup(item.CD_AGENDA)]} />
                                    <EventTitle>{item.EVENTO}</EventTitle>
                                    <EventTime>{format(new Date(item.DATA), 'hh:mm')}</EventTime>
                                </EventContainer>
                            )
                        }
                    </AreaContainer>

                    <EventControls>
                        <ButtonCircle colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6}>
                            <FaPlus />
                        </ButtonCircle>
                    </EventControls>
                </AgendaBox>
            </AgendaContainer>
        </ThemeProvider>
    )
};
export default Agenda;
