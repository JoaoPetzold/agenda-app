import { useRef, useState, useEffect } from 'react';
import { AgendaModes } from '../../contexts/AgendaContext';
import { AgendaForm, AreaContainer, AgendaItemContainer, EventControls, EventGroup, EventTitle, SpanTitle } from '../UI/agenda';
import { Input, ButtonCircle } from '../UI';
import { Formik } from 'formik';
import { FaTimes, FaCheck } from "react-icons/fa";
import { Colors, ColorPicker } from '../UI/color';
import { Link, useNavigate } from 'react-router-dom';
import { VerticalList, ListItem } from '../UI/lists';
import { RandomizeArray } from './Utils/Funcoes';
import { useMutation } from 'react-query';
import API, { HttpMethod } from '../Fetch';

const AgendasNovo = () => {
    const navigate = useNavigate();
    const submitEventoNovo = useRef<any>(null);
    const [randomColor] = useState<Colors>(RandomizeArray(ColorPicker)['id'] as Colors);
    const [activePreview, setActivePreview] = useState<Boolean>(false);

    const onSubmitAgenda = useMutation((dados) => API(HttpMethod.Post, '/agenda', dados));

    useEffect(() => {
        if (onSubmitAgenda.isSuccess) {
            navigate('/'+AgendaModes.ViewAgendasMode);
        } else if (onSubmitAgenda.isError) {
            console.log(onSubmitAgenda.error);
        };
    }, [onSubmitAgenda, navigate])

    return (
        <>
            <AreaContainer>
                <Formik 
                    onSubmit={(values : any) => {console.log(values); onSubmitAgenda.mutate(values)}}
                    initialValues={{
                        NOME: "",
                        COR: randomColor
                    }}
                >
                    {({ values, handleChange, handleSubmit, setFieldValue }) => (
                        <AgendaForm onSubmit={handleSubmit}>
                            <SpanTitle style={{gridArea: "AFT"}}>Definições da Agenda</SpanTitle>
                
                            <Input name={"NOME"} type={"text"} placeholder={"Nome da Agenda"} value={values.NOME} onChange={handleChange} autoComplete='off' required={true} style={{gridArea: "AFN"}}/>

                            <VerticalList idElement='list-colors' style={{gridArea: 'AFC'}}>
                                {ColorPicker.map(item =>
                                    <ListItem key={item.id} idElement={item.id} typeItem={'tiColored'} active={values.COR === item.id} colorPrimary={item.id as Colors} onClick={() => setFieldValue("COR", item.id)}>
                                        {item.id}
                                    </ListItem>
                                )}
                            </VerticalList>

                            <div style={{gridArea: 'PRW', display: 'flex', marginTop: '10%', justifyContent: 'center', flexWrap: 'wrap'}}>
                                <span style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', textAlign: 'center'}}>Pré-Visualização</span>
                                <AgendaItemContainer colorPrimary={Colors.Gray6} colorSecondary={values.COR as Colors} onClick={() => setActivePreview(!activePreview)} active={activePreview}>
                                    <EventGroup colorPrimary={typeof values.COR === 'undefined' ? Colors.Gray6 : (values.COR as Colors)}></EventGroup>
                                    <EventTitle>{values.NOME}</EventTitle>
                                </AgendaItemContainer>
                            </div>
                        
                            <button type={"submit"} style={{display: "none"}} ref={submitEventoNovo} disabled={values.COR === undefined}></button>
                        </AgendaForm>
                    )}
                </Formik>
            </AreaContainer>

            <EventControls>
                <ButtonCircle colorPrimary={Colors.Red}>
                    <Link to={'/'+AgendaModes.ViewAgendasMode}>
                        <FaTimes />
                    </Link>
                </ButtonCircle>

                <ButtonCircle type={"submit"} colorPrimary={Colors.Green} onClick={() => submitEventoNovo.current.click()}>
                    <FaCheck />
                </ButtonCircle>
            </EventControls>
        </>
    );
}

export default AgendasNovo;