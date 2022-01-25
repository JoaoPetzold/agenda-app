import { FC, useCallback, useEffect, useState, useRef } from "react";
import { ButtonCircle, DropDown } from ".";
import { Colors } from "./color";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
    idElement: string;
    icon: any;
    colorPrimary?: Colors;
};

export const ButtonCircleDropdown : FC<ButtonProps> = ({children, idElement, icon, colorPrimary, ...props}) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [openDown, setOpenDown] = useState<Boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<Boolean>(false);
    const [showDropdown, setShowDropdown] = useState<Boolean>(activeDropdown);
    const ref = useRef<any>(null);

    const dropdownPosition = useCallback(() => {
        if (activeDropdown) {
            const obj = document.getElementById(idElement);
            setWindowHeight(obj!?.offsetTop + obj!?.offsetHeight / 2);
            setWindowWidth(obj!?.offsetLeft + obj!?.offsetWidth / 2);
            ((obj!?.offsetTop) < (window.innerHeight / 2)) ? setOpenDown(true) : setOpenDown(false);
            
            setShowDropdown(true);
        } else {setShowDropdown(false)}
    }, [activeDropdown, idElement]);

    useEffect(() => {
        const handleClick = (event : any) => {
            if (activeDropdown && ref.current && !ref.current.contains(event.target)) {
                setActiveDropdown(false);
            } else if ( (event.target) === (document.getElementById(idElement)) ) { // TODO: EVENT TARGET ESTÁ PEGANDO LITERALMENTE OS CHILDS
                setActiveDropdown(true);
            };
        };
        dropdownPosition();
        window.addEventListener('resize', dropdownPosition);
        document.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener("resize", dropdownPosition);
            document.removeEventListener('click', handleClick);
        };
    }, [dropdownPosition, ref, setActiveDropdown, activeDropdown, idElement]);

    return ( // TODO : Redimensionar dropdown de acordo com o numero de childrens
        <>
            <DropDown ref={ref} colorPrimary={colorPrimary} active={showDropdown} onClick={() => setShowDropdown(false)} screenPos={{top: windowHeight, left: windowWidth, openDown: openDown}}>
                {children}
            </DropDown>
            <ButtonCircle id={idElement} colorPrimary={colorPrimary} onClick={props.onClick}> 
                {icon}
            </ButtonCircle>
        </>
    )
};