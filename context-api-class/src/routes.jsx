
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Count from "./pages/Count";

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/count',
        element: <Count />
    },
]);

export default appRoute;