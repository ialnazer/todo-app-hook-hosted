import React, { createContext, useState } from "react";
import useToggle from "../hooks/useToggle";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode, toggleTheme] = useToggle(false);
    return (
        // the value will be accessed by this context component children
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}