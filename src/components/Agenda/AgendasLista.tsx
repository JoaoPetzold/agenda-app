import { AgendaItemContainer, EventGroup, EventTitle, EventControls, AreaContainer, AreaTitle } from '../UI/agenda';
import { ButtonCircle } from '../UI';
import { Colors } from '../UI/color';

//import { ColorGroup } from './Utils/Funcoes';
import API, { HttpMethod } from "../Fetch";
import { useQuery } from "react-query";
import { useContext, useMemo } from 'react';
import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import { FaRegCalendarAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AgendasLista = () => {
    const { isDarkTheme } = useContext(AgendaContext);
    const qryAgenda = useQuery('/agenda', () => API(HttpMethod.Get, '/agenda', ''));
    const dsAgenda = useMemo(() => qryAgenda.isLoading || qryAgenda.isError ? [] : [...qryAgenda.data], [qryAgenda]);

    return (
        <> 
            <AreaContainer>
                <AreaTitle>Minhas Agendas</AreaTitle>
                {
                    dsAgenda.map((item : any) => 
                        <AgendaItemContainer key={item.CD_AGENDA} colorPrimary={Colors.Gray6} onClick={() => null} active={false}>
                            <EventGroup colorPrimary={item.COR as Colors} />
                            <EventTitle>{item.NOME}</EventTitle>
                        </AgendaItemContainer>
                    )
                }
            </AreaContainer>
            
            <EventControls>
                    <ButtonCircle colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6}>
                        <Link to={'/'+AgendaModes.ViewEventMode}>
                            <FaTimes />
                        </Link>
                    </ButtonCircle>  

                    <ButtonCircle colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => {}}>
                        <Link to={'/'+AgendaModes.CreateAgendasMode}>
                            <FaRegCalendarAlt />
                        </Link>
                    </ButtonCircle>  
            </EventControls>

        </>
    );
};

export default AgendasLista;