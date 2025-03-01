
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Count from "./pages/Count";
import UsersPage from "./pages/Users";

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/count',
        element: <Count />
    },
    {
        path: "/users",
        element: <UsersPage />
    }
]);

export default appRoute;