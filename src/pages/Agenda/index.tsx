import { useState } from 'react';
import Calendar from 'react-calendar';
import { CalendarioContainer } from '../../components/UI';
import styles from './styles.module.scss';
import { useTheme } from '../../contexts/ThemeContext';

const Agenda = () => {
    const { theme } = useTheme();
    const [valorData, setValorData] = useState<Date>(new Date());
    
    return (
        <CalendarioContainer theme={theme} className={styles.calendario}>
            <Calendar 
                className={styles.reactCalendar}
                value={valorData} 
                onClickDay={(e : any) => setValorData(e.target)}
                calendarType={'US'}
            />
        </CalendarioContainer>
    )
};
export default Agenda;
