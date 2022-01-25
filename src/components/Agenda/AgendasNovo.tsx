import { useContext, useRef } from 'react';
import { AgendaContext, AgendaModes } from '../../contexts/AgendaContext';
import { AgendaForm, AreaContainer, EventControls } from '../UI/agenda';
import { Input } from '../UI';
import { Formik } from 'formik';
import { ButtonCircle } from "../UI";
import { FaTimes, FaCheck, FaEyeDropper } from "react-icons/fa";
import { Colors } from '../UI/color';
import { Link } from 'react-router-dom';
import { ButtonCircleDropdown } from '../UI/buttons';
import { VerticalList } from '../UI/lists';

const AgendasNovo = () => {
    const submitEventoNovo = useRef<any>(null);

    return (
        <>
            <AreaContainer>
                <Formik 
                    onSubmit={(values : any) => {console.log(values)}}
                    initialValues={{
                        NOME: "",
                        COR: ""
                    }}
                >
                    {({ values, handleChange, handleSubmit, setFieldValue }) => (
                        <AgendaForm onSubmit={handleSubmit}>
                            <span style={{gridArea: "AFT"}}>Definições da Agenda</span>
                
                            <Input name={"EVENTO"} type={"text"} placeholder={"Nome da Agenda"} value={values.NOME} onChange={handleChange} autoComplete='off' required={true} style={{gridArea: "AFN"}}/>

                            {/* <Select name={"CD_AGENDA"} defaultValue={values.COR} onChange={handleChange} required={true} style={{gridArea: "AFC"}} >
                                {Agendas.map(item =>
                                    <Option key={item.CD_AGENDA} value={item.CD_AGENDA as number}>{item.AGENDA}</Option>
                                )}
                            </Select> */}

                            {/* <ButtonCircleDropdown idElement='btn-color-agenda' icon={<FaEyeDropper />} style={{gridArea: "AFC", alignSelf: "center"}}>

                            </ButtonCircleDropdown> */}

                            <VerticalList></VerticalList>
                        
                            <button type={"submit"} style={{display: "none"}} ref={submitEventoNovo}></button>
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