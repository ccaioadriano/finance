import { APIOptions, PrimeReactProvider } from "primereact/api";
import {
	ReactNode,
	createContext,
	useContext,
	useState,
	useCallback,
} from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

interface IThemeContext {
	themeName: "light" | "dark";
	toggleTheme: () => void;
}

const AppThemeContext = createContext<IThemeContext>({} as IThemeContext);

const themeOptions: Partial<APIOptions> = {
	ripple: true,
	inputStyle: "outlined",
};

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
		<AppThemeContext.Provider value={{ themeName, toggleTheme }}>
			<PrimeReactProvider value={themeOptions}>{children}</PrimeReactProvider>
		</AppThemeContext.Provider>
	);
};
