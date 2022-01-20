import { createContext } from 'react';

export enum AgendaModes {
    CreateMode = "amCreate",
    ViewMode = "amView"
}

export interface IAgendaContext {
    isDarkTheme         : Boolean;
    setIsDarkTheme?     : any;
    
    agendaMode          : AgendaModes;
    setAgendaMode?      : any;

    calendarDate        : Date;
    setCalendarDate?    : any;

    flippedIndex        : number;
    setFlippedIndex?    : any;
};

const defaultValue = {
    isDarkTheme     : false,
    agendaMode      : AgendaModes.ViewMode,
    calendarDate    : new Date(),
    flippedIndex    : -1
};

export const AgendaContext = createContext<IAgendaContext>(defaultValue);
// export const UseTheme = () => useContext(ThemeContext);