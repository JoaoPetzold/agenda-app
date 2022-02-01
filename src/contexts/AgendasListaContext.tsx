import { createContext } from 'react';

export interface IAgendasListaContext {
    selectedIndex        : number;
    setSelectedIndex?    : any;
};

const defaultValue = {
    selectedIndex    : -1
};

export const AgendasListaContext = createContext<IAgendasListaContext>(defaultValue);