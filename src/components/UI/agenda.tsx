import styled from "styled-components";
import { rgba, animation } from 'polished';
import { StyledProps } from "./index";

// ---- Agenda ---- // 

    // ---- Container ---- //
export const AgendaContainer = styled.div<StyledProps>`
    width: calc(65vh / 0.5625);
    height: 65%;
    backdrop-filter: blur(1rem);
    border-radius: 0.5rem;

    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    };
`;

export const AgendaBox = styled.div<StyledProps>`
    font-size: 1rem;
    display: grid;
    grid-template-columns: 40% auto;
    grid-template-rows: 90% auto;
    grid-template-areas: 
        "c a"
        "n a";

    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0.5rem 0.15rem rgba(0,0,0,0.25);
    border-radius: 0.5rem;

    background-color: ${(props) => rgba(props.theme.Gray6, 0.75)};

    @media(max-width: 1280px) {
        grid-template-columns: 40% auto;
    };
    @media(max-width: 600px) {
        border-radius: 0;
        font-size: 1.25rem;

        grid-template-columns: 1fr;
        grid-template-rows: 8% 37% auto;
        ${(props) => props.active ? 
            `
                grid-template-areas: 
                    "n"
                    "c"
                    "a";
            `
        :
            `
                grid-template-areas: 
                    "n"
                    "a"
                    "a";
            `
    };
`;
    // ---- Fim Container ---- //

    // --- Calendario ---- //
export const CalendarioContainer = styled.div<StyledProps>`
    grid-area: c;
    width: 100%;
    height: 100%;

    display: flex;
    justify-self: center;

    margin-left: 1rem;
    @media(max-width: 600px) {
        width: 95%;
        margin-left: 0;
    };

    .react-calendar {
        height: 100%;
        width: 100%;

        .react-calendar__navigation {
            display: flex;
            padding: 1rem 0;
            background-color: transparent;

            .react-calendar__navigation__label {
                text-transform: uppercase;
                color: ${(props) => props.theme.Contrast};
            }

            .react-calendar__navigation__arrow {
                flex-grow: 0.333;
                color: ${(props) => props.theme.Contrast};
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;

            margin: 0.15rem;
            background-color: transparent;
            border: 0;
            color: ${(props) => props.theme.Contrast};
            padding: 1rem 0;
            font-weight: bold;

            border-radius: 1rem;
            -webkit-border-radius: 1rem;
            -moz-border-radius: 1rem;

            &:hover {
                cursor: pointer;
                outline: 0.1rem solid ${(props) => props.theme.Blue};
                outline-offset: 0px;
            }
            @media(max-width: 600px) {
                padding: 0;
                margin: 0;
                font-size: 1.15rem;
            };
        }

        .react-calendar__viewContainer {
            display: flex;
            height: calc(100% - 7rem);
            width: 100%;
            div {
                height: 100%;
                width: 100%;
            }
            .react-calendar__tile {
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                height: 80%;

                div {
                    font-size: 1.5rem;
                }
            }
            .react-calendar__tile--range {
                outline: 0.1rem solid ${(props) => props.theme.Blue};
                outline-offset: -1px;
                color: ${(props) => props.theme.Contrast};
            }
            .react-calendar__tile--now {
                outline: 0.1rem solid ${(props) => props.theme.Gray1};
                outline-offset: -1px;
                border-radius: 1rem;
                font-weight: bold;
                &:enabled:hover, &:enabled:focus {
                    outline: 0.1rem solid ${(props) => props.theme.Blue};
                    outline-offset: 0px;
                }
            }
            .react-calendar__month-view {
                .react-calendar__month-view__weekdays {
                    text-align: center;
                    height: 1.5rem;
                    text-transform: capitalize;
                    color: ${(props) => props.theme.Blue};
                    abbr{
                        text-decoration: none;
                    }
                }

                .react-calendar__month-view__days {
                    display: grid !important;
                    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
                    

                    .react-calendar__tile {
                        max-width: initial !important;
                    }
                }

                .react-calendar__month-view__days__day--neighboringMonth {
                    opacity: 0.2;
                }
                .react-calendar__month-view__days__day--weekend {
                    color: ${(props) => props.theme.Blue};
                }
            }

            .react-calendar__year-view__months, 
            .react-calendar__decade-view__years,
            .react-calendar__century-view__decades {
                display: grid !important;
                grid-template-columns: 20% 20% 20% 20% 20%;

                &.react-calendar__year-view__months {
                    grid-template-columns: 33.3% 33.3% 33.3%;
                }

                .react-calendar__tile {
                    max-width: initial !important;
                }
            }
        }  
    }
`;
    // ---- Fim Calendario ---- //

    // ---- Eventos ---- //
export const EventArea = styled.div<StyledProps>`
    grid-area: a;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 90% auto;
    grid-template-areas: 
        "EVP"
        "EVC";

    width: 100%;
    height: 100%;

    @media(max-width: 600px) {
        grid-template-rows: 80% auto;
    };
`;

export const AreaTitle = styled.span<StyledProps>`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.15rem;
    text-align: center;
    width: 100%;
    margin-top: 0.65rem;
    color: ${(props) => props.theme.Contrast};
`;

