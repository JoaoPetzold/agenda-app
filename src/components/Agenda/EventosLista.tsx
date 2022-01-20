import { format, utcToZonedTime } from 'date-fns-tz';
import { ColorGroup } from './Utils/Funcoes';
import { Colors } from '../UI/color';
import { EventContainer, EventGroup, EventTitle, EventTime, EventDescription } from '../UI';
import { Agendas, EventosDia } from './Utils/Dados';
import { useContext } from 'react';
import { AgendaContext } from '../../contexts/AgendaContext';

const EventosLista = () => {
    const {flippedIndex, setFlippedIndex} = useContext(AgendaContext);

    const toggleFlippedIndex = (cd_evento : number) => {
        setFlippedIndex(flippedIndex === cd_evento ? -1 : cd_evento);
    };

    return (
        <>
            {
                EventosDia.map(item => 
                    <EventContainer key={item.CD_EVENTO} colorx={Colors.Gray6} onClick={() => toggleFlippedIndex(item.CD_EVENTO)} active={flippedIndex === item.CD_EVENTO}>
                        <EventGroup colorx={Colors[ColorGroup(Agendas, item.CD_AGENDA)]} />
                        <EventTitle>{item.EVENTO}</EventTitle>
                        <EventTime>{format(utcToZonedTime(new Date(item.DATA), 'America/Sao_Paulo'), 'HH:mm')}</EventTime>
                        <EventDescription active={flippedIndex === item.CD_EVENTO}>{item.DESCRICAO}</EventDescription>
                    </EventContainer>
                )
            }
        </>
    )
};

export default EventosLista;