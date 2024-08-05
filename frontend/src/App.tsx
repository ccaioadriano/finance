import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes/public/PublicRoutes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <PublicRoutes />
            </BrowserRouter>
        </AppThemeProvider>
    );
};
