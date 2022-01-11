import React from 'react';
import './App.scss';
import { Background } from './components/UI';
import Agenda from './pages/Agenda';

function App() {
    return (
        <Background>
            <Agenda></Agenda>
        </Background>
    );
}

export default App;
