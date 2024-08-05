import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useState,
} from "react";
interface IThemeContextParams {
    themeName: "light" | "dark";
    toggleTheme: () => void;
}

const AppThemeContext = createContext<IThemeContextParams>(
    {} as IThemeContextParams
);

export const useAppThemeContext = () => {
    return useContext(AppThemeContext);
};

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeName, setThemeName] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        setThemeName((prevThemeName) =>
            prevThemeName === "light" ? "dark" : "light"
        );
    }, []);

    return (
        <AppThemeContext.Provider
            value={{ themeName, toggleTheme } as IThemeContextParams}
        >
            <ThemeProvider theme={{}}>
                <Box
                //bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
};
