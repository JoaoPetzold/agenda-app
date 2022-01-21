import { useContext } from "react";
import { AgendaContext } from "../../contexts/AgendaContext";
import { DiaEvento } from "./Utils/Dados";
import styles from "./styles.module.scss";
import Calendar from 'react-calendar';

const Calendario = () => {
    const {calendarDate, setCalendarDate} = useContext(AgendaContext);

    return (
        <Calendar 
            value={calendarDate} 
            onChange={setCalendarDate}
            calendarType={'US'}
            formatShortWeekday={(Locale, value) => ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][value.getDay()]}
            tileClassName={({ date, view }) => view === 'month' && DiaEvento.find(x => date.getDate() === x) ? styles.DiaEvento : null}
        />
    )
};

export default Calendario;