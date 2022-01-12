import { FC, useCallback, useEffect, useState } from "react";
import { ButtonCircle, DropDown } from ".";
import { Theme, Colors } from "../../contexts/ThemeContext";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
    idElement: string;
    theme: Theme;
    items: Array<any>;
    color?: Colors;
    active?: Boolean;
};


export const ButtonCircleDropdown : FC<ButtonProps> = ({children, idElement, theme, items, color, active, ...props}) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);

    const dropdownPosition = useCallback(() => {
        if (active) {
            const obj = document.getElementById(idElement);
            setWindowHeight(obj!?.offsetTop);
            setWindowWidth(obj!?.offsetLeft + obj!?.offsetWidth / 2);
        }
    }, [active, idElement]);

    useEffect(() => {
        dropdownPosition();
        window.addEventListener('resize', dropdownPosition);
        return () => window.removeEventListener("resize", dropdownPosition);
    }, [dropdownPosition]);

    return (
        <>
            <DropDown theme={theme} color={color} active={active} screenPos={{top: windowHeight, left: windowWidth}}>
                {items.map(item => <div id={item.idEvent}>{item.icon} {item.caption}</div>)}
            </DropDown>
            <ButtonCircle id={idElement} theme={theme} color={color} onClick={props.onClick}> 
                {children}
            </ButtonCircle>
        </>
    )
};