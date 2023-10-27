import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme ${theme} pt-5`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;