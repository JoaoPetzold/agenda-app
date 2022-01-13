import styled from "styled-components";
import { Colors } from "./color";
import { rgba, animation } from 'polished';

interface screenPosition {
    left: number;
    top: number;
}

interface StyledProps {
    idElement?: string;
    colorx?: Colors;
    active?: Boolean;
    screenPos?: screenPosition;
};

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.Contrast};
    background-image: url("https://picsum.photos/${window.screen.availWidth}/${window.screen.availHeight}");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ButtonCircle = styled.button<StyledProps>`
    width: 2.2rem;
    height: 2.2rem;

    background-color: ${(props) => props.theme[props.colorx!]};
    border: none;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 5rem;

    svg {
        margin-left: auto;
        margin-right: auto;
        display: block !important;
        color: ${(props) => props.theme.Contrast};
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    }
    &:active {
        background-color: ${(props) => props.theme.Gray5};

        svg {
            color: ${(props) => props.theme.Contrast};
        }
    }
`;

export const DropDown = styled.div<StyledProps>`
    ${(props) => props.active ? 
        `
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            z-index: 1;
        `
    : 
        `
            display: none;
        `
    };

    width: 12rem;
    height: 5rem;

    padding: 0.5rem;

    left: calc(${(props) => props.screenPos!?.left}px - 6rem);
    top: calc(${(props) => props.screenPos!?.top}px - 5.25rem);

    background-color: ${(props) => rgba(props.theme.Gray6, 0.99)};
    box-shadow: 0px 0px 0.4rem 0.1rem rgba(0,0,0,0.15);
    border-radius: 0.5rem; 
`;

export const DDItem = styled.div<StyledProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 1.8rem;
    margin: 0.1rem 0;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => rgba(props.theme.Gray6, 1)};
    border-radius: 0.5rem;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.Gray6};
        background-color: ${(props) => props.theme.Blue};
    }
    &:active {
        color: ${(props) => props.theme.Contrast};
    }
    svg {
        margin: 0 0.5rem;
    }
`;

// ---- Agenda ---- // 

    // ---- Container ---- //
export const AgendaContainer = styled.div<StyledProps>`
    width: 65%;
    height: 65%;
    backdrop-filter: blur(1rem);
    border-radius: 0.5rem;

    @media(max-width: 1280px) {
        width: 80%;
        height: 65%;
    }
`;

export const AgendaBox = styled.div<StyledProps>`
    display: grid;
    grid-template-columns: 35% auto;
    grid-template-rows: 90% auto;
    grid-template-areas: 
        "c a"
        "n ec";

    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0.5rem 0.15rem rgba(0,0,0,0.25);
    border-radius: 0.5rem;

    background-color: ${(props) => rgba(props.theme.Gray6, 0.825)};

    @media(max-width: 1280px) {
        grid-template-columns: 40% auto;
    }
`;
    // ---- Fim Container ---- //
    // --- Calendario ---- //
export const CalendarioContainer = styled.div<StyledProps>`
    grid-area: c;
    width: 100%;
    height: 100%;

    margin-left: 1rem;

    .react-calendar {
        height: 100%;

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
            margin: 0.15rem;
            background-color: transparent;
            border: 0;
            color: ${(props) => props.theme.Contrast};
            padding: 1rem 0;
            font-weight: bold;

            &:hover {
                cursor: pointer;
                outline: 0.1rem solid ${(props) => props.theme.Blue};
                outline-offset: 0px;
                border-radius: 5rem;
            }
        }

        .react-calendar__viewContainer {
            display: flex;
            height: calc(100% - 7rem);
            width: 100%;
            div {
                height: 100%;
                width: 100%;
            }

            .react-calendar__tile--range {
                outline: 0.1rem solid ${(props) => props.theme.Blue};
                outline-offset: 0px;
                border-radius: 5rem;
                color: ${(props) => props.theme.Contrast};
            }
            .react-calendar__tile--now {
                color: ${(props) => props.theme.Gray6};
                background-color: ${(props) => props.theme.Blue};
                border-radius: 5rem;
                font-weight: bold;
                &:enabled:hover, &:enabled:focus {
                    outline: 0.1rem solid ${(props) => props.theme.Blue};
                    outline-offset: 0px;
                    border-radius: 5rem;
                    color: ${(props) => props.theme.Gray6};
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
export const AreaContainer = styled.div<StyledProps>`
    grid-area: a;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-end;

    padding: 1.5rem 0;
    padding-right: 1rem;

    width: 100%;
    height: auto;

    overflow-x: hidden;
    overflow-y: scroll;
`;

export const EventContainer = styled.div<StyledProps>`
    ${(props) => props.active ? 
        `
            width: 90%;
            height: 14rem;
        `
    : 
        `
            width: 90%;
            height: 3.5rem;
        `
    }
    display: flex;
    align-items: center;
    margin: 0.5rem 0;

    box-shadow: 0px 0px 0.4rem 0.1rem rgba(0,0,0,0.15);
    border-radius: 0.5rem;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => rgba(props.theme[props.colorx!], 0.9)};

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    };

    &:active {
        ${(props) => props.active ? (props.active = false) : animation(['scale-open', '0.1s', 'cubic-bezier(0.390, 0.575, 0.565, 1.000)', 'both'])};
    };

    @keyframes scale-open {
        0% {
            transform:scaleY(1);
            transform-origin:100% 0;
        }
        100% {
            transform:scaleY(4);
            transform-origin:100% 0;
        }
    };
`;

export const EventGroup = styled.div<StyledProps>`
    width: 0.5rem;
    height: 100%;

    border-radius: 5rem 0 0 5rem;

    background-color: ${(props) => rgba(props.theme[props.colorx!], 1)};
`;

export const EventTitle = styled.span`
    margin: 1rem;
`;

export const EventTime = styled.span`
    margin: 0 1rem 0 auto;
`;

export const EventControls = styled.div<StyledProps>`
    grid-area: ec;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    border-radius: 0 0 0 0.5rem;
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

// ---- Fim Agenda ---- //