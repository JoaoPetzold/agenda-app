import { useState } from 'react';
import Calendar from 'react-calendar';
import { AgendaContainer, CalendarioContainer, AgendaBox, NavbarContainer, ButtonCircle, AreaContainer, EventContainer, EventGroup, EventTitle, EventTime, EventControls, EventDescription } from '../../components/UI';
import { ButtonCircleDropdown } from '../../components/UI/buttons';
import styles from './styles.module.scss';
import { ThemeProvider } from 'styled-components';
import { Colors, ColorSchemeLight, ColorSchemeDark } from '../../components/UI/color'
import { FaUserAlt, FaMoon, FaSun, FaPlus, FaDoorOpen, FaRegAddressBook, FaCheck, FaTrashAlt, FaEllipsisH } from 'react-icons/fa';
import { utcToZonedTime, format } from 'date-fns-tz';

const Agendas = [
    {
        CD_AGENDA: 1,
        AGENDA: "Pessoal",
        COR: "Red"
    },
    {
        CD_AGENDA: 2,
        AGENDA: "Trabalho",
        COR: "Green"
    }
];

const EventosDia = [
    {
        "CD_EVENTO": 1,
        "CD_AGENDA": 2,
        "CD_USUARIO": 1,
        "EVENTO": "reprehenderit esse ea",
        "DESCRICAO": "reprehenderit commodo eiusmod dolor ut ex ullamco velit quis consequat eiusmod cupidatat deserunt Lorem dolore cillum in consectetur adipisicing nostrud eu fugiat ut voluptate voluptate aute cupidatat duis in minim exercitation ad tempor elit laborum consequat elit esse qui pariatur occaecat et anim commodo non sit proident consequat dolor id",
        "DATA": "2022-01-14T09:00:00"
    },
    {
        "CD_EVENTO": 2,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "fugiat esse deserunt",
        "DESCRICAO": "amet id consequat id do ut dolor ea fugiat et consequat adipisicing deserunt et irure irure magna labore sunt nulla id deserunt esse voluptate mollit ullamco eu et cillum anim dolore ex sit in et voluptate ipsum amet quis dolor dolor labore esse culpa aliquip labore irure mollit enim occaecat",
        "DATA": "2022-01-14T09:35:00"
    },
    {
        "CD_EVENTO": 3,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "laborum in incididunt",
        "DESCRICAO": "do proident sit deserunt laboris ipsum sint excepteur mollit esse incididunt minim culpa et dolor ullamco elit commodo ullamco commodo velit do laboris do amet id sit non ea cillum ea Lorem adipisicing anim esse culpa Lorem duis ipsum voluptate aliqua veniam enim sunt Lorem ea excepteur incididunt sunt eiusmod",
        "DATA": "2022-01-14T10:00:00"
    },
    {
        "CD_EVENTO": 4,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "sit pariatur cupidatat",
        "DESCRICAO": "qui duis pariatur culpa ad esse aliqua ullamco incididunt dolor proident tempor id non dolore exercitation dolore veniam non quis tempor labore culpa aliqua adipisicing mollit non incididunt consequat deserunt laborum nulla voluptate quis nisi nulla nulla laborum sint reprehenderit dolor voluptate in Lorem aute ad proident amet non ex",
        "DATA": "2022-01-14T10:40:00"
    },
    {
        "CD_EVENTO": 5,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "esse minim exercitation",
        "DESCRICAO": "elit exercitation elit laborum elit nisi duis ut voluptate sint est ex id commodo elit nisi cillum duis cillum ipsum esse ea magna cillum quis occaecat sit id quis id voluptate aliquip aute pariatur reprehenderit et nostrud qui in dolor consectetur ipsum aliquip exercitation ea officia eu anim esse cillum",
        "DATA": "2022-01-14T11:20:00"
    },
    {
        "CD_EVENTO": 6,
        "CD_AGENDA": 2,
        "CD_USUARIO": 1,
        "EVENTO": "officia nisi do",
        "DESCRICAO": "officia et excepteur pariatur magna eiusmod et et culpa qui veniam aliquip proident cupidatat id et magna et id eu irure Lorem velit minim veniam pariatur non non cupidatat cillum magna do ipsum nisi reprehenderit ullamco consectetur Lorem non labore occaecat tempor dolor incididunt exercitation cupidatat culpa esse cupidatat exercitation",
        "DATA": "2022-01-14T11:45:00"
    },
    {
        "CD_EVENTO": 7,
        "CD_AGENDA": 2,
        "CD_USUARIO": 1,
        "EVENTO": "ullamco aute magna",
        "DESCRICAO": "et fugiat ea aute et cillum sunt voluptate non nisi tempor ea nisi quis cillum nisi commodo ad cillum esse reprehenderit nostrud cupidatat ipsum deserunt laborum labore enim sunt mollit magna tempor tempor nostrud duis id non ex Lorem amet labore eu ex minim voluptate laborum consequat sunt veniam qui",
        "DATA": "2022-01-14T12:00:00"
    },
    {
        "CD_EVENTO": 8,
        "CD_AGENDA": 2,
        "CD_USUARIO": 1,
        "EVENTO": "voluptate qui Lorem",
        "DESCRICAO": "minim irure commodo reprehenderit aliqua commodo id Lorem id do deserunt duis excepteur dolore minim ea aliquip esse cupidatat esse officia commodo sit fugiat dolore ullamco laboris officia adipisicing pariatur nostrud quis dolor laboris aute excepteur non ad amet cupidatat pariatur voluptate occaecat velit id ad incididunt minim nisi ex",
        "DATA": "2022-01-14T13:00:00"
    },
    {
        "CD_EVENTO": 9,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "non aliqua commodo",
        "DESCRICAO": "pariatur minim tempor ut fugiat sint ullamco sit sunt aute veniam quis sint sint quis irure pariatur occaecat aliquip ad consequat sunt in duis dolore deserunt duis occaecat voluptate sit enim sint anim enim aliqua ad sit magna commodo ex eu voluptate ut mollit non occaecat exercitation et ad dolore",
        "DATA": "2022-01-14T14:00:00"
    },
    {
        "CD_EVENTO": 10,
        "CD_AGENDA": 2,
        "CD_USUARIO": 1,
        "EVENTO": "eu cupidatat ea",
        "DESCRICAO": "culpa reprehenderit mollit laborum labore consectetur cupidatat officia ea proident laboris duis do voluptate aute duis et eiusmod id nulla ut aliquip irure irure reprehenderit laboris occaecat esse occaecat veniam aliquip culpa labore eu aliquip amet aliqua tempor tempor magna id labore sunt excepteur ad ut consectetur aliqua reprehenderit nulla",
        "DATA": "2022-01-14T15:30:00"
    },
    {
        "CD_EVENTO": 11,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "est pariatur irure",
        "DESCRICAO": "non amet eiusmod deserunt eiusmod irure aute consectetur excepteur commodo cupidatat nulla ut esse ad quis et incididunt non commodo qui labore nulla et do duis culpa dolor minim pariatur qui ipsum ullamco ipsum ullamco dolor occaecat amet velit in dolor labore elit eiusmod ut occaecat exercitation ex aute duis",
        "DATA": "2022-01-14T16:00:00"
    },
    {
        "CD_EVENTO": 12,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "et consequat esse",
        "DESCRICAO": "irure nulla excepteur velit nulla esse amet deserunt commodo sunt quis proident ea laborum cupidatat sint laboris consectetur aute ut elit anim est excepteur nostrud duis do excepteur ea amet anim ad aute minim dolor consequat duis veniam quis est cillum commodo quis ut ipsum occaecat officia laboris adipisicing in",
        "DATA": "2022-01-14T16:30:00"
    },
    {
        "CD_EVENTO": 13,
        "CD_AGENDA": 1,
        "CD_USUARIO": 1,
        "EVENTO": "aliquip sunt labore",
        "DESCRICAO": "excepteur exercitation adipisicing Lorem do anim ut voluptate commodo incididunt excepteur est esse proident qui tempor laborum magna reprehenderit duis qui eu incididunt consequat aliquip sit sunt sint exercitation consequat enim enim consequat qui mollit ad nulla aliquip amet culpa ullamco eu ipsum eiusmod est anim id voluptate quis sunt",
        "DATA": "2022-01-14T17:00:00"
    },
    {
        "CD_EVENTO": 14,
        "CD_AGENDA": 2,
        "CD_USUARIO": 1,
        "EVENTO": "occaecat ullamco voluptate",
        "DESCRICAO": "irure aute aliqua incididunt aliquip nostrud minim commodo qui sunt nostrud dolore irure non est ut officia Lorem non pariatur occaecat consectetur quis eu deserunt nulla proident aute pariatur qui culpa reprehenderit adipisicing occaecat dolore esse ipsum Lorem do laborum ex commodo veniam pariatur cupidatat esse anim officia ad anim",
        "DATA": "2022-01-14T17:30:00"
    },
    {
        "CD_EVENTO": 15,
        "CD_AGENDA": 2,
        "CD_USUARIO": 1,
        "EVENTO": "non laboris ipsum",
        "DESCRICAO": "cillum pariatur et commodo mollit labore mollit adipisicing minim laborum aute occaecat ad cillum aliqua ut officia laborum excepteur aute exercitation anim non do ex eu ipsum qui eu nostrud et est dolor elit aute ut cillum ex ut nulla eiusmod duis minim sint aliqua magna ullamco eiusmod esse officia",
        "DATA": "2022-01-14T21:00:00"
    }
];

