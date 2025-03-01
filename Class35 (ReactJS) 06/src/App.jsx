import { RouterProvider } from "react-router-dom";
import appRoute from "./routes";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/theme-context";

export default function App() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <main>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <RouterProvider router={appRoute}></RouterProvider>
        </main>
    );
}
