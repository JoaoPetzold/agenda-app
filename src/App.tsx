import './App.scss';
import { useState } from 'react';
import Rotas from './routes';
import { Background } from './components/UI';

import { ThemeProvider } from 'styled-components';
import { ColorSchemeLight, ColorSchemeDark } from './components/UI/color';
import { AgendaContext, AgendaModes } from './contexts/AgendaContext';

import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

const queryDefault = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 30000,
        },
    },
});

const localStoragePersistor = createWebStoragePersistor({storage: window.sessionStorage});

persistQueryClient({
    queryClient: queryDefault,
    persistor: localStoragePersistor,
});


function App() {
    const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(false);
    const [agendaMode, setAgendaMode] = useState<AgendaModes>(AgendaModes.ViewMode);
    const [calendarDate, setCalendarDate] = useState<any>(new Date());
    const [flippedIndex, setFlippedIndex] = useState<number>(-1);

    return (
        <Background>
            <QueryClientProvider client={queryDefault}>
                <AgendaContext.Provider value={{ isDarkTheme, setIsDarkTheme, agendaMode, setAgendaMode, calendarDate, setCalendarDate, flippedIndex, setFlippedIndex }}>
                    <ThemeProvider theme={isDarkTheme ? ColorSchemeDark : ColorSchemeLight}>
                        <Rotas />
                    </ThemeProvider>
                </AgendaContext.Provider>
            </QueryClientProvider>
        </Background>
    );
}

export default App;
