import { useContext, createContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const useTheme = () => {
    useContext(ThemeContext);
};

const useUpdateTheme = () => {
    useContext(ThemeUpdateContext);
};

function ThemeProvider({ children }) {
    const [dark, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((p) => !p);
    };

    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
