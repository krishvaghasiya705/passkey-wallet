import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Playfround from "../module/playground";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/playground",
                element: <Playfround />
            }
        ]
    }
])

export default router