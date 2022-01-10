import styled from "styled-components";
import { Theme, Colors, DarkColors, LightColors } from "../../contexts/ThemeContext";

interface ColorProps {
    theme: Theme;
    color?: Colors;
};

const Color = (theme : Theme, color : Colors) => {
    return theme === Theme.Light ? LightColors[color] : DarkColors[color];
}

export const CalendarioContainer = styled.div<ColorProps>`
.react-calendar {
    height: 100%;
    background-color: ${(props) => Color(props.theme, Colors.Gray6)};

    .react-calendar__navigation {
        display: flex;
        padding: 1rem 0;
        background-color: ${(props) => Color(props.theme, Colors.Blue)};
    
        .react-calendar__navigation__label {
            text-transform: uppercase;
        }

        .react-calendar__navigation__arrow {
            flex-grow: 0.333;
        }
    }

    button {
        margin: 0.15rem;
        background-color: transparent;
        border: 0;
        color: ${(props) => Color(props.theme, Colors.Contrast)};
        padding: 1rem 0;
        font-weight: bold;

        &:hover {
            cursor: pointer;
            outline: 0.1rem solid ${(props) => Color(props.theme, Colors.Blue)};
            outline-offset: 0px;
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
            outline: 0.1rem solid ${(props) => Color(props.theme, Colors.Blue)};
            outline-offset: 0px;
            color: ${(props) => Color(props.theme, Colors.Contrast)};
        }
        .react-calendar__tile--now {
            color: ${(props) => Color(props.theme, Colors.Contrast)};
            background-color: ${(props) => Color(props.theme, Colors.Blue)};
            font-weight: bold;
            &:enabled:hover, &:enabled:focus {
                outline: 0.1rem solid ${(props) => Color(props.theme, Colors.Blue)};
                outline-offset: 0px;
                color: ${(props) => Color(props.theme, Colors.Contrast)};
            }
        }
        .react-calendar__month-view {
            .react-calendar__month-view__weekdays {
                text-align: center;
                height: 1.5rem;
                text-transform: capitalize;
                color: ${(props) => Color(props.theme, Colors.Blue)};
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
                color: ${(props) => Color(props.theme, Colors.Blue)};
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