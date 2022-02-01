import { Colors } from "../../UI/color";

export const ColorGroup = (agendas : any, cd_agenda : number) => {
    return agendas.find((a : any) => a.CD_AGENDA === cd_agenda)?.COR as keyof typeof Colors
}

export const Logoff = () => {
    localStorage.removeItem('token');
    window.location.reload();
}

export const RandomizeArray = (arr : any) => {
    return arr[Math.floor(Math.random()*arr.length)];
}