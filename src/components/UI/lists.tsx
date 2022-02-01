import { FC } from "react";
import styled from "styled-components";
import { baseFunctions, baseInput, baseColors, StyledProps } from ".";
import { rgba } from "polished"; 
import { Colors } from "./color";

export type ListProps = JSX.IntrinsicElements["div"] & {
    idElement: string;
    colorPrimary?: Colors;
};

export type ListItemProps = JSX.IntrinsicElements["div"] & {
    idElement: string;
    typeItem?: "tiDefault" | "tiColored";
    active?: Boolean;
    colorPrimary?: Colors;
};

const List = styled.div<StyledProps>`
    ${baseFunctions}
    ${baseColors}
    ${baseInput}

    padding: 0.1rem;
    display: flex;
`;

const Item = styled.div<StyledProps>`
    ${(props) => props.active ? 
        `
            background-color: ${props.theme[props.colorPrimary!]};
            color: ${props.theme.Gray6};
        `
    :
        `
            background-color: ${props.theme.Gray6};
            color: ${props.theme.Contrast};
        `
    }

    

    border: none;
    border-radius: 0.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0.25rem;
    margin: 0.1rem 0;

    &:hover {
        cursor: pointer;
        ${(props) => props.variant === "tiColored" ? 
            `
                background-color: ${typeof props.colorPrimary === 'undefined' ? props.theme.Blue : props.theme[props.colorPrimary!]};
                color: ${typeof props.colorSecondary === 'undefined' ? props.theme[Colors.Gray6] : props.theme[props.colorSecondary!]};
                box-shadow: 0px 0px 0.4rem 0.1rem ${rgba(props.theme[props.colorPrimary!], 0.15)};  
            `
        :
            `
                color: ${props.theme.Gray6};
                background-color: ${props.theme.Blue};
                box-shadow: 0px 0px 0.4rem 0.1rem ${rgba(props.theme.Blue, 0.15)};
            `
        }
        
    }
    &:active {
        color: ${(props) => props.theme.Contrast};
    }
    svg {
        margin: 0 0.5rem;
    }
    @media(max-width: 600px) {
        padding: 0.5rem;
    }
`;

const ItemColor = styled.div<StyledProps>`
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 1rem;

    background-color: ${(props) => rgba(props.theme[props.colorPrimary!], 1)};
`;

export const ListItem : FC<ListItemProps> = ({children, idElement, typeItem, colorPrimary, active, ...props}) => {
    return (
        <Item colorPrimary={colorPrimary} variant={typeItem} onClick={props.onClick} active={active}>
            {typeItem === 'tiColored' ?
                    <><ItemColor colorPrimary={colorPrimary} />&nbsp;</>
                :
                    <></>
            }
            {children}
        </Item>
    );
}

export const VerticalList : FC<ListProps> = ({children, idElement, colorPrimary, ...props}) => {
    return (
        <List style={{flexDirection: 'column', overflowY: 'scroll', ...props.style}}>
            {children}
        </List>
    );
}