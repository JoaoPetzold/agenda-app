import { useContext, useState } from 'react';
import { format } from 'date-fns-tz';
import { AgendaContext } from '../../contexts/AgendaContext';
import { EventForm, Input, Select, TextArea, Option } from '../UI';
import { Agendas } from './Utils/Dados';

const EventosNovo = () => {
    const { calendarDate } = useContext(AgendaContext);
    const [eventoAgenda, setEventoAgenda] = useState<number>();
    // TODO : FORMIK
    return (
        <EventForm>
            <span style={{gridArea: "EFT"}}>Definições do Evento</span>

            <Input style={{gridArea: "EFE", marginRight: "1rem"}} placeholder={"Titulo do Evento"} value={""}/>
            <Input style={{gridArea: "EFH"}} type={"time"} />

            <Input style={{gridArea: "EFC", marginRight: "1rem"}} readOnly={true} value={format(calendarDate, 'eeee - dd/MM/yyyy')} />
            <Select style={{gridArea: "EFA"}} onChange={(e : any) => setEventoAgenda(e.target.value as number)}>
                {Agendas.map(item =>
                    <Option key={item.CD_AGENDA} value={item.CD_AGENDA}>{item.AGENDA}</Option>
                )}
            </Select>

            <TextArea style={{gridArea: "EFD"}} placeholder={"Descrição ou observações do evento..."}></TextArea>
        </EventForm>
    );
};

export default EventosNovo;