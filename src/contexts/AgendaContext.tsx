import { createContext } from 'react';

export enum AgendaModes {
    CreateMode  = "amCreate",
    ViewMode    = "amView",
    AgendaMode  = 'amAgenda'
}

export interface IAgendaContext {
    mobileRes           : Boolean;
    setMobileRes?       : any;

    isDarkTheme         : Boolean;
    setIsDarkTheme?     : any;

    showCalendar        : Boolean;
    setShowCalendar?    : any;

    agendaMode          : AgendaModes;
    setAgendaMode?      : any;

    calendarDate        : any;
    setCalendarDate?    : any;

    flippedIndex        : number;
    setFlippedIndex?    : any;
};

const defaultValue = {
    mobileRes       : false,
    isDarkTheme     : false,
    showCalendar    : true,
    agendaMode      : AgendaModes.ViewMode,
    calendarDate    : new Date(),
    flippedIndex    : -1
};

export const AgendaContext = createContext<IAgendaContext>(defaultValue);
// export const UseTheme = () => useContext(ThemeContext);