import { format, utcToZonedTime } from 'date-fns-tz';
import { ColorGroup } from './Utils/Funcoes';
import { Colors } from '../UI/color';
import { EventContainer, EventGroup, EventTitle, EventTime, EventDescription, EventControls, AreaContainer, ButtonCircle, DDItem } from '../UI';
import { ButtonCircleDropdown } from "../UI/buttons";
import { Agendas, EventosDia } from './Utils/Dados';
import { useContext } from 'react';
import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import { FaEllipsisH, FaPlus, FaTrashAlt, FaCheck } from 'react-icons/fa';

const EventosLista = () => {
    const {isDarkTheme, flippedIndex, setFlippedIndex, setAgendaMode} = useContext(AgendaContext);

    const toggleFlippedIndex = (cd_evento : number) => {
        setFlippedIndex(flippedIndex === cd_evento ? -1 : cd_evento);
    };

    return (
        <>
            <AreaContainer>
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
            </AreaContainer>
            
            <EventControls>
                {flippedIndex === -1 ?
                    <ButtonCircle colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => setAgendaMode(AgendaModes.CreateMode)}>
                        <FaPlus />
                    </ButtonCircle>  
                :
                    <ButtonCircleDropdown idElement={"btn-event-options"} icon={<FaEllipsisH />} colorx={isDarkTheme ? Colors.Gray3 : Colors.Gray6}>
                        <DDItem><FaTrashAlt /> Excluir Evento</DDItem>
                        <DDItem><FaCheck /> Concluir Evento</DDItem>
                    </ButtonCircleDropdown>
                }
            </EventControls>
        </>
    )
};

export default EventosLista;