import { createContext } from 'react';

export interface ColorScheme {
    Red     : string,
    Orange  : string,
    Yellow  : string,
    Green   : string,
    Mint    : string,
    Teal    : string,
    Cyan    : string,
    Blue    : string,
    Indigo  : string,
    Purple  : string,
    Pink    : string,
    Brown   : string,
    Gray1   : string,
    Gray2   : string,
    Gray3   : string,
    Gray4   : string,
    Gray5   : string,
    Gray6   : string,
    Contrast : string
}

export const ColorSchemeLight : ColorScheme = {
    Red:       '#ff3b30',
    Orange:    '#ff9500',
    Yellow:    '#ffcc00',
    Green:     '#34c759',
    Mint:      '#00c7be',
    Teal:      '#30b0c7',
    Cyan:      '#32ade6',
    Blue:      '#007bff',
    Indigo:    '#5856d8',
    Purple:    '#af52de',
    Pink:      '#ff2d54',
    Brown:     '#a2845e',
    Gray1:     '#8e8e93',
    Gray2:     '#aeaeb2',
    Gray3:     '#c7c7cc',
    Gray4:     '#d1d1d6',
    Gray5:     '#e5e5ea',
    Gray6:     '#f2f2f2',
    Contrast:  '#1D1D1F'
}

export const ColorSchemeDark : ColorScheme = {
    Red:       '#FF453A',
    Orange:    '#FF9F0A',
    Yellow:    '#FFD60A',
    Green:     '#30D158',
    Mint:      '#66D4CF',
    Teal:      '#40C8E0',
    Cyan:      '#64D2FF',
    Blue:      '#0A84FF',
    Indigo:    '#5E5CE6',
    Purple:    '#BF5AF2',
    Pink:      '#FF375F',
    Brown:     '#AC8E68',
    Gray1:     '#8E8E93',
    Gray2:     '#636366',
    Gray3:     '#48484A',
    Gray4:     '#3A3A3C',
    Gray5:     '#2C2C2E',
    Gray6:     '#1C1C1E',
    Contrast:  '#FFFFFF' 
}



export interface IThemeContext {
    themeColor : ColorScheme;
    setTheme: (themeColor: ColorScheme) => void;
};

const defaultValue = {
    themeColor : ColorSchemeLight,
    setTheme: (themeColor : ColorScheme) => console.warn('faltando theme provider')
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);
// export const UseTheme = () => useContext(ThemeContext);