import { useContext, useRef, useState } from 'react';
import { format } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';
import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import { EventForm, Input, Select, TextArea, Option, AreaContainer, EventControls } from '../UI';
import { Agendas } from './Utils/Dados';
import { Formik } from 'formik';
import { ButtonCircle } from "../UI";
import { FaTimes, FaCheck } from "react-icons/fa";
import { Colors } from '../UI/color';

const EventosNovo = () => {
    const { calendarDate, setAgendaMode } = useContext(AgendaContext);
    const [calendarHour, setCalendarHour] = useState<any>();

    const submitEventoNovo = useRef<any>(null);

    return (
        <>
            <AreaContainer>
                <Formik 
                    onSubmit={(values : any) => {console.log(values)}}
                    initialValues={{
                        CD_AGENDA: 1,
                        CD_USUARIO: 1,
                        EVENTO: "",
                        DESCRICAO: "",
                        DATA: calendarDate,
                    }}
                >
                    {({ values, handleChange, handleSubmit, setFieldValue }) => (
                        <EventForm onSubmit={handleSubmit}>
                            <span style={{gridArea: "EFT"}}>Definições do Evento</span>
                
                            <Input name={"EVENTO"} type={"text"} placeholder={"Titulo do Evento"} value={values.EVENTO} onChange={handleChange} autoComplete='off' required={true} style={{gridArea: "EFE", marginRight: "1rem"}}/>
                            <Input type={"time"} defaultValue={calendarHour} onChange={(e) => setCalendarHour(e.target.value)} required={true} style={{gridArea: "EFH", width: "100%"}}/>
                
                            <Input name={"DATA"} readOnly={true} value={format(calendarDate, 'eeee - dd/MM/yyyy', { locale: ptBR })} style={{gridArea: "EFC", marginRight: "1rem"}} />
                            <Select name={"CD_AGENDA"} defaultValue={values.CD_AGENDA} onChange={e => setFieldValue("CD_AGENDA", parseInt(e.target.value))} required={true} style={{gridArea: "EFA"}} >
                                {Agendas.map(item =>
                                    <Option key={item.CD_AGENDA} value={item.CD_AGENDA as number}>{item.AGENDA}</Option>
                                )}
                            </Select>
                
                            <TextArea name={"DESCRICAO"} value={values.DESCRICAO} onChange={handleChange} placeholder={"Descrição ou observações do evento..."} style={{gridArea: "EFD"}}></TextArea>
                        
                            <button type={"submit"} style={{display: "none"}} ref={submitEventoNovo}></button>
                        </EventForm>
                    )}
                </Formik>
            </AreaContainer>

            <EventControls>
                <ButtonCircle colorx={Colors.Red} onClick={() => setAgendaMode(AgendaModes.ViewMode)}>
                    <FaTimes />
                </ButtonCircle>

                <ButtonCircle type={"submit"} colorx={Colors.Green} onClick={() => submitEventoNovo.current.click()}>
                    <FaCheck />
                </ButtonCircle>
            </EventControls>
        </>
    );
};

export default EventosNovo;