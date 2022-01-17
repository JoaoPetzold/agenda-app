import { FC, useCallback, useEffect, useState, useRef } from "react";
import { Input } from ".";
import { Colors } from "./color";

export type InputProps = JSX.IntrinsicElements["input"] & {
    idElement?: string;
    label: string;
    colorx?: Colors;
};
// TODO : POSICIONAR LABEL DENTRO DO INPUT IGUAL FAZ O BUTTONCIRCLEDROPDOWN
export const LabelInputText : FC<InputProps> = ({children, idElement, label, colorx, ...props}) => {
    return (
        <div>  
            <label>{label}</label>
            <Input type="text" alt={props.alt} autoComplete={props.autoComplete} value={props.value} />
        </div>
    )
};