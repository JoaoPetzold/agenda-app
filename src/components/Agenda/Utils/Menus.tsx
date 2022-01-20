import { FaRegAddressBook, FaDoorOpen, FaTrashAlt, FaCheck } from 'react-icons/fa';

export const MenuUser = [
    {
        idEvent: "agendas",
        caption: "Minhas Agendas",
        icon: <FaRegAddressBook />
    },
    {
        idEvent: "sair",
        caption: "Encerrar Sessão",
        icon: <FaDoorOpen />
    }
];

export const MenuEventoOpcoes = [
    {
        idEvent: "eventoCancelar",
        caption: "Excluir Evento",
        icon: <FaTrashAlt />
    },
    {
        idEvent: "eventoConcluir",
        caption: "Concluir Evento",
        icon: <FaCheck />
    }
];    