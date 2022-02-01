import { AgendaItemContainer, EventGroup, EventTitle, EventControls, AreaContainer, AreaTitle } from '../UI/agenda';
import { Button, ButtonCircle, Label } from '../UI';
import { ButtonCircleDropdown } from '../UI/buttons';
import { Colors } from '../UI/color';
import API, { HttpMethod } from "../Fetch";
import { useQuery, useMutation } from "react-query";
import { useContext, useEffect, useMemo, useState } from 'react';
import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import { AgendasListaContext } from '../../contexts/AgendasListaContext';
import { FaRegCalendarAlt, FaTimes, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AgendasLista = () => {
    const navigate = useNavigate();
    const { isDarkTheme, setShowCalendar } = useContext(AgendaContext);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const qryAgenda = useQuery('/agenda', () => API(HttpMethod.Get, '/agenda', ''));
    const dsAgenda = useMemo(() => qryAgenda.isLoading || qryAgenda.isError ? [] : [...qryAgenda.data], [qryAgenda]);

    const toggleSelectedIndex = (cd_agenda : number) => {
        setSelectedIndex(selectedIndex === cd_agenda ? -1 : cd_agenda);
    };

    const excluirAgenda = useMutation(() => API(HttpMethod.Delete, `/agenda/${selectedIndex}`, ''));

    useEffect(() => {
        if (excluirAgenda.isSuccess) {
            navigate('/'+AgendaModes.ViewAgendasMode);
        } else if (excluirAgenda.isError) {
            console.log(excluirAgenda.error);
        };
    }, [excluirAgenda, navigate])

    return (
        <> 
            <AgendasListaContext.Provider value={{ selectedIndex, setSelectedIndex }}>
                <AreaContainer>
                    <AreaTitle>Minhas Agendas</AreaTitle>
                    {
                        dsAgenda.map((item : any) => 
                            <AgendaItemContainer key={item.CD_AGENDA} colorPrimary={Colors.Gray6} colorSecondary={item.COR as Colors} onClick={() => toggleSelectedIndex(item.CD_AGENDA)} active={selectedIndex === item.CD_AGENDA}>
                                <EventGroup colorPrimary={item.COR as Colors} />
                                <EventTitle>{item.NOME}</EventTitle>
                            </AgendaItemContainer>
                        )
                    }
                </AreaContainer>
                
                <EventControls>
                    {selectedIndex === -1 ?
                        <>
                            <ButtonCircle colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => setShowCalendar(true)}>
                                <Link to={'/'+AgendaModes.ViewEventMode}>
                                    <FaTimes />
                                </Link>
                            </ButtonCircle>  

                            <ButtonCircle colorPrimary={isDarkTheme ? Colors.Gray3 : Colors.Gray6} onClick={() => {}}>
                                <Link to={'/'+AgendaModes.CreateAgendasMode}>
                                    <FaRegCalendarAlt />
                                </Link>
                            </ButtonCircle>  
                        </>
                    :
                        <>
                            <ButtonCircleDropdown idElement={"btn-agenda-delete"} icon={<FaTrash />} colorPrimary={Colors.Red} customDropdown={true}>
                                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', justifyContent: 'center', padding: '0.5rem 0 0 0'}}>
                                    <Label colorPrimary={Colors.Contrast} style={{alignSelf: 'center', justifySelf: 'center', fontSize: '1.15rem'}}>Deseja excluir?</Label>
                                    <Button colorPrimary={Colors.Contrast} style={{width: '50%', height: '1rem', alignSelf: 'flex-end'}}>Voltar</Button>
                                    <Button colorPrimary={Colors.Red} style={{width: '50%', alignSelf: 'flex-end'}} onClick={() => excluirAgenda.mutate()}>Excluir</Button>
                                </div>
                            </ButtonCircleDropdown>  

                            <ButtonCircle colorPrimary={Colors.Blue} onClick={() => {}}>
                                <Link to={'/'+AgendaModes.CreateAgendasMode}>
                                    <FaRegCalendarAlt />
                                </Link>
                            </ButtonCircle>  
                        </>
                    }
                </EventControls>
            </AgendasListaContext.Provider>
        </>
    );
};

export default AgendasLista;