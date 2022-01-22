import API, { HttpMethod } from "../Fetch";
import { useQuery } from "react-query";

const Agendas = () => {
    const onRequestAgenda = useQuery('agenda', () => API(HttpMethod.Get, '/agenda', ''));

    console.log(onRequestAgenda.data);

    return (
        <div></div>
    );
};

export default Agendas;