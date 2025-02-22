import { createContext, useState } from "react";

export const ThemeContext = createContext('');


export default function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);


    function toggleTheme() {
        setIsDark(prev => {
            document.getElementById('mainBody').setAttribute('data-theme', !prev ? "dark" : 'light')
            return !prev
        });
        // setCOunt(count + 1);
        // console.log(count);
        // setIsDark(!isDark);
        // document.getElementById('mainBody').setAttribute('data-theme', !isDark ? "dark" : 'light')
    }


    return (<ThemeContext.Provider value={
        {
            isDark,
            toggleTheme,
        }
    }>
        {children}
    </ThemeContext.Provider>
    );
}

