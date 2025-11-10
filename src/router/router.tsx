import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Terms from "../pages/Terms/Terms";
import Privacy from "../pages/Privacy/Privacy";
import Refound from "../pages/Refound/Refound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/terms",
                element: <Terms />
            },
            {
                path: "/privacy",
                element: <Privacy />
            },
            {
                path: "/refound",
                element: <Refound />
            }
        ]
    }
]);