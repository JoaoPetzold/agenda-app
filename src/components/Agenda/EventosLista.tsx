import { format, utcToZonedTime } from 'date-fns-tz';
import { ColorGroup } from './Utils/Funcoes';
import { Colors } from '../UI/color';
import { EventContainer, EventGroup, EventTitle, EventTime, EventDescription, EventControls, AreaContainer } from '../UI/agenda';
import { ButtonCircle, DDItem } from '../UI';
import { ButtonCircleDropdown } from "../UI/buttons";
import { Agendas, EventosDia } from './Utils/Dados';
import { useContext } from 'react';
import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import { FaEllipsisH, FaPlus, FaTrashAlt, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EventosLista = () => {
    const { isDarkTheme, flippedIndex, setFlippedIndex } = useContext(AgendaContext);

    const toggleFlippedIndex = (cd_evento : number) => {
        setFlippedIndex(flippedIndex === cd_evento ? -1 : cd_evento);
    };

    return (
        <>
            <AreaContainer>
                {
                    EventosDia.map(item => 
                        <EventContainer key={item.CD_EVENTO} colorPrimary={Colors.Gray6} onClick={() => toggleFlippedIndex(item.CD_EVENTO)} active={flippedIndex === item.CD_EVENTO}>
                            <EventGroup colorPrimary={Colors[ColorGroup(Agendas, item.CD_AGENDA)]} />
                            <EventTitle>{item.EVENTO}</EventTitle>
                            <EventTime>{format(utcToZonedTime(new Date(item.DATA), 'America/Sao_Paulo'), 'HH:mm')}</EventTime>
                            <EventDescription active={flippedIndex === item.CD_EVENTO}>{item.DESCRICAO}</EventDescription>
                        </EventContainer>
                    )
                }
            </AreaContainer>
            
            <EventControls>
                {flippedIndex === -1 ?
                    <ButtonCircle colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6}>
                        <Link to={'/'+AgendaModes.CreateEventMode}>
                            <FaPlus />
                        </Link>
                    </ButtonCircle>  
                :
                    <ButtonCircleDropdown idElement={"btn-event-options"} icon={<FaEllipsisH />} colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6}>
                        <DDItem><FaTrashAlt /> Excluir Evento</DDItem>
                        <DDItem><FaCheck /> Concluir Evento</DDItem>
                    </ButtonCircleDropdown>
                }
            </EventControls>
        </>
    )
};

export default EventosLista;