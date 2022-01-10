import {createContext, useContext } from 'react';

export enum Theme {
    Light = 'Light',
    Dark = 'Dark'
}

export enum Colors {
    Red     = 'cRed',
    Orange  = 'cOrange',
    Yellow  = 'cYellow',
    Green   = 'cGreen',
    Mint    = 'cMint',
    Teal    = 'cTeal',
    Cyan    = 'cCyan',
    Blue    = 'cBlue',
    Indigo  = 'cIndigo',
    Purple  = 'cPurple',
    Pink    = 'cPink',
    Brown   = 'cBrown',
    Gray1   = 'cGray1',
    Gray2   = 'cGray2',
    Gray3   = 'cGray3',
    Gray4   = 'cGray4',
    Gray5   = 'cGray5',
    Gray6   = 'cGray6',
    Contrast = 'cContrast'
}

export const LightColors : { [key : string] : string } = {
    cRed:       '#ff3b30',
    cOrange:    '#ff9500',
    cYellow:    '#ffcc00',
    cGreen:     '#34c759',
    cMint:      '#00c7be',
    cTeal:      '#30b0c7',
    cCyan:      '#32ade6',
    cBlue:      '#007bff',
    cIndigo:    '#5856d8',
    cPurple:    '#af52de',
    cPink:      '#ff2d54',
    cBrown:     '#a2845e',
    cGray1:     '#8e8e93',
    cGray2:     '#aeaeb2',
    cGray3:     '#c7c7cc',
    cGray4:     '#d1d1d6',
    cGray5:     '#e5e5ea',
    cGray6:     '#f2f2f2',
    cContrast:  '#1D1D1F'
};

export const DarkColors : { [key : string] : string } = {
    cRed:       '#FF453A',
    cOrange:    '#FF9F0A',
    cYellow:    '#FFD60A',
    cGreen:     '#30D158',
    cMint:      '#66D4CF',
    cTeal:      '#40C8E0',
    cCyan:      '#64D2FF',
    cBlue:      '#0A84FF',
    cIndigo:    '#5E5CE6',
    cPurple:    '#BF5AF2',
    cPink:      '#FF375F',
    cBrown:     '#AC8E68',
    cGray1:     '#8E8E93',
    cGray2:     '#636366',
    cGray3:     '#48484A',
    cGray4:     '#3A3A3C',
    cGray5:     '#2C2C2E',
    cGray6:     '#1C1C1E',
    cContrast:  '#FFFFFF'  
}; 

interface IThemeContext {
    theme : Theme;
    setTheme: (theme: Theme) => void;
};

const defaultValue = {
    theme : Theme.Light,
    setTheme: (theme : Theme) => console.warn('faltando theme provider')
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);
export const useTheme = () => useContext(ThemeContext);