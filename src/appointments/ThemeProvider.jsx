import React from 'react'
import { ThemeProvider as StyledThemeProvider } from "styled-components"


const DEFAULT_THEME = {
    colors: {
        background: 'transparent',
    
        border: '#545E75',

        headerLight: '#A7CCED',
        headerDark: '#63ADF2',

        buttonLight: '#F3F4F6',
        buttonLightText: 'black',
        buttonDark: '#304D6D',
        buttonDarkText: 'white',
    },
}

function ThemeProvider({ children }) {
    return (
        <StyledThemeProvider theme={DEFAULT_THEME}>
            {children}
        </StyledThemeProvider>
    )
}

export default ThemeProvider