export const AreaContainer = styled.div<StyledProps>`
    grid-area: EVP;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;

    padding: 1.5rem 0;
    padding-right: 1rem;
    margin-left: 5%;

    width: 95%;
    height: auto;

    overflow-x: hidden;
    overflow-y: scroll;

    @media(max-width: 600px) {
        justify-content: center;
        width: 100%;
        margin: 0;
        padding: 0;
    };
`;

export const EventContainer = styled.div<StyledProps>`
    ${(props) => props.active ? 
        `
            height: 10rem;
            display: grid;
            grid-template-columns: 0.5rem 80% auto;
            grid-template-rows: 35% 45% 20%;
            grid-template-areas: 
                "evgrp evtitle evtime"
                "evgrp evdesc evdesc"
                "evgrp evbtn evbtn";

            align-items: center;
        `
    : 
        `
            height: 3.5rem;
            display: flex;
            align-items: center;
        `
    }
    width: 100%;
    margin: 0.5rem 0;
    box-shadow: 0px 0px 0.4rem 0.1rem rgba(0,0,0,0.125);
    border-radius: 0.5rem;
    user-select: none;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => rgba(props.theme[props.colorPrimary!], 0.5)};
    background-attachment: local, local, scroll, scroll;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    };

    &:active {
        @media(min-width: 600px) {
            ${(props) => props.active ? (props.active = false) : animation(['scale-open', '0.1s', 'cubic-bezier(0.390, 0.575, 0.565, 1.000)', 'both'])};
        };
    };

    @keyframes scale-open {
        0% {
            transform:scaleY(1);
            transform-origin: 100% 0;
        }
        100% {
            transform:scaleY(2.7);
            transform-origin: 100% 0;
        }
    };
    
    @media(max-width: 600px) {
        width: 95%;
    };
`;

export const EventGroup = styled.div<StyledProps>`
    grid-area: evgrp;
    width: 0.5rem;
    height: 100%;

    border-radius: 5rem 0 0 5rem;

    background-color: ${(props) => rgba(props.theme[props.colorPrimary!], 1)};

    @media(max-width: 600px) {
        width: 0.6rem;
    };
`;

export const EventTitle = styled.span`
    grid-area: evtitle;
    margin: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    
    @media(max-width: 600px) {
        font-size: 1.25rem;
    };
`;

export const EventDescription = styled.div<StyledProps>`
    grid-area:  evdesc;
    ${(props) => props.active ? 
        `
            display: block;
        `
    :
        `
            display: none;
        `
    };

    margin: 1rem;
    font-size: 0.8rem;
    text-align: justify;
    
    @media(max-width: 600px) {
        font-size: 0.75rem;
    }
`;

export const EventTime = styled.span`
    grid-area: evtime;
    margin: 1rem 1rem 1rem auto;
    font-size: 1rem;
    
    @media(max-width: 600px) {
        font-size: 1.25rem;
    };
`;

export const EventControls = styled.div<StyledProps>`
    grid-area: EVC;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;

    border-radius: 0 0 0 0.5rem;

    @media(max-width: 600px) {
        padding-top: 2%;
        align-items: flex-start;
    }
`;

export const EventForm = styled.form<StyledProps>`
    grid-area: EVP;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 10% 3.5rem 3.5rem calc(100% - 10% - 3.5rem - 3.5rem);
    grid-template-areas: 
        "EFT EFT"
        "EFE EFH"
        "EFC EFA"
        "EFD EFD";
    
    align-content: flex-start;

    width: 100%;
    height: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.0rem;
    margin: 0.15rem;
    color: ${(props) => props.theme.Contrast};

    span {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        width: 100%;
    };
    
    @media(max-width: 600px) {
        font-size: 1.15rem;
        justify-content: center;
        padding: 0.75rem;
        margin: 0;

        span{font-size: 1.15rem};        
    };
`;
    // ---- Fim Eventos ---- //

    // ---- NavBar ---- //
export const NavbarContainer = styled.div<StyledProps>`
    grid-area: n;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;

    border-radius: 0 0 0 0.5rem;
`;
    // ---- Fim NavBar ---- //

    // ---- Agendas ---- //
export const AgendaItemContainer = styled.div<StyledProps>`
    height: 3.5rem;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0.5rem 0;
    box-shadow: 0px 0px 0.4rem 0.1rem rgba(0,0,0,0.125);
    border-radius: 0.5rem;
    user-select: none;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => rgba(props.theme[props.colorPrimary!], 0.5)};
    background-attachment: local, local, scroll, scroll;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    };
    @media(max-width: 600px) {
        width: 95%;
    };
`;

export const AgendaForm = styled.form<StyledProps>`
    grid-area: EVP;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 10% 3.5rem auto;
    grid-template-areas: 
        "AFT AFT"
        "AFN AFN"
        "AFC AFP";
    
    align-content: flex-start;

    width: 100%;
    height: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.0rem;
    margin: 0.15rem;
    color: ${(props) => props.theme.Contrast};

    span {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        width: 100%;
    };
    
    @media(max-width: 600px) {
        font-size: 1.15rem;
        justify-content: center;
        padding: 0.75rem;
        margin: 0;

        span{font-size: 1.15rem};        
    };
`;
    // ---- Fim Agendas ---- //
// ---- Fim Agenda ---- //