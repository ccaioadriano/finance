import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../pages";
export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
    );
};