const Agenda = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(false);
    const [valorData, setValorData] = useState<Date>(new Date());
    const [flippedIndex, setFlippedIndex] = useState<number>(-1);

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

    const MenuEventoOpcoes = [
        {
            idEvent: "eventoCancelar",
            caption: "Excluir Evento",
            icon: <FaTrashAlt />
        },
        {
            idEvent: "eventoConcluir",
            caption: "Concluir Evento",
            icon: <FaCheck />
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
                                    <EventTime>{format(utcToZonedTime(new Date(item.DATA), 'America/Sao_Paulo'), 'HH:mm')}</EventTime>
                                    <EventDescription active={flippedIndex === item.CD_EVENTO}>{item.DESCRICAO}</EventDescription>
                                </EventContainer>
                            )
                        }
                    </AreaContainer>

                    <EventControls>
                        {flippedIndex === -1 ?
                            <ButtonCircle colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6}>
                                <FaPlus />
                            </ButtonCircle>                            
                        :
                            
                            <ButtonCircleDropdown idElement={"btn-event-options"} colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} items={MenuEventoOpcoes}>
                                <FaEllipsisH />
                            </ButtonCircleDropdown>
                        }
                    </EventControls>

                </AgendaBox>
            </AgendaContainer>
        </ThemeProvider>
    )
};
export default Agenda;
