import { SideBar } from "../../shared/components";

export const Home = () => {
    return (
        <>
            <SideBar />
            <main>
                <label htmlFor="salario">Sálario:</label>
                <input type="text" name="salario" />
            </main>
        </>
    );
};
