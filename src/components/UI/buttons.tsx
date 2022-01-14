import { FC, useCallback, useEffect, useState, useRef } from "react";
import { ButtonCircle, DropDown, DDItem } from ".";
import { Colors } from "./color";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
    idElement: string;
    items: Array<any>;
    colorx?: Colors;
    active?: Boolean;
};


export const ButtonCircleDropdown : FC<ButtonProps> = ({children, idElement, items, colorx, active, ...props}) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [activeDropdown, setActiveDropDown] = useState<Boolean>(active!);
    const ref = useRef<any>(null);

    const dropdownPosition = useCallback(() => {
        if (activeDropdown) {
            const obj = document.getElementById(idElement);
            setWindowHeight(obj!?.offsetTop);
            setWindowWidth(obj!?.offsetLeft + obj!?.offsetWidth / 2);
        }   // TODO: APARECER SOMENTE DEPOIS DE DEFINIR A POSICAO
    }, [activeDropdown, idElement]);

    useEffect(() => {
        const handleClick = (event : any) => {
            if (activeDropdown && ref.current && !ref.current.contains(event.target)) {
                setActiveDropDown(false);
            } else if ( (event.target) === (document.getElementById(idElement)) ) { // TODO: EVENT TARGET ESTÁ PEGANDO LITERALMENTE OS CHILDS
                setActiveDropDown(true);
            };
        };
        dropdownPosition();
        window.addEventListener('resize', dropdownPosition);
        document.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener("resize", dropdownPosition);
            document.removeEventListener('click', handleClick);
        };
    }, [dropdownPosition, ref, setActiveDropDown, activeDropdown, idElement]);

    return (
        <>
            <DropDown ref={ref} colorx={colorx} active={activeDropdown} screenPos={{top: windowHeight, left: windowWidth}}>
                {items.map(item => <DDItem key={item.idEvent}>{item.icon}{item.caption}</DDItem>)}
            </DropDown>
            <ButtonCircle id={idElement} colorx={colorx} onClick={props.onClick}> 
                {children}
            </ButtonCircle>
        </>
    )
};