import { Route, Routes } from "react-router-dom";
import { Button } from "primereact/button";
export const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/pagina-inicial" element={<Button label="Ola"  />}></Route>
		</Routes>
	);
};
