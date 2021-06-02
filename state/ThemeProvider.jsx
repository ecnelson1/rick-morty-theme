  
import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('standard');
    
    const handleThemeChange =  (e) => {
        setTheme((theme)=> (theme = e.target.value));
    };

    const state = { theme, handleThemeChange };

    return (
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const { theme } = useContext(ThemeContext);
    return theme;
};

export const useHandleTheme = () => {
    const { handleThemeChange } = useContext(ThemeContext);
    return handleThemeChange;
};

export default ThemeProvider;
