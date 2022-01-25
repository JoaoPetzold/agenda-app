import styled, { css } from "styled-components";
import { Colors } from "./color";
import { rgba } from 'polished';

export interface screenPosition {
    left: number;
    top: number;
    openDown: Boolean;
};

export interface StyledProps {
    idElement?: string;

    colorPrimary?: Colors;
    alphaPrimary?: number;
    colorSecondary?: Colors;

    active?: Boolean;
    screenPos?: screenPosition;
    invisible?: Boolean;
    showDisplay?: Boolean;
};

export const baseFunctions = css<StyledProps>`
    ${(props) => props.invisible   ? `visibility: hidden` : `visibility: visible`};
    ${(props) => props.showDisplay ? `display: none` : `display: block`};

    border: none;
    border-radius: 0.5rem;

    background-color: ${(props) =>  typeof props.colorPrimary === 'undefined' ? rgba(props.theme.Gray6, 1) : rgba(props.theme[props.colorPrimary], props.alphaPrimary!)};
    color: ${(props) => typeof props.colorSecondary === 'undefined' ? props.theme[Colors.Contrast] : props.theme[props.colorSecondary!]};

    &:enabled:hover {
        cursor: pointer;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    };
    &:disabled{
        color: ${(props) => props.theme.Gray2};
    };
`;

export const baseInput = css`
    outline: 0.1rem solid ${(props) => props.theme.Gray3};

    min-height: 2rem;
    max-width: 100%;

    &:enabled:focus {
        outline: 0.15rem solid ${(props) => props.theme.Blue};
        outline-offset: 0.1rem;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)}; 
    };
`;


export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.Contrast};
    background-image: url("https://picsum.photos/${window.screen.availWidth}/${window.screen.availHeight}");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Button = styled.button<StyledProps>`
    ${(props) => props.invisible   ? `visibility: hidden` : `visibility: visible`};
    ${(props) => props.showDisplay ? `display: none` : `display: block`};

    min-width: 3rem;
    min-height: 2.2rem;
    max-width: 100%;
    max-height: 100%;

    color: ${(props) => props.theme[props.colorPrimary!]};
    background-color:  ${(props) => rgba(props.theme.Gray6, 0.25)};

    border: none;
    border-top: 0.1rem solid ${(props) => props.theme.Gray2};
    border-radius: 0 0 0.5rem 0.5rem;
    font-size: 1.2rem;
    text-align: center;

    &:enabled:hover {
        border-top: 0.1rem solid ${(props) => props.theme.Blue};
        cursor: pointer;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    };
    &:disabled{
        color: ${(props) => props.theme.Gray2};
    };
    & > * {
        pointer-events: none;
    };
`;

export const ButtonCircle = styled.button<StyledProps>`
    ${(props) => props.invisible   ? `visibility: hidden` : `visibility: visible`};
    ${(props) => props.showDisplay ? `display: none` : `display: block`};
    width: 2.2rem;
    height: 2.2rem;

    background-color: ${(props) => props.theme[props.colorPrimary!]};
    border: none;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 5rem;
    svg {margin-left: auto;margin-right: auto;display: block !important;color: ${(props) => props.theme.Contrast};};

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    };
    &:active {
        background-color: ${(props) => props.theme.Gray5};

        svg {
            color: ${(props) => props.theme.Contrast};
        };
    };
    & > * {
        pointer-events: none;
    };

    @media(max-width: 600px) {
        width: 3.2rem;
        height: 3.2rem;   
    };
`;

export const DropDown = styled.div<StyledProps>`
    --vWidth: 12rem;
    --vHeight: 5rem;

    ${(props) => props.active ? 
        `
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            z-index: 1;
        `
    : 
        `
            display: none;
        `
    };

    width: var(--vWidth);
    height: var(--vHeight);

    padding: 0.5rem;

    left: calc(${(props) => props.screenPos!?.left}px - var(--vWidth) / 2);
    top: ${(props) => props.screenPos!?.openDown ?
        `calc(${props.screenPos!?.top}px + var(--vHeight) / 2 - 1.25rem)`
    :
        `calc(${props.screenPos!?.top}px - var(--vHeight) - 1.25rem)`
    };

    background-color: ${(props) => rgba(props.theme.Gray6, 0.99)};
    box-shadow: 0px 0px 0.4rem 0.1rem rgba(0,0,0,0.15);
    border-radius: 0.5rem; 
    user-select: none;

    @media(max-width: 600px) {
        --vWidth: 16rem;
        --vHeight: 6rem;

        width: var(--vWidth);
        height: var(--vHeight);

        left: calc(${(props) => props.screenPos!?.left}px - var(--vWidth) / 2));
        top: ${(props) => props.screenPos!?.openDown ?
                `calc(${props.screenPos!?.top}px + var(--vHeight) / 2 - 1.25rem)`
            :
                `calc(${props.screenPos!?.top}px - var(--vHeight) - 1.8rem)`
        };
    };
`;

export const DDItem = styled.div<StyledProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 1.8rem;
    margin: 0.1rem 0;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => rgba(props.theme.Gray6, 1)};
    border-radius: 0.5rem;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.Gray6};
        background-color: ${(props) => props.theme.Blue};
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)};  
    }
    &:active {
        color: ${(props) => props.theme.Contrast};
    }
    svg {
        margin: 0 0.5rem;
    }

    @media(max-width: 600px) {
        height: 2.8rem;
    }
`;

export const Label = styled.label<StyledProps>`
`;

export const Input = styled.input<StyledProps>`
    min-height: 2rem;
    max-height: 2.5rem;
    max-width: 100%;

    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;

    outline: 0.1rem solid ${(props) => props.theme.Gray3};
    outline-offset: 0;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => props.theme.Gray6};

    -webkit-appearance: none;
    -moz-appearance: none;

    &:enabled:focus {
        outline: 0.15rem solid ${(props) => props.theme.Blue};
        outline-offset: 0.1rem;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)}; 
    };
`;

export const TextArea = styled.textarea`
    min-height: 2rem;
    max-height: 10rem;
    resize: none;

    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;

    outline: 0.1rem solid ${(props) => props.theme.Gray3};
    outline-offset: 0;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => props.theme.Gray6};

    &:enabled:focus {
        outline: 0.15rem solid ${(props) => props.theme.Blue};
        outline-offset: 0.1rem;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)}; 
    };
`;

export const Select = styled.select<StyledProps>`
    min-height: 2rem;
    max-height: 2.5rem;

    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;

    outline: 0.1rem solid ${(props) => props.theme.Gray3};
    outline-offset: 0;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;

    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => props.theme.Gray6};

    &:enabled:focus {
        outline: 0.15rem solid ${(props) => props.theme.Blue};
        outline-offset: 0.1rem;
        box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)}; 
    };
`;

export const Option = styled.option<StyledProps>`
    color: ${(props) => props.theme.Contrast};
    background-color: ${(props) => props.theme.Gray6};
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 0.4rem 0.1rem ${(props) => rgba(props.theme.Blue, 0.15)}; 
`;